import cn from 'classnames';
import rootStyles from '@/app/utilities.module.scss';
import styles from './styles.module.scss';

interface Props {
  line1: string;
  line2?: string;
  line3?: string;
  wrapInParagraph?: boolean;
}

const Lines: React.FC<Props> = ({ line1, line2, line3 }) => (
  <>
    <span className={cn('fr-text--lg', 'fr-mb-0', rootStyles['span--with-linebreak'])}>
      {line1}
    </span>

    {line2 && (
      <span className={cn('fr-text--lg', 'fr-mb-0', rootStyles['span--with-linebreak'])}>
        {line2}
      </span>
    )}

    {line3 && <span className="fr-text--lg fr-mb-0">{line3}</span>}
  </>
);

const Legend: React.FC<Props> = (props) => {
  const wrapperStyle = cn(
    rootStyles['text--medium'],
    rootStyles['text--black'],
    'fr-p-2w',
    'fr-mb-1w',
    styles.panel,
    styles.fit,
    styles.span,
  );

  return (
    <>
      {props.wrapInParagraph ? (
        <>
          <p className={wrapperStyle}>
            <Lines {...props} />
          </p>
          <p className={styles['choose-option']}>Choisissez une option :</p>
        </>
      ) : (
        <>
          <span className={wrapperStyle}>
            <Lines {...props} />
          </span>
          <span className={styles['choose-option']}>Choisissez une option :</span>
        </>
      )}
    </>
  );
};

export default Legend;
