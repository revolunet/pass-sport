import { Props as ReactSelectProps, SingleValue } from 'react-select';
import { Option } from '@/app/v2/trouver-un-club/components/club-filters/ClubFilters';
import styles from '../styles.module.scss';

import { SEARCH_QUERY_PARAMS } from '@/app/constants/search-query-params';
import { ActivityResponse } from '../../../../../../../types/Club';
import { useSearchParams } from 'next/navigation';
import { unescapeSingleQuotes } from '@/utils/string';
import CustomSelect, { createCustomInput, CustomPlaceholder } from '../custom-select/CustomSelect';
import React, { useState } from 'react';

interface Props {
  onActivityChanged: (activity?: string) => void;
  activities: ActivityResponse;
}

const defaultOption: Option = {
  label: 'Toutes',
  value: '',
};

const CustomInput = createCustomInput('Toutes');

const ActivityFilter = ({ onActivityChanged, activities }: Props) => {
  const [value, setValue] = useState<Option>(defaultOption);
  const searchParams = useSearchParams();
  const unescapedActivity = unescapeSingleQuotes(
    searchParams?.get(SEARCH_QUERY_PARAMS.activity) || '',
  );

  const [inputValue, setInputValue] = useState(
    unescapeSingleQuotes(searchParams?.get(SEARCH_QUERY_PARAMS.activity) || ''),
  );

  const parsedActivities: Option[] = activities.results
    .filter((activity) => activity.activites)
    .map((activity) => ({
      label: activity.activites,
      value: activity.activites,
    }));

  const activityChangeHandler: ReactSelectProps<Option, false>['onChange'] = (
    newValue: SingleValue<Option>,
  ) => {
    if (!newValue) {
      onActivityChanged();
      setInputValue('');
    } else {
      onActivityChanged(newValue.value);
      setInputValue(newValue.value);
    }
  };

  const onInputChange: ReactSelectProps['onInputChange'] = (inputValue, { action }) => {
    if (action === 'input-change') {
      setInputValue(inputValue);
    }
  };

  const allActivitiesOption: Option = { label: 'Toutes', value: '' };

  const activityOptions = [allActivitiesOption].concat(parsedActivities);

  const defaultActivityOption = (): Option => {
    const queryParamActivity = parsedActivities.find((r) => r.value === unescapedActivity);

    return queryParamActivity || allActivitiesOption;
  };

  return (
    <div className={styles['label-container']}>
      <label id="activity-label" className={styles.label}>
        Activités
      </label>
      <CustomSelect<Option, false>
        instanceId="activities-select-id"
        aria-labelledby="activity-label"
        defaultValue={defaultActivityOption()}
        value={value}
        inputValue={inputValue}
        options={activityOptions}
        onChange={activityChangeHandler}
        onInputChange={onInputChange}
        noOptionsMessage={() => <p>Aucune activité trouvée</p>}
        components={{
          Input: CustomInput,
          Placeholder: CustomPlaceholder,
        }}
        // To control the placeholder (we do not want the placeholder to appear in a div, but in the input instead
        controlShouldRenderValue={false}
        isClearable
      />
    </div>
  );
};

export default ActivityFilter;
