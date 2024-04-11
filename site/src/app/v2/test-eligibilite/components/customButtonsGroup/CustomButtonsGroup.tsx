import { ButtonProps } from '@codegouvfr/react-dsfr/Button';
import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';
import React, { useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  buttons: [ButtonProps, ...ButtonProps[]];
}
const CustomButtonsGroups: React.FC<Props> = ({ buttons }) => {
  const [buttonClickedIndex, setButtonClickedIndex] = useState<number | null>(null);
  const buttonHandler = (index: number) => {
    setButtonClickedIndex(index);
  };

  const rewireOnClick = () => {
    return buttons.map((buttonProp, index) => ({
      ...buttonProp,
      onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        buttonHandler(index);
        buttonProp.onClick && buttonProp.onClick(e);
      },
    })) as [ButtonProps, ...ButtonProps[]];
  };

  return (
    <div
      className={`${
        buttonClickedIndex === null ? null : styles['button-clicked-index-' + buttonClickedIndex]
      }`}
    >
      <ButtonsGroup buttons={rewireOnClick()} inlineLayoutWhen="sm and up" buttonsSize="large" />
    </div>
  );
};

export default CustomButtonsGroups;
