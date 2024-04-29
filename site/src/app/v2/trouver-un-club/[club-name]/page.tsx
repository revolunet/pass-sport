'use client';

import styles from './style.module.scss';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import { formatPhoneNumber } from './helpers';
import MedicalCertificatePanel from './components/medicalCertificatPanel/MedicalCertificatePanel';
import { useEffect, useMemo, useState } from 'react';
import { getClubs } from '../agent';
import EligibilityTestBanner from '../../../../../components/eligibility-test-banner/EligibilityTestBanner';
import dynamic from 'next/dynamic';
import SocialMediaPanel from '../../accueil/components/social-media-panel/SocialMediaPanel';

const ClubPage = ({ params }: { params: { 'club-name': string } }) => {
  const clubName = decodeURIComponent(params['club-name']);

  const [club, setClub] = useState<Club | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    getClubs({ nom: `nom="${clubName.toUpperCase()}"`, offset: 0 }).then((res) => {
      if (res.results.length === 0) {
        setError("Le club n'a pas été trouvé");
      } else {
        setClub(res.results[0]);
      }
    });
  }, [clubName]);

  const Map = useMemo(() => dynamic(() => import('./components/map/Map')), []);

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  if (!club) {
    return null;
  }

  return (
    <>
      <div className="fr-mx-2w">
        <div className={`fr-p-3w fr-mt-3w fr-mx-auto fr-mb-12w ${styles.panel}`}>
          <section className={styles.info}>
            <h2>{club.nom}</h2>
            <div className={`fr-my-2w ${styles.tags}`}>
              <Tag small>
                <p className="fr-text--xs">{club.activites.length} activités</p>
              </Tag>
              {club.a_accueil_handicap_moteur === 'Oui' && (
                <Tag className={styles.disability} small>
                  <p className="fr-text--xs">Accueil personnes aux Handicaps moteurs</p>
                </Tag>
              )}
              {club.a_accueil_handicap_mental === 'Oui' && (
                <Tag className={styles.disability} small>
                  <p className="fr-text--xs">Accueil personnes aux Handicaps mentaux</p>
                </Tag>
              )}
            </div>
            <div className={styles.contact}>
              {(club.adresse || club.commune) && (
                <p className="fr-text--xs fr-m-0">
                  <span
                    className={`fr-pr-1w fr-icon-map-pin-2-line ${styles['icon-color']} fr-icon--sm`}
                    aria-hidden="true"
                  ></span>
                  {club.adresse && club.adresse}
                  {club.adresse && club.commune && ', '}
                  {club.commune && club.commune}
                </p>
              )}

              {club.telephone && (
                <p className="fr-text--xs fr-m-0">
                  <span
                    className={`fr-pr-1w fr-icon-phone-line ${styles['icon-color']} fr-icon--sm`}
                    aria-hidden="true"
                  ></span>
                  {formatPhoneNumber(club.telephone)}
                </p>
              )}

              {club.courriel && (
                <p className="fr-text--xs fr-m-0">
                  <span
                    className={`fr-pr-1w fr-icon-mail-line ${styles['icon-color']} fr-icon--sm`}
                    aria-hidden="true"
                  ></span>
                  {club.courriel}
                </p>
              )}
            </div>
            <hr className={`fr-mt-3w fr-mb-0 fr-mx-0 ${styles.separator}`} />
            <h3>Les activités</h3>
            <ul className={styles.activities}>
              <div className={styles.grid}>
                {club.activites.map((activity) => (
                  <li key={activity} className="fr-mr-3w fr-p-0">
                    {activity}
                  </li>
                ))}
              </div>
            </ul>
            <hr className={`fr-mt-3w fr-mb-0 fr-mx-0 ${styles.separator}`} />
          </section>

          <section>
            <h4 className="fr-mb-2w">Où nous trouver</h4>
            <Map club={club} />
          </section>
        </div>

        <MedicalCertificatePanel />
      </div>
      <EligibilityTestBanner />
      <SocialMediaPanel />
    </>
  );
};

export default ClubPage;
