import Footer, { type FooterProps } from '@codegouvfr/react-dsfr/Footer';
import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import styles from './styles.module.scss';
import franceParalympiqueLogo from '../../../../public/images/footer/france-paralympique.svg';
import menjLogo from '../../../../public/images/footer/menj-logo.svg';
import passSportLogo from '../../../../public/images/pass-sport-logo.svg';
import decathlonLogo from '../../../../public/images/footer/decathlon.svg';
import helloAssoLogo from '../../../../public/images/footer/helloasso.svg';

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
        linkProps: { title: 'France paralympique', href: 'https://france-paralympique.fr/' },
        imgUrl: franceParalympiqueLogo.src,
        alt: 'France paralympique',
      },
      {
        linkProps: { title: 'Helloasso', href: 'https://www.helloasso.com/' },
        imgUrl: helloAssoLogo.src,
        alt: 'Helloasso',
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
        href: '#',
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
          text: 'Trouver un club',
          linkProps: { href: '/v2/trouver-un-club' },
        },
        {
          text: 'Une question ?',
          linkProps: { href: '/v2/une-question' },
        },
        {
          text: 'Espace presse',
          linkProps: { href: '#' },
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
          linkProps: { href: '#', target: '_blank' },
        },
      ],
    },
  ];

  return (
    <Footer
      classes={{
        logo: styles['partners-logo'],
        root: styles.root,
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
