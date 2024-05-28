import PageHeader from '@/components/PageHeader/PageHeader';
import styles from './styles.module.scss';
import SocialMediaPanel from '../../../components/social-media-panel/SocialMediaPanel';
import Link from 'next/link';
import Button from '@codegouvfr/react-dsfr/Button';
import Accordion from '@codegouvfr/react-dsfr/Accordion';
import {
  multisportsAndaffinitaires,
  olympiquesAndparalympiques,
  unisport,
} from '@/app/v2/pro/tout-savoir-sur-le-pass-sport/constants/federations';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tout savoir sur le pass Sport - pass Sport',
};

export default function ToutSavoirSurLePassSport() {
  return (
    <>
      <PageHeader
        title="Tout savoir sur le pass Sport"
        subtitle=""
        isProVersion
        classes={{
          container: styles['page-header'],
        }}
      />

      <main className={styles['main-container']}>
        <section className={styles['section-container']}>
          <h4>Qui se mobilise pour vous accompagner ?</h4>
          <p className="fr-text--bold">
            Le mouvement sportif et l&apos;Etat dans les territoires se mobilisent pour vous
            accompagner dans la création des espaces clubs sur Le Compte Asso (LCA) et des demandes
            de remboursements. Plusieurs interlocuteurs peuvent vous accompagner dans votre
            département en fonction de votre statut :
          </p>
          <ul>
            <li className="fr-mb-3w">
              Si vous êtes une club affilié à une fédération sportive agréée éligible au dispositif,
              le CDOS de votre département est là pour vous accompagner à la création de votre
              espace sur Le Compte Asso (LCA) et la saisie des jeunes, ici la liste des structures
              pour un Accompagnement Clubs sur les territoires :
              <br />
              <br />
              <Link
                href="https://www.pass.sports.gouv.fr/app/uploads/2022/07/Accompagnement-Clubs-sur-les-territoires.xlsx"
                target="_blank"
              >
                Accompagnement Clubs sur les territoires
              </Link>
              <br />
              <br />
            </li>
            <li className="fr-mb-3w">
              Si vous êtes bien une association agréée Sport ou JEP (agrément valide), contactez
              l’assistance PassSport@sports.gouv.fr qui vous orientera vers l’assistance de
              proximité dans votre territoire.
            </li>
            <li>
              Pour toute question sur le dispositif, la FAQ sur ce portail devrait vous apporter
              toutes les réponses aux questions que vous vous posez.
            </li>
          </ul>
        </section>

        <section className={styles['section-container']}>
          <h4>Comment me faire rembourser des déductions pass Sport consenties ?</h4>

          <p className="fr-text--bold">
            Les bénéficiaires du dispositif recevront dans la dernière semaine du mois d&apos;aout
            leur code pass Sport individuel qui prend la forme d&apos;un code composé de 9
            caractères différents de ceux de 2022.
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
            Pour cela,{' '}
            <Link
              href="https://lecompteasso.associations.gouv.fr/"
              title="Lien vers Le Compte Asso"
              target="_blank"
            >
              connectez vous au Compte Asso
            </Link>{' '}
            (si vous n’avez pas encore de compte, vous pouvez le créer en 10 minutes environ),
            cliquez sur « demander les remboursements pass Sport » puis saisissez les codes
            individuels un à un au fil de l’eau.
          </p>

          <p>
            La saisie du code individuel empêche le jeune d’utiliser son pass Sport dans une autre
            structure.
          </p>

          <ul>
            <li>
              si le code a déjà été utilisé par le jeune vous aurez un message qui vous l’indiquera.
            </li>
            <li>si le code n’existe pas, vous aurez un message le précisant. </li>
            <li>
              Si lors de la saisie du code, le nom du jeune qui apparait n’est pas celui de votre
              adhérent, ne poursuivez pas la saisie et prévenez le jeune que ce code ne lui
              correspond pas (vérifier si ce n’est pas une inversion avec un autre membre d’une
              fratrie par exemple) qu’il doit vous présenter le pass Sport à son nom.{' '}
            </li>
          </ul>

          <p>
            Vous pouvez consulter notre tutoriel d’accompagnement qui vous guide pour l’ensemble de
            la démarche sur LCA :
          </p>

          <Link
            href="https://www.pass.sports.gouv.fr/app/uploads/2022/09/2022_PassSport_Comment-se-faire-rembourser.pdf"
            target="_blank"
            className="align-self--baseline"
          >
            2022_PassSport_Comment se faire rembourser
          </Link>
        </section>

        <section className={styles['section-container']}>
          <h4>
            Comment faire apparaître mon club sur la carte des structures éligibles au pass Sport ?
          </h4>

          <p className="fr-text--bold">
            Pour donner de la visibilité à votre club et anticiper l&apos;accueil des jeunes à la
            rentrée, vous pouvez créer votre espace sur LCA.
          </p>

          <p>
            Retrouvez notre tutoriel d&apos;accompagnement à la création de votre espace sur le
            Compte Aso qui sera ensuite le lieu de demande des remboursements pass Sport :
            <br />
            <br />
            <Link
              href="https://www.pass.sports.gouv.fr/app/uploads/2022/07/2022-07-05_Creation-LCA-v3.pptx"
              target="_blank"
            >
              2022 07 05_Création LCA-v3
            </Link>
          </p>
        </section>

        <section className={styles['section-container']}>
          <h4>
            Liste des fédérations agréées par le ministère des sports et des jeux Olympiques et
            Paralympiques
          </h4>

          <p className="fr-text--bold">
            Si votre club est affilié à l&apos;une des fédérations suivantes pour la saison
            2023/2024 ou l&apos;année 2023 alors vous pouvez accepter des pass Sport qui vous seront
            intégralement remboursés par l&apos;Etat !
          </p>

          <section>
            <Accordion label="1. Fédérations olympiques et paralympiques">
              <FederationList federations={olympiquesAndparalympiques} />
            </Accordion>
            <Accordion label="2. Fédérations unisport">
              <FederationList federations={unisport} />
            </Accordion>
            <Accordion label="3. Fédérations multisports et affinitaires">
              <FederationList federations={multisportsAndaffinitaires} />
            </Accordion>
          </section>
        </section>

        <section className={styles['section-container']}>
          <h4>Texte de référence</h4>
          <Link
            href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047952490?init=true&page=1&query=Pass%E2%80%99Sport&searchField=ALL&tab_selection=all"
            target="_blank"
            className="align-self--baseline"
          >
            Texte de référence Décret n° 2023-741 du 8 août 2023 relatif au « pass Sport » 2023
          </Link>
        </section>
      </main>
      <SocialMediaPanel isProVersion />
    </>
  );
}

interface FederationListProps {
  federations: string[];
}

function FederationList({ federations }: FederationListProps) {
  return federations.map((fed) => (
    <>
      {fed}
      <br />
    </>
  ));
}
