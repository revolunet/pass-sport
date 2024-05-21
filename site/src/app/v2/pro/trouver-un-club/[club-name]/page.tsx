'use client';

import ClubPage from '@/app/v2/trouver-un-club/[club-name]/page';

const Page = ({ params }: { params: { 'club-name': string } }) => {
  return <ClubPage params={params} isProVersion />;
};

export default Page;
