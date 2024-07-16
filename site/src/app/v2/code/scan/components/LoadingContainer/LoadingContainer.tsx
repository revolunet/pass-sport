import cn from 'classnames';
import styles from './styles.module.scss';

function LoadingContainer() {
  return (
    <div className={cn(styles['wrapper'], 'fr-px-2w')}>
      <div className={cn(styles['container'], 'fr-container--fluid', 'fr-grid-row', 'fr-py-6w')}>
        En cours de chargement
      </div>
    </div>
  );
}

export default LoadingContainer;
