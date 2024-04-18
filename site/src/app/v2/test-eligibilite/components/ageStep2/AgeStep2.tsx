import Question from '../Question/Question';
import { useState } from 'react';
import ArsStep from '../arsStep/ArsStep';
import AllowancesStep from '../allowancesStep/AllowancesStep';
import RadioButtonsGroup from '../radioButtonsGroup/RadioButtonsGroup';

const AgeStep2 = () => {
  const [isLessThan19, setIsLessThan19] = useState<boolean | null>(null);

  return (
    <div>
      <Question question="Avez-vous entre 6 et 19 ans ?">
        <RadioButtonsGroup
          fieldsetId="ageStep2"
          options={[
            {
              label: 'Oui',
              onChange: () => setIsLessThan19(true),
            },
            {
              label: 'Non',
              onChange: () => setIsLessThan19(false),
            },
          ]}
        />
      </Question>

      {isLessThan19 && <ArsStep />}
      {isLessThan19 === false && <AllowancesStep isForChild={false} />}
    </div>
  );
};

export default AgeStep2;
