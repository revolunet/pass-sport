import { useEffect, useState } from 'react';
import { Club } from '../../../types/Club';
import { getClubs } from '@/app/v2/trouver-un-club/agent';

export function useGetClubs(clubName: string) {
  const [club, setClub] = useState<Club | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getClubs({ clubName: `nom="${clubName.toUpperCase()}"`, offset: 0 }).then((res) => {
      if (res.results.length === 0) {
        setError("Le club n'a pas été trouvé");
      } else {
        setClub(res.results[0]);
      }
    });
  }, [clubName]);

  return {
    club,
    error,
  };
}
