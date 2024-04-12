import Button from '@codegouvfr/react-dsfr/Button';
import styles from './styles.module.scss';
import Link from 'next/link';

const EligibilityTestBanner = () => {
  return (
    <div className={`fr-py-6w fr-px-2w fr-p-md-11w fr-mx-auto ${styles.banner}`}>
      <div className={styles['text-container']}>
        <h1 className={styles.text}>Testez votre éligibilité</h1>
        <p className={`fr-text--lead fr-px-2w ${styles.text}`}>
          50€ pour aider les jeunes à faire du sport entre 6 et 30 ans
        </p>
      </div>
      <Link href="/v2/test-eligibilite">
        <Button className="fr-mx-auto" priority="tertiary" size="large">
          Je teste mon éligibilité
        </Button>
      </Link>
    </div>
  );
};

export default EligibilityTestBanner;
