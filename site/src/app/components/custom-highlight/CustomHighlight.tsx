import Highlight from '@codegouvfr/react-dsfr/Highlight';
import cn from 'classnames';
import styles from './styles.module.scss';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  withIcon?: boolean;
}

const CustomHighlight = ({ withIcon = true, children }: Props) => {
  return (
    <Highlight
      className={cn(styles['container__highlight-text'], 'fr-text--bold')}
      size="lg"
      classes={{
        root: styles['container__highlight--override'],
      }}
    >
      {withIcon && (
        <span className={cn('fr-icon-quote-line', styles['container__icon'])} aria-hidden />
      )}
      {children}
    </Highlight>
  );
};

export default CustomHighlight;
