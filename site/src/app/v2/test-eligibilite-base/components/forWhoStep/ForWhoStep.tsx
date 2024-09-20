'use client';

import { useState } from 'react';
import AgeStep from '../ageStep/AgeStep';
import EligibilityContext from '../../../../../store/eligibilityTestContext';
import ChildAgeStep from '../childAgeStep/ChildAgeStep';
import cn from 'classnames';
import styles from '@/app/v2/test-eligibilite/styles.module.scss';
import CustomRadioButtons from '../customRadioButtons/CustomRadioButtons';
import { useRemoveAttributeById } from '@/app/hooks/useRemoveAttributeById';

/* This is a trick to force the RadioButtonsGroup to reload */
let CustomButtonsGroupKey = 0;

const ForWhoStep = () => {
  const [isForMyself, setIsForMyself] = useState<boolean | null>(null);

  const fieldsetId = 'forWhoStep-fieldset';
  useRemoveAttributeById(fieldsetId, 'aria-labelledby');

  const restartTest = () => {
    CustomButtonsGroupKey = Math.round(Math.random() * 1000);
    setIsForMyself(null);
  };

  return (
    <EligibilityContext.Provider value={{ performNewTest: restartTest }}>
      <>
        <p className={cn('fr-pb-2w', styles.paragraph)}>Les champs ci-dessous sont obligatoires*</p>

        <CustomRadioButtons
          id={fieldsetId}
          key={CustomButtonsGroupKey}
          legendLine1="Bonjour,"
          legendLine2="Vous souhaitez savoir si vous avez droit au pass Sport."
          legendLine3="Faites le test :"
          name="forWhoStep"
          options={[
            {
              label: 'Pour moi même',
              nativeInputProps: {
                onChange: () => setIsForMyself(true),
              },
            },
            {
              label: 'Pour mon enfant ou petit enfant',
              nativeInputProps: {
                onChange: () => setIsForMyself(false),
              },
            },
          ]}
        />

        {isForMyself === true && <AgeStep />}
        {isForMyself === false && <ChildAgeStep />}
      </>
    </EligibilityContext.Provider>
  );
};

export default ForWhoStep;
