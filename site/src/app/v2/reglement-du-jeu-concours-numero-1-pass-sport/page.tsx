import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import PageHeader from '../../../../components/PageHeader/PageHeader';
import styles from './style.module.scss';
import EligibilityTestBanner from '@/components/eligibility-test-banner/EligibilityTestBanner';
import { Metadata } from 'next';
import Link from 'next/link';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';

export const metadata: Metadata = {
  title: 'Règlement du jeu concours numéro 1 - pass Sport',
};

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Règlement du jeu-concours numéro 1 - pass Sport"
        subtitle=""
        classes={{
          container: styles['page-header'],
        }}
      />
      <main className={styles.wrapper} tabIndex={-1} id={SKIP_LINKS_ID.mainContent} role="main">
        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Présentation du jeu-concours pass Sport</h2>

          <p className="fr-mb-2w">
            Le Portail pass Sport est un service du ministère des Sports et des Jeux Olympiques et
            Paralympiques, géré par la direction des sports. Ce service en ligne vise à permettre
            aux bénéficiaires du dispositif pass Sport de vérifier leur éligibilité et le cas
            échéant par la télé déclaration des informations nécessaires à obtenir le code
            alphanumérique individuel à présenter au club sportif lors de leur inscription. Ce
            service en ligne vise également à permettre à la direction des sports de délivrer toutes
            les informations et actualités relatives au pass Sport à leurs bénéficiaires.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Article 1er - Définitions</h2>

          <p className="fr-mb-2w">
            Le ministère des Sports et des Jeux Olympiques et Paralympiques, sis 95 avenue de
            France, 75013 – Paris est désigné ci-après comme: «l&apos;Organisateur » Les
            participants au jeu-concours sont désignés ci-après comme «le/les Participant(s)» Le
            présent règlement définit les règles juridiques applicables au jeu-concours « Ministère
            des Sports et des Jeux Olympiques et Paralympiques x pass Sport».
          </p>
        </section>

        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Article 2 – Conditions de participation</h2>

          <p className="fr-mb-2w">
            Le présent jeu-concours est ouvert à toute personne physique, majeure et mineure (à
            partir de 14 ans), résidant en France à l&apos;exclusion des membres du personnel de
            l&apos;Organisateur, et d&apos;une façon générale des sociétés participant à la mise en
            œuvre de ce jeu-concours. Il est toutefois impératif qu&apos;un mineur qui souhaite
            participer au jeu-concours, participe par l&apos;intermédiaire de ses représentants
            légaux. On entend par « représentant légal », la ou les personnes titulaires de
            l&apos;autorité parentale à l&apos;égard du mineur (père et/ou mère, ou représentant
            légal). Toute participation d&apos;une personne mineure est donc effectuée sous
            l&apos;entière responsabilité du (des) titulaire(s) de l&apos;autorité parentale.
            L&apos;Organisateur se réserve le droit d&apos;en demander la justification écrite à
            tout moment, a fortiori lors de l&apos;attribution des lots. L&apos;Organisateur serait
            contraint de disqualifier tout mineur qui serait dans l&apos;incapacité de fournir ce
            justificatif dans les délais qui lui seraient impartis. Dans ce cas, tout gain
            potentiellement obtenu durant le jeu-concours serait immédiatement annulé.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Article 3 – Dates du concours</h2>

          <p className="fr-mb-2w">
            Le jeu-concours se déroulera en deux phases indépendantes l&apos;une de l&apos;autre
            selon le calendrier suivant:
          </p>

          <ul>
            <li>Date de début: 1er juin 2024</li>
            <li>Date de fin: 15 juillet 2024</li>
          </ul>
        </section>

        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Article 4 – Modalités de participation</h2>
          <h3 className="fr-mb-2w">4.1 Conditions de participation</h3>

          <p className="fr-mb-2w">
            Afin de participer au présent jeu-concours, le Participant devra se rendre sur la
            plateforme Instagram (www.instagram.com), à compter des dates indiquées pour le début du
            concours conformément à l&apos;article 3 du présent règlement. Le Concours sera
            accessible via le compte de l&apos;un des Créateur de Contenus suivants:
          </p>

          <h4 className="fr-mb-2w">
            Catégorie jeunes (uniquement réservés aux participants entre 14 ans et 25 ans)
          </h4>
          <ul className="fr-mb-2w">
            <li>
              <Link href="https://www.instagram.com/natoogram/" target="_blank">
                @natoogram
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/allonsrider/" target="_blank">
                @allonsrider
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/joanahanna/" target="_blank">
                @joanahanna
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/charlespoujade/" target="_blank">
                @charlespoujade
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/melaniebuffetaud/" target="_blank">
                @melaniebuffetaud
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/iliasblankaa/" target="_blank">
                @iliasblankaa
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/vincent.pourchot/" target="_blank">
                @vincent.pourchot
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/coursptitetomate/" target="_blank">
                @coursptitetomate
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/brisco_s3/" target="_blank">
                @brisco_s3
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/antoine.mamie/" target="_blank">
                @antoine.mamie
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/arthurbaucheron/" target="_blank">
                @arthurbaucheron
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/roro_le_costaud/" target="_blank">
                @roro_le_costaud
              </Link>
            </li>
          </ul>

          <h4 className="fr-mb-2w">
            Catégorie parents et grands parents (uniquement réservés aux participants parents
            d&apos;enfants de 6 ans à 12 ans)
          </h4>

          <ul className="fr-mb-2w">
            <li>
              <Link href="https://www.instagram.com/elisabeth_loncke/" target="_blank">
                @elisabeth_loncke
              </Link>
            </li>
          </ul>

          <h4 className="fr-mb-2w">
            Catégorie parents et grands parents (uniquement réservés aux participants parents ou
            grands-parents d&apos;enfants entre 12 à 18 ans)
          </h4>

          <ul className="fr-mb-2w">
            <li>
              <Link href="https://www.instagram.com/nathsimofficiel/" target="_blank">
                @nathsimofficiel
              </Link>
            </li>
          </ul>

          <p className="fr-mb-2w">
            Le Participant devra répondre à une question posée en story par l&apos;un des Créateurs
            officiels mentionnés ci-dessus.
          </p>

          <h3>Les questions peuvent être les suivantes :</h3>
          <ul>
            <li>Apprends moi quelque chose que je ne sais pas à propos du sport.</li>
            <li>Raconte-moi une anecdote liée à ton sport.</li>
            <li>Quel objectif sportif aimerais-tu atteindre cette année ?</li>
            <li>Qu&apos;est ce que le sport t&apos;inspire ?</li>
          </ul>

          <p className="fr-mb-2w">
            Cette story restera accessible via les outils d&apos;épinglage prévus par le plateforme
            Instagram Instagram sur le profil de chaque Créateur pour une durée de 5 jours à compter
            de la publication de la Story.
          </p>
          <p className="fr-mb-2w">
            Le Participant devra également être abonné au compte pass&apos;Sport :
            <Link href="https://www.instagram.com/passsportofficiel/" target="_blank">
              https://www.instagram.com/passsportofficiel/
            </Link>{' '}
            ainsi qu&apos;au compte du Créateur par le biais duquel il participe.
          </p>

          <p className="fr-mb-2w">
            Le Participant peut participer au jeu-concours sur différents comptes de Créateurs
            listés ci- dessus, cependant il ne pourra pas cumuler les lots et sera limité à un seul
            gain en cas de tirage au sort.
          </p>

          <h4 className="fr-mb-2w">
            4.2) Garantie et responsabilité sur la validité des candidatures
          </h4>

          <p className="fr-mb-2w">
            L&apos;Organisateur se réserve le droit d&apos;annuler, de mettre fin ou modifier cette
            opération en cas de violation des présentes, par fraude ou par toute autre cause hors de
            son contrôle. De façon générale, les Participants garantissent l&apos;Organisateur du
            présent concours contre tous recours, actions ou réclamations que pourraient former, à
            un titre quelconque, tous tiers, au titre de toutes les garanties et engagements pris.
            Toute participation incomplète ou erronée sera rejetée sans que la responsabilité de
            l&apos;Organisateur ne puisse être engagée. Ainsi, l&apos;Organisateur se réserve le
            droit, sans réserve, de modérer à postériori et de ne pas valider, d&apos;exclure, ou de
            supprimer du concours, tout participant qui ne respecterait pas une des conditions du
            présent règlement.
          </p>

          <h4 className="fr-mb-2w">4.3) Détermination des Gagnants et attribution du lot</h4>

          <p className="fr-mb-2w">
            Sur la base des réponses apportées par les Participants, l&apos;Organisateur,
            conjointement avec les Créateurs, désignera les Gagnants sur le base de critères
            objectifs relatifs aux réponses apportées tels que : le caractère informatif de la
            réponse, l&apos;originalité de la réponse, la créativité de la réponse et ce pour chaque
            Créateur. Les Gagnants seront directement contactés par le Créateur par message privé
            sur le compte Instagram avec lequel ils auront participé au jeu-concours afin de prévoir
            les modalités d&apos;utilisation des lots dans les 15 jours suivants la fin du
            jeu-concours. Chaque Créateur permettra la sélection d&apos;un minimum 5 Gagnants parmi
            les personnes ayant répondu au post.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Article 5 – Lots</h2>
          <h3 className="fr-mb-2w">5.1) Valeur commerciale des dotations</h3>

          <p className="fr-mb-2w">
            La valeur commerciale du lot correspond à la valeur de marché sur le territoire
            métropolitain au jour du tirage au sort, d&apos;une séance de sport dans une salle de
            sport sélectionné avec le Créateur par le biais duquel le Gagnant a participé au
            jeu-concours soit une valeur de 30 euros TTC. Le lot offert ne peut donner lieu à aucune
            contestation sur sa nature ni à la remise d&apos;une contrepartie de quelque nature que
            ce soit. Le lot ne couvre pas les frais de déplacement du Gagnant pour se rendre à la
            séance de sport. L&apos;Organisateur se réserve le droit de changer la dotation sans
            préavis. Si tel était le cas, la valeur du lot serait équivalente ou supérieure aux
            produits remplacés. La contrepartie en chèque, en numéraire ou en chèque cadeau ne peut
            être proposée.
          </p>

          <h3 className="fr-mb-2w">5.2) Modalités de délivrance et d&apos;utilisation du lot</h3>
          <p className="fr-mb-2w">
            Tel que le prévoit l&apos;article 4, le Gagnant sera contacté par le Créateur par
            message privé par le biais du compte Instagram avec lequel le Participant aura participé
            au jeu-concours et ce, dans un délai de 15 jours à compter du la fin du jeu-concours. Si
            les informations communiquées par le Gagnant sont incomplètes et/ou ne permettent pas de
            l&apos;informer de son gain, il perdra la qualité de Gagnant et ne pourra effectuer
            aucune réclamation. L&apos;Organisateur ne pourra par ailleurs être tenu responsable
            dans le cas de défaillances techniques quant à cette notification de gain. La
            notification officielle et personnalisée d&apos;attribution des dotations au Gagnant
            avec le descriptif et les modalités de retrait lui seront communiquées par email suite à
            un premier échange via la Plateforme Instagram.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Article 6 - Communication – Droit à l&apos;image</h2>

          <p className="fr-mb-2w">
            Chaque Gagnant autorise l&apos;Organisateur à réaliser des vidéos et à reproduire
            librement leur image sur tout support (photographie, internet, verbatim, « flyers »
            et/ou vidéo) existants ou à venir, à des fins de relations publiques sans pouvoir
            prétendre à aucune compensation financière. Chaque Gagnant autorise l&apos;Organisateur
            à exploiter son image, sa voix ou son témoignage dans le cadre de toute déclaration
            recueillie et ce sur tous supports (photographie, internet, verbatim, « flyers » et/ou
            vidéo) existants ou à venir, à des fins de relations publiques en France, sans que cette
            utilisation ne lui confère une rémunération ou une contrepartie autre que le soutien
            apporté. Tout Gagnant accepte que son image et les attributs de sa personnalité soient
            reproduits et utilisé par l&apos;Organisateur dans le cadre de contenu vidéo produit en
            partenariat avec les Créateurs. Les Gagnants acceptent de ce fait d&apos;être filmés
            dans le cadre des communications prévues. L&apos;ensemble des droits susvisés sont cédés
            pour le monde entier et pour une durée de douze (12) mois, soit un (1) an.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Article 7 - Données nominatives et personnelles</h2>

          <p className="fr-mb-2w">
            Pour la prise en compte de la participation au présent jeu-concours, la détermination
            des Gagnants et l&apos;attribution des lots, les Participants doivent obligatoirement
            fournir certaines données personnelles les concernant, traitées de manière automatisée
            sous la responsabilité l&apos;Organisateur. Dans le cadre de leur traitement, les
            données des Participants pourront être transmises à des sous-traitants situes hors de
            l&apos;Union Européenne conformément aux réglementations et aux recommandations de la
            Commission Européenne et ce, sous la responsabilité de la Société, responsable de
            traitement. Les données seront conservées pendant toute la durée du présent jeu-concours
            et dans un délai maximum de six (6) mois à l&apos;issue de la remise de la dotation aux
            Gagnants. Les Participants disposent d&apos;un droit d&apos;accès, d&apos;opposition, de
            modification, de rectification, d&apos;effacement, de limitation, de portabilité et de
            suppression des données qui les concernent, ainsi que du droit de définir des directives
            relatives au sort de leurs données à caractère personnel dans le cas où les Participants
            ne pourraient plus exercer les droits précités en s&apos;adressant par courrier à
            l&apos;Organisateur dont l&apos;adresse est mentionnée à l&apos;article 1.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Article 8 - Responsabilités et droits</h2>

          <p className="fr-mb-2w">L&apos;Organisateur :</p>

          <ul className="fr-mb-2w">
            <li>
              a) Se réserve le droit de modifier, de proroger, d&apos;écourter, de limiter les gains
              ou d&apos;annuler ce jeu-concours en cas de force majeure. En conséquence, sa
              responsabilité ne saurait être engagée de ce fait.
            </li>
            <li>
              b) Dégage toute responsabilité en cas de problèmes d&apos;acheminement ou de perte de
              courrier électronique ou postal empêchant le bon déroulement du jeu-concours.
            </li>
          </ul>

          <p className="fr-mb-2w">
            L&apos;assurance lors de la pratique sportive sera assurée par les clubs ou salles de
            sport directement. Un éducateur diplômé d&apos;état sera présent lors de la scéance pour
            assurer la sécurité du dispositif.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Article 9 - Conditions d&apos;exclusion</h2>

          <p className="fr-mb-2w">
            La participation à ce jeu-concours implique l&apos;acceptation pleine et entière des
            modalités énoncées dans le présent règlement sans aucune réserve ni condition préalable
            des Participants, le non-respect dudit règlement, entraînant l&apos;exclusion du
            concours, la nullité pure et simple de la participation et de l&apos;attribution du lot.
            Ainsi, tout Participant s&apos;engage à être abonné aux comptes Instagram du Créateur
            par le biais duquel il aurait participé ainsi qu&apos;au compte Instagram
            pass&apos;Sport. En outre, tout Participant s&apos;engage à respecter les limites
            d&apos;âge fixées par profil de Créateur par le biais duquel il aurait participé.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Article 10 – Règlement du jeu</h2>

          <p className="fr-mb-2w">
            Le règlement sera tenu à la libre disposition de tout Participant via l&apos;URL
            suivant:{' '}
            <Link
              href="https://pass.sports.gouv.fr/v2/reglement-du-jeu-concours-numero-1-pass-sport"
              target="_blank"
            >
              https://pass.sports.gouv.fr/v2/reglement-du-jeu-concours-numero-1-pass-sport
            </Link>{' '}
            Le présent règlement pourra également être adressé gratuitement sur simple demande de
            tout participant, formulée à l&apos;adresse indiquée dans l&apos;article 1 er.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h2 className="fr-mb-2w">Article 11 - Juridictions compétentes</h2>

          <p className="fr-mb-2w">
            Le présent règlement est soumis à la loi française. Les parties s&apos;efforcent de
            résoudre à l&apos;amiable tout différent né de l&apos;interprétation ou de
            l&apos;exécution du présent règlement. L&apos;Organisateur se réserve le droit de
            trancher sans appel toute difficulté pouvant survenir quant à l&apos;interprétation ou à
            l&apos;application du présent règlement, étant entendu qu&apos;aucune contestation ne
            sera admise notamment portant sur les modalités du jeu, sur la détermination du Gagnant,
            sur les conditions d&apos;octroi ou d&apos;utilisation des gains, un mois après la fin
            du jeu. Si le désaccord persiste, il sera soumis au Tribunal Judiciaire de Paris. Le
            Participant reconnaît avoir pris connaissance du présent règlement, l&apos;accepter sans
            réserve et s&apos;y conformer.
          </p>
        </section>
      </main>

      <EligibilityTestBanner />
      <SocialMediaPanel />
    </div>
  );
}
