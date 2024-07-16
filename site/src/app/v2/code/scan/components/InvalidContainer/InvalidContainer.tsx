import cn from 'classnames';
import styles from './styles.module.scss';

function InvalidContainer() {
  return (
    <div className={cn(styles['wrapper'], 'fr-px-2w')}>
      <div className={cn(styles['container'], 'fr-container--fluid', 'fr-grid-row', 'fr-py-6w')}>
        Code invalide
      </div>
    </div>
  );
}

export default InvalidContainer;
