'use client';

import Footer, { type FooterProps } from '@codegouvfr/react-dsfr/Footer';
import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import styles from './styles.module.scss';

import { useIsProVersion } from '@/app/hooks/use-is-pro-version';
import lcaLogo from '@/images/footer/logo-lca.png';
import menjLogo from '@/images/footer/menj-logo.svg';
import passSportLogo from '@/images/pass-sport-logo.svg';
import decathlonLogo from '@/images/footer/decathlon.svg';
import intersportLogo from '@/images/footer/intersport-logo.svg';
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
import { useRef } from 'react';
import { useUpdateHeadings } from '@/app/hooks/accessibility/use-update-headings';
import { FOOTER_CLASSES } from '@/app/constants/dsfr-classes';

export default function PassSportFooter() {
  const isProVersion = useIsProVersion();
  const footerRef = useRef<HTMLDivElement>(null);

  useUpdateHeadings({
    parentRef: footerRef,
    level: 1,
    headingSelectors: [FOOTER_CLASSES.partnersTitle],
  });

  const partnersLogos: FooterProps.PartnersLogos = {
    main: {
      // @ts-ignore
      linkProps: {
        'aria-label':
          "Ouvrir une nouvelle fenêtre vers le Ministere de l'education nationale et de la jeunesse, liberté, égalité, fraternité",
        href: 'https://www.education.gouv.fr/',
      },
      // non-transparent logo
      imgUrl: menjLogo.src,
      alt: `Ministere de l'education nationale et de la jeunesse, liberté, égalité, fraternité`,
    },
    sub: [
      {
        // @ts-ignore
        linkProps: {
          'aria-label':
            'Ouvrir une nouvelle fenêtre vers le Comité National Olympique et Sportif Français',
          href: 'https://cnosf.franceolympique.com/',
        },
        imgUrl: cnosfLogo.src,
        alt: 'Comité National Olympique et Sportif Français',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label': 'Ouvrir une nouvelle fenêtre vers le MSA',
          href: 'https://www.msa.fr/lfp/accueil',
        },
        imgUrl: msaLogo.src,
        alt: 'MSA - La sécurité sociale agricole',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label':
            'Ouvrir une nouvelle fenêtre vers la DINUM - La direction interministérielle du numérique',
          href: 'https://www.numerique.gouv.fr/dinum/',
        },
        imgUrl: dinumLogo.src,
        alt: 'DINUM - La direction interministérielle du numérique',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label': 'Ouvrir une nouvelle fenêtre vers France Paralympique',
          href: 'https://france-paralympique.fr/',
        },
        imgUrl: paralympiqueLogo.src,
        alt: 'France Paralympique',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label': 'Ouvrir une nouvelle fenêtre vers le CROUS',
          href: 'https://www.lescrous.fr/',
        },
        imgUrl: crousLogo.src,
        alt: 'CROUS',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label': 'Ouvrir une nouvelle fenêtre vers Decathlon',
          href: 'https://www.decathlon.fr/',
        },
        imgUrl: decathlonLogo.src,
        alt: 'Decathlon',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label': 'Ouvrir une nouvelle fenêtre vers Intersport',
          href: 'https://www.intersport.fr/',
        },
        imgUrl: intersportLogo.src,
        alt: 'Intersport',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label': 'Ouvrir une nouvelle fenêtre vers Le Compte Asso',
          href: 'https://lecompteasso.associations.gouv.fr/',
        },
        imgUrl: lcaLogo.src,
        alt: 'Le Compte Asso',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label': 'Ouvrir une nouvelle fenêtre vers Union Sport & Cycle',
          href: 'https://www.unionsportcycle.com/accueil',
        },
        imgUrl: unionSportCycleLogo.src,
        alt: 'Union Sport & Cycle',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label': 'Ouvrir une nouvelle fenêtre vers Hello asso',
          href: 'https://www.helloasso.com/secteurs/clubs-sportifs',
        },
        imgUrl: helloAssoLogo.src,
        alt: 'Hello asso',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label':
            'Ouvrir une nouvelle fenêtre vers la Caisse nationale allocations familiales',
          href: 'https://www.caf.fr/',
        },
        imgUrl: cnafLogo.src,
        alt: 'Caisse nationale allocations familiales',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label':
            'Ouvrir une nouvelle fenêtre vers la Fédération Nationale des Entreprises des Activités Physiques de Loisirs',
          href: 'https://www.active-fneapl.fr/',
        },
        imgUrl: fneaplLogo.src,
        alt: 'Fédération Nationale des Entreprises des Activités Physiques de Loisirs',
      },
      {
        // @ts-ignore
        linkProps: {
          'aria-label': 'Ouvrir une nouvelle fenêtre vers Cosmos Sports',
          href: 'https://www.cosmos-sports.fr/',
        },
        imgUrl: logoCosmos.src,
        alt: 'Cosmos sports',
      },
    ],
  };

  // @ts-ignore
  const homeLinkProps: NonNullable<FooterProps['homeLinkProps']> = {
    'aria-label': `Retourner à l'accueil du site pass Sport`,
    href: '/v2/accueil',
  };

  const operatorLogo: NonNullable<FooterProps['operatorLogo']> = {
    orientation: 'horizontal',
    imgUrl: passSportLogo.src,
    alt: ``,
  };

  const bottomItems: FooterProps.BottomItem[] = [
    {
      text: 'Mentions légales',
      linkProps: {
        href: '/v2/mentions-legales',
        'aria-label': 'Visiter la page des mentions légales',
      },
    },
    {
      text: 'Données personnelles',
      linkProps: {
        href: '/v2/politique-de-confidentialite',
        'aria-label': 'Visiter la page des données personnelles',
      },
    },
    {
      text: 'Plan du site',
      linkProps: {
        href: isProVersion ? '/v2/pro/plan-du-site' : '/v2/plan-du-site',
        'aria-label': 'Visiter la page du plan du site',
      },
    },
    {
      text: 'Règlement du jeu-concours numéro 1 - pass Sport',
      linkProps: {
        href: '/v2/reglement-du-jeu-concours-numero-1-pass-sport',
        'aria-label': 'Visiter la page du règlement du jeu concours numéro 1 pass Sport',
      },
    },
    {
      text: 'Règlement du jeu-concours numéro 2 - pass Sport',
      linkProps: {
        href: '/v2/reglement-du-jeu-concours-numero-2-pass-sport',
        'aria-label': 'Visiter la page du règlement du jeu concours numéro 2 pass Sport',
      },
    },
  ];

  const linkList: FooterProps.LinkList.List = [
    {
      links: [
        {
          text: 'Accueil',
          linkProps: {
            href: isProVersion ? '/v2/pro/accueil' : '/v2/accueil',
            'aria-label': "Retourner sur la page d'accueil",
          },
        },
        {
          text: 'Tout savoir sur le pass Sport',
          linkProps: {
            href: isProVersion
              ? '/v2/pro/tout-savoir-sur-le-pass-sport'
              : '/v2/tout-savoir-sur-le-pass-sport',
            'aria-label':
              'Visiter la page pour connaître toutes les informations sur le pass Sport',
          },
        },
        {
          text: isProVersion ? 'Carte des structures partenaires' : 'Trouver un club partenaire',
          linkProps: {
            href: isProVersion ? '/v2/pro/trouver-un-club' : '/v2/trouver-un-club',
            'aria-label': isProVersion
              ? 'Visiter la page pour trouver un club'
              : 'Visiter la page sur la carte des structures partenaires',
          },
        },
        {
          text: 'Une question ?',
          linkProps: {
            href: isProVersion ? '/v2/pro/une-question' : '/v2/une-question',
            'aria-label': 'Visiter la page de foire aux questions',
          },
        },
      ],
    },
    {
      links: [
        {
          text: isProVersion ? 'Je suis un particulier' : 'Je suis une structure partenaire',
          linkProps: {
            href: isProVersion ? '/v2/accueil' : '/v2/pro/accueil',
            'aria-label': isProVersion
              ? 'Visiter le site dédié aux structures partenaires'
              : `Visiter le site dédié aux particuliers`,
          },
        },
        ...((isProVersion
          ? [
              {
                text: 'Ressources',
                linkProps: {
                  href: '/v2/pro/ressources',
                  'aria-label': 'Visiter la page contenant les ressources',
                },
              },
            ]
          : []) as [FooterProps.LinkList.Link] | []),
        {
          text: 'Tableau de bord',
          linkProps: {
            href: 'https://lecompteasso.associations.gouv.fr/carto/dashboard',
            target: '_blank',
            'aria-label': 'Ouvrir une nouvelle fenêtre vers le Tableau de bord',
          },
        },
      ],
    },
  ];

  const domains = ['legifrance.gouv.fr', 'info.gouv.fr', 'service-public.fr', 'data.gouv.fr'];

  return (
    <Footer
      ref={footerRef}
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
