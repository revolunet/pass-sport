'use client';

import styles from './psbreadcrumb.module.scss';

import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ITEM_MAP } from '../PSNavigation';

export default function PSBreadcrumb() {
  const paths: string = usePathname();
  return (
    <div className={styles.container}>
      <div>
        <Breadcrumb
          homeLinkProps={{ href: '/v2/accueil' }}
          currentPageLabel={NAVIGATION_ITEM_MAP[paths]}
          segments={[]}
        ></Breadcrumb>
      </div>
    </div>
  );
}
