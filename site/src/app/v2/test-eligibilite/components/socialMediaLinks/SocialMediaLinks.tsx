import questionStyles from '../Question/styles.module.scss';
import styles from './styles.module.scss';

const SocialMediaLinks = () => {
  return (
    <div>
      <div className={`fr-p-2w ${questionStyles.panel}`}>
        <p className={`fr-text--lg fr-mb-0 ${questionStyles.paragraph}`}>
          Pour plus d’informations, suivez-nous sur les réseaux sociaux :
        </p>
      </div>
      <div className={`fr-pt-1w fr-pb-4w ${styles['link-container']}`}>
        <a
          className="fr-link fr-icon-instagram-line fr-link--icon-left"
          href="https://www.instagram.com/passsportofficiel/"
        >
          Instagram
        </a>

        <a
          className="fr-link fr-icon-tiktok-line fr-link--icon-left"
          href="https://www.tiktok.com/@passsportofficiel"
        >
          TikTok
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
