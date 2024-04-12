'use client';

import { useState } from 'react';
import AgeStep from '../ageStep/AgeStep';
import Question from '../Question/Question';
import EligibilityContext from '../../../../../store/eligibilityTestContext';
import ChildAgeStep from '../childAgeStep/ChildAgeStep';
import CustomButtonsGroups from '../customButtonsGroup/CustomButtonsGroup';

/* This is a trick to force the CustomButtonGroup to reload */
let CustomButtonsGroupKey = 0;

const ForWhoStep = () => {
  const [isForMyself, setIsForMyself] = useState<boolean | null>(null);

  const restartTest = () => {
    CustomButtonsGroupKey = Math.round(Math.random() * 1000);
    setIsForMyself(null);
  };

  return (
    <EligibilityContext.Provider value={{ performNewTest: restartTest }}>
      <div>
        <Question
          question="Bonjour, vous souhaitez vérifier si vous pouvez bénéficier du Pass Sport. Vous faites le
        test :"
        >
          <CustomButtonsGroups
            key={CustomButtonsGroupKey}
            buttons={[
              {
                children: 'Pour moi même',
                onClick: () => setIsForMyself(true),
              },
              {
                children: 'Pour mon enfant ou petit enfant',
                onClick: () => setIsForMyself(false),
              },
            ]}
          />
        </Question>

        {isForMyself === true && <AgeStep />}
        {isForMyself === false && <ChildAgeStep />}
      </div>
    </EligibilityContext.Provider>
  );
};

export default ForWhoStep;
