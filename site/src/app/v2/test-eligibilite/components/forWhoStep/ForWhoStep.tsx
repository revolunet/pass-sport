'use client';

import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';
import { useState } from 'react';
import AgeStep from '../ageStep/AgeStep';
import Question from '../Question/Question';
import EligibilityContext from '../../../../../store/eligibilityTestContext';
import ChildAgeStep from '../childAgeStep/ChildAgeStep';

const ForWhoStep = () => {
  const [isForMyself, setIsForMyself] = useState<boolean | null>(null);

  const restartTest = () => {
    setIsForMyself(null);
  };

  return (
    <EligibilityContext.Provider value={{ performNewTest: restartTest }}>
      <div>
        <Question
          question="Bonjour, vous souhaitez vérifier si vous pouvez bénéficier du Pass Sport. Vous faites le
        test :"
        >
          <ButtonsGroup
            buttons={[
              {
                children: 'Pour moi même',
                disabled: isForMyself === false,
                onClick: () => setIsForMyself(true),
              },
              {
                children: 'Pour mon enfant ou petit enfant',
                disabled: isForMyself === true,
                onClick: () => setIsForMyself(false),
              },
            ]}
            inlineLayoutWhen="always"
            buttonsSize="large"
          />
        </Question>

        {isForMyself === true && <AgeStep />}
        {isForMyself === false && <ChildAgeStep />}
      </div>
    </EligibilityContext.Provider>
  );
};

export default ForWhoStep;
