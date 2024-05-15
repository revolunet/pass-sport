import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import PageHeader from '../../../../components/PageHeader/PageHeader';
import styles from './style.module.scss';
import EligibilityTestBanner from '@/components/eligibility-test-banner/EligibilityTestBanner';
import cn from 'classnames';

export default function PolitiqueDeConfidentialite() {
  return (
    <div>
      <PageHeader
        title="Politique de confidentialité"
        subtitle="Politique de confidentialité relative au traitement de données personnelles réalisé dans le cadre de la délivrance du pass Sport 2024"
        classes={{
          container: styles['page-header'],
        }}
      />
      <main className={styles.wrapper}>
        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Article 1 - Définitions</h4>
          <p className="fr-mb-2w">
            Les définitions fournies à l&apos;article 4 du RGPD sont applicables aux présentes.
          </p>
          <p className="fr-mb-2w">
            <span className="fr-text--bold">« Données à caractère personnel »</span> ou{' '}
            <span className="fr-text--bold">« données personnelles »</span> : toute information se
            rapportant à une personne physique identifiée ou identifiable. La personne physique peut
            être identifiée directement ou indirectement.
          </p>
          <p className="fr-mb-2w">
            <span className="fr-text--bold">« Personne concernée »</span> : la personne concernée
            est la personne physique dont les données personnelles font l&apos;objet du traitement.
          </p>
          <p className="fr-mb-2w">
            <span className="fr-text--bold">« Traitement »</span> : toute opération ou tout ensemble
            d&apos;opérations effectués ou non à l&apos;aide de procédés automatisés et appliqués à
            des données ou des ensembles de données à caractère personnel (ex : collecte,
            enregistrement, conservation, extraction, utilisation, etc.).
          </p>
          <p className="fr-mb-2w">
            <span className="fr-text--bold">« Responsable de traitement »</span> : personne physique
            ou morale, autorité publique, service ou autre organisme qui, seul ou conjointement avec
            d&apos;autres, détermine les finalités et les moyens du traitement.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Article 2 - Responsable de traitement</h4>
          <p className="fr-mb-2w">
            La Direction des sports du ministère des sports et des jeux olympiques et paralympiques
            (ci-après <span className="fr-text--bold">« la Direction des sports »</span>) est le
            responsable de traitement de vos données personnelles. Elle collecte et traite vos
            données dans le cadre du traitement de données personnelles opéré pour la délivrance du
            pass Sport 2024.
          </p>

          <p className="fr-mb-2w">
            <span className="fr-text--bold">Adresse postale :</span> <br /> <br />
            <span className="fr-text--bold">LA DIRECTION DES SPORTS,</span>
            <br />
            Située au 95 avenue de France 75013 PARIS
          </p>

          <p className="fr-mb-2w">
            <span className="fr-text--bold">Adresse mail :</span>
            <br />
            ds-rgpd@sports.gouv.fr
          </p>

          <p>
            La Direction des sports s&apos;engage à ce que le traitement de vos données à caractère
            personnel effectué dans le cadre de l&apos;envoi du pass Sport 2024 respecte la
            règlementation en vigueur applicable au traitement de données à caractère personnel et,
            en particulier,{' '}
            <a
              href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
              title="Lien vers les dispositions du Règlement (UE) 2016/679 général sur la protection des données"
              aria-label="Lien vers les dispositions du Règlement (UE) 2016/679 général sur la protection des données"
              target="_blank"
            >
              les dispositions du Règlement (UE) 2016/679 général sur la protection des données
            </a>{' '}
            (« RGPD »), de la{' '}
            <a
              href="https://www.cnil.fr/fr/la-loi-informatique-et-libertes"
              title="Lien vers la loi n°78-17 informatique et Libertés du 6 janvier 1978 modifiée"
              aria-label="Lien vers la loi n°78-17 informatique et Libertés du 6 janvier 1978 modifiée"
              target="_blank"
            >
              loi n°78-17 informatique et Libertés du 6 janvier 1978 modifiée
            </a>{' '}
            (« LIL ») et toute règlementation subséquente, ainsi que les dispositions prises par
            toute autorité de contrôle compétente, notamment en France la Commission Nationale
            Informatique & Libertés dit “CNIL”.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Article 3 - Finalités du traitement des données</h4>
          <p>Le présent traitement a pour finalités la délivrance du pass Sport 2024.</p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Article 4 - Base légale</h4>
          {/* ATTENTION: A modifier dès la publication du décret 2024. pour ce texte suivant: "décret n° 2023-741 du 8
            août 2023 relatif au « Pass'Sport » 2023." */}
          <p>
            Le présent traitement se fonde sur l&apos;article 6. 1. e du Règlement européen 2016/679
            (règlement général sur la protection des données - RGPD) relatif à l&apos;exécution
            d&apos;une mission d&apos;intérêt public dont est investie la Direction des sports au
            sens des articles L. 100-1 et L. 100-2 du code du sport et du décret n° 2023-741 du 8
            août 2023 relatif au « pass Sport » 2023.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Article 5 - Typologie des données traitées</h4>
          {/* ATTENTION: A modifier dès la publication du décret 2024. pour ce texte suivant: "décret n° 2023-741 du 8
            août 2023 relatif au « Pass'Sport » 2023." */}
          <p>Pour les bénéficiaires éligibles au dispositif pass Sport</p>
          <ul className="fr-pl-4w">
            <li>
              Données relatives à l&apos;identité de l&apos;allocataire (responsable légal du
              bénéficiaire) : civilité, nom, prénom, lieu de naissance ;
            </li>
            <li>
              Données relatives à l&apos;identité de bénéficiaire : nom, prénom, sexe, date de
              naissance ;
            </li>
            <li>Coordonnées : adresse postale, courriel, téléphone.</li>
          </ul>

          <p>Pour les exploitants de structures éligibles au dispositif pass Sport</p>
          <ul className="fr-pl-4w">
            <li>Données relatives à l&apos;identité : civilité, nom, prénom ;</li>
            <li>Coordonnées : courriel, téléphone ;</li>
            <li>Données relatives à la vie professionnelle : fonction dans la structure.</li>
          </ul>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Article 6 - Durée de conservation des données</h4>
          <p className="fr-mb-2w">
            Les données à caractère personnel des bénéficiaires éligibles au dispositif pass Sport
            seront effacées au bout de 12 mois à compter de leur réception par la direction des
            sports.
          </p>

          <p>
            Les données à caractère personnel des exploitants de structures éligibles au dispositif
            pass Sport seront effacées lorsque ces derniers quitteront leurs fonctions.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Article 7 - Personnes concernées</h4>
          <p className="fr-mb-2w">
            Sont concernées par le traitement mentionné à l&apos;article 3 les bénéficiaires
            éligibles au dispositif pass Sport et les exploitants de structures éligibles au
            dispositif pass Sport.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Article 8 - Source des données</h4>
          <p>
            Vos données traitées ont été collectées indirectement. Elles nous ont été communiquées
            par le Centre National des Œuvres Universitaires et Scolaires Établissement public
            national, La Caisse nationale des allocations familiales et la Caisse Centrale de la
            Mutualité Sociale Agricole.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Article 9 - Nécessité de la collecte</h4>
          <p className="fr-mb-2w">
            Seules les données à caractère personnel nécessaires pour le traitement réalisé dans le
            cadre de la délivrance du pass Sport 2024 seront traitées.
          </p>

          <p>
            Le recueil de vos données à caractère personnel est obligatoire pour répondre aux
            finalités mentionnées à l&apos;article 3.
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Article 10 - Quels sont vos droits ? Comment les exercer ?</h4>
          <p className="fr-mb-2w">
            Conformément à la règlementation applicable, vous disposez d&apos;un droit d&apos;accès,
            de rectification, d&apos;effacement, de limitation et d&apos;opposition des données qui
            vous concernent.
          </p>

          <ul className="fr-pl-4w">
            <li className="fr-text--bold">Exercice de vos droits</li>
          </ul>

          <p className="fr-mb-2w">
            Vous pouvez exercer ces droits en vous adressant aux responsables de traitement : <br />
            Par voie postale, à l&apos;adresse suivante :
          </p>

          <p className={cn(styles['wrapper__text--center'], 'fr-mb-2w')}>
            LA DIRECTION DES SPORTS <br /> 95 avenue de France 75013 PARIS
          </p>

          <p>Par voie électronique à l&apos;adresse suivante : ds-rgpd@sports.gouv.fr</p>

          <ul className="fr-pl-4w">
            <li className="fr-text--bold">Délégué à la protection des données</li>
          </ul>

          <p className="fr-mb-2w">
            Si vous rencontrez des difficultés dans l&apos;exercice de vos droits, vous pouvez
            saisir le Délégué à la protection des données du ministère chargé des sports, aux
            coordonnées suivantes :
          </p>

          <p className="fr-mb-2w">Par voie postale à l&apos;adresse suivante :</p>

          <p className={cn(styles['wrapper__text--center'], 'fr-mb-2w')}>
            Ministère de l&apos;éducation nationale et de la jeunesse <br />
            Délégué à la protection des données(DPD) <br />
            110, rue de Grenelle <br />
            75357 Paris Cedex 07
          </p>

          <p className="fr-mb-2w">
            Par voie électronique à l&apos;adresse suivante : dpd@education.gouv.fr <br />
            Ou via le formulaire de saisine en ligne :{' '}
            <a
              href="http://www.education.gouv.fr/pid33441/nous-contacter.html#RGPD"
              title="Lien vers le formulaire de saisine en ligne pour les difficultés rencontrées dans l'exercice de vos droits"
              aria-label="Lien vers le formulaire de saisine en ligne pour les difficultés rencontrées dans l'exercice de vos droits"
              target="_blank"
            >
              http://www.education.gouv.fr/pid33441/nous-contacter.html#RGPD
            </a>
          </p>

          <ul className="fr-pl-4w">
            <li className="fr-text--bold">Réclamation auprès de la CNIL</li>
          </ul>

          <p>
            Si vous estimez après nous avoir contactés que les droits sur vos données n&apos;ont pas
            été respectés, vous pouvez introduire une réclamation auprès de la CNIL.{' '}
            <a
              href="https://www.cnil.fr/fr/mes-demarches/les-droits-pour-maitriser-vos-donnees-personnelles"
              title="Voir le site de la CNIL pour plus d'informations sur vos droits."
              aria-label="Voir le site de la CNIL pour plus d'informations sur vos droits."
              target="_blank"
            >
              Voir le site de la CNIL pour plus d&apos;informations sur vos droits.
            </a>
          </p>
        </section>

        <section className="fr-mb-6w">
          <h4 className="fr-mb-2w">Article 11 - Indications en cas de violation de données</h4>
          <p className="fr-mb-2w">
            La Direction des sports s&apos;engage à mettre en œuvre toutes les mesures techniques et
            organisationnelles appropriées grâce à des moyens de sécurisation physiques et
            logistiques permettant de garantir un niveau de sécurité adapté au regard des risques
            d&apos;accès accidentels, non autorisés ou illégaux, de divulgation, d&apos;altération,
            de perte ou encore de destruction des données personnelles vous concernant, au sens de
            l&apos;article 121 de la Loi informatiques et Libertés de 1978 modifiée.
          </p>

          <p>
            Dans l&apos;éventualité où la Direction des sports prendrait connaissance d&apos;un
            accès illégal aux données personnelles vous concernant, stockées sur nos serveurs ou
            ceux de nos prestataires, ou d&apos;un accès non autorisé ayant pour conséquence la
            réalisation des risques identifiés ci-dessus, elle s&apos;engage à :
          </p>

          <ul className="fr-pl-4w">
            <li>
              Vous notifier l&apos;incident et en informer la CNIL dans les plus brefs délais, si
              cela est susceptible d&apos;engendrer un risque élevé pour vos droits et libertés ;
            </li>
            <li>Examiner les causes de l&apos;incident ;</li>
            <li>
              Prendre les mesures nécessaires dans la limite du raisonnable afin d&apos;amoindrir
              les effets négatifs et préjudices pouvant résulter dudit incident.
            </li>
          </ul>

          <p>
            En aucun cas les engagements définis au point ci-dessus ne peuvent être assimilés à une
            quelconque reconnaissance de faute ou de responsabilité quant à la survenance de
            l&apos;incident en question.
          </p>
        </section>
      </main>

      <EligibilityTestBanner />
      <SocialMediaPanel />
    </div>
  );
}
