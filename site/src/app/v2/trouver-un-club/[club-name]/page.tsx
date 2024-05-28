import ClubDetails from '@/app/v2/trouver-un-club/[club-name]/components/clubDetails/ClubDetails';
import EligibilityTestBanner from '../../../../../components/eligibility-test-banner/EligibilityTestBanner';
import SocialMediaPanel from '../../../components/social-media-panel/SocialMediaPanel';
import { Metadata } from 'next';

interface Props {
  params: { 'club-name': string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Trouver un club partenaire - ${decodeURIComponent(params['club-name'])} - pass Sport`,
  };
}

const ClubPage = ({ params }: { params: { 'club-name': string } }) => {
  const clubName = decodeURIComponent(params['club-name']);

  return (
    <>
      <ClubDetails clubName={clubName} />
      <EligibilityTestBanner />
      <SocialMediaPanel />
    </>
  );
};

export default ClubPage;
