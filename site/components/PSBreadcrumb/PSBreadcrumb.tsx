'use client';

import styles from './psbreadcrumb.module.scss';

import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ITEM_MAP } from '../PSNavigation';
import path from 'path';

export default function PSBreadcrumb() {
  const paths: string = usePathname();
  console.debug(paths);
  if (paths == '/v2/accueil') {
    return null;
  }
  return (
    <div className={styles.container}>
      <div>
        {paths !== '/v2/accueil' && paths !== '/' && (
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
