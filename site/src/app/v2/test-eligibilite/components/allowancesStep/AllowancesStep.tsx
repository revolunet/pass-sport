import Question from '../Question/Question';
import { useState } from 'react';
import questionStyle from '../Question/styles.module.scss';
import verdictStyle from '../verdictPanel/styles.module.scss';
import VerdictPanel from '../verdictPanel/VerdictPanel';
import RadioButtonsGroup from '../radioButtonsGroup/RadioButtonsGroup';

interface Props {
  isForChild: boolean;
}

const AllowancesStep: React.FC<Props> = ({ isForChild }) => {
  const [hasAllowances, setHasAllowances] = useState<boolean | null>(null);

  return (
    <>
      <Question
        question={
          <>
            {isForChild ? (
              <p className={`fr-text--lg fr-mb-0 ${questionStyle.paragraph}`}>
                Votre enfant (ou petit enfant) bénéficie-t-il :
              </p>
            ) : (
              <>
                <p className={`fr-text--lg fr-mb-0 ${questionStyle.paragraph}`}>
                  Vous avez entre 16 et 30 ans.
                </p>
                <p className={`fr-text--lg fr-mb-0 ${questionStyle.paragraph}`}>
                  Bénéficiez-vous :
                </p>
              </>
            )}

            <ul className={verdictStyle.ul}>
              <li className={`fr-text--lg fr-mb-0 ${questionStyle.paragraph}`}>
                d’une bourse de l’état de l’enseignement supérieur sous conditions de ressources,
                d’une aide annuelle du CROUS ou d’une bourse régionale pour les formations
                sanitaires et sociales pour l’année universitaire 2023-2024 ou 2024-2025?
              </li>
              <li className={`fr-text--lg fr-mb-0 ${questionStyle.paragraph}`}>
                de l’allocation aux adultes handicapées (AAH)?
              </li>
              <li className={`fr-text--lg fr-mb-0 ${questionStyle.paragraph}`}>
                ou de l’allocation d’éducation de l’enfant handicapé (AEEH)?
              </li>
            </ul>
          </>
        }
      >
        <RadioButtonsGroup
          fieldsetId="allowanceStep"
          options={[
            {
              label: 'Oui',
              onChange: () => setHasAllowances(true),
            },
            {
              label: 'Non',
              onChange: () => setHasAllowances(false),
            },
          ]}
        />
      </Question>

      {hasAllowances && <VerdictPanel isEligible={true} />}
      {hasAllowances === false && <VerdictPanel isEligible={false} />}
    </>
  );
};

export default AllowancesStep;
