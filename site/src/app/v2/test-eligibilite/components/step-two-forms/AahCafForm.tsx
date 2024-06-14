import Input from '@codegouvfr/react-dsfr/Input';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import {
  AahCafInputsState,
  ConfirmResponseErrorBody,
  EnhancedConfirmResponseBody,
  SearchResponseBodyItem,
} from 'types/EligibilityTest';
import { mapper } from '../../helpers/helper';
import FormButton from './FormButton';
import ErrorAlert from '../error-alert/ErrorAlert';
import { fetchPspCode } from '../../agent';
import { cafErrorMessage, isInputValidCaf } from '@/app/v2/test-eligibilite/constants/caf';
import CustomInput from '@/app/v2/test-eligibilite/components/custom-input/CustomInput';

const initialInputsState: AahCafInputsState = {
  recipientCafNumber: { state: 'default' },
};

interface Props {
  eligibilityDataItem: SearchResponseBodyItem;
  onDataReceived: (data: EnhancedConfirmResponseBody) => void;
  onEligibilitySuccess: () => void;
  onEligibilityFailure: () => void;
}

const AahCafForm = ({
  eligibilityDataItem,
  onDataReceived,
  onEligibilitySuccess,
  onEligibilityFailure,
}: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputStates, setInputStates] = useState<AahCafInputsState>(initialInputsState);
  const [error, setError] = useState<string | null>();
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);

  const isFormValid = (formData: FormData): { isValid: boolean; states: AahCafInputsState } => {
    let isValid = true;

    const fieldNames = Object.keys(initialInputsState) as (keyof AahCafInputsState)[];

    const states = structuredClone(initialInputsState);

    fieldNames.forEach((fieldName) => {
      const value = formData.get(fieldName);

      if (!value) {
        states[fieldName] = { state: 'error', errorMsg: mapper[fieldName] };
        isValid = false;
      } else {
        if (typeof value === 'string') {
          if (fieldName === 'recipientCafNumber') {
            if (!isInputValidCaf(value)) {
              states[fieldName] = {
                state: 'error',
                errorMsg: cafErrorMessage,
              };

              isValid = false;
            }
          }
        }
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
    formData.set('recipientCafNumber', formData.get('recipientCafNumber')!.toString().trim());

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

  const onInputChanged = (text: string, field: keyof AahCafInputsState) => {
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
    <div>
      <form ref={formRef} onSubmit={onSubmitHandler}>
        <CustomInput
          inputProps={{
            label: 'Numéro de l’allocataire CAF*',
            hintText: 'Format attendu : 6, 7 ou 8 chiffres',
            nativeInputProps: {
              name: 'recipientCafNumber',
              placeholder: 'ex: 0000000',
              type: 'text',
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                onInputChanged(e.target.value, 'recipientCafNumber'),
            },
            state: inputStates.recipientCafNumber.state,
            stateRelatedMessage: inputStates.recipientCafNumber.errorMsg,
            disabled: isFormDisabled,
          }}
          secondHint="Appelé « numéro de dossier » Le numéro figure en haut à gauche de tous les courriers émis
          par la CAF ainsi que sur toutes les attestations que vous pouvez télécharger depuis votre
          espace personnel."
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

export default AahCafForm;
