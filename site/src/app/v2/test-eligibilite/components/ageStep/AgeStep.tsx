import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';
import { useState } from 'react';
import Question from '../Question/Question';
import styles from '../Question/styles.module.scss';
import Response from '../Response/Response';
import AgeStep2 from '../ageStep2/AgeStep2';

const AgeStep = () => {
  const [isMoreThan30, setIsMoreThan30] = useState<boolean | null>(null);

  return (
    <div>
      <Question question="Quel âge avez-vous ?">
        <ButtonsGroup
          buttons={[
            {
              children: 'Entre 6 et 30 ans',
              disabled: isMoreThan30 === true,
              onClick: () => setIsMoreThan30(false),
              size: 'large',
            },
            {
              children: 'Plus de 30 ans',
              disabled: isMoreThan30 === false,
              onClick: () => setIsMoreThan30(true),
              size: 'large',
            },
          ]}
          inlineLayoutWhen="always"
          buttonsSize="large"
        />
      </Question>

      {isMoreThan30 && (
        <Response>
          <>
            <p className="fr-text--lg">
              Nous sommes désolés, mais vous n’êtes pas éligible au Pass’Sport.
            </p>
            <p className="fr-text--lg">
              En effet, ce dispositif est ouvert aux personnes nées entre le 16 septembre 1993 et le
              31 décembre 2018.
            </p>
          </>
        </Response>
      )}

      {isMoreThan30 === false && <AgeStep2 />}
    </div>
  );
};

export default AgeStep;
