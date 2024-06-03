'use client';

import RadioButtons from '@codegouvfr/react-dsfr/RadioButtons';
import cn from 'classnames';
import Select, { SingleValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import { City } from 'types/City';
import { ActivityResponse } from 'types/Club';
import { GeoGouvRegion } from 'types/Region';
import { getFranceCitiesByName } from '../../agent';
import Search from '../search/Search';
import RegionFilter from './region-filter/RegionFilter';
import styles from './styles.module.scss';
import { Suspense } from 'react';

export interface Option {
  label: string;
  value: string;
}

interface Props {
  regions: GeoGouvRegion[];
  activities: ActivityResponse;
  onTextSearch: (text: string) => void;
  onRegionChanged: (region?: string) => void;
  onCityChanged: (cityOrPostalCode: { city?: string; postalCode?: string }) => void;
  onActivityChanged: (activity?: string) => void;
  onDisabilityChanged: (isDisabled: 'Non' | 'Oui') => void;
}

export const selectStyles = {
  control: (baseStyles: Record<string, unknown>) => ({
    ...baseStyles,
    borderColor: '#ffffff',
    '@media screen and (max-width: 768px)': {
      width: '100%',
    },
    '@media screen and (max-width: 992px)': {
      width: '150px',
    },
    width: '210px',
  }),
  indicatorSeparator: (baseStyles: Record<string, unknown>) => ({
    ...baseStyles,
    backgroundColor: '#ffffff',
  }),
  valueContainer: (baseStyles: Record<string, unknown>) => ({
    ...baseStyles,
    paddingLeft: '0px',
  }),
  menu: (baseStyles: Record<string, unknown>) => ({
    ...baseStyles,
    zIndex: 999,
  }),
};

const ClubFilters: React.FC<Props> = ({
  regions,
  activities,
  onTextSearch,
  onRegionChanged,
  onCityChanged,
  onActivityChanged,
  onDisabilityChanged,
}) => {
  const parsedActivities: Option[] = activities.results
    .filter((activity) => activity.activites)
    .map((activity) => ({
      label: activity.activites,
      value: activity.activites,
    }));

  const parseCities = (cities: City[]): Option[] =>
    cities
      .map((city) => {
        const result: Option[] = [];
        if (city.codesPostaux.length > 1) {
          result.push({ label: city.nom, value: city.nom });
        }
        return result.concat(
          city.codesPostaux.map((cp) => ({
            label: `${city.nom} (${cp})`,
            value: city.codesPostaux.length > 1 ? cp : city.nom,
          })),
        );
      })
      .flat();

  const fetchCityOptions = (inputValue: string) =>
    getFranceCitiesByName(inputValue, false).then((cities) => parseCities(cities));

  const cityChangeHandler = (newValue: SingleValue<Option>) => {
    if (!newValue) {
      /* field was cleared */
      onCityChanged({});
    } else {
      const cityOrPostalCode = newValue.value;
      if (cityOrPostalCode === '') {
        onCityChanged({});
      }
      if (isNaN(cityOrPostalCode as unknown as number)) {
        onCityChanged({ city: newValue.value });
      } else {
        onCityChanged({ postalCode: newValue.value });
      }
    }
  };

  const activityChangeHandler = (newValue: SingleValue<Option>) => {
    if (!newValue) {
      /* field was cleared */
      onActivityChanged();
    } else {
      onActivityChanged(newValue.value);
    }
  };

  return (
    <div className={cn('fr-pt-3w', 'fr-pb-2w', styles.container)}>
      <div className="fr-px-2w">
        <Search onTextSearch={onTextSearch} />

        <p className={cn('fr-text--sm', 'fr-py-2w', 'fr-mb-0', styles.title)}>Filtrer par :</p>
        <div className={styles.filtersContainer}>
          <div className={cn(styles.flex)}>
            <Suspense>
              <RegionFilter regions={regions} onRegionChanged={onRegionChanged} />
            </Suspense>
          </div>
          <div className={styles.separator} />
          <div className={cn(styles.flex)}>
            <div className={styles['label-container']}>
              <label htmlFor="city" className={styles.label}>
                Ville
              </label>
              <AsyncSelect
                instanceId="city-select-id"
                name="city"
                loadingMessage={() => <p>Chargement des villes</p>}
                noOptionsMessage={() => <p>Aucune ville trouvée</p>}
                placeholder="Toutes les villes"
                cacheOptions
                isClearable
                loadOptions={fetchCityOptions}
                onChange={cityChangeHandler}
                styles={selectStyles}
              />
            </div>
          </div>
          <div className={styles.separator} />
          <div className={cn(styles.flex)}>
            <div className={styles['label-container']}>
              <label htmlFor="activity" className={styles.label}>
                Activités
              </label>
              <div className={styles['input-container']}>
                <span className={cn('ri-basketball-line', styles.icon)} />

                <Select
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
          </div>
          <div className={styles.separator} />
          <RadioButtons
            className={cn(styles.flex, 'fr-mx-0', styles.radio, 'fr-mb-0')}
            legend="Accueil de personnes en situation de handicaps"
            name="disability"
            small
            options={[
              {
                label: 'Oui',
                nativeInputProps: {
                  value: 'oui',
                  onChange: () => onDisabilityChanged('Oui'),
                },
              },
              {
                label: 'Non',
                nativeInputProps: {
                  value: 'non',
                  onChange: () => onDisabilityChanged('Non'),
                },
              },
            ]}
            orientation="horizontal"
          />
        </div>
      </div>
    </div>
  );
};

export default ClubFilters;
