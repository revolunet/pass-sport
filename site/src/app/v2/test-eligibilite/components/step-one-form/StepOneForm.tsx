import Question, {
  QUESTION_STYLES,
} from '@/app/v2/test-eligibilite-mai/components/Question/Question';
import Button from '@codegouvfr/react-dsfr/Button';
import Input from '@codegouvfr/react-dsfr/Input';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import {
  SearchResponseBody,
  SearchResponseErrorBody,
  StepOneFormInputsState,
} from 'types/EligibilityTest';
import CityFinder from '../city-finder/CityFinder';
import { mapper } from '../../helpers/helper';
import ErrorAlert from '../error-alert/ErrorAlert';
import { fetchEligible } from '../../agent';

const initialInputsState: StepOneFormInputsState = {
  beneficiaryLastname: { state: 'default' },
  beneficiaryFirstname: { state: 'default' },
  beneficiaryBirthDate: { state: 'default' },
  recipientResidencePlace: { state: 'default' },
};

interface Props {
  onDataReceived: (data: SearchResponseBody) => void;
  onEligibilityFailure: () => void;
}

const StepOneForm = ({ onDataReceived, onEligibilityFailure }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [inputStates, setInputStates] = useState<StepOneFormInputsState>(initialInputsState);
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const isFormValid = (
    formData: FormData,
  ): { isValid: boolean; states: StepOneFormInputsState } => {
    let isValid = true;

    const fieldNames = Object.keys(initialInputsState) as (keyof StepOneFormInputsState)[];
    const states = structuredClone(initialInputsState);

    fieldNames.forEach((fieldName) => {
      const value = formData.get(fieldName);

      if (!value) {
        states[fieldName].state = 'error';
        states[fieldName].errorMsg = mapper[fieldName];
        isValid = false;
      }
    });

    return { isValid, states };
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const { isValid, states } = isFormValid(formData);
    setInputStates({ ...states });

    if (!isValid) {
      return;
    }

    await requestEligibilityTest().then(({ status, body }) => {
      if (status !== 200) {
        notifyError(status, body as SearchResponseErrorBody);
      } else {
        if ('message' in body) {
          notifyError(status, body);
          return;
        }

        onDataReceived(body);

        if (body?.length === 0) {
          onEligibilityFailure();
        } else {
          setIsFormDisabled(true);
        }
      }
    });
  };

  const notifyError = (status: number, body: SearchResponseErrorBody) => {
    if (
      status === 400 &&
      body.message ===
        "Aucun exercice en cours, vous n'êtes pas autorisé à vous inscrire au Pass'Sport pour le moment."
    ) {
      setError('Le service est actuellement fermé');
    } else {
      setError('Une erreur est apparue. Merci de réessayer ultérieurement.');
    }
  };

  const requestEligibilityTest = (): Promise<{
    status: number;
    body: SearchResponseBody | SearchResponseErrorBody;
  }> => {
    const formData = new FormData(formRef.current!);

    formData.set('beneficiaryLastname', formData.get('beneficiaryLastname')!.toString().trim());
    formData.set('beneficiaryFirstname', formData.get('beneficiaryFirstname')!.toString().trim());
    formData.set('beneficiaryBirthDate', formData.get('beneficiaryBirthDate')!.toString().trim());

    return fetchEligible(formData);
  };

  const onInputChanged = (text: string | null, field: keyof StepOneFormInputsState) => {
    if (!text) {
      setInputStates((inputStates) => ({
        ...inputStates,
        [`${field}`]: { state: 'error', errorMsg: mapper[field] },
      }));
    } else {
      setInputStates((inputStates) => ({
        ...inputStates,
        [`${field}`]: { state: 'default' },
      }));
    }
  };

  return (
    <>
      <Question
        question="Veuillez rentrer les informations ci-dessous sur vous ou sur votre enfant :"
        style={QUESTION_STYLES.JUNE_STYLE}
      >
        <form ref={formRef} onSubmit={onSubmitHandler}>
          <Input
            label="Nom du bénéficiaire*"
            nativeInputProps={{
              name: 'beneficiaryLastname',
              'aria-label': 'Saisir le nom du bénéficiaire',
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                onInputChanged(e.target.value, 'beneficiaryLastname'),
              autoComplete: 'family-name',
              'aria-autocomplete': 'none',
            }}
            state={inputStates.beneficiaryLastname.state}
            stateRelatedMessage={inputStates.beneficiaryLastname.errorMsg}
            disabled={isFormDisabled}
            hintText="Format attendu : Votre nom tel qu’il est écrit sur vos papiers de la CAF ou la MSA"
          />

          <Input
            label="Prénom du bénéficiaire*"
            nativeInputProps={{
              name: 'beneficiaryFirstname',
              'aria-label': 'Saisir le prénom du bénéficiaire',
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                onInputChanged(e.target.value, 'beneficiaryFirstname'),
              autoComplete: 'given-name',
              'aria-autocomplete': 'none',
            }}
            state={inputStates.beneficiaryFirstname.state}
            stateRelatedMessage={inputStates.beneficiaryFirstname.errorMsg}
            disabled={isFormDisabled}
            hintText="Format attendu : Votre prénom tel qu’il est écrit sur vos papiers de la CAF ou la MSA"
          />

          <Input
            label="Date de naissance du bénéficiaire*"
            hintText="Format attendu: JJ/MM/AAAA"
            nativeInputProps={{
              name: 'beneficiaryBirthDate',
              'aria-label': 'Saisir la date de naissance du bénéficiaire',
              type: 'date',
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                onInputChanged(e.target.value, 'beneficiaryBirthDate'),
            }}
            state={inputStates.beneficiaryBirthDate.state}
            stateRelatedMessage={inputStates.beneficiaryBirthDate.errorMsg}
            disabled={isFormDisabled}
          />

          <CityFinder
            legend="Commune de résidence de l’allocataire*"
            isDisabled={isFormDisabled}
            inputName="recipientResidencePlace"
            inputState={inputStates.recipientResidencePlace}
            onChanged={(text) => onInputChanged(text, 'recipientResidencePlace')}
          />

          <Button
            priority="primary"
            type="submit"
            disabled={isFormDisabled}
            iconId={isFormDisabled ? 'fr-icon-success-line' : 'fr-icon-arrow-right-line'}
            iconPosition="right"
            className="fr-mb-6w fr-mt-3w"
          >
            Je valide les informations
          </Button>
        </form>
      </Question>
      {error && <ErrorAlert title={error} />}
    </>
  );
};

export default StepOneForm;
