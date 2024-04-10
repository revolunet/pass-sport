import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';
import Question from '../Question/Question';
import { useState } from 'react';
import styles from './styles.module.scss';
import questionStyle from '../Question/styles.module.scss';
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks';
import Actions from '../actions/Actions';

const ArsStep = () => {
  const [isArsFunded, setIsArsFunded] = useState<boolean | null>(null);

  return (
    <div>
      <Question
        question={
          <div>
            <p className={`fr-text--lg ${styles.question}`}>
              Vos parents touchent-ils l’allocation de rentrée scolaire?
            </p>
            <p className={`fr-text--lg ${styles.question}`}>
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

      {isArsFunded && (
        <div className={styles.container}>
          <div className={questionStyle.panel}>
            <p className={`fr-text--lead ${styles['success-text']}`}>
              😁 Bonne nouvelle ! Vous êtes éligible au Pass Sport.
            </p>

            <p className={`fr-text--lg  ${styles.text}  ${questionStyle.paragraph}`}>
              Vous devriez le recevoir soit le 1er juin, soit le 1er septembre 2024 sur l’adresse
              mail que vous avez communiquée à votre CAF, Mutualité sociale agricole ou votre CROUS.
            </p>
            <p className={`fr-text--lg ${styles.text} ${questionStyle.paragraph}`}>
              Il vous permettra de déduire 50 euros de votre adhésion sportif dans plus de 55 000
              clubs et associations sportives partenaires dans toute la France.
            </p>
            <p className={`fr-text--lg ${styles.text} ${questionStyle.paragraph}`}>
              Si vous ne l’avez pas reçu, vous aurez la possibilité, entre le 1er juin et le 1er
              septembre d’en faire la demande sur{' '}
              <a href="https://pass.sports.gouv.fr/">pass.sports.gouv.fr</a>
            </p>
          </div>
          <SocialMediaLinks />
          <Actions />
        </div>
      )}
    </div>
  );
};

export default ArsStep;
