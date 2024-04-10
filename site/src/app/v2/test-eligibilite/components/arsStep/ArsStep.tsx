import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';
import Question from '../Question/Question';
import { useState } from 'react';
import questionStyle from '../Question/styles.module.scss';
import VerdictPanel from '../verdictPanel/VerdictPanel';
import AeehStep from '../aeehStep/AeehStep';

const ArsStep = () => {
  const [isArsFunded, setIsArsFunded] = useState<boolean | null>(null);

  return (
    <div>
      <Question
        question={
          <div>
            <p className={`fr-text--lg fr-mb-0 ${questionStyle.paragraph}`}>
              Vos parents touchent-ils l’allocation de rentrée scolaire?
            </p>
            <p className={`fr-text--lg fr-mb-0 ${questionStyle.paragraph}`}>
              Si vous ne le savez pas, rapprochez de vos parents, ils sauront vous répondre.
            </p>
          </div>
        }
        description="L’allocation de rentrée scolaire est une aide versée par votre caisse d’allocation familiale (CAF) ou votre Mutualité sociale agricole (MSA) pour vous aider à couvrir les frais de rentrée scolaire. Elle est générale, versée dans le mois d’août. Si vous ne le savez pas, rapprochez-vous de votre CAF ou de votre Mutualité sociale agricole."
      >
        <ButtonsGroup
          buttons={[
            {
              children: 'Oui',
              disabled: isArsFunded === false,
              onClick: () => setIsArsFunded(true),
              size: 'large',
            },
            {
              children: 'Non',
              disabled: isArsFunded === true,
              onClick: () => setIsArsFunded(false),
              size: 'large',
            },
          ]}
          inlineLayoutWhen="always"
          buttonsSize="large"
        />
      </Question>

      {isArsFunded && <VerdictPanel isEligible={true} />}
      {isArsFunded === false && <AeehStep />}
    </div>
  );
};

export default ArsStep;
