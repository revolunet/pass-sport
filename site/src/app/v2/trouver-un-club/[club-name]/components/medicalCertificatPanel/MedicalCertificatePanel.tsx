import Button from '@codegouvfr/react-dsfr/Button';
import Link from 'next/link';
import styles from './styles.module.scss';

const MedicalCertificatePanel = () => {
  return (
    <div className={`fr-p-4w fr-mb-3w fr-mx-auto ${styles.background}`}>
      <div className={styles.container}>
        <div className={styles['text-container']}>
          <h3 className={styles['text-color']}>Besoin d &apos;un certificat médical ?</h3>
          <p className={`fr-text--lg fr-mb-0 ${styles['text-color']}`}>
            Ce simulateur vous indique si vous devez obtenir un certificat médical pour pratiquer
            une activité sportive (loisir ou compétition).
          </p>
        </div>
        <div className={`fr-my-auto ${styles['button-wrapper']}`}>
          <Link
            href="https://www.service-public.fr/simulateur/calcul/certificatMedical"
            target="_blank"
            className={styles.link}
          >
            <Button priority="tertiary" size="large">
              Faire le simulateur de certificat médical
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MedicalCertificatePanel;
