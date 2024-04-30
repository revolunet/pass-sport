import styles from './styles.module.scss';

interface IProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titlewrapper}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}
