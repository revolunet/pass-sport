import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import PageTitle from '../../../../components/PageTitle/PageTitle';
import styles from './style.module.scss';
import EligibilityTestBanner from '@/components/eligibility-test-banner/EligibilityTestBanner';
import { Metadata } from 'next';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales - pass Sport',
};

export default function PolitiqueDeConfidentialite() {
  return (
    <>
      <main tabIndex={-1} id={SKIP_LINKS_ID.mainContent} role="main">
        <PageTitle
          title="Mentions légales"
          subtitle=""
          classes={{
            container: styles['page-header'],
          }}
        />

        <div className={styles.wrapper}>
          <section className="fr-mb-6w">
            <p className="fr-mb-2w">
              Le Portail pass Sport est un service du ministère des Sports et des Jeux Olympiques et
              Paralympiques, géré par la direction des sports. Ce service en ligne vise à permettre
              aux bénéficiaires du dispositif pass Sport de vérifier leur éligibilité et le cas
              échéant par la télé déclaration des informations nécessaires à obtenir le code
              alphanumérique individuel à présenter au club sportif lors de leur inscription. Ce
              service en ligne vise également à permettre à la direction des sports de délivrer
              toutes les informations et actualités relatives au pass Sport à leurs bénéficiaires.
            </p>

            <p className="fr-mb-2w">
              Les données renseignées par les bénéficiaires dans ce portail ne sont accessibles
              qu&apos;aux services de l&apos;Etat français chargés d&apos;instruire les demandes.
              L&apos;utilisation de ce service doit faciliter la délivrance du dispositif pass
              Sport.
            </p>

            <p className="fr-mb-2w">
              Les informations recueillies font l&apos;objet d&apos;un traitement informatique
              destiné à vérifier les conditions d&apos;obtention du pass Sport. Ces informations
              sont susceptibles d&apos;être communiquées aux services de l&apos;Etat et organismes
              définis aux articles 6 et 7 du décret modifié relatif au « pass Sport ».
            </p>

            <p className="fr-mb-2w">
              Sur le fondement de l&apos;article 6-1 e) du Règlement (UE) 2016/679 du Parlement
              européen et du Conseil du 27 avril 2016 relatif à la protection des personnes
              physiques à l&apos;égard du traitement des données à caractère personnel et à la libre
              circulation de ces données (règlement général sur la protection des données, ou RGPD)
              et en application de l&apos;article 32 de la loi du 6 janvier 1978 modifiée, les
              personnes bénéficient notamment d&apos;un droit d&apos;accès, d&apos;information, de
              limitation, d&apos;opposition et de rectification aux informations les concernant, sur
              simple demande à :
            </p>

            <p className="fr-mb-2w">
              Ministère des Sports et des Jeux Olympiques et Paralympiques - Sous-direction du
              pilotage et de l&apos;évolution des politiques publiques du sport - DS.1A
            </p>

            <p className="fr-mb-2w text--italic">
              <span className="display--block">95 avenue de France</span>
              <span className="display--block">75650 Paris</span>
              <span className="display--block">CEDEX 13</span>
              <span className="display--block">France</span>
            </p>

            <p className="fr-mb-2w">
              Téléphone :{' '}
              <Link
                href="tel:+33140459000"
                aria-label="Ouvrir une application pour appeler le 01 40 45 90 00"
              >
                01 40 45 90 00
              </Link>
            </p>

            <p>
              Administrateur du portail : Jean-François HATTE - Sous-direction du pilotage et de
              l&apos;évolution des politiques publiques du sport - DS.1.
            </p>
            <p className="fr-mb-3w">
              Contact : <Link href="mailto:passsport@sports.gouv.fr">passsport@sports.gouv.fr</Link>
            </p>
          </section>

          <section className="fr-mb-6w">
            <h2 className="fr-mb-2w fr-h4">Accès au site</h2>

            <p>
              L&apos;accès au site est libre et gratuit et ne nécessite pas la création d&apos;un
              compte. Les utilisateurs qui souhaitent bénéficier du pass Sports doivent renseigner
              des informations exactes et à jour.
            </p>
          </section>

          <section className="fr-mb-6w">
            <h2 className="fr-mb-2w fr-h4">Contenu du site</h2>

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

          <section className="fr-mb-4w">
            <h2 className="fr-mb-2w">Éditeur de la plateforme</h2>
            <p className="fr-mb-2w">La Plateforme pass Sport est éditée par :</p>
            <p className="fr-mb-2w">
              La Direction des sports du ministère des sports et des jeux olympiques et
              paralympiques, située :
            </p>
            <p className="fr-mb-2w text--italic">
              <span className="display--block">95 avenue de France</span>
              <span className="display--block">75650 Paris</span>
              <span className="display--block">CEDEX 13</span>
              <span className="display--block">France</span>
            </p>
            <p>
              Téléphone :{' '}
              <Link
                href="tel:+33140459000"
                aria-label="Ouvrir une application pour appeler le 01 40 45 90 00"
              >
                01 40 45 90 00
              </Link>
            </p>
            <p>
              Contact: <Link href="mailto:passsport@sports.gouv.fr">passsport@sports.gouv.fr</Link>
            </p>
          </section>

          <section className="fr-mb-4w">
            <h2 className="fr-mb-2w">Directeur de la publication</h2>
            <p className="fr-mb-2w">Fabienne BOURDAIS, Directrice des sports</p>
          </section>

          <section className="fr-mb-4w">
            <h2 className="fr-mb-2w">Hébergement de la Plateforme</h2>
            <p className="fr-mb-2w">Ce site est hébergé en propre par Scalingo :</p>
            <p className="text--italic">
              <span className="display--block">13 rue Jacques Peirotes</span>
              <span className="display--block">67000 Strasbourg </span>
              <span className="display--block">France</span>
            </p>
          </section>

          <section className="fr-mb-4w">
            <h2 className="fr-mb-2w">Accessibilité</h2>
            <p className="fr-mb-2w">
              La conformité aux normes d&apos;accessibilité numérique est un objectif ultérieur mais
              nous tâchons de rendre ce site accessible à toutes et à tous.
            </p>

            <h3 className="fr-mb-2w">Signaler un dysfonctionnement</h3>
            <p className="fr-mb-2w">
              Si vous rencontrez un défaut d&apos;accessibilité vous empêchant d&apos;accéder à un
              contenu ou une fonctionnalité du site, merci de nous en faire part. Si vous
              n&apos;obtenez pas de réponse rapide de notre part, vous êtes en droit de faire
              parvenir vos doléances ou une demande de saisine au Défenseur des droits.
            </p>

            <h3 className="fr-mb-2w">En savoir plus</h3>
            <p>
              Pour en savoir plus sur la politique d&apos;accessibilité numérique de l&apos;État :{' '}
              <Link
                href="http://references.modernisation.gouv.fr/accessibilite-numerique"
                target="_blank"
                aria-label="Ouvrir une nouvelle fenêtre vers la politique d'accessibilité numérique de l'État"
              >
                http://references.modernisation.gouv.fr/accessibilite-numerique
              </Link>
            </p>
          </section>

          <section>
            <h2 className="fr-mb-2w">Sécurité</h2>
            <p>
              Le site est protégé par un certificat électronique, matérialisé pour la grande
              majorité des navigateurs par un cadenas. Cette protection participe à la
              confidentialité des échanges. En aucun cas les services associés à la plateforme ne
              seront à l&apos;origine d&apos;envoi de courriels pour demander la saisie
              d&apos;informations personnelles.
            </p>
          </section>
        </div>
      </main>

      <EligibilityTestBanner />
      <SocialMediaPanel />
    </>
  );
}
