import Footer, { type FooterProps } from '@codegouvfr/react-dsfr/Footer';
import { FOOTER_BRAND_TOP } from '@/app/constants/footer-brand-top';
import styles from './styles.module.scss';
import cnosfLogo from '../../../../public/images/footer/cnosf-logo.svg';
import franceParalympiqueLogo from '../../../../public/images/footer/france-paralympique.svg';
import menjLogo from '../../../../public/images/footer/menj-logo.svg';
import ministereSociauxDinumLogo from '../../../../public/images/footer/ministere-sociaux-dinum-logo.svg';
import passSportLogo from '../../../../public/images/footer/pass-sport-logo.svg';

export default function PassSportFooter() {
  const partnersLogos: FooterProps.PartnersLogos = {
    main: {
      linkProps: { title: `Ministere de l'education nationale et de la jeune, liberté, égalité, fraternité`, href: 'https://www.education.gouv.fr/' },
      // non-transparent logo
      imgUrl: menjLogo.src,
      alt: `Ministere de l'education nationale et de la jeunesse, liberté, égalité, fraternité`,
    },
    sub: [
      {
        linkProps: { title: 'Comité National Olympique et Sportif Français', href: 'https://cnosf.franceolympique.com/' },
        imgUrl: cnosfLogo.src,
        alt: 'Comité National Olympique et Sportif Français',
      },
      {
        linkProps: { title: 'France paralympique', href: 'https://france-paralympique.fr/' },
        imgUrl: franceParalympiqueLogo.src,
        alt: 'France paralympique',
      },
      {
        linkProps: { title: 'Ministères sociaux - Secrétariat général Direction du numérique', href: 'https://www.numerique.gouv.fr/dinum/' },
        // non-transparent logo
        imgUrl: ministereSociauxDinumLogo.src,
        alt: 'Ministères sociaux - Secrétariat général Direction du numérique',
      },
    ]
  };

  const homeLinkProps: NonNullable<FooterProps['homeLinkProps']> = { title: `Pass'Sport accueil`, href: '/v2/accueil' }
  const operatorLogo: NonNullable<FooterProps['operatorLogo']> = {
    orientation: 'horizontal',
    imgUrl: passSportLogo.src,
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
