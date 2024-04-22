import Button from '@codegouvfr/react-dsfr/Button';
import { useRouter } from 'next/navigation';

export default function WhereToUsePassSport() {
  const router = useRouter();

  return (
    <section>
      <h4>Où l&apos;utiliser ?</h4>

      <p>
        Vous pouvez utiliser le Pass Sport dans plus de 55 000 clubs et salles de sport, partout en
        France.
        <br />
        La liste des établissements partenaires est disponible ici :
      </p>

      <Button priority="secondary" onClick={() => router.push('trouver-un-club', { scroll: true })}>
        Trouver mon Club partenaire
      </Button>
    </section>
  );
}
