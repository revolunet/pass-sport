'use client';

import Input from '@codegouvfr/react-dsfr/Input';
import Checkbox from '@codegouvfr/react-dsfr/Checkbox';
import Button from '@codegouvfr/react-dsfr/Button';
import Select from '@codegouvfr/react-dsfr/Select';
import styles from './styles.module.scss';
import React, { FormEvent, useRef, useState } from 'react';
import Image from 'next/image';
import { InputsState } from 'types/contactForm';

const initialInputsState: InputsState = {
  firstname: 'default',
  lastname: 'default',
  email: 'default',
  emailObject: 'default',
  message: 'default',
  consent: 'default',
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputStates, setInputStates] = useState<InputsState>(initialInputsState);

  const isFormValid = (formData: FormData): { isValid: boolean; states: InputsState } => {
    let isValid = true;

    const fieldNames: (keyof InputsState)[] = [
      'firstname',
      'lastname',
      'email',
      'emailObject',
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

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    console.log('prenom', formData.get('firstname'));
    console.log('nom', formData.get('lastname'));
    console.log('email', formData.get('email'));
    console.log('emailObject', formData.get('emailObject'));
    console.log('message', formData.get('message'));
    console.log('consent', formData.get('consent'));

    const { isValid, states } = isFormValid(formData);

    setInputStates({ ...states });
    if (!isValid) {
      return;
    }
  };

  return (
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
              nativeSelectProps={{ name: 'emailObject' }}
              state={inputStates.emailObject}
              stateRelatedMessage="L'objet de l'email est requis"
            >
              <React.Fragment key=".0">
                <option disabled hidden value="">
                  Selectionnez une option
                </option>
                <option value="1">Lorem 1</option>
                <option value="2">Lorem 2</option>
                <option value="3">Lorem 3</option>
                <option value="4">Lorem 4</option>
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
  );
};

export default ContactForm;
