import ClubDetails from '@/app/v2/trouver-un-club/[club-name]/components/clubDetails/ClubDetails';
import SocialMediaPanel from '../../../../components/social-media-panel/SocialMediaPanel';
import { Metadata } from 'next';

interface Props {
  params: { 'club-name': string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Trouver une structure partenaire - ${decodeURIComponent(params['club-name'])} - pass Sport`,
  };
}

const ClubPage = ({ params }: Props) => {
  const clubName = decodeURIComponent(params['club-name']);

  return (
    <>
      <ClubDetails clubName={clubName} isProVersion />
      <SocialMediaPanel isProVersion />
    </>
  );
};

export default ClubPage;
