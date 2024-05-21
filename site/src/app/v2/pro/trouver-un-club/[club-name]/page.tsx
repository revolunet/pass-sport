'use client';

import Layout from '@/app/v2/trouver-un-club/[club-name]/layout';
import ClubDetails from '@/app/v2/trouver-un-club/[club-name]/components/clubDetails/ClubDetails';

const ClubPage = ({ params }: { params: { 'club-name': string } }) => {
  const clubName = decodeURIComponent(params['club-name']);

  return (
    <Layout>
      <ClubDetails clubName={clubName} isProVersion />
    </Layout>
  );
};

export default ClubPage;
