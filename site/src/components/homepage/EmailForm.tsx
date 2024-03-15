import Input from '@codegouvfr/react-dsfr/Input';
import styles from './emailForm.module.scss';
// import Button from '@codegouvfr/react-dsfr/Button';
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';

const EmailForm: React.FC = () => {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <Input
          hintText="Format attendu: nom@domaine.fr"
          label="Adresse éléctronique"
          state="default"
          stateRelatedMessage="Text de validation / d'explication de l'erreur"
          nativeInputProps={{
            placeholder: 'ex: dupont@domaine.fr',
          }}
        />
        <ButtonsGroup
          buttons={[
            {
              children: "Je n'ai pas d'adresse éléctronique",
            },
            {
              children: 'Vérifier mon éligibilité',
              priority: 'secondary',
            },
          ]}
          inlineLayoutWhen="md and up"
        />
        {/* <Button>Je n'ai pas d'adresse éléctronique</Button> */}
        {/* <Button>Vérifier mon éligibilité</Button> */}
      </form>
    </div>
  );
};

export default EmailForm;
