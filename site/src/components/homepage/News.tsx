import { newsContents } from './news.messages';
import styles from './news.module.scss';
const News = () => (
  <div>
    <h3> Les actualités du pass'Sport</h3>

    <div className="fr-container">
      <div className="fr-grid-row fr-grid-row--gutters">
        {newsContents.map((content) => {
          return (
            <div className="fr-col-12 fr-col-lg-4">
              <div className={styles.wrapper}>
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
    </div>
  </div>
);

export default News;
