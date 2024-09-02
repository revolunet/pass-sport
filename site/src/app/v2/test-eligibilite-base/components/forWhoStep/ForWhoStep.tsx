'use client';

import { useState } from 'react';
import AgeStep from '../ageStep/AgeStep';
import Question from '../Question/Question';
import EligibilityContext from '../../../../../store/eligibilityTestContext';
import ChildAgeStep from '../childAgeStep/ChildAgeStep';
import cn from 'classnames';
import rootStyles from '@/app/utilities.module.scss';
import RadioButtons from '@codegouvfr/react-dsfr/RadioButtons';
import styles from '@/app/v2/test-eligibilite/styles.module.scss';

/* This is a trick to force the RadioButtonsGroup to reload */
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
        <p className={cn('fr-pb-2w', styles.paragraph)}>Les champs ci-dessous sont obligatoires*</p>

        <Question
          question={
            <>
              <div className={cn(rootStyles['text--medium'], rootStyles['text--black'])}>
                <p className="fr-text--lg fr-mb-0">Bonjour,</p>
                <p className="fr-text--lg fr-mb-0">
                  Vous souhaitez savoir si vous avez droit au pass Sport.
                </p>
                <p className="fr-text--lg fr-mb-0">Faites le test :</p>
              </div>
            </>
          }
        >
          <RadioButtons
            key={CustomButtonsGroupKey}
            legend="Choisissez une option:"
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
        </Question>

        {isForMyself === true && <AgeStep />}
        {isForMyself === false && <ChildAgeStep />}
      </div>
    </EligibilityContext.Provider>
  );
};

export default ForWhoStep;
