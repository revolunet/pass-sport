import { calloutContents } from './callouts.messages';
import styles from './styles.module.scss';

const Callouts = () => {
  return (
    <div className="fr-container--fluid">
      <div className="fr-grid-row fr-grid-row--gutters">
        {calloutContents.map((content) => {
          return (
            <div key={content.id} className="fr-col-12 fr-col-lg-3">
              <div className={`fr-callout ${styles.callout}`}>
                <h3 className="fr-callout__title">{content.title}</h3>
                <p className="fr-callout__text">{content.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Callouts;
