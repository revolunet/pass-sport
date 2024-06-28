import React from 'react';
import styles from './styles.module.scss';

type NavigationItem = {
  link: string;
  text: string | JSX.Element;
  isExternal?: boolean;
  title?: string;
  ariaLabel: string;
};

export const navigationItemStandard: NavigationItem[] = [
  {
    link: '/v2/accueil',
    ariaLabel: `Aller sur la page d'accueil`,
    text: (
      <>
        <span className="fr-pr-1w ri-home-line" aria-hidden="true"></span>
        Accueil
      </>
    ),
  },
  {
    link: '/v2/tout-savoir-sur-le-pass-sport',
    ariaLabel: 'Aller sur la page pour tout savoir sur le pass Sport',
    text: (
      <>
        <span className={styles['menu-item-spacer']}>
          <span aria-hidden="true"></span>
        </span>
        Tout savoir sur le pass Sport
      </>
    ),
  },
  {
    link: '/v2/trouver-un-club',
    text: 'Trouver un club partenaire',
    ariaLabel: 'Aller sur la page pour trouver un club',
  },
  {
    link: '/v2/une-question',
    text: 'Une question ?',
    ariaLabel: 'Aller sur la page des foires aux questions',
  },
  {
    link: 'https://lecompteasso.associations.gouv.fr/carto/dashboard',
    isExternal: true,
    title: `Ouverture d'une nouvelle fenêtre vers le tableau de bord de pass Sport`,
    ariaLabel: `Ouverture d'une nouvelle fenêtre vers le tableau de bord de pass Sport`,
    text: (
      <>
        <div className={styles['menu-item-spacer']}>
          <span aria-hidden="true"></span>
        </div>
        Tableau de bord
      </>
    ),
  },
];

export const navigationItemPro: NavigationItem[] = [
  {
    link: '/v2/pro/accueil',
    ariaLabel: `Aller sur la page d'accueil`,
    text: (
      <>
        <span className="fr-pr-1w ri-home-line" aria-hidden="true"></span>
        Accueil
      </>
    ),
  },
  {
    link: '/v2/pro/tout-savoir-sur-le-pass-sport',
    ariaLabel: 'Aller sur la page pour tout savoir sur le pass Sport',
    text: (
      <>
        <div className={styles['menu-item-spacer']}>
          <span aria-hidden="true"></span>
        </div>
        Tout savoir sur le pass Sport
      </>
    ),
  },
  {
    link: '/v2/pro/trouver-un-club',
    text: 'Carte des structures partenaires',
    ariaLabel: 'Aller sur la carte des structures partenaires',
  },
  {
    link: '/v2/pro/une-question',
    text: 'Une question ?',
    ariaLabel: 'Aller sur la page des foires aux questions',
  },
  {
    link: '/v2/pro/ressources',
    ariaLabel: `Aller sur la page dédiée aux ressources`,
    text: (
      <>
        <div className={styles['menu-item-spacer']}>
          <span aria-hidden="true"></span>
        </div>
        Ressources
      </>
    ),
  },
  {
    link: 'https://lecompteasso.associations.gouv.fr/carto/dashboard',
    isExternal: true,
    text: 'Tableau de bord',
    title: `Ouverture d'une nouvelle fenêtre vers le tableau de bord de pass Sport`,
    ariaLabel: `Ouverture d'une nouvelle fenêtre vers le tableau de bord de pass Sport`,
  },
];
