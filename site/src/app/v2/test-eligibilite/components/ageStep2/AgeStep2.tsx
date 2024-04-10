import Question from '../Question/Question';
import { useState } from 'react';
import ArsStep from '../arsStep/ArsStep';
import AllowancesStep from '../allowancesStep/AllowancesStep';
import CustomButtonsGroups from '../customButtonsGroup/CustomButtonsGroup';

const AgeStep2 = () => {
  const [isLessThan19, setIsLessThan19] = useState<boolean | null>(null);

  return (
    <div>
      <Question question="Avez-vous entre 6 et 19 ans ?">
        <CustomButtonsGroups
          buttons={[
            {
              children: 'Oui',
              disabled: isLessThan19 === false,
              onClick: () => setIsLessThan19(true),
            },
            {
              children: 'Non',
              disabled: isLessThan19 === true,
              onClick: () => setIsLessThan19(false),
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
