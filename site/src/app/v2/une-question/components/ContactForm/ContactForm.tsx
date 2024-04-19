'use client';

import { Alert } from '@codegouvfr/react-dsfr/Alert';
import Button from '@codegouvfr/react-dsfr/Button';
import Checkbox from '@codegouvfr/react-dsfr/Checkbox';
import Input from '@codegouvfr/react-dsfr/Input';
import Select from '@codegouvfr/react-dsfr/Select';
import Image from 'next/image';
import React, { FormEvent, useRef, useState } from 'react';
import { InputsState } from '../../../../../../types/Contact';
import { postContact } from '../../agent';
import styles from './styles.module.scss';

const initialInputsState: InputsState = {
  firstname: 'default',
  lastname: 'default',
  email: 'default',
  reason: 'default',
  message: 'default',
  consent: 'default',
};

const reasons: string[] = [
  'Bénéficiaires et familles : comment obtenir le Pass’Sport ?',
  'Bénéficiaires et familles : qui reçoit le code ?',
  'Bénéficiaires et familles : comment utiliser mon pass ?',
  'Bénéficiaires et familles : où utiliser mon pass ?',
  'Bénéficiaires et familles : comment trouver un club éligible ?',
  'Bénéficiaires et familles : mon club refuse de prendre le Pass’Sport que faire ?',
  "Bénéficiaires et familles : mon club refuse de me faire la réduction de 50€ à l’inscription et attend d'être remboursé pour m'appliquer la ristourne que faire ?",
  'Bénéficiaires et familles : les inscriptions dans mon club sont avant l’envoi des codes que faire ?',
  'Code : Je n’ai pas reçu mon code Pass’Sport',
  'Code  : Je n’arrive à obtenir mon code sur le portail via «&nbsp;obtenir mon code&nbsp;»',
  'Clubs et structures : le code ne fonctionne pas !',
  'Clubs et structures : quel est le principe du dipositif ?',
  'Clubs et structures : Comment rentrer dans le dispositif ?',
  'Clubs et structures : Comment demander le remboursement Pass’Sport&nbsp;?',
  'Clubs et structures : quand mon club sera-t-il remboursé ?',
  'Clubs et structures : j’ai un problème avec mon compte asso',
];

const ContactForm = () => {
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

    const states = { ...initialInputsState };
    fieldNames.forEach((fieldName) => {
      const value = formData.get(fieldName);
      if (!value) {
        states[fieldName] = 'error';
        isValid = false;
      }
    });

    const emailInput = formData.get('email') as string;
    const emailRegExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

    if (!emailRegExp.test(emailInput)) {
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
      return;
    }
    try {
      const response = await postContact(formData);
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

  return (
    <div>
      <form ref={formRef} onSubmit={onSubmitHandler}>
        <div className={styles['container']}>
          <div className={styles['image-wrapper']}>
            <Image
              className={styles.image}
              src="/images/faq/form-image.png"
              alt=""
              width={334}
              height={501}
            />
          </div>

          <div className={styles.form}>
            <div className={styles['names-input-container']}>
              <div>
                <Input
                  label="Prénom*"
                  nativeInputProps={{ name: 'firstname' }}
                  state={inputStates.firstname}
                  stateRelatedMessage="Le prénom est requis"
                />
              </div>

              <div>
                <Input
                  label="Nom de famille*"
                  nativeInputProps={{ name: 'lastname' }}
                  state={inputStates.lastname}
                  stateRelatedMessage="Le nom de famille est requis"
                />
              </div>
            </div>
            <div>
              <Input
                label="Adresse e-mail*"
                nativeInputProps={{ name: 'email' }}
                state={inputStates.email}
                stateRelatedMessage="L'email est requis dans un format valide"
              />
            </div>
            <div>
              <Select
                label="Objet de la demande*"
                nativeSelectProps={{ name: 'reason' }}
                state={inputStates.reason}
                stateRelatedMessage="L'objet de l'email est requis"
              >
                <React.Fragment key=".0">
                  <option disabled hidden selected value="">
                    Selectionnez une option
                  </option>
                  {reasons.map((r) => (
                    <option value={r} key={r}>
                      {r}
                    </option>
                  ))}
                </React.Fragment>
              </Select>
            </div>

            <Input
              className={styles['textarea-wrapper']}
              textArea
              label="Message*"
              nativeTextAreaProps={{ placeholder: 'Message*', name: 'message' }}
              state={inputStates.message}
              stateRelatedMessage="Le message est requis"
            />
          </div>
        </div>
        <div className={styles['action-container']}>
          <div className={styles['action-container_checkbox']}>
            <Checkbox
              options={[
                {
                  label:
                    'En cochant cette case, vous comprenez que les données personnelles entrées, adress IP comprise, pourront être utilisées afin de vous contacter dans le cadre de votre interêt',
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
          <div className={styles['action-container_button']}>
            <Button priority="primary" type="submit">
              Envoyer ma demande
            </Button>
          </div>
        </div>
      </form>
      {apiError && (
        <Alert
          className={styles.error}
          severity="error"
          closable={true}
          isClosed={!isError}
          onClose={() => setIsError(false)}
          title="Un problème est survenu"
          description="Veuillez réessayer plus tard"
        ></Alert>
      )}
      {isOk && (
        <Alert
          className={styles.error}
          severity="success"
          closable={true}
          title="Votre demande a bien été transmise"
        ></Alert>
      )}
    </div>
  );
};

export default ContactForm;
