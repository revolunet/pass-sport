import { calloutContents } from './callouts.messages';
import styles from './styles.module.scss';

const Callouts = () => {
  return (
    <div className="fr-container--fluid">
      <div className="fr-grid-row">
        {calloutContents.map((content) => {
          return (
            <div key={content.id} className={`fr-col-12 fr-col-lg-3 fr-py-2w ${styles.background}`}>
              <p className={`fr-callout fr-mb-0 ${styles.background}`}>
                <span className="fr-h3">{content.title}</span>
                <span className="fr-callout__text display--block">{content.description}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Callouts;
