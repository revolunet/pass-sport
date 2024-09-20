import { useState } from 'react';
import { AGE_RANGE } from '../types/types';
import AeehStep from '../aeehStep/AeehStep';
import VerdictPanel from '../../../../components/verdictPanel/VerdictPanel';
import { useRouter } from 'next/navigation';
import rootStyles from '@/app/utilities.module.scss';
import cn from 'classnames';
import { trackRedirectionToPassSportForm } from '@/app/v2/test-eligibilite-base/helpers/helpers';
import CustomRadioButtons from '../customRadioButtons/CustomRadioButtons';
import { useRemoveAttributeById } from '@/app/hooks/useRemoveAttributeById';
import { CAF, CROUS } from '@/app/v2/accueil/components/acronymes/Acronymes';

interface AgeStep2Props {
  ageRange: AGE_RANGE;
}

const AgeStep2 = ({ ageRange }: AgeStep2Props) => {
  const [confirmed, setConfirmed] = useState<boolean | null>(null);
  const router = useRouter();

  const fieldsetId = 'ageStep2-fieldset';
  useRemoveAttributeById(fieldsetId, 'aria-labelledby');

  if (ageRange === AGE_RANGE.GREATER_THAN_30) return null;

  const legendLine1 =
    ageRange === AGE_RANGE.BETWEEN_6_19
      ? "Vos parents touchent-ils l'allocation de rentrée scolaire ? Si vous ne le savez pas, rapprochez vous de vos parents, ils sauront vous répondre."
      : "Bénéficiez-vous d'une de ces aides ?";

  const beforeQuestionText =
    ageRange === AGE_RANGE.BETWEEN_19_30 ? (
      <div>
        <p className={`fr-text--lg fr-mb-0 ${rootStyles['text--medium']}`}>
          Vous avez entre 19 et 30 ans.
        </p>
        <p className={`fr-text--lg fr-mb-0 ${rootStyles['text--medium']}`}>
          L&apos;attribution du pass sport est conditionnée aux aides suivantes&nbsp;:
        </p>
        <ul className={`fr-text--lg fr-ml-2w ${rootStyles['text--medium']}`}>
          <li>
            bourse de l&apos;état de l&apos;enseignement supérieur sous conditions de ressources,
            aide annuelle du <CROUS /> ou bourse régionale pour les formations sanitaires et
            sociales pour l&apos;année universitaire 2023-2024 ou 2024-2025
          </li>
          <li>
            allocation aux adultes handicapées (<abbr>AAH</abbr>)
          </li>
          <li>
            allocation d&apos;éducation de l&apos;enfant handicapé (<abbr>AEEH</abbr>)
          </li>
        </ul>
      </div>
    ) : (
      ''
    );

  const questionDescription =
    ageRange === AGE_RANGE.BETWEEN_6_19 ? (
      <>
        L&apos;allocation de rentrée scolaire est une aide versée par votre caisse
        d&apos;allocations familiales (<abbr>CAF</abbr>) ou votre Mutualité sociale agricole (
        <abbr>MSA</abbr>) pour vous aider à couvrir les frais de rentrée scolaire. Elle est
        généralement versée dans le mois d&apos;août. Si vous ne le savez pas, rapprochez-vous de
        votre <CAF /> ou de votre Mutualité sociale agricole.
      </>
    ) : (
      ''
    );

  return (
    <div>
      {ageRange === AGE_RANGE.BETWEEN_19_30 && beforeQuestionText}
      <CustomRadioButtons
        id={fieldsetId}
        name="ageStep2"
        hintText={questionDescription}
        legendLine1={legendLine1}
        options={[
          {
            label: 'Oui',
            nativeInputProps: {
              onChange: () => setConfirmed(true),
            },
          },
          {
            label: 'Non',
            nativeInputProps: {
              onChange: () => setConfirmed(false),
            },
          },
        ]}
      />

      {confirmed && (
        <VerdictPanel
          title="Bonne nouvelle ! D'après les informations que vous nous avez transmises, vous
          êtes éligible au pass Sport."
          buttonProps={{
            children: "Accéder au formulaire d'obtention du pass Sport",
            onClick: () => {
              trackRedirectionToPassSportForm();
              router.push('test-eligibilite');
            },
          }}
          isSuccess
        >
          <p className={cn('fr-text--lg', rootStyles['text--medium'], rootStyles['text--black'])}>
            Il vous permettra de déduire 50 euros de votre adhésion sportif dans plus de 85 000
            clubs et associations sportives partenaires dans toute la France.
          </p>
        </VerdictPanel>
      )}

      {confirmed === false && <AeehStep ageRange={ageRange} />}
    </div>
  );
};

export default AgeStep2;
