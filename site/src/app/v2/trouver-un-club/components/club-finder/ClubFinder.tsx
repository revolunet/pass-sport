'use client';

import { Badge } from '@codegouvfr/react-dsfr/Badge';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { SqlSearchParams, getClubs } from '../../agent';
import { usePathname } from 'next/navigation';

import Button from '@codegouvfr/react-dsfr/Button';
import ClubFilters from '../club-filters/ClubFilters';
import { GeoGouvRegion } from 'types/Region';
import { Activity, ActivityResponse, SportGouvJSONResponse } from 'types/Club';
import SocialMediaPanel from '@/app/components/social-media-panel/SocialMediaPanel';
import cn from 'classnames';
import EligibilityTestBanner from '@/components/eligibility-test-banner/EligibilityTestBanner';
import ClubCount from '../club-count/ClubCount';

interface Props {
  regions: GeoGouvRegion[];
  activities: ActivityResponse;
}

const ClubFinder: React.FC<Props> = ({ regions, activities }) => {
  const limit = 20;
  const pathName = usePathname();

  const [clubs, setClubs] = useState<SportGouvJSONResponse>({
    results: [],
    total_count: 0,
  });
  const [clubParams, setClubParams] = useState<SqlSearchParams>({ limit, offset: 0 });

  const { clubName, regionCode, city, postalCode, activity, disability, offset } = clubParams;

  useEffect(() => {
    if (offset === 0) {
      getClubs({
        clubName,
        regionCode,
        city,
        postalCode,
        activity,
        disability,
        offset,
        limit,
      }).then(setClubs);
    } else {
      getClubs({
        clubName,
        regionCode,
        city,
        postalCode,
        activity,
        disability,
        offset,
        limit,
      }).then((res) =>
        setClubs((clubs) => {
          return { results: [...clubs.results, ...res.results], total_count: res.total_count };
        }),
      );
    }
  }, [clubName, regionCode, city, postalCode, activity, disability, offset]);

  const seeMoreClubsHandler = () => {
    setClubParams((clubParams) => ({ ...clubParams, offset: clubParams.offset + limit }));
  };

  const searchClubByTextHandler = (text: string) => {
    const clubParams: SqlSearchParams = { offset: 0 };
    if (text.length !== 0) {
      clubParams.clubName = `nom like '%${text.toUpperCase()}%'`;
    }
    setClubParams(clubParams);
  };

  const onRegionChanged = (region?: string) => {
    if (!region) {
      setClubParams((clubParams) => ({ ...clubParams, regionCode: undefined }));
    } else {
      setClubParams((clubParams) => ({ ...clubParams, regionCode: `reg_code='${region}'` }));
    }
  };

  const onCityChanged = ({ city, postalCode }: { city?: string; postalCode?: string }) => {
    !city &&
      !postalCode &&
      setClubParams((clubParams) => ({
        ...clubParams,
        city: undefined,
        postalCode: undefined,
      }));
    city &&
      setClubParams((clubParams) => ({
        ...clubParams,
        city: `commune='${city.toUpperCase()}'`,
        postalCode: undefined,
      }));
    postalCode &&
      setClubParams((clubParams) => ({
        ...clubParams,
        postalCode: `cp='${postalCode}'`,
        city: undefined,
      }));
  };

  const onActivityChanged = (activity?: string) => {
    if (!activity) {
      setClubParams((clubParams) => ({ ...clubParams, activity: undefined }));
    } else {
      setClubParams((clubParams) => ({ ...clubParams, activity: `activites='${activity}'` }));
    }
  };

  const onDisabilityChanged = (isDisabled: 'Non' | 'Oui') => {
    setClubParams((clubParams) => ({
      ...clubParams,
      disability: `handicap='${isDisabled}'`,
    }));
  };

  const isLastPage = clubs.total_count === clubs.results.length;

  return (
    <>
      <ClubFilters
        regions={regions}
        activities={activities}
        onTextSearch={searchClubByTextHandler}
        onRegionChanged={onRegionChanged}
        onCityChanged={onCityChanged}
        onActivityChanged={onActivityChanged}
        onDisabilityChanged={onDisabilityChanged}
      />

      <ClubCount displayedClubCount={clubs.results.length} totalClubCount={clubs.total_count} />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          {clubs.results.map((club) => (
            /** @ts-ignore */
            <Card
              key={club.nom + club.adresse + club.commune}
              className={styles.item}
              background
              badge={
                !!club.activites &&
                club.activites.slice(0, 1).map((a) => (
                  <Badge key={a} severity="new">
                    {a}
                  </Badge>
                ))
              }
              imageAlt=""
              border
              detail={club.adresse + ', ' + club.com_arm_name}
              enlargeLink
              linkProps={{
                href: `${pathName}/${encodeURIComponent(club.nom)}`,
              }}
              size="medium"
              start={
                <ul className="fr-tags-group">
                  {!!club.activites && club.activites.length > 0 && (
                    <li>
                      <Tag>{club.activites.length} activités</Tag>
                    </li>
                  )}

                  {club.handicap === 'Oui' && (
                    <li>
                      <Tag> Handicap</Tag>
                    </li>
                  )}
                </ul>
              }
              title={club.nom}
              titleAs="h3"
            />
          ))}
        </div>
        {!isLastPage && (
          <div className={`fr-mt-9w ${styles['more-clubs-wrapper']}`}>
            <Button priority="primary" size="large" onClick={seeMoreClubsHandler}>
              Voir plus de clubs
            </Button>
          </div>
        )}

        <div className={`fr-alert fr-alert--info fr-mt-9w fr-mx-auto ${styles['alert-sizer']}`}>
          <h6 className="fr-alert__title">Information</h6>
          <p>
            Si mon club n’apparait pas, c’est qu’il n’accepte probablement pas encore le pass Sport.
            N’hésitez pas à vous rapprocher de votre club en lui proposant d’accepter le dispositif.
          </p>
        </div>
      </div>

      <EligibilityTestBanner />
      <SocialMediaPanel />
    </>
  );
};

export default ClubFinder;
