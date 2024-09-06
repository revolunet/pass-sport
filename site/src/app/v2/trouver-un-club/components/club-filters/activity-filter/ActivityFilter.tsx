import { SingleValue } from 'react-select';
import { Option } from '@/app/v2/trouver-un-club/components/club-filters/ClubFilters';
import styles from '../styles.module.scss';

import { SEARCH_QUERY_PARAMS } from '@/app/constants/search-query-params';
import { ActivityResponse } from '../../../../../../../types/Club';
import { useSearchParams } from 'next/navigation';
import { unescapeSingleQuotes } from '../../../../../../../utils/string';
import CustomSelect from '../custom-select/CustomSelect';

interface Props {
  onActivityChanged: (activity?: string) => void;
  activities: ActivityResponse;
}

const ActivityFilter = ({ onActivityChanged, activities }: Props) => {
  const searchParams = useSearchParams();
  const unescapedActivity = unescapeSingleQuotes(
    searchParams?.get(SEARCH_QUERY_PARAMS.activity) || '',
  );

  const parsedActivities: Option[] = activities.results
    .filter((activity) => activity.activites)
    .map((activity) => ({
      label: activity.activites,
      value: activity.activites,
    }));

  const activityChangeHandler = (newValue: SingleValue<Option>) => {
    if (!newValue) {
      /* field was cleared */
      onActivityChanged();
    } else {
      onActivityChanged(newValue.value);
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
      <CustomSelect
        defaultValue={defaultActivityOption()}
        instanceId="activities-select-id"
        placeholder="Toutes les activités"
        options={activityOptions}
        onChange={activityChangeHandler}
        aria-labelledby="activity-label"
      />
    </div>
  );
};

export default ActivityFilter;
