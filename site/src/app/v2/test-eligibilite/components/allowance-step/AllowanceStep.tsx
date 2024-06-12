'use client';

import Question, {
  QUESTION_STYLES,
} from '@/app/v2/test-eligibilite-mai/components/Question/Question';
import rootStyles from '@/app/utilities.module.scss';
import cn from 'classnames';
import { useState } from 'react';
import { ALLOWANCE } from '../types/types';
import EligibilityTestForms from '../eligibility-test-forms/EligibilityTestForms';
import CrousStep from '../crous-step/CrousStep';
import EligibilityTestContext from '@/store/eligibilityTestContext';
import RadioButtons from '@codegouvfr/react-dsfr/RadioButtons';
import FullNegativeVerdictPanel from '@/app/components/verdictPanel/FullNegativeVerdictPanel';
import styles from '@/app/v2/test-eligibilite/components/step-one-form/styles.module.scss';

/* This is a trick to force the RadioButtonsGroup to reload */
let CustomButtonsGroupKey = 0;

const AllowanceStep = () => {
  const [allowance, setAllowance] = useState<ALLOWANCE | null>(null);

  const restartTest = () => {
    CustomButtonsGroupKey = Math.round(Math.random() * 1000);
    setAllowance(null);
  };

  return (
    <EligibilityTestContext.Provider value={{ performNewTest: restartTest }}>
      <p className={cn('fr-pb-2w', styles.paragraph)}>Les champs ci-dessous sont obligatoires*</p>

      <Question
        question={
          <>
            <p
              className={cn(
                'fr-text--lg',
                'fr-mb-0',
                rootStyles['text--medium'],
                rootStyles['text--black'],
              )}
            >
              Bonjour,
              <br />
              Bénéficiez-vous d’une de ces allocations ?
            </p>
          </>
        }
        style={QUESTION_STYLES.JUNE_STYLE}
      >
        <RadioButtons
          key={CustomButtonsGroupKey}
          legend="Choisissez une option:"
          name="radio"
          options={[
            {
              label: 'AEEH, ARS, AAH',
              nativeInputProps: {
                onChange: () => setAllowance(ALLOWANCE.ARS_AEEH_AAH),
              },
            },
            {
              label: 'CROUS',
              nativeInputProps: {
                onChange: () => setAllowance(ALLOWANCE.CROUS),
              },
            },
            {
              label: 'Aucune',
              nativeInputProps: {
                onChange: () => setAllowance(ALLOWANCE.NONE),
              },
            },
          ]}
          hintText={
            <>
              <div>
                <p className={cn('fr-text--xs', 'fr-mb-0')}>ARS : Allocation de rentrée scolaire</p>
                <p className={cn('fr-text--xs', 'fr-mb-0')}>
                  AEEH : Allocation d’éducation de l’enfant handicapé
                </p>
                <p className={cn('fr-text--xs', 'fr-mb-0')}>AAH : Allocation adulte handicapé</p>
                <p className={cn('fr-text--xs', 'fr-mb-0')}>
                  CROUS : Étudiant boursier. Centre régional des œuvres universitaires et scolaires
                </p>
              </div>
            </>
          }
        />
      </Question>

      {allowance === ALLOWANCE.NONE && <FullNegativeVerdictPanel isLean />}
      {allowance === ALLOWANCE.ARS_AEEH_AAH && <EligibilityTestForms />}
      {allowance === ALLOWANCE.CROUS && <CrousStep />}
    </EligibilityTestContext.Provider>
  );
};

export default AllowanceStep;
