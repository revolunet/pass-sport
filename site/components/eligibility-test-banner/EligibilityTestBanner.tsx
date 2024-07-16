'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import styles from './styles.module.scss';
import { push } from '@socialgouv/matomo-next';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';

const EligibilityTestBanner = () => {
  const eligibilityTestOnClick = () => {
    push(['trackEvent', 'Eligibility Test Button', 'Clicked', 'Banner test button']);
  };

  return (
    <aside className={`fr-py-6w fr-px-2w fr-p-md-11w fr-mx-auto ${styles.banner}`}>
      <div className={styles['text-container']}>
        <h1 className={styles.text}>Puis-je bénéficier du pass Sport ?</h1>
        <p className={`fr-text--lead fr-px-2w ${styles.text}`}>
          50€ pour aider les jeunes à faire du sport entre 6 et 30 ans
        </p>
      </div>

      <Button
        id={SKIP_LINKS_ID.eligibilityTestButton}
        className="fr-mx-auto"
        priority="primary"
        size="large"
        linkProps={{
          href: '/v2/test-eligibilite',
          'aria-label': "Visiter la page pour effectuer le test d'éligibilité",
          onClick: eligibilityTestOnClick,
        }}
      >
        Je fais le test
      </Button>
    </aside>
  );
};

export default EligibilityTestBanner;
