import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import PageHeader from '../../../../components/PageHeader/PageHeader';
import styles from './style.module.scss';
import EligibilityTestBanner from '@/components/eligibility-test-banner/EligibilityTestBanner';

export default function PolitiqueDeConfidentialite() {
  return (
    <div>
      <PageHeader
        title="Mentions légales"
        subtitle=""
        classes={{
          container: styles['page-header'],
        }}
      />
      <main className={styles.wrapper}>
        <section className="fr-mb-6w">
          <p className="fr-mb-2w">
            Le Portail pass Sport est un service du ministère des Sports et des Jeux Olympiques et
            Paralympiques, géré par la direction des sports. Ce service en ligne vise à permettre
            aux bénéficiaires du dispositif pass Sport de vérifier leur éligibilité et le cas
            échéant par la télé déclaration des informations nécessaires à obtenir le code
            alphanumérique individuel à présenter au club sportif lors de leur inscription. Ce
            service en ligne vise également à permettre à la direction des sports de délivrer toutes
            les informations et actualités relatives aux bénéficiaires leurs pass Sport.
          </p>

          <p className="fr-mb-2w">
            Les données renseignées par les bénéficiaires dans ce portail ne sont accessibles
            qu&apos;aux services de l&apos;Etat français chargés d&apos;instruire les demandes.
            L&apos;utilisation de ce service doit faciliter la délivrance du dispositif pass Sport.
          </p>

          <p className="fr-mb-2w">
            Les informations recueillies font l&apos;objet d&apos;un traitement informatique destiné
            à vérifier les conditions d&apos;obtention du pass Sport. Ces informations sont
            susceptibles d&apos;être communiquées aux services de l&apos;Etat et organismes définis
            aux articles 7 et 8 du décret modifié relatif au « pass Sport ».
          </p>

          <p className="fr-mb-2w">
            Sur le fondement de l&apos;article 6.1.e du Règlement (UE) 2016/679 du Parlement
            européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques
            à l&apos;égard du traitement des données à caractère personnel et à la libre circulation
            de ces données (règlement général sur la protection des données, ou RGPD) et en
            application de l&apos;article 32 de la loi du 6 janvier 1978 modifiée, les personnes
            bénéficient d&apos;un droit d&apos;accès et de rectification aux informations les
            concernant, sur simple demande à :
          </p>

          <p className="fr-mb-2w">
            Ministère des Sports et des Jeux Olympiques et Paralympiques - Sous-direction du
            pilotage et de l&apos;évolution des politiques publiques du sport - DS.1A
          </p>

          <p className="fr-mb-2w">
            95 avenue de France <br />
            75 650 Paris CEDEX 13 <br />
            Tél : 01 40 45 90 00 <br />
          </p>

          <p>Responsable de publication : Fabienne BOURDAIS, Directrice des sports</p>

          <p>
            Administrateur du portail : Jean-François HATTE - Sous-direction du pilotage et de
            l&apos;évolution des politiques publiques du sport - DS.1. Contact :
            passsport@sports.gouv.fr
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Accès au site</h4>

          <p>
            Les utilisateurs du site web sont tenus de respecter les dispositions de la loi du 6
            janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés, dont la
            violation est passible de sanctions pénales. Ils doivent notamment s&apos;abstenir,
            d&apos;une manière générale, de porter atteinte à la vie privée ou à la réputation des
            personnes.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Contenu du site</h4>

          <p className="fr-mb-2w">
            Le ministère des Sports et des Jeux Olympiques et Paralympiques met à disposition des
            utilisateurs de ce site web des informations et outils disponibles et vérifiés.
          </p>

          <p>
            Il s&apos;efforcera de corriger autant que faire se peut les erreurs ou omissions qui
            lui seront signalées par les utilisateurs (en contactant l&apos;administrateur du
            portail).
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Propriété</h4>

          <p>
            La structure générale, ainsi que les logiciels, textes, images animées ou fixes, sons,
            savoir-faire, dessins, graphismes et tous autres éléments composant ce site web sont de
            l&apos;utilisation exclusive du ministère chargé des sports. Les contenus ne sauraient
            être reproduits librement sans demande préalable et sans l&apos;indication de la source.
            Les demandes d&apos;autorisation de reproduction d&apos;un contenu doivent être
            adressées à la rédaction du site (en contactant l&apos;administrateur du portail). La
            demande devra préciser le contenu visé ainsi que le site sur lequel ce dernier figurera.
            En outre, les informations utilisées ne doivent l&apos;être qu&apos;à des fins
            associatives ou professionnelles, toute diffusion ou utilisation à des fins commerciales
            ou publicitaires étant exclues.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Données personnelles</h4>

          <p>
            Ce site ne collecte aucune autre donnée que des adresses IP destinées à un usage
            purement technique, nécessaire à la production de statistiques de consultations.
          </p>
        </section>
      </main>

      <EligibilityTestBanner />
      <SocialMediaPanel />
    </div>
  );
}
