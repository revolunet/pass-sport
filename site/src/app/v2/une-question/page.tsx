'use server';

import PageHeader from '@/components/PageHeader/PageHeader';
import EligibilityTestBanner from '@/components/eligibility-test-banner/EligibilityTestBanner';
import SocialMediaPanel from '../../components/social-media-panel/SocialMediaPanel';
import styles from './styles.module.scss';
import ContentSection from '@/app/v2/une-question/components/ContentSection/ContentSection';
import ContactSection from '@/app/v2/une-question/components/ContactSection/ContactSection';
import { getCategoriesWithArticles } from '@/app/v2/une-question/server-agent';
import { headers } from 'next/headers';
import { Metadata } from 'next';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Une question ? - pass Sport',
  };
}

export default async function Questions() {
  headers();

  const categoriesWithArticles = await getCategoriesWithArticles({ isProVersion: false });

  return (
    <>
      <PageHeader
        title="Vous avez une question ?"
        subtitle="Consultez notre FAQ la réponse à votre question s'y trouve peut-être."
        classes={{
          container: styles['page-header'],
        }}
      />

      <main tabIndex={-1} id={SKIP_LINKS_ID.mainContent} role="main">
        <ContentSection categoriesWithArticles={categoriesWithArticles} />
      </main>

      <ContactSection />

      <EligibilityTestBanner />
      <SocialMediaPanel />
    </>
  );
}
