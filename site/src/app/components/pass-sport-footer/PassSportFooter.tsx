import Footer, { type FooterProps } from '@codegouvfr/react-dsfr/Footer';
import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import styles from './styles.module.scss';
import lcaLogo from '../../../../public/images/footer/logo-lca.png';
import menjLogo from '../../../../public/images/footer/menj-logo.svg';
import passSportLogo from '../../../../public/images/pass-sport-logo.svg';
import decathlonLogo from '../../../../public/images/footer/decathlon.svg';
import logoCosmos from '../../../../public/images/footer/logo-cosmos.svg';

export default function PassSportFooter() {
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
        linkProps: { title: 'Cosmos Sports', href: 'https://www.cosmos-sports.fr/' },
        imgUrl: logoCosmos.src,
        alt: 'Cosmos sports',
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
        href: '#',
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
          linkProps: { href: '#' },
        },
        {
          text: `Qu'est-ce que le pass Sport`,
          linkProps: { href: '/v2/tout-savoir-sur-le-pass-sport' },
        },
        {
          text: 'Trouver un club partenaire',
          linkProps: { href: '/v2/trouver-un-club' },
        },
        {
          text: 'Une question ?',
          linkProps: { href: '/v2/une-question' },
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
      accessibility={'fully compliant'}
    />
  );
}
