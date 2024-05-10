import styles from './styles.module.scss';

interface Props {
  level: 0 | 1 | 2 | 3 | 4 | 5;
}

const PopularityLevel: React.FC<Props> = ({ level }) => {
  return (
    <div className={styles.container}>
      <p className="fr-text--bold">Populaire</p>

      <div className={styles['circles-container']}>
        {Array.from(Array(5)).map((item, index) => (
          <div
            key={index}
            className={`${styles.circle} ${level > index ? styles['circle--filled'] : styles['circle--empty']}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularityLevel;
