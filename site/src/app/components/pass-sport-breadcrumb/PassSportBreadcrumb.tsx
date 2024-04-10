'use client';

import styles from './styles.module.scss';

import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb';
import { usePathname } from 'next/navigation';

export const NAVIGATION_ITEM_MAP: { [key: string]: string } = {
  '/v2/une-question': 'Une question ? ',
  '/v2/trouver-un-club': 'Trouver un club adhérent',
};

export default function PassSportBreadcrumb() {
  const paths: string | null = usePathname();
  if (paths === '/v2/accueil' || paths === '/' || paths === '/v2/test-eligibilite') {
    return null;
  }
  return (
    <div className={styles.container}>
      <div>
        {!!paths && !!NAVIGATION_ITEM_MAP[paths] && (
          <Breadcrumb
            homeLinkProps={{ href: '/v2/accueil' }}
            currentPageLabel={NAVIGATION_ITEM_MAP[paths]}
            segments={[]}
          ></Breadcrumb>
        )}
      </div>
    </div>
  );
}
