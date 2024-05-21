'use client';

import PassSportBreadcrumbStandard from '@/app/components/pass-sport-breadcrumb/PassSportBreadcrumbStandard';
import PassSportBreadcrumbPro from '@/app/components/pass-sport-breadcrumb/PassSportBreadcrumbPro';
import { useIsProVersion } from '@/app/hooks/use-is-pro-version';

export default function PassSportBreadcrumb() {
  const isProVersion = useIsProVersion();

  return isProVersion ? <PassSportBreadcrumbPro /> : <PassSportBreadcrumbStandard />;
}
