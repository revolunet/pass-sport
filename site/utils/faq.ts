import Crisp from 'crisp-api';
import { CrispArticle, CrispFullArticle } from '../types/Crisp';
import { Article, CategoryWithArticles } from '../types/Faq';
import NodeCache from 'node-cache';

type Locale = 'fr' | 'en';
const LOCALE = 'fr';

const CACHE_DURATION = 28_800; // 8 hours in seconds
const cache = new NodeCache({ checkperiod: CACHE_DURATION, deleteOnExpire: true });
export enum CacheKey {
  ARTICLES = 'ARTICLES',
  FULL_ARTICLE = 'FULL-ARTICLE',
}

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
  const fullArticlePromises = articles
    .filter((article) => article.category?.category_id)
    .map((article, index) =>
      getCrispFullArticle({
        crispClient,
        articleId: article.article_id,
        crispIdentifier,
        locale: LOCALE,
      })
        .then((fullArticle) => ({
          article,
          fullArticle,
        }))
        .catch((err) => {
          console.error(`Error occured while fetching article id: ${article.article_id}`);

          return {
            article: null,
            fullArticle: null,
          };
        }),
    );

  const results = await Promise.all(fullArticlePromises);

  results
    .filter(({ article, fullArticle }) => article !== null && fullArticle !== null)
    .forEach(({ article, fullArticle }) => {
      // Type narrowing despite filter above
      if (!article || !fullArticle || !article.category) return;

      // category cannot be null with the code above that does the filtering
      const categoryId = article.category.category_id;
      const formattedArticle = getFormattedArticleWithContent(article, fullArticle.content);

      const category = categories.get(categoryId);

      if (category) {
        category.articles.push(formattedArticle);
      } else {
        categories.set(categoryId, {
          id: categoryId,
          // category cannot be null with the code above that does the filtering
          name: article.category.name,
          articles: [formattedArticle],
        });
      }
    });

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
  try {
    let articles: CrispArticle[] | undefined = cache.get(CacheKey.ARTICLES);

    if (articles === undefined) {
      articles = (await crispClient.website.listHelpdeskLocaleArticles(
        crispIdentifier,
        locale,
      )) as CrispArticle[];

      cache.set(CacheKey.ARTICLES, articles);
    }

    return articles;
  } catch (err) {
    console.error('Error occured while trying to get list of articles', err);

    return [];
  }
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
  const cacheKey = `${CacheKey.FULL_ARTICLE}-${articleId}`;
  let fullArticle: CrispFullArticle | undefined = cache.get(cacheKey);

  if (fullArticle === undefined) {
    fullArticle = await crispClient.website.resolveHelpdeskLocaleArticle(
      crispIdentifier,
      locale,
      articleId,
    );

    cache.set(cacheKey, fullArticle);
  }

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
