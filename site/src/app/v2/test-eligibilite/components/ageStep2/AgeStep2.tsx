import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';
import Question from '../Question/Question';
import { useState } from 'react';
import ArsStep from '../arsStep/ArsStep';
import AllowancesStep from '../allowancesStep/AllowancesStep';

const AgeStep2 = () => {
  const [isLessThan19, setIsLessThan19] = useState<boolean | null>(null);

  return (
    <div>
      <Question question="Avez-vous entre 6 et 19 ans ?">
        <ButtonsGroup
          buttons={[
            {
              children: 'Oui',
              disabled: isLessThan19 === false,
              onClick: () => setIsLessThan19(true),
              size: 'large',
            },
            {
              children: 'Non',
              disabled: isLessThan19 === true,
              onClick: () => setIsLessThan19(false),
              size: 'large',
            },
          ]}
          inlineLayoutWhen="always"
          buttonsSize="large"
        />
      </Question>

      {isLessThan19 && <ArsStep />}
      {isLessThan19 === false && <AllowancesStep />}
    </div>
  );
};

export default AgeStep2;
