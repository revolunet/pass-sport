import { useState } from 'react';
import Question from '../Question/Question';
import AgeStep2 from '../ageStep2/AgeStep2';
import RadioButtonsGroup from '../radioButtonsGroup/RadioButtonsGroup';
import questionStyles from '../Question/styles.module.scss';

const AgeStep = () => {
  const [isMoreThan30, setIsMoreThan30] = useState<boolean | null>(null);

  return (
    <div>
      <Question question="Quel âge avez-vous ?">
        <RadioButtonsGroup
          fieldsetId="ageStep"
          options={[
            {
              label: 'Entre 6 et 30 ans',
              onChange: () => setIsMoreThan30(false),
            },
            {
              label: 'Plus de 30 ans',
              onChange: () => setIsMoreThan30(true),
            },
          ]}
        />
      </Question>

      {isMoreThan30 && (
        <div className={`fr-p-2w ${questionStyles.panel}`}>
          <p className={`fr-text--lg ${questionStyles.paragraph}`}>
            Nous sommes désolés, mais vous n’êtes pas éligible au Pass’Sport.
          </p>
          <p className={`fr-text--lg fr-mb-0 ${questionStyles.paragraph}`}>
            En effet, ce dispositif est ouvert aux personnes nées entre le 16 septembre 1993 et le
            31 décembre 2018.
          </p>
        </div>
      )}

      {isMoreThan30 === false && <AgeStep2 />}
    </div>
  );
};

export default AgeStep;
