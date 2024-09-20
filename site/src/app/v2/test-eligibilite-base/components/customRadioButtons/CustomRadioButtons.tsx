import RadioButtons, { RadioButtonsProps } from '@codegouvfr/react-dsfr/RadioButtons';
import styles from './styles.module.scss';
import Legend from './legend/Legend';

type Props = Omit<RadioButtonsProps, 'legend'> & {
  legendLine1: string;
  legendLine2?: string;
  legendLine3?: string;
};
const CustomRadioButtons: React.FC<Props> = (props) => {
  const { legendLine1, legendLine2, legendLine3, ...onlyRadioButtonsProps } = props;

  return (
    <RadioButtons
      {...onlyRadioButtonsProps}
      classes={{ legend: styles.legend }}
      legend={
        <Legend line1={props.legendLine1} line2={props.legendLine2} line3={props.legendLine3} />
      }
    />
  );
};

export default CustomRadioButtons;
