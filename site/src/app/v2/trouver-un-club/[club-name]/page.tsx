import Button from '@codegouvfr/react-dsfr/Button';
import styles from './style.module.scss';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import { formatPhoneNumber } from './helpers';
import Link from 'next/link';
import MedicalCertificatePanel from './components/medicalCertificatPanel/MedicalCertificatePanel';

const ClubPage = () => {
  // const club = {
  //   nom: 'BOXE PIEDS POINGS CORBEHEM 62',
  //   cplt_1: 'mairie',
  //   num_voie: null,
  //   type_voie: null,
  //   voie: null,
  //   bp: null,
  //   cedex: null,
  //   cp: '62112',
  //   commune: 'CORBEHEM',
  //   telephone: null,
  //   courriel: null,
  //   site_web: null,
  //   est_volontaire: 'Oui',
  //   activites: ['Kickboxing'],
  //   a_accueil_handicap_mental: null,
  //   // a_accueil_handicap_moteur: null,
  //   a_accueil_handicap_moteur: true,

  //   a_reseau: 'Oui',
  //   a_agrement: 'Non',
  //   adresse: 'mairie',
  //   handicap: 'Non',
  //   insee_com: '62383/62240',
  //   com_code: '62240',
  //   dep_code: '62',
  //   com_arm_name: 'Corbehem',
  //   epci_code: 200044048,
  //   epci_name: 'CC Osartis Marquion',
  //   dep_name: 'Pas-de-Calais',
  //   reg_code: 32,
  //   reg_name: 'Hauts-de-France',
  //   geoloc_finale: {
  //     lon: 3.051925,
  //     lat: 50.335714,
  //   },
  // };

  const club = {
    nom: 'VERTIGE',
    cplt_1: 'Espace sportif Boris DIAW',
    num_voie: '11',
    type_voie: 'RUE',
    voie: 'de la Renaissance',
    bp: null,
    cedex: null,
    cp: '33400',
    commune: 'TALENCE',
    // commune: null,
    telephone: '0603168266',
    // courriel: null,
    courriel: 'maxime.chaillet@pathtech.fr',
    site_web: null,
    est_volontaire: 'Oui',
    activites: [
      'Autres Arts mariaux et sport de combat (ex: Kendo)',
      "Course d'orientation",
      'Randonnée pédestre',
      'Ski alpinisme',
      'Ski alpin',
      'Escalade',
    ],
    a_accueil_handicap_mental: true,
    a_accueil_handicap_moteur: true,
    a_reseau: 'Oui',
    a_agrement: 'Oui',
    adresse: '11 rue de la renaissance',
    // adresse: null,
    handicap: 'Non',
    insee_com: '33522',
    com_code: '33522',
    dep_code: '33',
    com_arm_name: 'Talence',
    epci_code: 243300316,
    epci_name: 'Bordeaux Métropole',
    dep_name: 'Gironde',
    reg_code: 75,
    reg_name: 'Nouvelle-Aquitaine',
    geoloc_finale: {
      lon: -0.594225,
      lat: 44.818061,
    },
  };

  return (
    <div>
      <div className={styles.frame}>
        <section className={styles.info}>
          <h2>{club.nom}</h2>

          <div className={`fr-my-2w ${styles.tags}`}>
            <Tag small>
              <p className="fr-text--xs">{club.activites.length} activités</p>
            </Tag>
            {club.a_accueil_handicap_moteur && (
              <Tag className={styles.disability} small>
                <p className="fr-text--xs">Accueil personnes aux Handicaps moteurs</p>
              </Tag>
            )}
            {club.a_accueil_handicap_mental && (
              <Tag className={styles.disability} small>
                <p className="fr-text--xs">Accueil personnes aux Handicaps mentaux</p>
              </Tag>
            )}
          </div>

          <div className={styles.contact}>
            {(club.adresse || club.commune) && (
              <p className="fr-text--xs">
                <span
                  className={`fr-icon-map-pin-2-line ${styles['icon-color']} fr-icon--sm`}
                  aria-hidden="true"
                ></span>
                {club.adresse && club.adresse}
                {club.adresse && club.commune && ', '}
                {club.commune && club.commune}
              </p>
            )}

            {club.telephone && (
              <p className="fr-text--xs">
                <span
                  className={`fr-icon-phone-line ${styles['icon-color']} fr-icon--sm`}
                  aria-hidden="true"
                ></span>
                {formatPhoneNumber(club.telephone)}
              </p>
            )}

            {club.courriel && (
              <p className="fr-text--xs">
                <span
                  className={`fr-icon-mail-line ${styles['icon-color']} fr-icon--sm`}
                  aria-hidden="true"
                ></span>
                {club.courriel}
              </p>
            )}
          </div>
          <hr className={styles.separator} />

          <h3>Les activités</h3>
          <ul className={styles.activities}>
            <div className={styles.grid}>
              {club.activites.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </div>
          </ul>

          <hr className={styles.separator} />
        </section>

        {/* <h4>Où nous trouver</h4> */}
      </div>

      <MedicalCertificatePanel />
    </div>
  );
};

export default ClubPage;
