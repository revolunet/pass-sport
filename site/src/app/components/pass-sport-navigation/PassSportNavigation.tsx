'use client';

import { usePathname } from 'next/navigation';
import PassSportNavigationPro from './PassSportNavigationPro';
import PassSportNavigationStandard from './PassSportNavigationStandard';

export default function PassSportNavigation() {
  const pathname = usePathname();
  const isProVersion = pathname?.startsWith('/v2/pro/');

  return isProVersion ? <PassSportNavigationPro /> : <PassSportNavigationStandard />;
}
