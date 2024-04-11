import Button from '@codegouvfr/react-dsfr/Button';
import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';

import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import EligibilityTestContext from '@/store/eligibilityTestContext';

interface Props {
  hasSearchClubAction: boolean;
}
const Actions: React.FC<Props> = ({ hasSearchClubAction }) => {
  const router = useRouter();
  const context = useContext(EligibilityTestContext);

  return (
    <div className="fr-pb-3w">
      {hasSearchClubAction ? (
        <ButtonsGroup
          buttons={[
            {
              children: 'Trouver un Club adhérent',
              onClick: () => router.push('trouver-un-club'),
            },
            {
              children: 'Retour à l’accueil',
              onClick: () => router.push('accueil'),
              priority: 'secondary',
            },
          ]}
          inlineLayoutWhen="sm and up"
          buttonsSize="large"
        />
      ) : (
        <Button priority="secondary" size="large" onClick={() => router.push('accueil')}>
          Retour à l’accueil
        </Button>
      )}

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
