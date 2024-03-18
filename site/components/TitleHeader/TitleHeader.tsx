import styles from './titleheader.module.scss';

interface IProps {
  title: string;
  subtitle: string;
}

export default function TitleHeader({ title, subtitle }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titlewrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}
