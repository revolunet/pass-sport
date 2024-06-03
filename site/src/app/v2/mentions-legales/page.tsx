import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import PageHeader from '../../../../components/PageHeader/PageHeader';
import styles from './style.module.scss';
import EligibilityTestBanner from '@/components/eligibility-test-banner/EligibilityTestBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales - pass Sport',
};

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
            les informations et actualités relatives au pass Sport à leurs bénéficiaires.
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
            aux articles 6 et 7 du décret modifié relatif au « pass Sport ».
          </p>

          <p className="fr-mb-2w">
            Sur le fondement de l&apos;article 6-1 e) du Règlement (UE) 2016/679 du Parlement
            européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques
            à l&apos;égard du traitement des données à caractère personnel et à la libre circulation
            de ces données (règlement général sur la protection des données, ou RGPD) et en
            application de l&apos;article 32 de la loi du 6 janvier 1978 modifiée, les personnes
            bénéficient notamment d&apos;un droit d&apos;accès, d&apos;information, de limitation,
            d&apos;opposition et de rectification aux informations les concernant, sur simple
            demande à :
          </p>

          <p className="fr-mb-2w">
            Ministère des Sports et des Jeux Olympiques et Paralympiques - Sous-direction du
            pilotage et de l&apos;évolution des politiques publiques du sport - DS.1A
          </p>

          <p className="fr-mb-2w">
            95 avenue de France <br />
            75 650 Paris CEDEX 13 <br />
            France <br />
            Tél : 01 40 45 90 00 <br />
          </p>

          <p>Responsable de publication : Fabienne BOURDAIS, Directrice des sports</p>

          <p>
            Administrateur du portail : Jean-François HATTE - Sous-direction du pilotage et de
            l&apos;évolution des politiques publiques du sport - DS.1. Contact :
            passsport@sports.gouv.fr
            <br />
            <br />
          </p>

          <p>
            Hébergement : <br />
            Scalingo <br />
            13 rue Jacques Peirotes <br />
            67000 Strasbourg <br />
            France <br />
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Accès au site</h4>

          <p>
            L&apos;accès au site est libre et gratuit et ne nécessite pas la création d&apos;un
            compte. Les utilisateurs qui souhaitent bénéficier du pass Sports doivent renseigner des
            informations exactes et à jour.
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
      </main>

      <EligibilityTestBanner />
      <SocialMediaPanel />
    </div>
  );
}
