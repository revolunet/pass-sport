import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';
import Question from '../Question/Question';
import questionStyle from '../Question/styles.module.scss';

import { useState } from 'react';
import VerdictPanel from '../verdictPanel/VerdictPanel';

const AeehStep = () => {
  const [hasAeehAllocation, setHasAeehAllocation] = useState<boolean | null>(null);
  return (
    <>
      <Question
        question={
          <>
            <p className={`fr-text--lg fr-mb-0 ${questionStyle.paragraph}`}>
              Vos parent bénéficient-ils de  l’allocation d’éducation de l’enfant handicapé (AEEH) ?
            </p>
            <p className={`fr-text--lg fr-mb-0 ${questionStyle.paragraph}`}>
              Si vous ne le savez pas, rapprochez de vos parents, ils sauront vous répondre.
            </p>
          </>
        }
      >
        <ButtonsGroup
          buttons={[
            {
              children: 'Oui',
              disabled: hasAeehAllocation === false,
              onClick: () => setHasAeehAllocation(true),
            },
            {
              children: 'Non',
              disabled: hasAeehAllocation === true,
              onClick: () => setHasAeehAllocation(false),
            },
          ]}
          inlineLayoutWhen="always"
          buttonsSize="large"
        />
      </Question>
      {hasAeehAllocation && <VerdictPanel isEligible={true} />}
      {hasAeehAllocation === false && <VerdictPanel isEligible={false} />}
    </>
  );
};

export default AeehStep;
