import PageHeader from '@/components/PageHeader/PageHeader';
import { getAllClubActivities, getFranceRegions, getFranceDepartments } from './agent';

import ClubFinder from './components/club-finder/ClubFinder';
import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Trouver un club partenaire - pass Sport',
};

const TrouverUnClub = async () => {
  const regions = await getFranceRegions();
  const activities = await getAllClubActivities();
  const departments = await getFranceDepartments();

  return (
    <>
      <PageHeader title="Trouver un club" />
      <Suspense>
        <ClubFinder regions={regions} activities={activities} departments={departments} />
      </Suspense>
      <SocialMediaPanel />
    </>
  );
};

export default TrouverUnClub;
