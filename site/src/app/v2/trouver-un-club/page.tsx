import PageHeader from '@/components/PageHeader/PageHeader';
import { getAllClubActivities, getFranceRegions } from './agent';

import ClubFinder from './components/club-finder/ClubFinder';

const TrouverUnClub = async () => {
  const regions = await getFranceRegions();
  const activities = await getAllClubActivities();

  return (
    <>
      <PageHeader title="Trouver un club"></PageHeader>
      <ClubFinder regions={regions} activities={activities} />
    </>
  );
};

export default TrouverUnClub;
