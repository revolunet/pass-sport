import { useState } from 'react';
import AgeStep2 from '../ageStep2/AgeStep2';
import { AGE_RANGE } from '../types/types';
import VerdictPanel from '../../../../components/verdictPanel/VerdictPanel';
import rootStyles from '@/app/utilities.module.scss';
import cn from 'classnames';
import CustomRadioButtons from '../customRadioButtons/CustomRadioButtons';
import { useRemoveAttributeById } from '@/app/hooks/useRemoveAttributeById';

const AgeStep = () => {
  const [ageRange, setAgeRange] = useState<AGE_RANGE | null>(null);
  const [isValidated, setIsValidated] = useState(true);

  const fieldsetId = 'ageStep-fieldset';
  useRemoveAttributeById(fieldsetId, 'aria-labelledby');

  const buttonClickedHandler = () => {
    setIsValidated(true);
  };

  return (
    <div>
      <CustomRadioButtons
        id={fieldsetId}
        name="ageStep"
        legendLine1="Quel âge avez-vous ?"
        isOkButtonDisabled={isValidated}
        onOkButtonClicked={buttonClickedHandler}
        options={[
          {
            label: 'Entre 6 et 19 ans',
            nativeInputProps: {
              onChange: () => {
                setAgeRange(AGE_RANGE.BETWEEN_6_19);
                setIsValidated(false);
              },
            },
          },
          {
            label: 'Entre 19 et 30 ans',
            nativeInputProps: {
              onChange: () => {
                setAgeRange(AGE_RANGE.BETWEEN_19_30), setIsValidated(false);
              },
            },
          },
          {
            label: 'Plus de 30 ans',
            nativeInputProps: {
              onChange: () => {
                setAgeRange(AGE_RANGE.GREATER_THAN_30);
                setIsValidated(false);
              },
            },
          },
        ]}
      />

      {isValidated && ageRange === AGE_RANGE.GREATER_THAN_30 && (
        <VerdictPanel
          title="Nous sommes désolés, d'après les informations que vous nous avez transmises, vous n'êtes
        pas éligible au pass Sport"
          isSuccess={false}
        >
          <p className={cn('fr-text--lg', rootStyles['text--black'], rootStyles['text--medium'])}>
            En effet, ce dispositif est ouvert aux:
          </p>
          <ul
            className={cn(
              'fr-ml-2w',
              'fr-text--lg',
              rootStyles['text--black'],
              rootStyles['text--medium'],
            )}
          >
            <li className="fr-my-2w">
              Personnes nées entre le 16 septembre 1993 et le 31 décembre 2018.
            </li>
          </ul>
          <p
            className={cn(
              'fr-text--lg',
              'fr-text--bold',
              rootStyles['text--medium'],
              rootStyles['text--black'],
            )}
          >
            Pour autant, vous avez peut-être droit à d&apos;autres aides. N&apos;hésitez pas à vous
            rapprocher de votre région, département ou commune de résidence.
          </p>
        </VerdictPanel>
      )}

      {/* "key" property here is crucial, it allows to "reset" the subsequent components */}
      {/* more info at https://react.dev/learn/preserving-and-resetting-state */}
      {isValidated && ageRange !== null && <AgeStep2 ageRange={ageRange} key={ageRange} />}
    </div>
  );
};

export default AgeStep;
