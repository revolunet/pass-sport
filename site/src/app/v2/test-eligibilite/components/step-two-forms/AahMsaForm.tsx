import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import {
  AahMsaInputsState,
  ConfirmResponseErrorBody,
  EnhancedConfirmResponseBody,
  SearchResponseBodyItem,
} from 'types/EligibilityTest';
import { mapper } from '../../helpers/helper';
import FormButton from './FormButton';
import CommonMsaInputs from './common-msa-inputs/CommonMsaInputs';
import ErrorAlert from '../error-alert/ErrorAlert';
import { fetchPspCode } from '../../agent';

const initialInputsState: AahMsaInputsState = {
  recipientBirthCountry: { state: 'default' },
};

interface Props {
  eligibilityDataItem: SearchResponseBodyItem;
  onDataReceived: (data: EnhancedConfirmResponseBody) => void;
  onEligibilitySuccess: () => void;
  onEligibilityFailure: () => void;
}

const AahMsaForm = ({
  eligibilityDataItem,
  onDataReceived,
  onEligibilitySuccess,
  onEligibilityFailure,
}: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputStates, setInputStates] = useState<AahMsaInputsState>(initialInputsState);
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const isFormValid = (formData: FormData): { isValid: boolean; states: AahMsaInputsState } => {
    let isValid = true;

    const fieldNames = Object.keys(inputStates) as (keyof AahMsaInputsState)[];

    const states = structuredClone(initialInputsState);
    fieldNames.forEach((fieldname) => {
      states[fieldname] = { state: 'default' };
    });

    fieldNames.forEach((fieldName) => {
      const value = formData.get(fieldName);

      if (!value) {
        states[fieldName] = { state: 'error', errorMsg: mapper[fieldName] };
        isValid = false;
      }
    });

    return { isValid, states };
  };

  const requestPassSportCode = (): Promise<{
    status: number;
    body: EnhancedConfirmResponseBody | ConfirmResponseErrorBody;
  }> => {
    const formData = new FormData(formRef.current!);

    formData.append('id', eligibilityDataItem.id.toString());
    formData.append('situation', eligibilityDataItem.situation);
    formData.append('organisme', eligibilityDataItem.organisme);

    const birthCountry = formData.get('recipientBirthCountry') as string;
    if (birthCountry === 'FR') {
      formData.delete('recipientBirthCountry');
    }

    return fetchPspCode(formData);
  };

  const notifyError = (status: number) => {
    setError('Une erreur a eu lieu. Merci de rééessayer plus tard');
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const { isValid, states } = isFormValid(formData);

    setInputStates({ ...states });

    if (!isValid) {
      return;
    }

    await requestPassSportCode().then(
      ({
        status,
        body,
      }: {
        body: EnhancedConfirmResponseBody | ConfirmResponseErrorBody;
        status: number;
      }) => {
        setIsFormDisabled(true);
        if (status !== 200) {
          notifyError(status);
        } else {
          if ('message' in body) {
            notifyError(status);
            return;
          }
          onDataReceived(body);

          if (body?.length > 0) {
            onEligibilitySuccess();
          } else {
            onEligibilityFailure();
          }
        }
      },
    );
  };

  const onCountrySelected = (e: ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;

    if (country.toUpperCase() === 'FR') {
      setInputStates((inputStates) => ({
        ...inputStates,
        recipientBirthPlace: { state: 'default' },
        recipientBirthCountry: { state: 'default' },
      }));
    } else {
      setInputStates(initialInputsState);
    }
  };

  const onBirthPlaceChanged = (text: string | null) => {
    if (!text) {
      setInputStates((inputStates) => ({
        ...inputStates,
        recipientBirthPlace: { state: 'error' },
      }));
    } else {
      setInputStates((inputStates) => ({
        ...inputStates,
        recipientBirthPlace: { state: 'default' },
      }));
    }
  };

  const isBirthPlaceRequired = () => {
    return !!Object.keys(inputStates).find((key) => key === 'recipientBirthPlace');
  };

  return (
    <div>
      <form ref={formRef} onSubmit={onSubmitHandler}>
        <CommonMsaInputs
          birthCountryInputName="recipientBirthCountry"
          birthPlaceInputName="recipientBirthPlace"
          inputStates={inputStates}
          areInputsDisabled={isFormDisabled}
          isBirthInputRequired={isBirthPlaceRequired()}
          onCountryChanged={onCountrySelected}
          onBirthPlaceChanged={onBirthPlaceChanged}
        />

        <FormButton isDisabled={isFormDisabled} />
      </form>

      {error && (
        <div className="fr-mt-4w">
          <ErrorAlert title={error} />
        </div>
      )}
    </div>
  );
};

export default AahMsaForm;
