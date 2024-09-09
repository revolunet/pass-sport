'use client';

import { Article, CategoryWithArticles } from '../../../../../../types/Faq';
import styles from './styles.module.scss';
import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { push } from '@socialgouv/matomo-next';
import rootStyles from '@/app/utilities.module.scss';

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

  const onArticleSelect = useCallback(
    (article: Article) => {
      if (selectedArticle === null) {
        setSelectedArticle(article);
        replace(`${pathname}?articleId=${article.id}#${article.id}`);
        push(['trackEvent', 'View FAQ', `Clicked`, `${article.title} (${article.id})`]);
      }
    },
    [pathname, replace, selectedArticle],
  );

  const onCategorySelect = useCallback(
    (category: CategoryWithArticles) => {
      setSelectedCategory(category);
      setSelectedArticle(null);
      replace(`${pathname}`);
      push(['trackEvent', 'View FAQ', `Clicked`, `${category.name} (${category.id})`]);
    },
    [pathname, replace],
  );

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

          <ul className={cn('fr-summary__list', 'fr-p-0', 'fr-pl-md-3w')}>
            {categoriesWithArticles.map((category, index) => {
              return (
                <li
                  key={category.id}
                  className={cn('cursor--pointer', {
                    [styles['faq__category--selected']]: selectedCategory?.id === category.id,
                  })}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      onCategorySelect(category);
                    }}
                    onKeyDown={(event) => {
                      // Check if the key is Enter or Space
                      if (event.key === 'Enter' || event.key === ' ') {
                        onCategorySelect(category);
                      }
                    }}
                  >
                    {/* We need to do it this way otherwise the voice over is reading the numbering (if we use the css property list-style-type) */}
                    <span aria-hidden="true" className="fr-text--bold">
                      {index + 1}.{' '}
                    </span>
                    <span>{category.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className={cn('fr-ml-0', styles['faq__questions'], rootStyles['list--lean'])}>
        {selectedCategory?.articles.map((article) => {
          if (selectedArticle !== null && article.id !== selectedArticle.id) return null;

          return (
            <li key={article.id} id={article.id} className={cn('fr-pt-3w', 'cursor--pointer')}>
              <div
                className="fr-callout fr-mb-0"
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  // Check if the key is Enter or Space
                  if (event.key === 'Enter' || event.key === ' ') {
                    onArticleSelect(article);
                  }
                }}
                onClick={() => {
                  onArticleSelect(article);
                }}
              >
                <span className="display--block fr-callout__title fr-h6">{article.title}</span>
                {selectedArticle !== null && (
                  <>
                    <div className={cn('fr-callout__text', styles['faq__callout-text'])}>
                      <Markdown remarkPlugins={[remarkBreaks]} className={styles['faq__markdown']}>
                        {article.content}
                      </Markdown>
                    </div>

                    <button
                      aria-label="Retour à la foire aux questions"
                      className="fr-btn fr-btn--secondary fr-icon-arrow-left-line fr-btn--icon-left"
                      onClick={(e) => {
                        // Stop propagation to prevent clicking
                        // on the article itself thus setting the selectedArticle again instead of setting it to null
                        e.stopPropagation();
                        setSelectedArticle(null);
                        replace(`${pathname}#header`);
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
            </li>
          );
        })}
      </ul>
    </section>
  );
}
