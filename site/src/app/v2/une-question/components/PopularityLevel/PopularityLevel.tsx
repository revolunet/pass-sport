import styles from './popularityLevel.module.scss';

interface Props {
  level: 0 | 1 | 2 | 3 | 4 | 5;
}

const PopularityLevel: React.FC<Props> = ({ level }) => {
  return (
    <div className={styles.container}>
      {Array.from(Array(5)).map((item, index) => (
        <div
          key={index}
          className={`${styles.circle} ${level > index ? styles.circle_filled : styles.circle_empty}`}
        ></div>
      ))}
    </div>
  );
};

export default PopularityLevel;
