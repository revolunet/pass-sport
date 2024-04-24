import { useRouter } from 'next/navigation';
import styles from '../styles.module.scss';
import Link from 'next/link';

export default function LegalTextReference() {
  const router = useRouter();

  return (
    <section>
      <h4>Texte de référence</h4>
      <Link
        className={styles['section__reference-link']}
        href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047952490?init=true&page=1&query=Pass%E2%80%99Sport&searchField=ALL&tab_selection=all"
        target="_blank"
      >
        Texte de référence Décret n° 2023-741 du 8 août 2023 relatif au « pass Sport » 2023
      </Link>
    </section>
  );
}
