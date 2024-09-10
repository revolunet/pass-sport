'use client';

import cn from 'classnames';
import { ActivityResponse } from 'types/Club';
import styles from './styles.module.scss';
import CityFilter from '@/app/v2/trouver-un-club/components/club-filters/city-filter/CityFilter';
import ActivityFilter from '@/app/v2/trouver-un-club/components/club-filters/activity-filter/ActivityFilter';
import DisabilityFilter from '@/app/v2/trouver-un-club/components/club-filters/disability-filter/DisabilityFilter';
import { ChangeEvent } from 'react';
import Checkbox from '@codegouvfr/react-dsfr/Checkbox';

export interface Option {
  label: string;
  value: string;
}

export interface ClubFiltersProps {
  activities: ActivityResponse;
  isMapVisible: boolean;
  isAroundMeChecked: boolean;
  isAroundMeDisabled: boolean;
  onCityChanged: (cityOrPostalCode: { city?: string; postalCode?: string }) => void;
  onActivityChanged: (activity?: string) => void;
  onDisabilityChanged: (isActivated: boolean) => void;
  onAroundMeActiveStateChanged: (isAroundMeFilterActive: boolean) => void;
}

const ClubFilters: React.FC<ClubFiltersProps> = ({
  activities,
  isAroundMeChecked,
  isMapVisible,
  isAroundMeDisabled,
  onCityChanged,
  onActivityChanged,
  onDisabilityChanged,
  onAroundMeActiveStateChanged,
}) => {
  const activeStateAroundMeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onAroundMeActiveStateChanged(e.target.checked);
  };

  return (
    <div className={cn('fr-pt-3w', 'fr-pb-0w')}>
      <fieldset className={styles.fieldset}>
        <legend>Filtrer les clubs</legend>
        <div className="fr-px-1w">
          <div className={cn(styles.container)}>
            <CityFilter isDisabled={isAroundMeChecked} onCityChanged={onCityChanged} />

            <div className="fr-pt-7v">
              <Checkbox
                disabled={isAroundMeDisabled}
                options={[
                  {
                    label: 'Autour de chez vous',
                    hintText:
                      isAroundMeDisabled &&
                      'Vous devez authoriser la geolocalisation pour utiliser ce filtre',
                    nativeInputProps: {
                      name: 'geolocation-checkbox',
                      checked: isAroundMeChecked,
                      onChange: activeStateAroundMeHandler,
                    },
                  },
                ]}
              />
            </div>

            <div className={styles.separator} />
            <div className="fr-py-9v">
              <ActivityFilter onActivityChanged={onActivityChanged} activities={activities} />
            </div>
            <div className={styles.separator} />
            <div className="fr-pt-9v">
              <DisabilityFilter onDisabilityChanged={onDisabilityChanged} />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default ClubFilters;
