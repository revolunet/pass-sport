'use client';

import Footer, { type FooterProps } from '@codegouvfr/react-dsfr/Footer';
import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import styles from './styles.module.scss';

import { useIsProVersion } from '@/app/hooks/use-is-pro-version';
import lcaLogo from '@/images/footer/logo-lca.png';
import menjLogo from '@/images/footer/menj-logo.svg';
import passSportLogo from '@/images/pass-sport-logo.svg';
import decathlonLogo from '@/images/footer/decathlon.svg';
import logoCosmos from '@/images/footer/logo-cosmos.svg';
import paralympiqueLogo from '@/images/footer/france-paralympique.svg';
import crousLogo from '@/images/footer/crous-logo.png';
import cnosfLogo from '@/images/footer/cnosf-logo.svg';
import msaLogo from '@/images/footer/msa-logo.svg';
import dinumLogo from '@/images/footer/dinum-logo.png';
import helloAssoLogo from '@/images/footer/hello-asso-logo.svg';
import cnafLogo from '@/images/footer/cnaf-logo.png';
import fneaplLogo from '@/images/footer/fneapl-logo.png';
import unionSportCycleLogo from '@/images/footer/union-sport-cycle-logo.png';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';

export default function PassSportFooter() {
  const isProVersion = useIsProVersion();

  const partnersLogos: FooterProps.PartnersLogos = {
    main: {
      linkProps: {
        title: `Ouvrir une nouvelle fenêtre vers le Ministere de l'education nationale et de la jeune, liberté, égalité, fraternité`,
        href: 'https://www.education.gouv.fr/',
      },
      // non-transparent logo
      imgUrl: menjLogo.src,
      alt: `Ministere de l'education nationale et de la jeunesse, liberté, égalité, fraternité`,
    },
    sub: [
      {
        linkProps: {
          title:
            'Ouvrir une nouvelle fenêtre vers le Comité National Olympique et Sportif Français',
          href: 'https://cnosf.franceolympique.com/',
        },
        imgUrl: cnosfLogo.src,
        alt: 'Comité National Olympique et Sportif Français',
      },
      {
        linkProps: {
          title: 'Ouvrir une nouvelle fenêtre vers le MSA - La sécurité sociale agricole',
          href: 'https://www.msa.fr/lfp/accueil',
        },
        imgUrl: msaLogo.src,
        alt: 'MSA - La sécurité sociale agricole',
      },
      {
        linkProps: {
          title:
            'Ouvrir une nouvelle fenêtre vers la DINUM - La direction interministérielle du numérique',
          href: 'https://www.numerique.gouv.fr/dinum/',
        },
        imgUrl: dinumLogo.src,
        alt: 'DINUM - La direction interministérielle du numérique',
      },
      {
        linkProps: {
          title: 'Ouvrir une nouvelle fenêtre vers France Paralympique',
          href: 'https://france-paralympique.fr/',
        },
        imgUrl: paralympiqueLogo.src,
        alt: 'France Paralympique',
      },
      {
        linkProps: {
          title: 'Ouvrir une nouvelle fenêtre vers le CROUS',
          href: 'https://www.lescrous.fr/',
        },
        imgUrl: crousLogo.src,
        alt: 'CROUS',
      },
      {
        linkProps: {
          title: 'Ouvrir une nouvelle fenêtre vers Decathlon',
          href: 'https://www.decathlon.fr/',
        },
        imgUrl: decathlonLogo.src,
        alt: 'Decathlon',
      },
      {
        linkProps: {
          title: 'Ouvrir une nouvelle fenêtre vers Le Compte Asso',
          href: 'https://lecompteasso.associations.gouv.fr/',
        },
        imgUrl: lcaLogo.src,
        alt: 'Le Compte Asso',
      },
      {
        linkProps: {
          title: 'Ouvrir une nouvelle fenêtre vers Union Sport & Cycle',
          href: 'https://www.unionsportcycle.com/accueil',
        },
        imgUrl: unionSportCycleLogo.src,
        alt: 'Union Sport & Cycle',
      },
      {
        linkProps: {
          title: 'Ouvrir une nouvelle fenêtre vers Hello asso',
          href: 'https://www.helloasso.com/secteurs/clubs-sportifs',
        },
        imgUrl: helloAssoLogo.src,
        alt: 'Hello asso',
      },
      {
        linkProps: {
          title: 'Ouvrir une nouvelle fenêtre vers la Caisse nationale allocations familiales',
          href: 'https://www.caf.fr/',
        },
        imgUrl: cnafLogo.src,
        alt: 'Caisse nationale allocations familiales',
      },
      {
        linkProps: {
          title:
            'Ouvrir une nouvelle fenêtre vers la Fédération Nationale des Entreprises des Activités Physiques de Loisirs',
          href: 'https://www.active-fneapl.fr/',
        },
        imgUrl: fneaplLogo.src,
        alt: 'Fédération Nationale des Entreprises des Activités Physiques de Loisirs',
      },
      {
        linkProps: {
          title: 'Ouvrir une nouvelle fenêtre vers Cosmos Sports',
          href: 'https://www.cosmos-sports.fr/',
        },
        imgUrl: logoCosmos.src,
        alt: 'Cosmos sports',
      },
    ],
  };

  const homeLinkProps: NonNullable<FooterProps['homeLinkProps']> = {
    title: `Retourner à l'accueil du site pass Sport`,
    href: '/v2/accueil',
  };

  const operatorLogo: NonNullable<FooterProps['operatorLogo']> = {
    orientation: 'horizontal',
    imgUrl: passSportLogo.src,
    alt: `pass Sport`,
  };

  const bottomItems: FooterProps.BottomItem[] = [
    {
      text: 'Mentions légales',
      linkProps: {
        href: '/v2/mentions-legales',
        title: 'Mentions légales',
      },
    },
    {
      text: 'Données personnelles',
      linkProps: {
        href: '/v2/politique-de-confidentialite',
        title: 'Données personnelles',
      },
    },
    {
      text: 'Plan du site',
      linkProps: {
        href: isProVersion ? '/v2/pro/plan-du-site' : '/v2/plan-du-site',
        title: 'Plan du site',
      },
    },
    {
      text: 'Règlement du jeu-concours numéro 1 - pass Sport',
      linkProps: {
        href: '/v2/reglement-du-jeu-concours-numero-1-pass-sport',
        title: 'Règlement du jeu concours numéro 1 pass Sport',
      },
    },
    {
      text: 'Règlement du jeu-concours numéro 2 - pass Sport',
      linkProps: {
        href: '/v2/reglement-du-jeu-concours-numero-2-pass-sport',
        title: 'Règlement du jeu concours numéro 2 pass Sport',
      },
    },
  ];

  const linkList: FooterProps.LinkList.List = [
    {
      categoryName: 'Liens utiles',
      links: [
        {
          text: 'Accueil',
          linkProps: {
            href: isProVersion ? '/v2/pro/accueil' : '/v2/accueil',
            title: 'Liens utiles',
          },
        },
        {
          text: 'Tout savoir sur le pass Sport',
          linkProps: {
            href: isProVersion
              ? '/v2/pro/tout-savoir-sur-le-pass-sport'
              : '/v2/tout-savoir-sur-le-pass-sport',
            title: 'Tout savoir sur le pass Sport',
          },
        },
        {
          text: isProVersion ? 'Carte des structures partenaires' : 'Trouver un club partenaire',
          linkProps: {
            href: isProVersion ? '/v2/pro/trouver-un-club' : '/v2/trouver-un-club',
            title: isProVersion ? 'Carte des structures partenaires' : 'Trouver un club partenaire',
          },
        },
        {
          text: 'Une question ?',
          linkProps: {
            href: isProVersion ? '/v2/pro/une-question' : '/v2/une-question',
            title: 'Foire aux questions',
          },
        },
      ],
    },
    {
      categoryName: 'Liens externes',
      links: [
        {
          text: isProVersion ? 'Je suis un particulier' : 'Je suis une structure partenaire',
          linkProps: { href: isProVersion ? '/v2/accueil' : '/v2/pro/accueil' },
        },
        ...((isProVersion
          ? [
              {
                text: 'Ressources',
                linkProps: {
                  href: '/v2/pro/ressources',
                  title: 'Ressources',
                },
              },
            ]
          : []) as [FooterProps.LinkList.Link] | []),
        {
          text: 'Tableau de bord',
          linkProps: {
            href: 'https://lecompteasso.associations.gouv.fr/carto/dashboard',
            target: '_blank',
            title: 'Ouvrir une nouvelle fenêtre vers le Tableau de bord',
          },
        },
      ],
    },
  ];

  const domains = ['legifrance.gouv.fr', 'info.gouv.fr', 'service-public.fr', 'data.gouv.fr'];

  return (
    <Footer
      id={SKIP_LINKS_ID.footer}
      classes={{
        logo: styles['partners-logo'],
        root: styles.root,
        partnersSub: styles['partners-sub'],
      }}
      homeLinkProps={homeLinkProps}
      operatorLogo={operatorLogo}
      partnersLogos={partnersLogos}
      bottomItems={bottomItems}
      linkList={linkList}
      brandTop={FOOTER_BRAND_TOP}
      accessibility="non compliant"
      domains={domains}
    />
  );
}
