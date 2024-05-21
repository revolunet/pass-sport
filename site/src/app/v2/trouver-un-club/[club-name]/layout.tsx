'use client';

import { ReactNode } from 'react';
import EligibilityTestBanner from '@/components/eligibility-test-banner/EligibilityTestBanner';
import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import { useIsProVersion } from '@/app/hooks/use-is-pro-version';

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  const isProVersion = useIsProVersion();

  return (
    <>
      {children}
      {!isProVersion && <EligibilityTestBanner />}
      <SocialMediaPanel isProVersion={isProVersion} />
    </>
  );
}
