'use client';

import { usePathname } from 'next/navigation';
import PassSportBreadcrumbStandard from '@/app/components/pass-sport-breadcrumb/PassSportBreadcrumbStandard';
import PassSportBreadcrumbPro from '@/app/components/pass-sport-breadcrumb/PassSportBreadcrumbPro';

export default function PassSportBreadcrumb() {
  const pathname = usePathname();
  const isProVersion = pathname?.startsWith('/v2/pro/');

  return isProVersion ? <PassSportBreadcrumbPro /> : <PassSportBreadcrumbStandard />;
}
