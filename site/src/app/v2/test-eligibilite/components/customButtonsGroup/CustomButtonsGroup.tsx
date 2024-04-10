import { ButtonProps } from '@codegouvfr/react-dsfr/Button';
import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup';
import React, { useState } from 'react';
import cn from 'classnames';
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
      className={cn({
        [`${styles['button-clicked-index-0']}`]: buttonClickedIndex === 0,
        [`${styles['button-clicked-index-1']}`]: buttonClickedIndex === 1,
        [`${styles['button-clicked-index-2']}`]: buttonClickedIndex === 2,
      })}
    >
      <ButtonsGroup buttons={rewireOnClick()} inlineLayoutWhen="sm and up" buttonsSize="large" />
    </div>
  );
};

export default CustomButtonsGroups;
