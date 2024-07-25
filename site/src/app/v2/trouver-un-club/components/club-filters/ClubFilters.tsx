'use client';

import dynamic from 'next/dynamic';
import cn from 'classnames';
import { ActivityResponse } from 'types/Club';
import { GeoGouvRegion } from 'types/Region';
import Search from '../search/Search';
import RegionFilter from './region-filter/RegionFilter';
import styles from './styles.module.scss';
import CityFilter from '@/app/v2/trouver-un-club/components/club-filters/city-filter/CityFilter';
import ActivityFilter from '@/app/v2/trouver-un-club/components/club-filters/activity-filter/ActivityFilter';
import HandicapFilter from '@/app/v2/trouver-un-club/components/club-filters/handicap-filter/HandicapFilter';
import { GeoGouvDepartment } from '../../../../../../types/Department';
import DepartmentFilter from '@/app/v2/trouver-un-club/components/club-filters/department-filter/DepartmentFilter';
import { ChangeEvent } from 'react';
import Checkbox from '@codegouvfr/react-dsfr/Checkbox';

export interface Option {
  label: string;
  value: string;
}

interface Props {
  regions: GeoGouvRegion[];
  departments: GeoGouvDepartment[];
  activities: ActivityResponse;
  isMapVisible: boolean;
  isGeolocationVisible: boolean;
  isGeolocationCheckboxActive: boolean;
  isGeolocationFilterActive: boolean;
  onTextSearch: (text: string) => void;
  onRegionChanged: (region?: string) => void;
  onDepartmentChanged: (department?: string) => void;
  onCityChanged: (cityOrPostalCode: { city?: string; postalCode?: string }) => void;
  onActivityChanged: (activity?: string) => void;
  onDisabilityChanged: (isActivated: boolean) => void;
  onDistanceChanged: (distance: string) => void;
  onAroundMeActiveStateChanged: (isAroundMeFilterActive: boolean) => void;
}

const GeolocationFilter = dynamic(() => import('./geolocation-filter/GeolocationFilter'), {
  ssr: false,
});

const ClubFilters: React.FC<Props> = ({
  regions,
  activities,
  departments,
  isGeolocationCheckboxActive,
  isGeolocationFilterActive,
  isGeolocationVisible,
  isMapVisible,

  onTextSearch,
  onRegionChanged,
  onDepartmentChanged,
  onCityChanged,
  onActivityChanged,
  onDisabilityChanged,
  onDistanceChanged,
  onAroundMeActiveStateChanged,
}) => {
  const activeStateAroundMeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onAroundMeActiveStateChanged(e.target.checked);
  };

  return (
    <div className={cn('fr-pt-3w', 'fr-pb-2w', styles.wrapper)}>
      <fieldset className={styles.fieldset}>
        <legend>Filtrer les clubs</legend>
        <div className="fr-px-2w">
          <Search onTextSearch={onTextSearch} />

          <p className={cn('fr-text--sm', 'fr-py-2w', 'fr-mb-0', styles.title)}>Filtrer par :</p>
          <div className={styles.firstLinefiltersContainer}>
            <div className={cn(styles.flex)}>
              <RegionFilter
                regions={regions}
                isDisabled={isGeolocationFilterActive && isMapVisible}
                onRegionChanged={onRegionChanged}
              />
            </div>

            <div className={styles.separator} />

            <div className={cn(styles.flex)}>
              <DepartmentFilter
                departments={departments}
                isDisabled={isGeolocationFilterActive && isMapVisible}
                onDepartmentChanged={onDepartmentChanged}
              />
            </div>

            <div className={styles.separator} />

            <div className={cn(styles.flex)}>
              <CityFilter
                isDisabled={isGeolocationFilterActive && isMapVisible}
                onCityChanged={onCityChanged}
              />
            </div>

            <div className={styles.separator} />

            <div className={cn(styles.flex)}>
              <ActivityFilter onActivityChanged={onActivityChanged} activities={activities} />
            </div>
          </div>

          <div className={styles.secondLinefilters}>
            <div className="fr-pt-2w">
              <div className={styles.secondLinefilters_separator} />
            </div>
            <div className={styles.secondLinefilters_container}>
              <>
                {isGeolocationVisible && (
                  <div className={styles['secondLinefilters_geolocation-container']}>
                    <Checkbox
                      options={[
                        {
                          label: 'Autour de moi',
                          nativeInputProps: {
                            name: 'geolocation-checkbox',
                            checked: isGeolocationFilterActive,
                            onChange: activeStateAroundMeHandler,
                            disabled: !isGeolocationCheckboxActive,
                          },
                        },
                      ]}
                    />
                    <GeolocationFilter
                      isDisabled={!isGeolocationFilterActive}
                      onChanged={onDistanceChanged}
                    />
                  </div>
                )}
              </>

              <HandicapFilter onDisabilityChanged={onDisabilityChanged} />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default ClubFilters;
