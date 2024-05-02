import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import PageHeader from '../../../../components/PageHeader/PageHeader';
import styles from './style.module.scss';
import EligibilityTestBanner from '@/components/eligibility-test-banner/EligibilityTestBanner';

export default function PolitiqueDeConfidentialite() {
  return (
    <div>
      <PageHeader
        title="Politique de confidentialité"
        subtitle="Le ministère des Sports et des Jeux Olympiques et Paralympiques s'engage à ce que la collecte et le traitement de vos données, effectués à partir du portail Pass'Sport, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés."
        classes={{
          container: styles['page-header'],
        }}
      />
      <div className={styles.wrapper}>
        <h4 className="fr-mb-2w">À qui sont destinées vos données ?</h4>
        <p>
          Le ministère des Sports et des Jeux Olympiques et Paralympiques , situé au 95 avenue de
          France est responsable du traitement des données personnelles pour le portail
          Pass&apos;Sport. Sauf mention contraire, les données personnelles qui y sont collectées
          sont destinées à un usage interne et n&apos;ont pas vocation à être partagées avec des
          tiers en dehors des cas prévus par les lois et règlements. Elles peuvent néanmoins être
          rendues accessibles aux prestataires (sous-traitants au sens de la règlementation) du
          ministère des Sports et des Jeux Olympiques et Paralympiques sous son contrôle, pour les
          stricts besoins et dans les limites de leur mission.
        </p>
      </div>
      <EligibilityTestBanner />
      <SocialMediaPanel />
    </div>
  );
}
