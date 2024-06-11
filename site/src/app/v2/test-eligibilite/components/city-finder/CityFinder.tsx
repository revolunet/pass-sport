import cn from 'classnames';
import rootStyles from '../../../../utilities.module.scss';
import styles from './styles.module.scss';
import AsyncSelect from 'react-select/async';
import { getFranceCitiesByName } from '@/app/v2/trouver-un-club/agent';
import { City } from 'types/City';
import { InputState } from 'types/EligibilityTest';
import { SingleValue } from 'react-select';
import { sortCities } from 'utils/city';
import { selectStyles } from '@/app/v2/trouver-un-club/components/club-filters/ClubFilters';

interface Option {
  label: string;
  value: string;
}

interface Props {
  inputState: InputState;
  legend: string;
  inputName: string;
  isDisabled: boolean;
  onChanged: (text: string | null) => void;
}

const CityFinder = ({ inputState, legend, inputName, isDisabled, onChanged }: Props) => {
  const parseCities = (cities: City[]): Option[] => {
    return cities.map((city) => {
      return { label: `${city.nom} (${city.codeDepartement})`, value: city.code };
    });
  };

  const fetchCityOptions = (inputValue: string) =>
    getFranceCitiesByName(inputValue, true).then((cities) =>
      parseCities(sortCities(cities, inputValue)),
    );

  const birthPlaceChangedHandler = (newValue: SingleValue<Option>) => {
    onChanged(newValue as string | null);
  };

  return (
    <div
      className={cn('fr-select-group', {
        'fr-select-group--error': inputState.state === 'error',
      })}
    >
      <label className={rootStyles['text--black']} id="city-select-id">
        {legend}
      </label>
      <p className={cn('fr-text--xs', styles.hint, 'fr-mb-1w')}>
        Format attendu : Si le nom de la commune est composé, veillez à saisir un tiret entre deux
        noms (ex : Saint-Joseph), sauf si le pays débute par le, la, les, auxquels cas vous devez
        séparer d’un caractère « espace » (ex : Le Havre). Si votre pays comporte moins de 4
        caractères il faut ajouter un espace à la fin (ex : Eus).
      </p>
      <AsyncSelect
        aria-labelledby="city-select-id"
        instanceId="city-select-id"
        name={inputName}
        loadingMessage={() => <p>Chargement des villes...</p>}
        noOptionsMessage={() => <p>Aucune ville trouvée</p>}
        placeholder="Trouver la commune"
        cacheOptions
        isClearable
        loadOptions={fetchCityOptions}
        isDisabled={isDisabled}
        onChange={birthPlaceChangedHandler}
        styles={selectStyles}
      />

      {inputState.state === 'error' && (
        <div className={cn('fr-pt-2w', styles.container)}>
          <span
            className={cn('fr-icon--sm', 'fr-icon-error-fill', styles.error)}
            aria-hidden="true"
          ></span>
          <p className={cn('fr-text--xs', 'fr-mb-0', styles.error)}>{inputState.errorMsg}</p>
        </div>
      )}
    </div>
  );
};
export default CityFinder;
