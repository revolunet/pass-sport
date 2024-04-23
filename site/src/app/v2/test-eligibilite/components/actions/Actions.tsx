import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import EligibilityTestContext from '@/store/eligibilityTestContext';

type ActionsProps = {
  isSuccess: boolean;
};

const Actions = ({ isSuccess = true }: ActionsProps) => {
  const router = useRouter();
  const context = useContext(EligibilityTestContext);

  return (
    <div className="fr-mt-10v">
      <ButtonsGroup
        buttons={[
          {
            children: `Retour à l'accueil`,
            onClick: () => router.push('accueil'),
            priority: isSuccess ? 'secondary' : 'primary',
          },
          {
            children: 'Refaire le test',
            onClick: () => {
              context.performNewTest();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            priority: !isSuccess ? 'secondary' : 'tertiary no outline',
            iconId: 'fr-icon-arrow-left-line',
          },
        ]}
        inlineLayoutWhen="sm and up"
        buttonsSize="large"
      />
    </div>
  );
};

export default Actions;
