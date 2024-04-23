import styles from './styles.module.scss';

const SocialMediaLinks = () => {
  return (
    <div>
      <p className="fr-text--lg fr-mb-0 fr-text--bold">
        Pour plus d&apos;informations, suivez-nous sur les réseaux sociaux :
      </p>
      <div className={`fr-pt-3v ${styles['link-container']}`}>
        <a
          className="fr-link fr-icon-instagram-line fr-link--icon-left"
          href="https://www.instagram.com/passsportofficiel/"
          target="_blank"
        >
          Instagram
        </a>

        <a
          className="fr-link fr-icon-tiktok-line fr-link--icon-left"
          href="https://www.tiktok.com/@passsportofficiel"
          target="_blank"
        >
          TikTok
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
