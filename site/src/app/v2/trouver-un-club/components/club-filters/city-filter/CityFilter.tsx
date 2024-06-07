import { getFranceCitiesByName, getFranceCitiesByPostalCode } from '@/app/v2/trouver-un-club/agent';
import { SingleValue } from 'react-select';
import { Option, selectStyles } from '@/app/v2/trouver-un-club/components/club-filters/ClubFilters';
import { City } from '../../../../../../../types/City';
import { useEffect, useState } from 'react';
import { SEARCH_QUERY_PARAMS } from '@/app/constants/search-query-params';
import { useSearchParams } from 'next/navigation';
import styles from '../styles.module.scss';
import AsyncSelect from 'react-select/async';

interface Props {
  onCityChanged: (cityOrPostalCode: { city?: string; postalCode?: string }) => void;
}

const CityFilter = ({ onCityChanged }: Props) => {
  const searchParams = useSearchParams();

  const citySearchParams = searchParams && searchParams.get(SEARCH_QUERY_PARAMS.city);
  const postalCodeSearchParams = searchParams && searchParams.get(SEARCH_QUERY_PARAMS.postalCode);

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

  let [defaultOption, setDefaultOption] = useState<Option>({ label: '', value: '' });

  useEffect(() => {
    const city = (searchParams && searchParams.get(SEARCH_QUERY_PARAMS.city)) || '';
    const postalCode = (searchParams && searchParams.get(SEARCH_QUERY_PARAMS.postalCode)) || '';

    if (postalCode) {
      getFranceCitiesByPostalCode(postalCode, false).then((cities) => {
        const formattedCities = parseCities(cities);
        const matchingCityWithPostalCode = formattedCities.find(
          ({ value, label }) => value === postalCode,
        );

        if (matchingCityWithPostalCode !== undefined) {
          setDefaultOption(matchingCityWithPostalCode);
        }
      });
    }
    if (city) {
      getFranceCitiesByName(city, false).then((cities) => {
        parseCities(cities);
        setDefaultOption(parseCities(cities)[0]);
      });
    }
  }, [citySearchParams, postalCodeSearchParams, searchParams]);

  return (
    <div className={styles['label-container']}>
      <label htmlFor="city" className={styles.label}>
        Ville
      </label>
      {(citySearchParams || postalCodeSearchParams) && defaultOption?.value?.length > 0 ? (
        <AsyncSelect
          instanceId="city-select-id"
          name="city"
          key="city-select-with-search-param"
          loadingMessage={() => <p>Chargement des villes</p>}
          noOptionsMessage={() => <p>Aucune ville trouvée</p>}
          placeholder="Toutes les villes"
          cacheOptions
          isClearable
          loadOptions={fetchCityOptions}
          onChange={cityChangeHandler}
          styles={selectStyles}
          defaultInputValue={defaultOption.label}
          defaultValue={defaultOption}
        />
      ) : (
        <AsyncSelect
          instanceId="city-select-id"
          name="city"
          key="city-select-without-search-param"
          loadingMessage={() => <p>Chargement des villes</p>}
          noOptionsMessage={() => <p>Aucune ville trouvée</p>}
          placeholder="Toutes les villes"
          cacheOptions
          isClearable
          loadOptions={fetchCityOptions}
          onChange={cityChangeHandler}
          styles={selectStyles}
        />
      )}
    </div>
  );
};

function parseCities(cities: City[]): Option[] {
  return cities
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
}

function fetchCityOptions(inputValue: string) {
  return getFranceCitiesByName(inputValue, false).then((cities) => parseCities(cities));
}

export default CityFilter;
