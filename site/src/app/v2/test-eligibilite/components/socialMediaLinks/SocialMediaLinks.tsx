import questionStyles from '../Question/styles.module.scss';
import styles from './styles.module.scss';

const SocialMediaLinks = () => {
  return (
    <div>
      <div className={`fr-p-2w ${questionStyles.panel}`}>
        <p className={`fr-text--lg fr-mb-0 ${questionStyles.paragraph}`}>
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
