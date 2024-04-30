import { getAllClubActivities, getFranceRegions } from './agent';

import ClientRenderingTemporaire from './clientRenderingTemporaire';
import ClubFilters from './components/club-filters/ClubFilters';

const TrouverUnClub = async () => {
  const regions = await getFranceRegions();
  const activities = await getAllClubActivities();

  return <ClientRenderingTemporaire regions={regions} activities={activities} />;
  // return <p>hello</p>;
  // return <ClubFilters regions={regions} />;
};

export default TrouverUnClub;
