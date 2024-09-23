import { useState } from 'react';
import { CROUS_AGE_RANGE } from '../types/types';
import VerdictPanel from '@/app/components/verdictPanel/VerdictPanel';
import rootStyles from '@/app/utilities.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import Button from '@codegouvfr/react-dsfr/Button';
import FullNegativeVerdictPanel from '@/app/components/verdictPanel/FullNegativeVerdictPanel';
import { useRouter } from 'next/navigation';
import CustomRadioButtons from '@/app/v2/test-eligibilite-base/components/customRadioButtons/CustomRadioButtons';
import { useRemoveAttributeById } from '@/app/hooks/useRemoveAttributeById';
import { CROUS } from '@/app/v2/accueil/components/acronymes/Acronymes';

const CrousStep = () => {
  const [ageRange, setAgeRange] = useState<CROUS_AGE_RANGE | null>(null);
  const router = useRouter();

  const fieldsetId = 'crousStep-fieldset';
  useRemoveAttributeById(fieldsetId, 'aria-labelledby');

  return (
    <>
      <fieldset id="second-step-form" className="fr-fieldset">
        <CustomRadioButtons
          id={fieldsetId}
          legendLine1="Quel âge avez-vous ?"
          options={[
            {
              label: 'Moins de 28 ans',
              nativeInputProps: {
                onChange: () => setAgeRange(CROUS_AGE_RANGE.LESS_THAN_28),
              },
            },
            {
              label: '28 ans révolus (au plus tard le 15 octobre 2024)',
              nativeInputProps: {
                onChange: () => setAgeRange(CROUS_AGE_RANGE.MORE_THAN_28),
              },
            },
            {
              label: 'Plus de 29 ans',
              nativeInputProps: {
                onChange: () => setAgeRange(CROUS_AGE_RANGE.MORE_THAN_29),
              },
            },
          ]}
        />

        {ageRange === CROUS_AGE_RANGE.LESS_THAN_28 && (
          <VerdictPanel
            title="Bonne nouvelle ! D'après les informations que vous nous avez transmises, vous êtes éligible au pass Sport."
            isSuccess
            isLean
          >
            <p
              className={cn(
                'fr-text--lg',
                'fr-mb-3w',
                rootStyles['text--black'],
                rootStyles['text--medium'],
              )}
            >
              Vous le recevrez à l&apos;adresse mail que vous avez communiqué à votre <CROUS /> à
              partir de début septembre, une fois que votre dossier de demande a été accepté.
            </p>
            <p
              className={cn(
                'fr-text--lg',
                'fr-mb-3w',
                rootStyles['text--black'],
                rootStyles['text--medium'],
              )}
            >
              Il vous permettra de déduire 50 euros de votre inscription dans l’une des 85 000
              structures sportives et associations sportives partenaires dans toute la France.
            </p>
            <p
              className={cn(
                'fr-text--lg',
                'fr-mb-1w',
                rootStyles['text--black'],
                rootStyles['text--medium'],
              )}
            >
              Si après le 7 octobre vous n&apos;avez pas reçu votre pass, vous aurez la possibilité
              d&apos;en faire la demande sur{' '}
              <Link href="https://pass.sports.gouv.fr" target="_blank">
                pass.sports.gouv.fr
              </Link>
              .
            </p>
            <Button priority="primary" onClick={() => router.push('/v2/trouver-un-club')}>
              Trouver une structure partenaire
            </Button>
          </VerdictPanel>
        )}

        {(ageRange === CROUS_AGE_RANGE.MORE_THAN_29 ||
          ageRange === CROUS_AGE_RANGE.MORE_THAN_28) && <FullNegativeVerdictPanel isLean />}
      </fieldset>
    </>
  );
};

export default CrousStep;
