'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import cn from 'classnames';
import { push } from '@socialgouv/matomo-next';
import { isUsingJuneEligibilityTest } from 'utils/eligibility-test';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';

const HeroPanel = () => {
  const router = useRouter();

  const eligibilityTestOnClick = () => {
    push(['trackEvent', 'Eligibility Test Button', 'Clicked', 'Home test button']);
    isUsingJuneEligibilityTest
      ? router.push('/v2/test-eligibilite')
      : router.push('/v2/test-eligibilite-mai');
  };

  const getButtonText = () => {
    return isUsingJuneEligibilityTest ? 'Obtenir mon pass Sport' : 'Je fais le test';
  };

  return (
    <div className={cn('fr-px-3w', styles.background, styles.sizer, styles.padder)}>
      <div className={styles.container}>
        <h1 className={cn(styles.title, 'fr-h2')}>
          50 euros pour aider les 6-30 ans à faire du sport
        </h1>
      </div>
      <div className={styles['button-wrapper']}>
        <Button
          id={SKIP_LINKS_ID.eligibilityTestButton}
          className="fr-mt-3w"
          priority="primary"
          size="large"
          onClick={eligibilityTestOnClick}
          nativeButtonProps={{
            'aria-label': "Je fais le test d'éligibilité pour obtenir mon pass Sport",
          }}
        >
          {getButtonText()}
          <span className="fr-icon fr-icon-arrow-right-line fr-ml-1w" aria-hidden />
        </Button>
      </div>
    </div>
  );
};

export default HeroPanel;
