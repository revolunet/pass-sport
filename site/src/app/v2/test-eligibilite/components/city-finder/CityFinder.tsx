import cn from 'classnames';
import rootStyles from '../../../../utilities.module.scss';
import styles from './styles.module.scss';
import AsyncSelect from 'react-select/async';
import { getFranceCitiesByName } from '@/app/v2/trouver-un-club/agent';
import { City } from 'types/City';
import { SingleValue } from 'react-select';
import { sortCities } from 'utils/city';
import { InputState } from 'types/form';

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
  const selectStyles = {
    control: (baseStyles: Record<string, unknown>) => ({
      ...baseStyles,
      borderColor: '#ffffff',
      backgroundColor: '#eeeeee',
      borderBottom: inputState.state === 'error' ? 'solid #CE0500 2px' : 'solid black 2px',
    }),
    indicatorSeparator: (baseStyles: Record<string, unknown>) => ({
      ...baseStyles,
      backgroundColor: '#ffffff',
    }),
    valueContainer: (baseStyles: Record<string, unknown>) => ({
      ...baseStyles,
      paddingLeft: '14px',
    }),
    placeholder: (baseStyles: Record<string, unknown>) => ({
      ...baseStyles,
      color: 'var(--text-default-grey)',
    }),
  };

  const parseCities = (cities: City[]): Option[] => {
    return cities.map((city) => {
      return { label: `${city.nom} (${city.codeDepartement})`, value: city.code };
    });
  };

  const fetchCityOptions = (inputValue: string) =>
    getFranceCitiesByName(inputValue, true).then(({ data: cities }) =>
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
      <label className={rootStyles['text--black']} htmlFor={inputName}>
        {legend}
        <p className={cn('fr-text--xs', styles.hint, 'fr-mb-1w', 'fr-mt-1v')}>
          Format attendu : Si le nom de la commune est composé, veillez à saisir un tiret entre deux
          noms (ex : Saint-Joseph), sauf si la commune débute par le, la, les, auxquels cas vous
          devez séparer d’un caractère « espace » (ex : Le Havre). Si votre commune comporte moins
          de 4 caractères il faut ajouter un espace à la fin (ex : Eus). Si vous avez déménagé dans
          les 12 derniers mois, remplissez le champs avec le nom de votre ancienne ville
        </p>
      </label>

      <AsyncSelect
        aria-labelledby="city-select-id"
        instanceId="city-select-id"
        inputId={inputName}
        name={inputName}
        loadingMessage={() => <p>Chargement des villes...</p>}
        noOptionsMessage={() => <p>Aucune ville trouvée</p>}
        placeholder="Entrez le nom de votre commune"
        cacheOptions
        isClearable
        loadOptions={fetchCityOptions}
        isDisabled={isDisabled}
        onChange={birthPlaceChangedHandler}
        styles={selectStyles}
      />

      <div className={cn('fr-mt-2w', styles.secondHintBlock)}>
        <span className={cn('fr-icon--sm', 'fr-icon-info-fill')} aria-hidden="true" />
        <p className={cn('fr-mb-4w', 'fr-text--xs')}>
          L’allocataire est la personne qui perçoit au moins une aide en regard de leur situation
          familiale et/ou monétaire.
        </p>
      </div>

      {inputState.state === 'error' && (
        <div className={cn('fr-pt-2w', styles.container)} role="status">
          <span
            className={cn('fr-icon--sm', 'fr-icon-error-fill', styles.error)}
            aria-hidden="true"
          />
          <p className={cn('fr-text--xs', 'fr-mb-0', styles.error)}>{inputState.errorMsg}</p>
        </div>
      )}
    </div>
  );
};
export default CityFinder;
