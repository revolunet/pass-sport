import styles from './styles.module.scss';

interface Props {
  question: string | JSX.Element;
  description?: string | JSX.Element;
  children: JSX.Element;
}

const Question: React.FC<Props> = ({ question, description, children }) => {
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

      <p className={`fr-text fr-px-0 fr-py-1w ${styles.option}`}>Choisissez une option</p>
      <div className="fr-pb-3w">{children}</div>
    </div>
  );
};

export default Question;
