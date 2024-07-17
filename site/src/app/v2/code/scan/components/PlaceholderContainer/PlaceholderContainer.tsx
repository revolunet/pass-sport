import cn from 'classnames';
import styles from './styles.module.scss';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function PlaceholderContainer({ children }: Props) {
  return (
    <div className={cn(styles['wrapper'], 'fr-px-2w')}>
      <div className={cn(styles['container'], 'fr-container--fluid', 'fr-grid-row', 'fr-py-6w')}>
        {children}
      </div>
    </div>
  );
}

export default PlaceholderContainer;
