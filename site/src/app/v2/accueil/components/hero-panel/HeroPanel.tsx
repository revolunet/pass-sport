'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import cn from 'classnames';

const HeroPanel = () => {
  const eligibilityTestOnClick = () => router.push('/v2/test-eligibilite');

  const router = useRouter();

  return (
    <div className={cn('fr-pt-8w', 'fr-pb-7w', 'fr-px-3w', styles.background, styles.sizer)}>
      <div className={styles.container}>
        <h2 className={cn('fr-hidden-sm', styles.title)}>
          50 euros pour aider les 6-30 ans à faire du sport
        </h2>
        <h2 className={cn('fr-hidden', 'fr-unhidden-sm', styles.title)}>
          50 euros
          <br />
          pour aider
          <br />
          les 6-30 ans à faire
          <br />
          du sport
        </h2>
        <p className={cn('fr-text--lead', 'fr-mb-0', styles.paragraph)}>
          Vais-je recevoir le pass Sport ?
        </p>
      </div>
      <div className={styles['button-wrapper']}>
        <Button
          className="fr-mt-3w"
          priority="primary"
          size="large"
          iconId="fr-icon-arrow-right-line"
          iconPosition="right"
          onClick={eligibilityTestOnClick}
        >
          Je fais le test
        </Button>
      </div>
    </div>
  );
};

export default HeroPanel;
