'use client';

import { usePathname } from 'next/navigation';
import PassSportNavigationPro from '@/app/components/pass-sport-navigation/PassSportNavigationPro';

export default function PassSportNavigation() {
  const pathname = usePathname();
  const isProVersion = pathname?.startsWith('/v2/pro/');

  return isProVersion ? <PassSportNavigationPro /> : <PassSportNavigation />;
}
