import Link from 'next/link';
import styles from './styles.module.scss';
import { SocialMediaLinkData, socialMedia } from '@/app/constants/social-media';
import cn from 'classnames';
import rootStyles from '@/app/utilities.module.scss';

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
      aria-label={`Ouvrir une nouvelle fenêtre vers la page ${link.label} du dispositif pass Sport`}
    >
      <span className={cn('fr-pr-1w', link.iconClassName)} aria-hidden="true" />
      {link.label}
    </Link>
  );

  return (
    <aside
      className={cn('fr-pb-2w', 'fr-px-1w', 'fr-pt-4w', styles.container, {
        [styles['container--home-page-variant']]: isHomePage,
        [styles['container--pro']]: isProVersion,
      })}
    >
      <h1 className={cn(styles.title, 'fr-h5')}>Suivez-nous sur les réseaux sociaux</h1>
      <ul className={cn(styles['link-container'], rootStyles['list--lean'])}>
        {socialMedia.map((link) => (
          <li key={link.href}>
            <SocialMediaLink key={link.id} link={link} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SocialMediaPanel;
