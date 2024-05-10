import Crisp from 'crisp-api';
import { CrispArticle, CrispFullArticle } from '../types/Crisp';
import { Article, CategoryWithArticles } from '../types/Faq';

type Locale = 'fr' | 'en';
const LOCALE = 'fr';

export async function getFormattedCategories({
  crispClient,
  articles,
  crispIdentifier,
}: {
  crispClient: Crisp;
  articles: CrispArticle[];
  crispIdentifier: string;
}): Promise<CategoryWithArticles[]> {
  const categories = new Map<string, CategoryWithArticles>();

  // Format the final output
  // We want a list of categories that contain their own list of articles
  for await (const article of articles) {
    if (!article.category?.category_id) continue;

    // We need to fetch the full article individually to get its content...
    const fullArticle: CrispFullArticle = await getCrispFullArticle({
      crispClient,
      articleId: article.article_id,
      crispIdentifier,
      locale: LOCALE,
    });

    // Ensure categories uniqueness
    if (!categories.has(article.category.category_id)) {
      categories.set(article.category?.category_id, {
        id: article.category.category_id,
        name: article.category.name,
        articles: [getFormattedArticleWithContent(article, fullArticle.content)],
      });
    } else {
      const category: CategoryWithArticles = categories.get(article.category.category_id)!;

      categories.set(article.category.category_id, {
        ...category,
        articles: [
          ...category.articles!,
          getFormattedArticleWithContent(article, fullArticle.content),
        ],
      });
    }
  }

  return Array.from(categories.values());
}

// Get list of articles, but these don't contain the "content" attribute
export async function getCrispArticles({
  crispClient,
  crispIdentifier,
  locale = LOCALE,
}: {
  crispClient: Crisp;
  crispIdentifier: string;
  locale?: Locale;
}): Promise<CrispArticle[]> {
  return crispClient.website.listHelpdeskLocaleArticles(crispIdentifier, locale);
}

// Get a full article that contains the "content" attribute
export async function getCrispFullArticle({
  crispClient,
  articleId,
  crispIdentifier,
  locale = LOCALE,
}: {
  crispClient: Crisp;
  articleId: string;
  crispIdentifier: string;
  locale?: Locale;
}) {
  const fullArticle: CrispFullArticle = await crispClient.website.resolveHelpdeskLocaleArticle(
    crispIdentifier,
    locale,
    articleId,
  );

  return fullArticle;
}

export function getFormattedArticleWithContent(article: CrispArticle, content: string): Article {
  return {
    id: article.article_id,
    title: article.title,
    order: article.order,
    url: article.url,
    createdAt: article.created_at,
    updatedAt: article.updated_at,
    content,
  };
}
