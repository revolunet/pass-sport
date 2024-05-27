'use client';

import { Article, CategoryWithArticles } from '../../../../../../types/Faq';
import styles from './styles.module.scss';
import React, { useState } from 'react';
import cn from 'classnames';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { push } from '@socialgouv/matomo-next';

interface Props {
  categoriesWithArticles: CategoryWithArticles[];
}

export default function ContentSection({ categoriesWithArticles }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const articleId = searchParams?.get('articleId') || null;
  let articleFromUrl: Article | null = null;
  let defaultCategory = categoriesWithArticles[0];

  // If there is an article id in the url
  // we need to set the selectedArticle and the selectedCategory associated to it
  if (articleId) {
    categoriesWithArticles.some((category) => {
      let articleFound = category.articles.find((article) => article.id === articleId);

      if (articleFound) {
        articleFromUrl = articleFound;
        defaultCategory = category;

        // break out of loop if found
        return true;
      }

      return false;
    });
  }

  const [selectedCategory, setSelectedCategory] = useState<CategoryWithArticles>(defaultCategory);

  const [selectedArticle, setSelectedArticle] = useState<
    CategoryWithArticles['articles'][0] | null
  >(articleFromUrl);

  return (
    <section className={styles['faq']}>
      <div>
        <nav
          className={cn('fr-summary', 'fr-pt-0', styles['faq__summary'])}
          role="navigation"
          aria-labelledby="fr-summary-title"
        >
          {categoriesWithArticles.length > 0 && (
            <p className="fr-summary__title fr-p-0 fr-pl-md-1w" id="fr-summary-title">
              Categories
            </p>
          )}

          <ol
            className={cn('fr-summary__list', 'fr-p-0', 'fr-pl-md-3w', styles['faq__summary-list'])}
          >
            {categoriesWithArticles.map((category) => {
              return (
                <li
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedArticle(null);
                    replace(`${pathname}`);
                    push([
                      'trackEvent',
                      'View FAQ',
                      `Clicked`,
                      `${category.name} (${category.id})`,
                    ]);
                  }}
                  className={cn(styles['faq__category--pointer'], 'fr-pl-2w', {
                    [styles['faq__category--selected']]: selectedCategory?.id === category.id,
                  })}
                >
                  <span className="fr-summary__link">{category.name}</span>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      <div className={styles['faq__questions']}>
        {selectedCategory?.articles.map((article) => {
          if (selectedArticle !== null && article.id !== selectedArticle.id) return null;

          return (
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setSelectedArticle(article);
                replace(`${pathname}?articleId=${article.id}`);
                push(['trackEvent', 'View FAQ', `Clicked`, `${article.title} (${article.id})`]);
              }}
              key={article.id}
            >
              <div className="fr-callout" id={article.id}>
                <h3 className="fr-callout__title">{article.title}</h3>
                <div className={cn('fr-callout__text', styles['faq__callout-text'])}>
                  <Markdown remarkPlugins={[remarkBreaks]} className={styles['faq__markdown']}>
                    {selectedArticle !== null ? article.content : null}
                  </Markdown>
                </div>

                {selectedArticle !== null && (
                  <>
                    <button
                      className="fr-btn fr-btn--secondary fr-icon-arrow-left-line fr-btn--icon-left"
                      onClick={(e) => {
                        // Stop propagation to prevent clicking
                        // on the article itself thus setting the selectedArticle again instead of setting it to null
                        e.stopPropagation();
                        setSelectedArticle(null);
                        replace(`${pathname}`);
                      }}
                    >
                      Retour
                    </button>

                    <div
                      className={cn(styles['faq__feedback-date'], 'fr-text--sm')}
                      suppressHydrationWarning
                    >
                      Mis à jour le : {new Date(selectedArticle.updatedAt).toLocaleDateString()}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
