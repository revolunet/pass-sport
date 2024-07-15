import styles from './styles.module.scss';
import cn from 'classnames';

const Loading = () => {
  return <p className={cn(styles.center, 'fr-my-2w')}>En cours de chargement...</p>;
};

export default Loading;
