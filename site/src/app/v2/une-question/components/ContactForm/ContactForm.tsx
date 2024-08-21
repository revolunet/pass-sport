'use client';

import { Alert } from '@codegouvfr/react-dsfr/Alert';
import Button from '@codegouvfr/react-dsfr/Button';
import Checkbox from '@codegouvfr/react-dsfr/Checkbox';
import Input from '@codegouvfr/react-dsfr/Input';
import Select from '@codegouvfr/react-dsfr/Select';
import React, { FormEvent, useRef, useState } from 'react';
import { InputsState } from '../../../../../../types/Contact';
import { postContact } from '../../client-agent';
import styles from './styles.module.scss';
import { EMAIL_REGEX } from '../../../../../../utils/email';

const initialInputsState: InputsState = {
  firstname: 'default',
  lastname: 'default',
  email: 'default',
  reason: 'default',
  message: 'default',
  consent: 'default',
};

const visitorReasons = {
  'aije-droit': 'Ai-je droit au pass Sport ?',
  'eligibility-test-fail': 'Mon test me dit que je ne suis pas éligible',
  'code-pas-reçu': "Je n'ai pas reçu mon code pass Sport",
  'obtenir-pass': "J'ai supprimé mon code par erreur",
  'code-fails': 'Mon code ne fonctionne pas',
  'club-pas-trouvé': 'Je ne trouve pas mon club',
  'refus-code-club': 'Mon club refuse de prendre le pass Sport',
  'club-wait-50': "Mon club attend d'être remboursé avant de me faire la déduction de 50 euros",
  other: 'Autre',
};

const proReasons = {
  'what-pass': "Qu'est-ce que le pass Sport ?",
  'devenir-partenaire': 'Comment devenir partenaire ?',
  'club-code-not-working': 'Le code ne fonctionne pas',
  'cant-get-refund': 'Je ne parviens pas à me faire rembourser',
  'integrer-supprimer-pass': 'Comment intégrer ou supprimer des pass Sport dans LCA ?',
  'club-problème-lca': 'Je rencontre un problème sur mon compte LCA',
  other: 'Autre',
};

interface Props {
  closeFn: VoidFunction;
  isProVersion: boolean;
}

