import Question from '../Question/Question';

import { useState } from 'react';
import { AGE_RANGE } from '../types/types';
import VerdictPanel from '../../../../components/verdictPanel/VerdictPanel';
import { useRouter } from 'next/navigation';
import rootStyles from '@/app/utilities.module.scss';
import cn from 'classnames';
import FullNegativeVerdictPanel from '@/app/components/verdictPanel/FullNegativeVerdictPanel';
import RadioButtons from '@codegouvfr/react-dsfr/RadioButtons';
import { trackRedirectionToPassSportForm } from '@/app/v2/test-eligibilite-base/helpers/helpers';

interface Props {
  ageRange: AGE_RANGE;
}

const AeehStep = ({ ageRange }: Props) => {
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
              <p className={`fr-text--lg fr-mb-0 ${rootStyles['text--medium']}`}>
                Vos parent bénéficient-ils de l&apos;allocation d&apos;éducation de l&apos;enfant
                handicapé (AEEH) ?
              </p>
              <p className={`fr-text--lg fr-mb-0 ${rootStyles['text--medium']}`}>
                Si vous ne le savez pas, rapprochez de vos parents, ils sauront vous répondre.
              </p>
            </>
          }
        >
          <RadioButtons
            name="aeehStep"
            legend="Choisissez une option:"
            options={[
              {
                label: 'Oui',
                nativeInputProps: {
                  onChange: () => setHasAeehAllocation(true),
                },
              },
              {
                label: 'Non',
                nativeInputProps: {
                  onChange: () => setHasAeehAllocation(false),
                },
              },
            ]}
          />
        </Question>
      )}

      {displaySuccess && (
        <VerdictPanel
          title="Bonne nouvelle ! D'après les informations que vous nous avez transmises, vous
          êtes éligible au pass Sport."
          isSuccess
          buttonProps={{
            children: "Accéder au formulaire d'obtention du pass Sport",
            nativeButtonProps: {
              'aria-label': 'Visiter la page pour obtenir votre pass Sport',
            },
            onClick: () => {
              trackRedirectionToPassSportForm();
              router.push('test-eligibilite');
            },
          }}
        >
          <p className={cn('fr-text--lg', rootStyles['text--medium'], rootStyles['text--black'])}>
            Il vous permettra de déduire 50 euros de votre adhésion sportif dans plus de 85 000
            clubs et associations sportives partenaires dans toute la France.
          </p>
        </VerdictPanel>
      )}

      {displayFailure && <FullNegativeVerdictPanel isLean={false} />}
    </>
  );
};

export default AeehStep;
