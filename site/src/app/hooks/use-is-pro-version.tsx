import { usePathname } from 'next/navigation';

export function useIsProVersion() {
  const pathname = usePathname();

  return pathname?.startsWith('/v2/pro/');
}
