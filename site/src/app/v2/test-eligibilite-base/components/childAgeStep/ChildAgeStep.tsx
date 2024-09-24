import { useState } from 'react';
import VerdictPanel from '../../../../components/verdictPanel/VerdictPanel';
import AllowancesStep from '../allowancesStep/AllowancesStep';
import { CHILD_AGE } from '../types/types';
import rootStyles from '@/app/utilities.module.scss';
import cn from 'classnames';
import CustomRadioButtons from '../customRadioButtons/CustomRadioButtons';
import { useRemoveAttributeById } from '@/app/hooks/useRemoveAttributeById';

const ChildAgeStep = () => {
  const [childAge, setChildAge] = useState<CHILD_AGE | null>(null);
  const [isValidated, setIsValidated] = useState(true);

  const fieldsetId = 'childAgeStep-fieldset';
  useRemoveAttributeById(fieldsetId, 'aria-labelledby');

  const buttonClickedHandler = () => {
    setIsValidated(true);
  };

  const failureCallOut = (
    <VerdictPanel
      title="Nous sommes désolés, d'après les informations que vous nous avez transmises, vous n'êtes pas éligible au pass Sport"
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

      <p className={cn('fr-text--lg', 'fr-text--bold', rootStyles['text--black'])}>
        Pour autant, vous avez peut-être droit à d&apos;autres aides. N&apos;hésitez pas à vous
        rapprocher de votre région, département ou commune de résidence.
      </p>
    </VerdictPanel>
  );

  return (
    <>
      <CustomRadioButtons
        id={fieldsetId}
        name="childAgeStep"
        legendLine1="Quel âge a votre enfant ?"
        isOkButtonDisabled={isValidated}
        onOkButtonClicked={buttonClickedHandler}
        options={[
          {
            label: 'Moins de 6 ans',
            nativeInputProps: {
              onChange: () => {
                setIsValidated(false);
                setChildAge(CHILD_AGE.LESS_THAN_SIX);
              },
            },
          },
          {
            label: 'Entre 6 et 30 ans',
            nativeInputProps: {
              onChange: () => {
                setIsValidated(false);
                setChildAge(CHILD_AGE.BTW_SIX_AND_THIRTY);
              },
            },
          },
          {
            label: 'Plus de 30 ans',
            nativeInputProps: {
              onChange: () => {
                setIsValidated(false);
                setChildAge(CHILD_AGE.MORE_THAN_THIRTY);
              },
            },
          },
        ]}
      />

      {isValidated && childAge === CHILD_AGE.LESS_THAN_SIX && failureCallOut}
      {isValidated && childAge === CHILD_AGE.BTW_SIX_AND_THIRTY && <AllowancesStep isForChild />}
      {isValidated && childAge === CHILD_AGE.MORE_THAN_THIRTY && failureCallOut}
    </>
  );
};

export default ChildAgeStep;
