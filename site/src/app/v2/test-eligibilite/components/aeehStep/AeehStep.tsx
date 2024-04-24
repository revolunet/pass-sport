import Question from '../Question/Question';

import { useState } from 'react';
import RadioButtonsGroup from '../radioButtonsGroup/RadioButtonsGroup';
import Link from 'next/link';
import { AGE_RANGE } from '../types/types';
import VerdictPanel from '../verdictPanel/VerdictPanel';
import { useRouter } from 'next/navigation';
import styles from '../../styles.module.scss';

type AeehStepProps = {
  ageRange: AGE_RANGE;
};

const AeehStep = ({ ageRange }: AeehStepProps) => {
  const [hasAeehAllocation, setHasAeehAllocation] = useState<boolean | null>(null);
  const router = useRouter();

  const displaySuccess = hasAeehAllocation;
  const displayFailure =
    ageRange === AGE_RANGE.BETWEEN_19_30 ||
    (ageRange === AGE_RANGE.BETWEEN_6_19 && hasAeehAllocation === false);

  return (
    <>
      {ageRange !== AGE_RANGE.BETWEEN_19_30 && (
        <Question
          question={
            <>
              <p className={`fr-text--lg fr-mb-0 ${styles['text--medium']}`}>
                Vos parent bénéficient-ils de l&apos;allocation d&apos;éducation de l&apos;enfant
                handicapé (AEEH) ?
              </p>
              <p className={`fr-text--lg fr-mb-0 ${styles['text--medium']}`}>
                Si vous ne le savez pas, rapprochez de vos parents, ils sauront vous répondre.
              </p>
            </>
          }
        >
          <RadioButtonsGroup
            fieldsetId="aeehStep"
            options={[
              {
                label: 'Oui',
                onChange: () => setHasAeehAllocation(true),
              },
              {
                label: 'Non',
                onChange: () => setHasAeehAllocation(false),
              },
            ]}
          />
        </Question>
      )}

      {displaySuccess && (
        <VerdictPanel
          title="Bonne nouvelle ! D'après les informations que vous nous avez transmises, vous êtes vous
          êtes éligible au pass Sport."
          isSuccess
          buttonProps={{
            children: 'Trouver un club partenaire',
            onClick: () => {
              router.push('trouver-un-club');
            },
          }}
        >
          Vous devriez le recevoir soit entre le 30 mai et le 1er juin, soit le 29 et le 31 août
          2024 sur l&apos;adresse e-mail que vous avez communiquée à votre CAF, Mutualité sociale
          agricole ou votre CROUS.
          <br />
          <br />
          Il vous permettra de déduire 50 euros de votre adhésion sportif dans plus de 85 000 clubs
          et associations sportives partenaires dans toute la France.
          <br />
          <br />
          Si après le 1er septembre vous ne l&apos;avez pas reçu, vous aurez la possibilité
          d&apos;en faire la demande sur{' '}
          <Link
            href="https://www.service-public.fr/simulateur/calcul/certificatMedical"
            target="_blank"
          >
            pass.sports.gouv.fr
          </Link>
        </VerdictPanel>
      )}

      {displayFailure && (
        <VerdictPanel
          title="Nous sommes désolés, d'après les informations que vous nous avez transmises, vous n'êtes
        pas éligible au pass Sport"
          isSuccess={false}
        >
          <div className="fr-mb-2w">En effet, ce dispositif est ouvert aux:</div>
          <ul className="fr-ml-2w">
            <li className="fr-mb-3w">
              personnes nées entre le 16 septembre 2006 et le 31 décembre 2018 bénéficiant de
              l&apos;allocation de rentrée scolaire (ARS) (6 à 17 ans révolus)
            </li>
            <li className="fr-mb-3w">
              personnes nées entre le 1er juin 2004 et le 31 décembre 2018 bénéficiant de
              l&apos;allocation d&apos;éducation de l&apos;enfant handicapé (AEEH) (6 à 19 ans
              révolus)
            </li>
            <li className="fr-mb-3w">
              personnes nées entre le 16 septembre 1993 et le 31 décembre 2008 bénéficiant de
              l&apos;allocation aux adultes handicapés (AAH) (16 à 30 ans)
            </li>
            <li>
              étudiants, âgés de 28 ans révolus au plus, et bénéficient au plus tard le 15 octobre
              2024, d&apos;une bourse de l&apos;état de l&apos;enseignement supérieur sous
              conditions de ressources, d&apos;une aide annuelle du CROUS ou d&apos;une bourse
              régionale pour les formations sanitaires et sociales pour l&apos;année universitaire
              2024 - 2025.
            </li>
            <br />
          </ul>
          <span className={styles['text--medium']}>
            Pour autant, vous avez peut-être droit à d&apos;autres aides. N&apos;hésitez pas à vous
            rapprocher de votre région, département ou commune de résidence.
          </span>
        </VerdictPanel>
      )}
    </>
  );
};

export default AeehStep;
