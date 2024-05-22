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

export default function PassSportFooter() {
  const isProVersion = useIsProVersion();

  const partnersLogos: FooterProps.PartnersLogos = {
    main: {
      linkProps: {
        title: `Ministere de l'education nationale et de la jeune, liberté, égalité, fraternité`,
        href: 'https://www.education.gouv.fr/',
      },
      // non-transparent logo
      imgUrl: menjLogo.src,
      alt: `Ministere de l'education nationale et de la jeunesse, liberté, égalité, fraternité`,
    },
    sub: [
      {
        linkProps: { title: 'Decathlon', href: 'https://www.decathlon.fr/' },
        imgUrl: decathlonLogo.src,
        alt: 'Decathlon',
      },
      {
        linkProps: {
          title: 'Le Compte Asso',
          href: 'https://lecompteasso.associations.gouv.fr/',
        },
        imgUrl: lcaLogo.src,
        alt: 'Le Compte Asso',
      },
      {
        linkProps: {
          title: 'DINUM - La direction interministérielle du numérique',
          href: 'https://www.numerique.gouv.fr/dinum/',
        },
        imgUrl: dinumLogo.src,
        alt: 'DINUM - La direction interministérielle du numérique',
      },
      {
        linkProps: { title: 'France Paralympique', href: 'https://france-paralympique.fr/' },
        imgUrl: paralympiqueLogo.src,
        alt: 'France Paralympique',
      },
      {
        linkProps: { title: 'Crous', href: 'https://www.lescrous.fr/' },
        imgUrl: crousLogo.src,
        alt: 'CROUS',
      },
      {
        linkProps: {
          title: 'Comité National Olympique et Sportif Français',
          href: 'https://cnosf.franceolympique.com/',
        },
        imgUrl: cnosfLogo.src,
        alt: 'Comité National Olympique et Sportif Français',
      },

      {
        linkProps: {
          title: 'MSA - La sécurité sociale agricole',
          href: 'https://www.msa.fr/lfp/accueil',
        },
        imgUrl: msaLogo.src,
        alt: 'MSA - La sécurité sociale agricole',
      },
      {
        linkProps: { title: 'Cosmos Sports', href: 'https://www.cosmos-sports.fr/' },
        imgUrl: logoCosmos.src,
        alt: 'Cosmos sports',
      },
      {
        linkProps: {
          title: 'Hello asso',
          href: 'https://www.helloasso.com/',
        },
        imgUrl: helloAssoLogo.src,
        alt: 'Hello asso',
      },
      {
        linkProps: {
          title: 'Caisse nationale allocations familiales',
          href: 'https://www.caf.fr/',
        },
        imgUrl: cnafLogo.src,
        alt: 'Caisse nationale allocations familiales',
      },
      {
        linkProps: {
          title: 'Fédération Nationale des Entreprises des Activités Physiques de Loisirs',
          href: 'https://www.active-fneapl.fr/',
        },
        imgUrl: fneaplLogo.src,
        alt: 'Fédération Nationale des Entreprises des Activités Physiques de Loisirs',
      },
      {
        linkProps: {
          title: 'Union Sport & Cycle',
          href: 'https://www.active-fneapl.fr/',
        },
        imgUrl: unionSportCycleLogo.src,
        alt: 'Union Sport & Cycle',
      },
    ],
  };

  const homeLinkProps: NonNullable<FooterProps['homeLinkProps']> = {
    title: `pass Sport accueil`,
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
      },
    },
    {
      text: 'Données personnelles',
      linkProps: {
        href: '/v2/politique-de-confidentialite',
      },
    },
    {
      text: 'Gestion des cookies',
      linkProps: {
        href: '#',
      },
    },
    {
      text: 'Plan du site',
      linkProps: {
        href: '#',
      },
    },
  ];

  const linkList: FooterProps.LinkList.List = [
    {
      categoryName: 'Liens utiles',
      links: [
        {
          text: 'Accueil',
          linkProps: { href: isProVersion ? '/v2/pro/accueil' : '/v2/accueil' },
        },
        {
          text: 'Tout savoir sur le pass Sport',
          linkProps: {
            href: isProVersion
              ? '/v2/pro/tout-savoir-sur-le-pass-sport'
              : '/v2/tout-savoir-sur-le-pass-sport',
          },
        },
        {
          text: 'Trouver une structure partenaire',
          linkProps: {
            href: isProVersion ? '/v2/pro/trouver-un-club' : '/v2/trouver-un-club',
          },
        },
        {
          text: 'Une question ?',
          linkProps: { href: isProVersion ? '/v2/pro/une-question' : '/v2/une-question' },
        },
      ],
    },
    {
      categoryName: 'Liens externes',
      links: [
        {
          text: 'Espace club',
          linkProps: { href: '#', target: '_blank' },
        },
        {
          text: 'Tableau de bord',
          linkProps: {
            href: 'https://lecompteasso.associations.gouv.fr/carto/dashboard',
            target: '_blank',
          },
        },
      ],
    },
  ];

  return (
    <Footer
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
    />
  );
}
