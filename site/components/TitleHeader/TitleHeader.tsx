import styles from './titleheader.module.scss';

interface IProps {
  title: string;
  subtitle: string;
}

export default function TitleHeader({ title, subtitle }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titlewrapper}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}
