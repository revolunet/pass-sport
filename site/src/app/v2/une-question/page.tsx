'use server';

import PageHeader from '@/components/PageHeader/PageHeader';
import EligibilityTestBanner from '@/components/eligibility-test-banner/EligibilityTestBanner';
import SocialMediaPanel from '../../components/social-media-panel/SocialMediaPanel';
import styles from './styles.module.scss';
import ContentSection from '@/app/v2/une-question/components/ContentSection/ContentSection';
import ContactSection from '@/app/v2/une-question/components/ContactSection/ContactSection';
import { getCategoriesWithArticles } from '@/app/v2/une-question/server-agent';

export default async function Questions() {
  const categoriesWithArticles = await getCategoriesWithArticles();

  return (
    <>
      <PageHeader
        title="Vous avez une question ?"
        subtitle="Consultez notre FAQ la réponse à votre question s'y trouve peut-être."
        classes={{
          container: styles['page-header'],
        }}
      />

      <ContentSection categoriesWithArticles={categoriesWithArticles} />
      <ContactSection />

      <EligibilityTestBanner />
      <SocialMediaPanel />
    </>
  );
}
