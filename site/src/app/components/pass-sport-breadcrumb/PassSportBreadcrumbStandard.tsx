'use client';

import styles from './styles.module.scss';

import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

export const NAVIGATION_ITEM_MAP: { [key: string]: string } = {
  '/v2/une-question': 'Une question ?',
  '/v2/tout-savoir-sur-le-pass-sport': 'Tout savoir sur le pass Sport',
  '/v2/trouver-un-club': 'Trouver une structure partenaire',
  '/v2/politique-de-confidentialite': 'Politique de confidentialité',
  '/v2/mentions-legales': 'Mentions légales',
  '/v2/code/scan': 'Mon pass Sport',
};

export default function PassSportBreadcrumbStandard() {
  const paths = usePathname();
  const internalRoutes = ['/', '/v2/accueil', '/v2/test-eligibilite'];

  if (!paths || internalRoutes.includes(paths)) {
    return null;
  }

  const isOnQRPage = paths.startsWith('/v2/code/scan');

  if (!!NAVIGATION_ITEM_MAP[paths]) {
    return (
      <div
        className={cn(styles.container, {
          [styles['container--qr-page']]: isOnQRPage,
        })}
      >
        <div>
          <Breadcrumb
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
        [styles['container--qr-page']]: isOnQRPage,
      })}
    >
      <Breadcrumb
        homeLinkProps={{ href: '/v2/accueil' }}
        currentPageLabel={isOnQRPage ? 'QR Code' : clubName}
        segments={
          isOnQRPage
            ? [
                {
                  label: 'Code',
                  linkProps: { href: '#' },
                },
              ]
            : [
                {
                  label: 'Trouver une structure partenaire',
                  linkProps: { href: '/v2/trouver-un-club' },
                },
              ]
        }
      />
    </div>
  );
}
