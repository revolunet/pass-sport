import Question from '../Question/Question';
import { useState } from 'react';
import VerdictPanel from '../verdictPanel/VerdictPanel';
import RadioButtonsGroup from '../radioButtonsGroup/RadioButtonsGroup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type AllowancesStepProps = {
  isForChild: boolean;
};

const AllowancesStep = ({ isForChild }: AllowancesStepProps) => {
  const [hasAllowances, setHasAllowances] = useState<boolean | null>(null);
  const router = useRouter();

  const successCallout = (
    <div>
      <VerdictPanel
        title="Bonne nouvelle ! D'après les informations que vous nous avez transmises, vous êtes vous êtes éligible au pass Sport."
        isSuccess
        buttonProps={{
          children: 'Trouver un club partenaire',
          onClick: () => {
            router.push('trouver-un-club');
          },
        }}
      >
        <div className="fr-my-2w">
          Vous devriez le recevoir soit entre le 30 mai et le 1er juin, soit le 29 et le 31 août
          2024 sur l&apos;adresse e-mail que vous avez communiquée à votre CAF, Mutualité sociale
          agricole ou votre CROUS.
        </div>

        <div className="fr-my-2w">
          Il vous permettra de déduire 50 euros de votre adhésion sportif dans plus de 85 000 clubs
          et associations sportives partenaires dans toute la France.
        </div>

        <div className="fr-my-2t">
          Si après le 1er septembre vous ne l&apos;avez pas reçu, vous aurez la possibilité
          d&apos;en faire la demande sur{' '}
          <Link
            href="https://www.service-public.fr/simulateur/calcul/certificatMedical"
            target="_blank"
          >
            pass.sports.gouv.fr
          </Link>
        </div>
      </VerdictPanel>
    </div>
  );

  const failureCallOut = (
    <VerdictPanel
      title="Nous sommes désolés, d'après les informations que vous nous avez transmises, vous n'êtes pas éligible au pass Sport"
      isSuccess={false}
    >
      En effet, ce dispositif n&apos;est pas accessbile à tous, il est ouvert aux:
      <ul className="fr-mt-2w">
        <li className={`fr-text--lg fr-mb-3w fr-ml-2w fr-text--bold`}>
          personnes nées entre le 16 septembre 2006 et le 31 décembre 2018 bénéficiant de
          l&apos;allocation de rentrée scolaire (ARS) (6 à 17 ans révolus)
        </li>
        <li className={`fr-text--lg fr-mb-3w fr-ml-2w fr-text--bold`}>
          personnes nées entre le 1er juin 2004 et le 31 décembre 2018 bénéficiant de
          l&apos;allocation d&apos;éducation de l&apos;enfant handicapé (AEEH) (6 à 19 ans révolus)
        </li>
        <li className={`fr-text--lg fr-mb-3w fr-ml-2w fr-text--bold`}>
          personnes nées entre le 16 septembre 1993 et le 31 décembre 2008 bénéficiant de
          l&apos;allocation aux adultes handicapés (AAH) (16 à 30 ans)
        </li>
        <li className={`fr-text--lg fr-mb-3w fr-ml-2w fr-text--bold`}>
          étudiants, âgés de 28 ans révolus au plus, et bénéficient au plus tard le 15 octobre 2024,
          d&apos;une bourse de l&apos;état de l&apos;enseignement supérieur sous conditions de
          ressources, d&apos;une aide annuelle du CROUS ou d&apos;une bourse régionale pour les
          formations sanitaires et sociales pour l&apos;année universitaire 2024 - 2025.
        </li>
      </ul>
    </VerdictPanel>
  );

  return (
    <>
      <Question
        question={
          <>
            {isForChild ? (
              <p className={`fr-text--lg fr-mb-0 fr-text--bold`}>
                Votre enfant (ou petit enfant) bénéficie-t-il :
              </p>
            ) : (
              <>
                <p className={`fr-text--lg fr-mb-0 fr-text--bold`}>Vous avez entre 16 et 30 ans.</p>
                <p className={`fr-text--lg fr-mb-0 fr-text--bold`}>Bénéficiez-vous :</p>
              </>
            )}
            <ul className="fr-ml-2w fr-mt-4w">
              <li className={`fr-text--lg fr-mb-0 fr-text--bold`}>
                d&apos;une bourse de l&apos;état de l&apos;enseignement supérieur sous conditions de
                ressources, d&apos;une aide annuelle du CROUS ou d&apos;une bourse régionale pour
                les formations sanitaires et sociales pour l&apos;année universitaire 2023-2024 ou
                2024-2025?
              </li>
            </ul>
            ou
            <ul className="fr-ml-2w">
              <li className={`fr-text--lg fr-mb-0 fr-text--bold`}>
                de l&apos;allocation aux adultes handicapées (AAH)?
              </li>
            </ul>
            ou
            <ul className="fr-ml-2w">
              <li className={`fr-text--lg fr-mb-0 fr-text--bold`}>
                ou de l&apos;allocation d&apos;éducation de l&apos;enfant handicapé (AEEH)?
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

      {hasAllowances && successCallout}
      {hasAllowances === false && failureCallOut}
    </>
  );
};

export default AllowancesStep;
