import styles from './styles.module.scss';
import cn from 'classnames';
import { ReactNode } from 'react';

interface Props {
  question: string | ReactNode;
  description?: string | ReactNode;
  children: ReactNode;
}

const Question = ({ question, description, children }: Props) => {
  return (
    <>
      <div role="alert" className={cn('fr-p-2w', 'fr-mb-1w', styles.panel, styles.fit)}>
        {typeof question === 'string' ? (
          <p className={`fr-text--lg fr-mb-0 ${styles.paragraph}`}>{question}</p>
        ) : (
          question
        )}
      </div>
      <div className={` ${styles.container} ${styles.fit}`}>
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
    </>
  );
};

export default Question;
