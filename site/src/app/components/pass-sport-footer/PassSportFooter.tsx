import Footer, { type FooterProps } from '@codegouvfr/react-dsfr/Footer';
import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import styles from './styles.module.scss';
import defaultLogo from '../../../../public/default-logo.svg';

export default function PassSportFooter() {
  const partnersLogos: FooterProps.PartnersLogos = {
    // todo: update main with missing image, ask perrine for transparent logo
    main: {
      linkProps: { title: '', href: '#' },
      imgUrl: defaultLogo.src,
      alt: `Ministere de l'education nationale et de la jeune, liberté, égalité, fraternité`,
    },
    sub: [{
      linkProps: { title: '', href: '#' },
      imgUrl: '/images/footer/france-paralympique.png',
      alt: 'France paralympique',
    },
      // todo: add other sub partners logos, ask perrine for transparent logos
    ]
  };

  const homeLinkProps: NonNullable<FooterProps['homeLinkProps']> = { title: 'Home', href: '/v2/accueil' }
  const operatorLogo: NonNullable<FooterProps['operatorLogo']> = {
    orientation: 'horizontal',
    imgUrl: '/images/footer/pass-sport-logo.png',
    alt: `Pass'Sport`,
  };

  const bottomItems: FooterProps.BottomItem[] = [
    {
      text: 'Mentions légales',
      linkProps: {
        href: '#'
      }
    },
    {
      text: 'Données personnelles',
      linkProps: {
        href: '#'
      }
    },
    {
      text: 'Gestion des cookies',
      linkProps: {
        href: '#'
      }
    },
    {
      text: 'Plan du site',
      linkProps: {
        href: '#'
      }
    },
  ];

  const linkList: FooterProps.LinkList.List = [
    {
      categoryName: 'Liens utiles',
      links: [
        {
          text: 'Accueil',
          linkProps: { href: '#', target: '_blank' },
        },
        {
          text: `Qu'est-ce que le Pass'Sport`,
          linkProps: { href: '#', target: '_blank' }
        },
        {
          text: 'Trouver un club',
          linkProps: { href: '/v2/trouver-un-club', target: '_blank' }
        },
        {
          text: 'Une question ?',
          linkProps: { href: '/v2/une-question', target: '_blank' }
        },
        {
          text: 'Espace presse',
          linkProps: { href: '#', target: '_blank' }
        },
      ]
    },
    {
      categoryName: 'Liens externes',
      links: [
        {
          text: 'Espace club',
          linkProps: { href: '#', target: '_blank' }
        },
        {
          text: 'Tableau de bord',
          linkProps: { href: '#', target: '_blank' }
        },
      ]
    },
  ];

  return (
    <Footer
      classes={{
        logo: styles['partners-logo'],
        root: styles.root
      }}
      homeLinkProps={homeLinkProps}
      operatorLogo={operatorLogo}
      partnersLogos={partnersLogos}
      bottomItems={bottomItems}
      linkList={linkList}
      brandTop={FOOTER_BRAND_TOP}
      accessibility={'fully compliant'}
    >
    </Footer>
  );
}
