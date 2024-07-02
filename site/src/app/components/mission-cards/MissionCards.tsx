import Card from '@codegouvfr/react-dsfr/Card';
import styles from './styles.module.scss';
import jeVeuxAiderImage from '@/images/eligibility-test/je-veux-aider.jpg';
import snuImage from '@/images/eligibility-test/snu.jpg';
import serviceCiviqueImage from '@/images/eligibility-test/service-civique.jpg';

interface Props {
  isUsingSuccessUrls: boolean;
}
const MissionCards = ({ isUsingSuccessUrls }: Props) => {
  const jeVeuxAiderUrl = isUsingSuccessUrls
    ? 'https://api.api-engagement.beta.gouv.fr/r/campaign/6633d05b87fb728a6da32177'
    : 'https://api.api-engagement.beta.gouv.fr/r/campaign/6634911587fb728a6da5d10c';

  const serviceCiviqueUrl = isUsingSuccessUrls
    ? 'https://api.api-engagement.beta.gouv.fr/r/campaign/6633d0bd87fb728a6da322cf'
    : 'https://api.api-engagement.beta.gouv.fr/r/campaign/6634937987fb728a6da5dbc1';

  const snuUrl = isUsingSuccessUrls
    ? 'https://api.api-engagement.beta.gouv.fr/r/campaign/6634907687fb728a6da5cb95'
    : 'https://api.api-engagement.beta.gouv.fr/r/campaign/663a3817971045dffcd3c9b3';

  return (
    <div className={styles.container}>
      <h3> Pour vous engager dans des missions de volontariat ou de bénévolat :</h3>

      <Card
        background
        border
        desc={
          <>
            <p className="fr-text--sm fr-mb-0">
              La plateforme, qui propose des missions dans tous les domaines de l’intérêt général.
            </p>
            <p className="fr-text--sm fr-mb-0">
              Plus de 18 000 missions de bénévolat sont en ligne !
            </p>
          </>
        }
        enlargeLink
        horizontal
        imageAlt=""
        imageUrl={jeVeuxAiderImage.src}
        linkProps={{
          href: jeVeuxAiderUrl,
          'aria-label': 'Ouvrir une nouvelle fenêtre vers le site Je veux aider.gouv.fr',
        }}
        size="medium"
        title="Ouvrir une nouvelle fenêtre vers le site Je veux aider.gouv.fr"
        titleAs="h4"
        classes={{
          end: styles.end,
        }}
        ratio="33/66"
      />

      <Card
        background
        border
        desc={
          <>
            <p className="fr-text--sm fr-mb-0">Vous souhaitez être volontaire ?</p>
            <p className="fr-text--sm fr-mb-0">Découvrez les 8 360 missions en ligne.</p>
          </>
        }
        enlargeLink
        horizontal
        imageAlt=""
        imageUrl={snuImage.src}
        linkProps={{
          href: snuUrl,
          'aria-label':
            'Ouvrir une nouvelle fenêtre vers le site Le SNU, pour moi, pour les autres, et pour la France.',
        }}
        size="medium"
        title="Ouvrir une nouvelle fenêtre vers le site Le SNU, pour moi, pour les autres, et pour la France."
        titleAs="h4"
        classes={{
          end: styles.end,
        }}
        ratio="33/66"
      />

      <Card
        background
        border
        desc={
          <>
            <p className="fr-text--sm fr-mb-0">
              Une expérience qui va changer ta vie. Solidarité, santé, éducation, sport,
              environnement… Des milliers de missions indemnisées t’attendent.
            </p>
          </>
        }
        enlargeLink
        horizontal
        imageAlt=""
        imageUrl={serviceCiviqueImage.src}
        linkProps={{
          href: serviceCiviqueUrl,
          'aria-label':
            'Ouvrir une nouvelle fenêtre vers le site le Service Civique, une mission pour chacun au service de tous',
        }}
        size="medium"
        title="Ouvrir une nouvelle fenêtre vers le site le Service Civique, une mission pour chacun au service de tous"
        titleAs="h4"
        classes={{
          end: styles.end,
          body: styles['card-body'],
        }}
        ratio="33/66"
      />
    </div>
  );
};

export default MissionCards;
