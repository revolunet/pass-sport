import Footer from '@codegouvfr/react-dsfr/Footer';
import defaultLogo from '../public/default-logo.svg';

const defaultImgConf = { href: '#', imgUrl: defaultLogo.src, alt: 'string' };

export default function PSFooter() {
  return (
    <Footer
      homeLinkProps={{ title: 'Home', href: '/v2/accueil' }}
      contentDescription="Retrouver toutes les informations liées au dispositif Pass Sport"
      partnersLogos={{
        main: defaultImgConf,
        sub: [defaultImgConf, defaultImgConf, defaultImgConf],
      }}
      brandTop={true}
      accessibility={'fully compliant'}
    ></Footer>
  );
}
