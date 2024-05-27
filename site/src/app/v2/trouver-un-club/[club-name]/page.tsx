'use client';

import ClubDetails from '@/app/v2/trouver-un-club/[club-name]/components/clubDetails/ClubDetails';
import EligibilityTestBanner from '../../../../../components/eligibility-test-banner/EligibilityTestBanner';
import SocialMediaPanel from '../../../components/social-media-panel/SocialMediaPanel';
import { useIsProVersion } from '../../../hooks/use-is-pro-version';

const ClubPage = ({ params }: { params: { 'club-name': string } }) => {
  const clubName = decodeURIComponent(params['club-name']);
  const isProVersion = useIsProVersion();

  return (
    <>
      <ClubDetails clubName={clubName} />
      {!isProVersion && <EligibilityTestBanner />}
      <SocialMediaPanel isProVersion={isProVersion} />
    </>
  );
};

export default ClubPage;
