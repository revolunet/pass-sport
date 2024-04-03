import Input from '@codegouvfr/react-dsfr/Input';
import styles from './styles.module.scss';
import Button from '@codegouvfr/react-dsfr/Button';

const EmailForm: React.FC = () => {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <Input
          className={styles.input}
          hintText="Format attendu: nom@domaine.fr"
          label="Adresse éléctronique"
          state="default"
          stateRelatedMessage="Text de validation / d'explication de l'erreur"
          nativeInputProps={{
            placeholder: 'ex: dupont@domaine.fr',
          }}
        />

        <ul className={`fr-btns-group--inline fr-btns-group--right ${styles.buttonGroup}`}>
          <li>
            <Button className={styles.button1} priority="tertiary" size="large">
              Je n&apos;ai pas d&apos;adresse éléctronique
            </Button>
          </li>
          <li>
            <Button className={styles.button2} priority="secondary" size="large">
              Vérifier mon éligibilité
            </Button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default EmailForm;
