'use client';

import PassSportNavigationPro from './PassSportNavigationPro';
import PassSportNavigationStandard from './PassSportNavigationStandard';
import { useIsProVersion } from '@/app/hooks/use-is-pro-version';

export default function PassSportNavigation() {
  const isProVersion = useIsProVersion();

  return isProVersion ? <PassSportNavigationPro /> : <PassSportNavigationStandard />;
}
