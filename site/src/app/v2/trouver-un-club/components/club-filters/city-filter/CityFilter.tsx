'use client';

import {
  getFranceCitiesByName,
  getFranceCitiesByPostalCodeAndCityName,
} from '@/app/v2/trouver-un-club/agent';
import { SingleValue } from 'react-select';
import { CityOption } from '@/app/v2/trouver-un-club/components/club-filters/ClubFilters';
import { City } from '../../../../../../../types/City';
import { useEffect, useState } from 'react';
import { SEARCH_QUERY_PARAMS } from '@/app/constants/search-query-params';
import { useSearchParams } from 'next/navigation';
import styles from '../styles.module.scss';
import AsyncSelect from 'react-select/async';
import { unescapeSingleQuotes } from '@/utils/string';
import {
  customScreenReaderStatus,
  guidance,
  onChange,
  onFilter,
  selectStyles,
} from '../custom-select/CustomSelect';

interface Props {
  isDisabled: boolean;
  onCityChanged: (cityOrPostalCode: { city?: string; postalCode?: string }) => void;
}

const allCitiesOption: CityOption = {
  label: 'Toutes les villes',
  value: null,
};

const CityFilter = ({ isDisabled, onCityChanged }: Props) => {
  const searchParams = useSearchParams();

  const city = searchParams && searchParams.get(SEARCH_QUERY_PARAMS.city);
  const postalCode = searchParams && searchParams.get(SEARCH_QUERY_PARAMS.postalCode);

  const [value, setValue] = useState<CityOption>(allCitiesOption);

  const cityChangeHandler = (newValue: SingleValue<CityOption>) => {
    if (!newValue) {
      /* would happen if field was cleared, but this feature is disabled, so it nerver happens */
      return;
    } else {
      const cityOrPostalCode = newValue.value;

      if (cityOrPostalCode === null) {
        onCityChanged({});
        setValue(allCitiesOption);

        return;
      }

      if (newValue.value?.cityName && newValue.value.postalCode) {
        onCityChanged({ city: newValue.value?.cityName, postalCode: newValue.value?.postalCode });
      }

      setValue({ value: newValue.value, label: newValue.label });
    }
  };

  useEffect(() => {
    if (postalCode && city) {
      const unescapedCity = unescapeSingleQuotes(city);

      getFranceCitiesByPostalCodeAndCityName(postalCode, unescapedCity, false).then((cities) => {
        const formattedCities = parseCities(cities);
        let matchingCity = formattedCities.find((formattedCity) => {
          return (
            city === formattedCity.value?.cityName.toUpperCase() &&
            postalCode === formattedCity.value?.postalCode
          );
        });

        if (matchingCity !== undefined) {
          setValue(matchingCity);
        }
      });
    } else {
      setValue(allCitiesOption);
    }
  }, [city, postalCode]);

  return (
    <div className={styles['label-container']}>
      <label id="city-label" className={styles.label}>
        Choix d&apos;une ville
      </label>
      <AsyncSelect
        isDisabled={isDisabled}
        instanceId="city-select-id"
        key="city-select-with-search-param"
        loadingMessage={() => <p>Chargement des villes</p>}
        noOptionsMessage={() => <p>Aucune ville trouvée</p>}
        cacheOptions
        defaultOptions={[allCitiesOption]}
        loadOptions={fetchCityOptions}
        onChange={cityChangeHandler}
        styles={selectStyles}
        value={value}
        ariaLiveMessages={{ guidance, onChange, onFilter }}
        aria-labelledby="city-label"
        screenReaderStatus={customScreenReaderStatus}
        getOptionValue={(option) => {
          // Unique identifier for the pre-selected value to be displayed correctly
          // because we are using object as value since by default,
          // react-select checks for reference equality, so to fix that we are giving a unique string for each option
          return `${option.value?.cityName}|${option.value?.postalCode}`;
        }}
      />
    </div>
  );
};

function parseCities(cities: City[]): CityOption[] {
  const citiesWithPostalCode: CityOption[] = [];

  cities.forEach((city) => {
    city.codesPostaux.forEach((postalCode) => {
      citiesWithPostalCode.push({
        label: `${city.nom} (${postalCode})`,
        value: {
          postalCode: postalCode,
          cityName: city.nom,
        },
      });
    });
  });

  return citiesWithPostalCode;
}

function fetchCityOptions(inputValue: string) {
  return getFranceCitiesByName(inputValue, false).then((cities) => parseCities(cities));
}

export default CityFilter;
