import cn from 'classnames';
import Select, { SingleValue } from 'react-select';
import { Option, selectStyles } from '@/app/v2/trouver-un-club/components/club-filters/ClubFilters';
import styles from '../styles.module.scss';
import { SEARCH_QUERY_PARAMS } from '@/app/constants/search-query-params';
import { ActivityResponse } from '../../../../../../../types/Club';
import { useSearchParams } from 'next/navigation';
import { unescapeSingleQuotes } from '../../../../../../../utils/string';

interface Props {
  onActivityChanged: (activity?: string) => void;
  activities: ActivityResponse;
}

const ActivityFilter = ({ onActivityChanged, activities }: Props) => {
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

  const searchParams = useSearchParams();
  const unescapedActivity = unescapeSingleQuotes(
    searchParams?.get(SEARCH_QUERY_PARAMS.activity) || '',
  );

  const defaultActivityOption: Option | undefined = parsedActivities.find(
    (r) => r.value === unescapedActivity,
  );

  return (
    <div className={styles['label-container']}>
      <label htmlFor="activity" className={styles.label}>
        Activités
      </label>
      <div className={styles['input-container']}>
        <span className={cn('ri-basketball-line', styles.icon)} />

        <Select
          defaultValue={defaultActivityOption}
          instanceId="activities-select-id"
          className={styles.select}
          isClearable
          isSearchable
          name="activity"
          placeholder="Toutes les activités"
          options={parsedActivities}
          onChange={activityChangeHandler}
          styles={selectStyles}
        />
      </div>
    </div>
  );
};

export default ActivityFilter;
