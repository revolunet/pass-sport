import React, { useState } from 'react';
import styles from './styles.module.scss';

type Options = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}[];

interface Props {
  fieldsetId: string;
  options: Options;
}

const RadioButtonsGroup: React.FC<Props> = ({ options, fieldsetId }) => {
  const [buttonClickedIndex, setButtonClickedIndex] = useState<number | null>(null);

  const buttonHandler = (index: number) => {
    setButtonClickedIndex(index);
  };

  const rewireOnClick = () => {
    return options.map((option, index) => ({
      ...option,

      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        buttonHandler(index);
        option.onChange(e);
      },
    })) as Options;
  };

  return (
    <fieldset className="fr-fieldset" id={fieldsetId} aria-labelledby={`${fieldsetId}-legend `}>
      <legend
        className={`fr-fieldset__legend--regular fr-fieldset__legend fr-pt-1w fr-pb-2w ${styles.legend}`}
        id={`${fieldsetId}-legend`}
      >
        Choisissez une option
      </legend>

      {rewireOnClick().map((option, index) => {
        return (
          <div key={option.label} className={`fr-fieldset__element ${styles['fieldset__element']}`}>
            <div
              className={buttonClickedIndex !== index ? styles['transparent-border'] : undefined}
            >
              <div
                className={`fr-radio-group ${styles['radio-group']} ${buttonClickedIndex === index ? styles['selected-radio'] : styles['deselected-radio']}`}
              >
                <input
                  type="radio"
                  id={`${fieldsetId}-${index}`}
                  name={fieldsetId}
                  onChange={option.onChange}
                />
                <label className="fr-label" htmlFor={`${fieldsetId}-${index}`}>
                  {option.label}
                </label>
              </div>
            </div>
          </div>
        );
      })}
    </fieldset>
  );
};

export default RadioButtonsGroup;
