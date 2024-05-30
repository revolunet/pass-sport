'use server';

import { CategoryWithArticles } from '../../../../types/Faq';
import { getCrispArticles, getFormattedCategories } from '../../../../utils/faq';
import { initCrispClient } from '../../../../utils/crisp';
import * as Sentry from '@sentry/nextjs';

const {
  envVars: { CRISP_WEBSITE },
  crispClient,
} = initCrispClient();

export const getCategoriesWithArticles = async ({
  isProVersion,
}: {
  isProVersion: boolean;
}): Promise<CategoryWithArticles[]> => {
  try {
    const articles = await getCrispArticles({
      crispClient,
      crispIdentifier: CRISP_WEBSITE,
    });

    return getFormattedCategories({
      crispClient,
      crispIdentifier: CRISP_WEBSITE,
      articles,
      isProVersion,
    });
  } catch (err) {
    Sentry.withScope((scope) => {
      scope.captureException(err);
      scope.setLevel('error');
      scope.captureMessage('Error occurred while trying to get articles from CRISP');
    });

    return [];
  }
};
