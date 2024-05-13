import PageHeader from '@/components/PageHeader/PageHeader';
import styles from './styles.module.scss';
import About from './components/about';
import SocialMediaPanel from '../../../components/social-media-panel/SocialMediaPanel';
import Link from 'next/link';
import Button from '@codegouvfr/react-dsfr/Button';
import Accordion from '@codegouvfr/react-dsfr/Accordion';

export default function ToutSavoirSurLePassSport() {
  return (
    <div className={styles.container}>
      <PageHeader title="Tout savoir sur le pass Sport" subtitle="" isProVersion />

      <About />

      <div className={styles['section-container']}>
        <h4>Qui se mobilise pour vous accompagner ?</h4>
        <p className="fr-text--bold">
          Le mouvement sportif et l&apos;Etat dans les territoires se mobilisent pour vous
          accompagner dans la création des espaces clubs sur Le Compte Asso (LCA) et des demandes de
          remboursements. Plusieurs interlocuteurs peuvent vous accompagner dans votre département
          en fonction de votre statut :
        </p>
        <ul>
          <li className="fr-mb-3w">
            Si vous êtes une club affilié à une fédération sportive agréée éligible au dispositif,
            le CDOS de votre département est là pour vous accompagner à la création de votre espace
            sur Le Compte Asso (LCA) et la saisie des jeunes, ici la liste des structures pour un
            Accompagnement Clubs sur les territoires :
            <br />
            <br />
            <Link href="" target="_blank">
              Accompagnement Clubs sur les territoires
            </Link>
            <br />
            <br />
          </li>
          <li className="fr-mb-3w">
            Si vous êtes bien une association agréée Sport ou JEP (agrément valide), contactez
            l’assistance PassSport@sports.gouv.fr qui vous orientera vers l’assistance de proximité
            dans votre territoire.
          </li>
          <li>
            Pour toute question sur le dispositif, la FAQ sur ce portail devrait vous apporter
            toutes les réponses aux questions que vous vous posez.
          </li>
        </ul>
      </div>

      <div className={styles['section-container']}>
        <h4>Comment me faire rembourser des déductions Pass Sport consenties ?</h4>

        <p className="fr-text--bold">
          Les bénéficiaires du dispositif recevront dans la dernière semaine du mois d&apos;aout
          leur code Pass Sport individuel qui prend la forme d&apos;un code composé de 9 caractères
          différents de ceux de 2022.
        </p>
        <p>
          Sur présentation du code, votre structure a consenti une déduction immédiate de 50€ sur
          l’inscription que vous devez vous faire rembourser le plus rapidement possible via votre
          espace sur :
        </p>

        <div className="fr-grid-row fr-grid-row--center">
          {' '}
          <Button priority="secondary" iconPosition="right" iconId="fr-icon-external-link-line">
            Le Compte Asso
          </Button>
        </div>

        <p>
          Pour cela, connectez vous au Compte Asso (si vous n’avez pas encore de compte, vous pouvez
          le créer en 10 minutes environ), cliquez sur « demander les remboursements Pass’Sport »
          puis saisissez les codes individuels un à un au fil de l’eau.
        </p>

        <p>
          La saisie du code individuel empêche le jeune d’utiliser son Pass’Sport dans une autre
          structure.
        </p>

        <ul>
          <li>
            si le code a déjà été utilisé par le jeune vous aurez un message qui vous l’indiquera.
          </li>
          <li>si le code n’existe pas, vous aurez un message le précisant. </li>
          <li>
            Si lors de la saisie du code, le nom du jeune qui apparait n’est pas celui de votre
            adhérent, ne poursuivez pas la saisie et prévenez le jeune que ce code ne lui correspond
            pas (vérifier si ce n’est pas une inversion avec un autre membre d’une fratrie par
            exemple) qu’il doit vous présenter le Pass’Sport à son nom.{' '}
          </li>
        </ul>

        <p>
          Vous pouvez consulter notre tutoriel d’accompagnement qui vous guide pour l’ensemble de la
          démarche sur LCA :
        </p>

        <Link href="" target="_blank" className="align-self--baseline">
          2022_PassSport_Comment se faire rembourser
        </Link>
      </div>

      <div className={styles['section-container']}>
        <h4>
          Comment faire apparaître mon club sur la carte des structures éligibles au Pass Sport ?
        </h4>

        <p className="fr-text--bold">
          Pour donner de la visibilité à votre club et anticiper l&apos;accueil des jeunes à la
          rentrée, vous pouvez créer votre espace sur LCA.
        </p>

        <p>
          Retrouvez notre tutoriel d&apos;accompagnement à la création de votre espace sur le Compte
          Aso qui sera ensuite le lieu de demande des remboursements Pass Sport :
          <br />
          <br />
          <Link href="" target="_blank">
            2022 07 05_Création LCA-v3
          </Link>
        </p>
      </div>

      <div className={styles['section-container']}>
        <h4>
          Liste des fédérations agréées par le ministère des sports et des jeux Olympiques et
          Paralympiques
        </h4>

        <p className="fr-text--bold">
          Si votre club est affilié à l&apos;une des fédérations suivantes pour la saison 2023/2024
          ou l&apos;année 2023 alors vous pouvez accepter des Pass&apos;sport qui vous seront
          intégralement remboursés par l&apos;Etat !
        </p>

        <section>
          <Accordion label="1. Fédérations olympiques et paralympiques">
            Fédération française d’athlétisme Fédération française d’aviron
            <br />
            Fédération française de badminton
            <br />
            Fédération française de basketball
            <br />
            Fédération française de boxe
            <br />
            Fédération française de canoë-kayak et sports de pagaie
            <br />
            Fédération française de cyclisme
            <br />
            Fédération française de danse
            <br />
            Fédération française de football
            <br />
            Fédération française de golf
            <br />
            Fédération française de gymnastique
            <br />
            Fédération française de handball
            <br />
            Fédération française de hockey
            <br />
            Fédération française de hockey sur glace
            <br />
            Fédération française de judo, jujitsu, kendo et disciplines associées
            <br />
            Fédération française de la montagne et de l’escalade
            <br />
            Fédération française de lutte
            <br />
            Fédération française de natation
            <br />
            Fédération française de pentathlon moderne
            <br />
            Fédération française de roller et skateboard
            <br />
            Fédération française de rugby
            <br />
            Fédération française de ski
            <br />
            Fédération française de surf
            <br />
            Fédération française de taekwondo et disciplines associées
            <br />
            Fédération française de tennis
            <br />
            Fédération française de tennis de table
            <br />
            Fédération française de tir
            <br />
            Fédération française de tir à l’arc
            <br />
            Fédération française de triathlon et disciplines enchainées
            <br />
            Fédération française de voile
            <br />
            Fédération française de volley
            <br />
            Fédération française d’équitation
            <br />
            Fédération française des sports de glace
            <br />
            Fédération française d’escrime
            <br />
            Fédération française d’haltérophilie, musculation
            <br />
            Fédération française du sport adapté
            <br />
            Fédération française handisport
          </Accordion>
          <Accordion label="2. Fédérations unisport">Content</Accordion>
          <Accordion label="3. Fédérations multisports et affinitaires">Content</Accordion>
        </section>
      </div>

      <div className={styles['section-container']}>
        <h4>Texte de référence</h4>
        <Link href="" target="_blank" className="align-self--baseline">
          Texte de référence Décret n° 2023-741 du 8 août 2023 relatif au « pass Sport » 2023
        </Link>
      </div>
      <SocialMediaPanel />
    </div>
  );
}
