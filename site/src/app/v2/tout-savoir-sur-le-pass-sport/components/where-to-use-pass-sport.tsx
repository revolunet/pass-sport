'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import { useRouter } from 'next/navigation';

export default function WhereToUsePassSport() {
  const router = useRouter();

  return (
    <section>
      <h4>Où l&apos;utiliser ?</h4>

      <p>
        Vous pouvez utiliser le pass Sport dans plus de 85 000 clubs et salles de sport, partout en
        France.
        <br />
        Il est valable du 1er juin au 31 décembre 2024
        <br />
        La liste des établissements partenaires est disponible ici :
      </p>

      <Button priority="secondary" onClick={() => router.push('trouver-un-club', { scroll: true })}>
        Trouver mon club partenaire
      </Button>
    </section>
  );
}
