import questionStyles from '../Question/styles.module.scss';
import styles from './styles.module.scss';

const SocialMediaLinks = () => {
  return (
    <div>
      <div className={questionStyles.panel}>
        <p className={`fr-text--lg ${questionStyles.paragraph}  ${questionStyles.question}`}>
          Pour plus d’informations, suivez-nous sur les réseaux sociaux :
        </p>
      </div>
      <div className={styles['link-container']}>
        <a className="fr-link fr-icon-instagram-line fr-link--icon-left" href="#">
          Instagram
        </a>

        <a className="fr-link fr-icon-tiktok-line fr-link--icon-left" href="#">
          TikTok
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
