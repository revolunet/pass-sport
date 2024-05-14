'use server';

import { CategoryWithArticles } from '../../../../types/Faq';
import { getCrispArticles, getFormattedCategories } from '../../../../utils/faq';
import { initCrispClient } from '../../../../utils/crisp';

const {
  envVars: { CRISP_WEBSITE },
  crispClient,
} = initCrispClient();

export const getCategoriesWithArticles = async (): Promise<CategoryWithArticles[]> => {
  const articles = await getCrispArticles({
    crispClient,
    crispIdentifier: CRISP_WEBSITE,
  });

  return getFormattedCategories({
    crispClient,
    crispIdentifier: CRISP_WEBSITE,
    articles,
  });
};
