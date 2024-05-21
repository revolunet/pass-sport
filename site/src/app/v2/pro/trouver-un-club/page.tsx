import PageHeader from '@/components/PageHeader/PageHeader';

import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import ClubFinder from '@/app/v2/trouver-un-club/components/club-finder/ClubFinder';
import { getAllClubActivities, getFranceRegions } from '@/app/v2/trouver-un-club/agent';
import styles from './styles.module.scss';

const TrouverUnClub = async () => {
  const regions = await getFranceRegions();
  const activities = await getAllClubActivities();

  const subtitle = (
    <div>
      <p>
        Attention tous les clubs existants ne sont pas éligibles, seules les structures suivantes le
        sont :
      </p>
      <ul>
        <li>
          les clubs ou structures sportives, quelque soit leur statut, affiliés à l’une des
          fédérations sportives agréées par le ministère des sports et des Jeux Olympiques et
          Paralympiques,
        </li>
        <li>
          les associations non affiliées à une fédération sportive mais disposant d’un agrément
          valide Sport (délivré après 2015) ou Jeunesse Education Populaire (JEP) (délivré après
          2018) sur l’ensemble du territoire.
        </li>

        <li>
          les structures du loisir sportif marchand ayant signé la Charte d’engagement Pass’Sport
          2023.
        </li>
      </ul>
    </div>
  );
  return (
    <>
      <PageHeader
        title="Carte des structures partenaire"
        isProVersion
        subtitle={subtitle}
        classes={{
          container: styles['page-header'],
        }}
      />
      <ClubFinder regions={regions} activities={activities} isProVersion />
      <SocialMediaPanel isProVersion />
    </>
  );
};

export default TrouverUnClub;
