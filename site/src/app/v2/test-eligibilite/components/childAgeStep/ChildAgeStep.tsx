import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';
import { useState } from 'react';
import Question from '../Question/Question';
import styles from '../Question/styles.module.scss';
import Response from '../Response/Response';
import AgeStep2 from '../ageStep2/AgeStep2';
import VerdictPanel from '../verdictPanel/VerdictPanel';
import AllowancesStep from '../allowancesStep/AllowancesStep';

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
        <ButtonsGroup
          buttons={[
            {
              children: 'Moins de 6 ans',
              disabled: childAge !== null && childAge !== ChildAge.LESS_THAN_SIX,
              onClick: () => setChildAge(ChildAge.LESS_THAN_SIX),
              size: 'large',
            },
            {
              children: 'Entre 6 et 30 ans',
              disabled: childAge !== null && childAge !== ChildAge.BTW_SIX_AND_THIRTY,
              onClick: () => setChildAge(ChildAge.BTW_SIX_AND_THIRTY),
              size: 'large',
            },
            {
              children: 'Plus de 30 ans',
              disabled: childAge !== null && childAge !== ChildAge.MORE_THAN_THIRTY,
              onClick: () => setChildAge(ChildAge.MORE_THAN_THIRTY),
              size: 'large',
            },
          ]}
          inlineLayoutWhen="always"
          buttonsSize="large"
        />
      </Question>
      {childAge === ChildAge.LESS_THAN_SIX && <VerdictPanel isEligible={false} />}
      {childAge === ChildAge.BTW_SIX_AND_THIRTY && <AllowancesStep isForChild />}
      {childAge === ChildAge.MORE_THAN_THIRTY && <VerdictPanel isEligible={false} />}
    </>
  );
};

export default ChildAgeStep;
