import Button from '@codegouvfr/react-dsfr/Button';
import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import EligibilityTestContext from '@/store/eligibilityTestContext';

const Actions = () => {
  const router = useRouter();
  const context = useContext(EligibilityTestContext);

  return (
    <div className={styles.spacer}>
      <ButtonsGroup
        buttons={[
          {
            children: 'Trouver un Club adhérent',
            onClick: () => router.push('trouver-un-club'),
            size: 'large',
          },
          {
            children: 'Retour à l’accueil',
            onClick: () => router.push('accueil'),
            size: 'large',
            priority: 'secondary',
          },
        ]}
        inlineLayoutWhen="always"
        buttonsSize="large"
      />

      <div className={styles['last-button-positioner']}>
        <Button
          priority="tertiary no outline"
          iconId="fr-icon-arrow-left-line"
          size="large"
          iconPosition="left"
          onClick={() => context.performNewTest()}
        >
          Recommencer une autre recherche
        </Button>
      </div>
    </div>
  );
};

export default Actions;
