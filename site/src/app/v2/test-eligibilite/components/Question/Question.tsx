import styles from './styles.module.scss';

type QuestionProps = {
  question: string | JSX.Element;
  description?: string | JSX.Element;
  children: JSX.Element;
};

const Question = ({ question, description, children }: QuestionProps) => {
  return (
    <div className={` ${styles.container} ${styles.fit}`}>
      <div className={`fr-p-2w ${styles.panel} ${styles.fit}`}>
        {typeof question === 'string' ? (
          <p className={`fr-text--lg fr-mb-0 ${styles.paragraph}`}>{question}</p>
        ) : (
          question
        )}
      </div>

      {description && (
        <div className={`fr-p-2w ${styles.panel}`}>
          {typeof description === 'string' ? (
            <p className={`fr-text--md fr-mb-0 ${styles.description}`}>{description}</p>
          ) : (
            description
          )}
        </div>
      )}

      <div className="fr-pb-1w">{children}</div>
    </div>
  );
};

export default Question;
