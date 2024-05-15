import React from 'react';
import styles from './styles.module.scss';

type NavigationItem = {
  link: string;
  text: string | JSX.Element;
};

export const navigationItem: NavigationItem[] = [
  {
    link: '/v2/accueil',
    text: (
      <>
        <span className="fr-pr-1w ri-home-line" aria-hidden="true"></span>
        Accueil
      </>
    ),
  },
  {
    link: '/v2/tout-savoir-sur-le-pass-sport',
    text: (
      <div className={styles['menu-item-spacer']}>
        <span aria-hidden="true"></span>
        Tout savoir sur le pass Sport
      </div>
    ),
  },
  { link: '/v2/trouver-un-club', text: 'Trouver un club partenaire' },
  { link: '/v2/une-question', text: 'Une question ?' },
];
