import styles from './styles.module.scss';

interface Props {
  question: string | JSX.Element;
  description?: string;
  children: JSX.Element;
}

const Question: React.FC<Props> = ({ question, description, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        {typeof question === 'string' ? (
          <p className={`fr-text--lg ${styles.question} ${styles.paragraph}`}>{question}</p>
        ) : (
          question
        )}
      </div>

      {description && (
        <div className={styles.panel}>
          <p className={`fr-text--lg ${styles.question} ${styles.paragraph}`}>{description}</p>
        </div>
      )}

      <p className={`fr-text ${styles.option}`}>Choisissez une option</p>
      <div className={styles.actions}>{children}</div>
    </div>
  );
};

export default Question;
