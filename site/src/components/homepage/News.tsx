import Button from '@codegouvfr/react-dsfr/Button';
import { newsContents } from './news.messages';
import styles from './news.module.scss';
const News = () => (
  <div>
    <div className="fr-container--fluid">
      <div className="fr-grid-row fr-grid-row--gutters">
        {newsContents.map((content) => {
          return (
            <div key={content.id} className="fr-col-12 fr-col-lg-4">
              <div className={styles.container}>
                <p>{content.headerText}</p>
                <h5 className={styles.description}>{content.title}</h5>
                <div className={styles['icon-container']}>
                  <span
                    className={`fr-icon-arrow-right-line ${styles.description}`}
                    aria-hidden="true"
                  ></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        <Button
          priority="tertiary no outline"
          iconId="fr-icon-arrow-right-line"
          iconPosition="right"
        >
          Voir toutes les actualités
        </Button>
      </div>
    </div>
  </div>
);

export default News;
