import Input from '@codegouvfr/react-dsfr/Input';
import Checkbox from '@codegouvfr/react-dsfr/Checkbox';
import Button from '@codegouvfr/react-dsfr/Button';
import Select from '@codegouvfr/react-dsfr/Select';
import styles from './styles.module.scss';
import React from 'react';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <form>
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
              <Input label="Prénom" />
            </div>
            <div>
              <Input label="Nom de famille" />
            </div>
          </div>
          <div>
            <Input label="Adresse e-mail" />
          </div>
          <div>
            <Select label="Objet de la demande" nativeSelectProps={{}}>
              <React.Fragment key=".0">
                <option disabled hidden selected value="">
                  Selectionnez une option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </React.Fragment>
            </Select>
          </div>
          <Input textArea label="Message" className={styles['textarea-wrapper']} />
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
                  name: 'checkboxes-1',
                  value: 'value1',
                },
              },
            ]}
          />
        </div>
        <div className={styles['action-container_button']}>
          <Button priority="primary">Envoyer ma demande</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
