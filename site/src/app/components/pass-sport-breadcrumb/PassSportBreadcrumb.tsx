'use client';

import styles from './styles.module.scss';

import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

export const NAVIGATION_ITEM_MAP: { [key: string]: string } = {
  '/v2/une-question': 'Une question ?',
  '/v2/tout-savoir-sur-le-pass-sport': 'Tout savoir sur le pass Sport',
  '/v2/pro/tout-savoir-sur-le-pass-sport': 'Tout savoir sur le pass Sport',
  '/v2/trouver-un-club': 'Trouver un club partenaire',
  '/v2/politique-de-confidentialite': 'Politique de confidentialité',
  '/v2/mentions-legales': 'Mentions légales',
};

export default function PassSportBreadcrumb() {
  // todo: Refactor this breadcrumb, needs to have two different components for pro/client version
  // or one component with different behaviour depending on the type of user
  const paths = usePathname();
  const pathname = usePathname();
  const isProVersion = pathname?.startsWith('/v2/pro/');
  const internalRoutes = ['/', '/v2/accueil', '/v2/test-eligibilite'];

  if (!paths || internalRoutes.includes(paths)) {
    return null;
  }

  if (!!NAVIGATION_ITEM_MAP[paths]) {
    return (
      <div
        className={cn(styles.container, {
          [styles['container--pro']]: isProVersion,
        })}
      >
        <div className={styles['container__breadcrumb']}>
          <Breadcrumb
            {...(isProVersion && {
              classes: {
                root: styles['container--pro'],
                collapse: styles['container--pro'],
              },
            })}
            homeLinkProps={{ href: '/v2/accueil' }}
            currentPageLabel={NAVIGATION_ITEM_MAP[paths]}
            segments={[]}
          />
        </div>
      </div>
    );
  }

  const pathNames = paths.split('/');
  const clubName = decodeURIComponent(pathNames[pathNames.length - 1]);

  return (
    <div
      className={cn(styles.container, {
        [styles['container--pro']]: isProVersion,
      })}
    >
      <Breadcrumb
        {...(isProVersion && {
          classes: {
            root: styles['container--pro'],
            collapse: styles['container--pro'],
          },
        })}
        homeLinkProps={{ href: '/v2/accueil' }}
        currentPageLabel={clubName}
        segments={[
          { label: 'Trouver un club partenaire', linkProps: { href: '/v2/trouver-un-club' } },
        ]}
      ></Breadcrumb>
    </div>
  );
}
