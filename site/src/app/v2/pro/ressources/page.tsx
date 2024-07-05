import PageHeader from '@/components/PageHeader/PageHeader';
import styles from './styles.module.scss';
import About from './components/about';
import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import Link from 'next/link';
import Accordion from '@codegouvfr/react-dsfr/Accordion';
import { Metadata } from 'next';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';

export const metadata: Metadata = {
  title: 'Ressources - pass Sport',
};

export default function ToutSavoirSurLePassSport() {
  return (
    <>
      <PageHeader title="Ressources" subtitle="" isProVersion />
      <main className={styles.container} tabIndex={-1} id={SKIP_LINKS_ID.mainContent} role="main">
        <About />

        <div className={styles['section-container']}>
          <div>
            <h4 className="fr-mb-3w">
              Vous portez des aides directes à la pratique pour l&apos;un des publics éligibles au
              pass Sport, référencez-les.
            </h4>

            <p className="fr-mb-3w">
              Le pass Sport est un dispositif de l&apos;État mis en place pour la 3ème année
              consécutive pour une aide directe à la pratique en permettant de bénéficier d&apos;une
              déduction de 50€ dès l&apos;inscription. Cependant, d&apos;autres aides de ce type
              existent, qu&apos;elles soient mises en place par votre collectivité, votre structure
              voire même par des acteurs privés qui soutiennent votre fédération.
            </p>

            <p className="fr-mb-3w">
              Pour donner de la visibilité à ces aides existantes et permettre aux bénéficiaires d’y
              recourir, le ministère des sports et des jeux olympiques et paralympiques a lancé un
              recensement des aides possibles que vous retrouverez sur Aides-Territoires{' '}
              <Link
                href="https://aides-territoires.beta.gouv.fr/portails/pass-sport/"
                target="_blank"
              >
                en cliquant ici
              </Link>
              .
            </p>

            <p>
              Aidez-nous à enrichir cette cartographie en nous faisant remonter l’information via
              PassSport@sports.gouv.fr et partage ainsi votre action en direction des bénéficiaires
              ou de leurs familles.
            </p>
          </div>

          <div>
            <h4 className="fr-mb-3w">
              Les outils de communication mis à disposition par le ministère des Sports et des JOP
            </h4>

            <p className="fr-text--lg fr-text--bold fr-mb-0">
              Le ministère des sports et des jeux Olympiques et Paralympiques a élaboré tout un
              ensemble d&apos;outils et supports de communication qui sont mis à dispositif de
              l&apos;ensemble des acteurs et peuvent être utilisés pour assurer la promotion du
              dispositif.
            </p>
          </div>

          <div>
            <ul>
              <li>
                <h6>Nos outils de communications</h6>
              </li>
            </ul>

            <div>
              <Accordion label="Logo">
                <div className={styles['accordion__expanded-container']}>
                  <div>
                    <h6 className="fr-mb-2w">Logo</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/logo/principal.png"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Logo Bleu (principal)
                      </Link>
                      <Link
                        href="/assets/ressources/logo/secondaire.png"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Logo Blanc (secondaire)
                      </Link>
                      <Link
                        href="/assets/ressources/logo/charte.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Charte d’utilisation du logo
                      </Link>
                    </p>
                  </div>
                </div>
              </Accordion>

              <Accordion label="Affiches A4">
                <div className={styles['accordion__expanded-container']}>
                  <div>
                    <h6 className="fr-mb-2w">Affiches Génériques</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a4/generique-50-euros-economie.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Générique 50€ d’économie
                      </Link>
                      <Link
                        href="/assets/ressources/affiches-a4/generique-plus-de-sport.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Générique plus de sport
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h6 className="fr-mb-2w">Affiches écoliers / étudiants</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a4/primaire.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Primaire
                      </Link>
                      <Link
                        href="/assets/ressources/affiches-a4/college-lycee.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Collège - Lycée
                      </Link>
                      <Link
                        href="/assets/ressources/affiches-a4/boursier.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Boursier
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h6 className="fr-mb-2w">Affiches Handisport</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a4/handisport.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Handi
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h6 className="fr-mb-2w">Affiches Athlètes</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a4/estelle.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Estelle
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a4/gael.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Gael
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a4/mariejo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Marie-Jo
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a4/teddy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Teddy
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a4/tony.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Tony
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a4/zinedine.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Zinedine
                      </Link>
                    </p>
                  </div>
                </div>
              </Accordion>

              <Accordion label="Affiches A3">
                <div className={styles['accordion__expanded-container']}>
                  <div>
                    <h6 className="fr-mb-2w">Affiches Génériques</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a3/generique-50-euros-economie.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Générique 50€ d’économie
                      </Link>
                      <Link
                        href="/assets/ressources/affiches-a3/generique-plus-de-sport.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Générique plus de sport
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h6 className="fr-mb-2w">Affiches écoles</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a3/primaire.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Primaire
                      </Link>
                      <Link
                        href="/assets/ressources/affiches-a3/college-lycee.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Collège - Lycée
                      </Link>
                      <Link
                        href="/assets/ressources/affiches-a3/boursier.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Boursier
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h6 className="fr-mb-2w">Affiches Handisport</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a3/handisport.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Handi
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h6 className="fr-mb-2w">Affiches Print</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a3/estelle.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Estelle
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a3/gael.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Gael
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a3/mariejo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Marie-Jo
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a3/teddy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Teddy
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a3/tony.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Tony
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a3/zinedine.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Zinedine
                      </Link>
                    </p>
                  </div>
                </div>
              </Accordion>

              <Accordion label="Affiches A2">
                <div className={styles['accordion__expanded-container']}>
                  <div>
                    <h6 className="fr-mb-2w">Affiches Génériques</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a2/generique-50-euros-economie.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Générique 50€ d’économie
                      </Link>
                      <Link
                        href="/assets/ressources/affiches-a2/generique-plus-de-sport.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Générique plus de sport
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h6 className="fr-mb-2w">Affiches écoles</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a2/primaire.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Primaire
                      </Link>
                      <Link
                        href="/assets/ressources/affiches-a2/college-lycee.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Collège - Lycée
                      </Link>
                      <Link
                        href="/assets/ressources/affiches-a2/boursier.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Boursier
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h6 className="fr-mb-2w">Affiches Handisport</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a2/handisport.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche Handi
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h6 className="fr-mb-2w">Affiches Print</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/affiches-a2/estelle.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Estelle
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a2/gael.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Gael
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a2/mariejo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Marie-Jo
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a2/teddy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Teddy
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a2/tony.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Tony
                      </Link>

                      <Link
                        href="/assets/ressources/affiches-a2/zinedine.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiche print Zinedine
                      </Link>
                    </p>
                  </div>
                </div>
              </Accordion>

              <Accordion label="Flyers">
                <div className={styles['accordion__expanded-container']}>
                  <div>
                    <h6 className="fr-mb-2w">Flyer Génériques</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/flyers/generique.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Flyer générique
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h6 className="fr-mb-2w">Flyer écoles et clubs</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/flyers/primaire.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Flyer Primaire
                      </Link>
                      <Link
                        href="/assets/ressources/flyers/club-1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Flyer Club
                      </Link>
                    </p>
                  </div>
                </div>
              </Accordion>

              <Accordion label="Vignettes réseaux sociaux">
                <div className={styles['accordion__expanded-container']}>
                  <div>
                    <h6 className="fr-mb-2w">Format 1080x1080</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/vignettes/coup-d-envoi.png"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Réseaux sociaux - Coup d’envoi
                      </Link>
                      <Link
                        href="/assets/ressources/vignettes/club.png"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Réseaux sociaux - Club
                      </Link>
                      <Link
                        href="/assets/ressources/vignettes/fitness.png"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Réseaux sociaux - Fitness
                      </Link>
                      <Link
                        href="/assets/ressources/vignettes/partenaire.png"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Réseaux sociaux - Partenaire
                      </Link>
                    </p>
                  </div>
                </div>
              </Accordion>

              <Accordion label="Kakémono">
                <div className={styles['accordion__expanded-container']}>
                  <div>
                    <h6 className="fr-mb-2w">Kakemono Générique</h6>
                    <p className={styles['accordion__links-container']}>
                      <Link
                        href="/assets/ressources/kakemono.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kakemono pass Sport
                      </Link>
                    </p>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>

          <div>
            <h4 className="fr-mb-3w">Texte de référence</h4>

            <Link
              href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047952490?init=true&page=1&query=Pass%E2%80%99Sport&searchField=ALL&tab_selection=all"
              target="_blank"
            >
              Décret n° 2023-741 du 8 août 2023 relatif au « pass Sport » 2023
            </Link>
          </div>
        </div>

        <SocialMediaPanel isProVersion />
      </main>
    </>
  );
}
