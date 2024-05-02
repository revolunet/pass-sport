import styles from './styles.module.scss';
import cn from 'classnames';

interface IProps {
  title: string;
  subtitle?: string;
  classes?: {
    container?: string;
  };
}

export default function PageHeader({ title, subtitle, classes }: IProps) {
  return (
    <div className={cn(styles.container, classes?.container)}>
      <div className={styles.titlewrapper}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}
