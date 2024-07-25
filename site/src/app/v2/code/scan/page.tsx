'use server';

import { Metadata } from 'next';
import MainContent from './components/MainContent/MainContent';
import styles from './styles.module.scss';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Résultat de votre QR pass Sport',
  };
}

function Page() {
  return (
    <main className={styles['container']} tabIndex={-1} id={SKIP_LINKS_ID.mainContent} role="main">
      <MainContent />
    </main>
  );
}

export default Page;
