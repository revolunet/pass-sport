import { useState } from 'react';
import Question from '../Question/Question';
import VerdictPanel from '../verdictPanel/VerdictPanel';
import AllowancesStep from '../allowancesStep/AllowancesStep';
import RadioButtonsGroup from '../radioButtonsGroup/RadioButtonsGroup';

enum ChildAge {
  LESS_THAN_SIX = 'lessThanSix',
  BTW_SIX_AND_THIRTY = 'betweenSixAndThrity',
  MORE_THAN_THIRTY = 'moreThanThirty',
}
const ChildAgeStep = () => {
  const [childAge, setChildAge] = useState<ChildAge | null>(null);

  return (
    <>
      <Question question="Quel âge a votre enfant ?">
        <div>
          <RadioButtonsGroup
            fieldsetId="childAgeStep"
            options={[
              {
                label: 'Moins de 6 ans',
                onChange: () => setChildAge(ChildAge.LESS_THAN_SIX),
              },
              {
                label: 'Entre 6 et 30 ans',
                onChange: () => setChildAge(ChildAge.BTW_SIX_AND_THIRTY),
              },
              {
                label: 'Plus de 30 ans',
                onChange: () => setChildAge(ChildAge.MORE_THAN_THIRTY),
              },
            ]}
          />
        </div>
      </Question>
      {childAge === ChildAge.LESS_THAN_SIX && <VerdictPanel isEligible={false} />}
      {childAge === ChildAge.BTW_SIX_AND_THIRTY && <AllowancesStep isForChild />}
      {childAge === ChildAge.MORE_THAN_THIRTY && <VerdictPanel isEligible={false} />}
    </>
  );
};

export default ChildAgeStep;
