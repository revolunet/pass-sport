'use client';
import Button from '@codegouvfr/react-dsfr/Button';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { push } from '@socialgouv/matomo-next';

const EligibilityTestBanner = () => {
  const router = useRouter();

  const eligibilityTestOnClick = () => {
    push(['trackEvent', 'Eligibility Test Button', 'Clicked', 'Banner test button']);
    router.push('/v2/test-eligibilite');
  };

  return (
    <div className={`fr-py-6w fr-px-2w fr-p-md-11w fr-mx-auto ${styles.banner}`}>
      <div className={styles['text-container']}>
        <h1 className={styles.text}>Puis-je bénéficier du pass Sport ?</h1>
        <p className={`fr-text--lead fr-px-2w ${styles.text}`}>
          50€ pour aider les jeunes à faire du sport entre 6 et 30 ans
        </p>
      </div>
      <Link href="/v2/test-eligibilite">
        <Button
          className="fr-mx-auto"
          priority="primary"
          size="large"
          onClick={eligibilityTestOnClick}
        >
          Je fais le test
        </Button>
      </Link>
    </div>
  );
};

export default EligibilityTestBanner;
