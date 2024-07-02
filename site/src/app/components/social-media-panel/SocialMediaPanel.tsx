import Link from 'next/link';
import styles from './styles.module.scss';
import { SocialMediaLinkData, socialMedia } from '@/app/constants/social-media';
import cn from 'classnames';

interface Props {
  isHomePage?: boolean;
  isProVersion?: boolean;
}

interface SocialMediaLinkProps {
  link: SocialMediaLinkData;
}

const SocialMediaPanel = ({ isHomePage = false, isProVersion = false }: Props) => {
  const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ link }) => (
    <Link
      className={cn('fr-text--lg', 'fr-text--bold', styles.color)}
      href={link.href}
      target="_blank"
    >
      <span className={cn('fr-pr-1w', link.iconClassName)} aria-hidden="true" />
      {link.label}
    </Link>
  );

  return (
    <div
      className={cn('fr-pb-1w', 'fr-px-1w', styles.container, {
        [styles['container--home-page-variant']]: isHomePage,
        [styles['container--pro']]: isProVersion,
      })}
    >
      <h2 className={cn(styles.title, 'fr-h5')}>Suivez-nous sur les réseaux sociaux</h2>
      <div className={styles['link-container']}>
        {socialMedia.map((link) => (
          <SocialMediaLink key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaPanel;