const ContactForm = ({ closeFn, isProVersion }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputStates, setInputStates] = useState<InputsState>(initialInputsState);
  const [apiError, setApiError] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isOk, setIsOk] = useState<boolean>(false);

  const isFormValid = (formData: FormData): { isValid: boolean; states: InputsState } => {
    let isValid = true;

    const fieldNames: (keyof InputsState)[] = [
      'firstname',
      'lastname',
      'email',
      'reason',
      'message',
      'consent',
    ];

    const states = structuredClone(initialInputsState);

    fieldNames.forEach((fieldName) => {
      const value = formData.get(fieldName);

      if (!value) {
        states[fieldName] = 'error';
        isValid = false;
      }
    });

    const emailInput = formData.get('email') as string;

    if (!EMAIL_REGEX.test(emailInput)) {
      isValid = false;
      states.email = 'error';
    }

    return { isValid, states };
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    const { isValid, states } = isFormValid(formData);

    setInputStates({ ...states });

    if (!isValid) {
      // Go through each input, stops at the first one and focuses on it
      // Transform into map for iteration to preserve the order of the keys
      for (const [key, value] of new Map(Object.entries(states))) {
        if (value === 'error') {
          const invalidInput: HTMLInputElement | null | undefined = formRef.current?.querySelector(
            `[name="${key}"]`,
          );

          invalidInput?.focus();
          break;
        }
      }

      return;
    }

    try {
      const response = await postContact(formData, isProVersion);

      if (!response.ok) {
        setApiError(true);
        setIsError(true);
        setIsOk(false);
      } else {
        setApiError(false);
        setIsError(false);
        setIsOk(true);
        formRef.current?.reset();
      }
    } catch (e) {
      setApiError(true);
      setIsError(true);
      setIsOk(false);
    }
  };

  const reasons = isProVersion ? proReasons : visitorReasons;
  return (
    <>
      <form ref={formRef} onSubmit={onSubmitHandler}>
        <div>
          <h2 className="fr-text--bold fr-my-2w fr-h6">
            Avez-vous d&apos;abord consulté notre FAQ ?
          </h2>
          <p className="fr-mb-2w">
            La réponse à votre question s&apos;y trouve peut-être. Si tel est le cas, vous gagnerez
            certainement du temps grâce à elle.
          </p>

          <p className="fr-mb-2w">
            <Button
              type="button"
              onClick={() => {
                closeFn();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              priority="secondary"
            >
              Lire la FAQ
            </Button>
          </p>
        </div>
        <div>
          <div className={styles.form}>
            <div>
              <p className={styles.paragraph}>Les champs ci-dessous sont obligatoires*</p>
            </div>
            <div className={styles['names-input-container']}>
              <div>
                <Input
                  label="Prénom*"
                  nativeInputProps={{
                    name: 'firstname',
                    'aria-label': 'Saisir votre prénom',
                    autoComplete: 'given-name',
                    'aria-autocomplete': 'none',
                  }}
                  state={inputStates.firstname}
                  stateRelatedMessage="Le prénom est requis"
                />
              </div>

              <div>
                <Input
                  label="Nom de famille*"
                  nativeInputProps={{
                    name: 'lastname',
                    'aria-label': 'Saisir votre nom',
                    autoComplete: 'family-name',
                    'aria-autocomplete': 'none',
                  }}
                  state={inputStates.lastname}
                  stateRelatedMessage="Le nom de famille est requis"
                />
              </div>
            </div>
            <div>
              <Input
                label="Adresse e-mail*"
                nativeInputProps={{
                  name: 'email',
                  'aria-label': 'Saisir votre adresse e-mail',
                  autoComplete: 'email',
                  'aria-autocomplete': 'none',
                }}
                state={inputStates.email}
                stateRelatedMessage="Veuillez saisir une adresse e-mail valide. Par exemple : john.doe@access42.net"
              />
            </div>
            <div>
              <Select
                label="Objet de la demande*"
                nativeSelectProps={{
                  name: 'reason',
                  defaultValue: '',
                  'aria-label': "Selectionnez l'objet de votre demande",
                }}
                state={inputStates.reason}
                stateRelatedMessage="L'objet de l'email est requis"
              >
                <React.Fragment key=".0">
                  <option disabled hidden value="">
                    Veuillez sélectionner un objet
                  </option>

                  {Object.entries(reasons).map(([key, value]) => (
                    <option value={key} key={`${isProVersion ? 'pro' : 'visitor'}_${key}`}>
                      {value}
                    </option>
                  ))}
                </React.Fragment>
              </Select>
            </div>

            <Input
              className={styles['textarea-wrapper']}
              textArea
              label="Message*"
              nativeTextAreaProps={{
                placeholder: 'Message*',
                name: 'message',
                'aria-label': 'Saisir votre message',
              }}
              state={inputStates.message}
              stateRelatedMessage="Le message est requis"
            />
          </div>
        </div>
        <div className="fr-mt-4w">
          <Checkbox
            options={[
              {
                label:
                  'En cochant cette case, vous comprenez que les données personnelles entrées, adresse IP comprise, pourront être utilisées afin de vous contacter dans le cadre de votre intérêt légitime.*',
                nativeInputProps: {
                  name: 'consent',
                  value: 'yes',
                },
              },
            ]}
            state={inputStates.consent}
            stateRelatedMessage={
              inputStates.consent === 'default' ? undefined : 'Veuiller cocher cette case'
            }
          />
        </div>
        <div className="fr-grid-row fr-grid-row--right">
          <Button
            className="fr-col-md-4 fr-col-12 fr-grid-row--center fr-mt-2w fr-mt-md-0"
            priority="primary"
            type="submit"
            iconPosition="right"
            iconId="fr-icon-send-plane-line"
          >
            Envoyer ma demande
          </Button>
        </div>
      </form>
      {apiError && (
        <Alert
          className="fr-mt-2w"
          severity="error"
          isClosed={!isError}
          onClose={() => setIsError(false)}
          title="Un problème est survenu"
          description="Veuillez réessayer plus tard"
          closable
        />
      )}
      {isOk && (
        <Alert
          className="fr-mt-2w"
          severity="success"
          title="Votre demande à bien été envoyée"
          description="Votre message nous a bien été transmis."
          closable
        />
      )}
    </>
  );
};

export default ContactForm;
