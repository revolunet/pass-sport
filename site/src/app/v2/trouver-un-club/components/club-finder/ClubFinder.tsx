'use client';

import { Badge } from '@codegouvfr/react-dsfr/Badge';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import styles from './style.module.scss';
import { Suspense, useEffect, useState } from 'react';
import { SqlSearchParams, getClubs } from '../../agent';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Button from '@codegouvfr/react-dsfr/Button';
import ClubFilters from '../club-filters/ClubFilters';
import { GeoGouvRegion } from 'types/Region';
import { ActivityResponse, SportGouvJSONResponse } from 'types/Club';
import cn from 'classnames';
import EligibilityTestBanner from '@/components/eligibility-test-banner/EligibilityTestBanner';
import ClubCount from '../club-count/ClubCount';
import { DisabilityTag } from '../disability-tag/DisabilityTag';
import { SEARCH_QUERY_PARAMS } from '@/app/constants/search-query-params';
import { useAppendQueryString } from '@/app/hooks/use-append-query-string';
import { useRemoveQueryString } from '@/app/hooks/use-remove-query-string';

interface Props {
  regions: GeoGouvRegion[];
  activities: ActivityResponse;
  isProVersion?: boolean;
}

const ClubFinder = ({ regions, activities, isProVersion }: Props) => {
  const limit = 20;
  const pathName = usePathname();
  const router = useRouter();
  const pathname = usePathname();
  const appendQueryString = useAppendQueryString();
  const removeQueryString = useRemoveQueryString();
  const searchParams = useSearchParams();
  const [clubs, setClubs] = useState<SportGouvJSONResponse>({
    results: [],
    total_count: 0,
  });

  const [clubParams, setClubParams] = useState<SqlSearchParams>({
    limit,
    offset: 0,
    ...(searchParams && {
      [SEARCH_QUERY_PARAMS.clubName]: searchParams.get(SEARCH_QUERY_PARAMS.clubName)
        ? `nom like '%${searchParams.get(SEARCH_QUERY_PARAMS.clubName)!.toUpperCase()}%'`
        : undefined,
      [SEARCH_QUERY_PARAMS.regionCode]: searchParams.get(SEARCH_QUERY_PARAMS.regionCode)
        ? `reg_code='${searchParams.get(SEARCH_QUERY_PARAMS.regionCode)}'`
        : undefined,
      [SEARCH_QUERY_PARAMS.city]: searchParams.get(SEARCH_QUERY_PARAMS.city)
        ? `commune='${searchParams.get(SEARCH_QUERY_PARAMS.city)!.toUpperCase()}'`
        : undefined,
      [SEARCH_QUERY_PARAMS.postalCode]: searchParams.get(SEARCH_QUERY_PARAMS.postalCode)
        ? `cp='${searchParams.get(SEARCH_QUERY_PARAMS.postalCode)}'`
        : undefined,
      [SEARCH_QUERY_PARAMS.handicap]: searchParams.get(SEARCH_QUERY_PARAMS.handicap)
        ? `handicap='${searchParams.get(SEARCH_QUERY_PARAMS.handicap)}'`
        : undefined,
      [SEARCH_QUERY_PARAMS.activity]: searchParams.get(SEARCH_QUERY_PARAMS.activity)
        ? `activites='${searchParams.get(SEARCH_QUERY_PARAMS.activity)}'`
        : undefined,
    }),
  });

  const { clubName, regionCode, city, postalCode, activity, disability, offset } = clubParams;

  useEffect(() => {
    if (offset === 0) {
      getClubs(clubParams).then(setClubs);
    } else {
      getClubs(clubParams).then((res) =>
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
    const params: SqlSearchParams = { ...clubParams, offset: 0, clubName: undefined };

    if (text.length !== 0) {
      params.clubName = `nom like '%${text.toUpperCase()}%'`;

      const queryString = appendQueryString([{ key: SEARCH_QUERY_PARAMS.clubName, value: text }]);

      router.push(`${pathname}?${queryString}`);
    } else {
      const queryString = removeQueryString(SEARCH_QUERY_PARAMS.clubName);

      router.push(`${pathname}?${queryString}`);
    }

    setClubParams(params);
  };

  const onRegionChanged = (region?: string) => {
    if (!region) {
      setClubParams((clubParams) => ({ ...clubParams, offset: 0, regionCode: undefined }));

      const queryString = removeQueryString(SEARCH_QUERY_PARAMS.regionCode);
      router.push(`${pathname}?${queryString}`);
    } else {
      setClubParams((clubParams) => ({
        ...clubParams,
        offset: 0,
        regionCode: `reg_code='${region}'`,
      }));

      const queryString = appendQueryString([
        { key: SEARCH_QUERY_PARAMS.regionCode, value: region },
      ]);

      router.push(`${pathname}?${queryString}`);
    }
  };

  const onCityChanged = ({ city, postalCode }: { city?: string; postalCode?: string }) => {
    if (!city && !postalCode) {
      setClubParams((clubParams) => ({
        ...clubParams,
        offset: 0,
        city: undefined,
        postalCode: undefined,
      }));
    }

    if (postalCode) {
      setClubParams((clubParams) => ({
        ...clubParams,
        offset: 0,
        postalCode: `cp='${postalCode}'`,
        city: undefined,
      }));
    }

    if (city) {
      setClubParams((clubParams) => ({
        ...clubParams,
        offset: 0,
        city: `commune='${city.toUpperCase()}'`,
        postalCode: undefined,
      }));

      const queryString = appendQueryString([
        { key: SEARCH_QUERY_PARAMS.city, value: city.toUpperCase() },
        { key: SEARCH_QUERY_PARAMS.postalCode, value: '' },
      ]);

      router.push(`${pathname}?${queryString}`);
    } else {
      const queryString = appendQueryString([
        { key: SEARCH_QUERY_PARAMS.city, value: '' },
        { key: SEARCH_QUERY_PARAMS.postalCode, value: postalCode?.toUpperCase() || '' },
      ]);

      router.push(`${pathname}?${queryString}`);
    }
  };

  const onActivityChanged = (activity?: string) => {
    if (!activity) {
      setClubParams((clubParams) => ({ ...clubParams, offset: 0, activity: undefined }));

      const queryString = removeQueryString(SEARCH_QUERY_PARAMS.activity);
      router.push(`${pathname}?${queryString}`);
    } else {
      setClubParams((clubParams) => ({
        ...clubParams,
        offset: 0,
        activity: `activites='${activity}'`,
      }));

      const queryString = appendQueryString([
        { key: SEARCH_QUERY_PARAMS.activity, value: activity },
      ]);

      router.push(`${pathname}?${queryString}`);
    }
  };

  const onDisabilityChanged = (isActivated: boolean) => {
    setClubParams((clubParams) => ({
      ...clubParams,
      offset: 0,
      ...(isActivated ? { disability: `handicap='Oui'` } : { disability: undefined }),
    }));

    let queryString = isActivated
      ? appendQueryString([{ key: SEARCH_QUERY_PARAMS.handicap, value: 'Oui' }])
      : removeQueryString(SEARCH_QUERY_PARAMS.handicap);

    router.push(`${pathname}?${queryString}`);
  };

  const isLastPage = clubs.total_count === clubs.results.length;

  return (
    <>
      <div className={styles.spacer}>
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

        <div className={cn('fr-mx-auto', 'fr-mt-6w', 'fr-mb-10w', styles.sizer)}>
          <div className={cn('fr-mt-6w', styles.container)}>
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
                detail={club.adresse ? `${club.adresse}, ${club.com_arm_name}` : club.com_arm_name}
                enlargeLink
                linkProps={{
                  href: `${pathName}/${encodeURIComponent(club.nom)}`,
                }}
                size="medium"
                start={
                  <ul className="fr-tags-group">
                    {!!club.activites && club.activites.length > 0 && (
                      <li>
                        <Tag>
                          {club.activites.length}{' '}
                          {club.activites.length > 1 ? 'activités' : 'activité'}
                        </Tag>
                      </li>
                    )}

                    {club.handicap === 'Oui' && (
                      <li>
                        <DisabilityTag club={club} />
                      </li>
                    )}
                  </ul>
                }
                title={`${club.nom}`}
                titleAs="h3"
              />
            ))}
          </div>
          {!isLastPage && (
            <div className={cn('fr-mt-9w', styles['more-clubs-wrapper'])}>
              <Button priority="primary" size="large" onClick={seeMoreClubsHandler}>
                Voir plus de clubs
              </Button>
            </div>
          )}

          <div
            className={cn(
              'fr-alert',
              'fr-alert--info',
              'fr-mt-9w',
              'fr-mx-auto',
              styles['alert-sizer'],
            )}
          >
            <h6 className="fr-alert__title">Information</h6>
            <p>
              {isProVersion
                ? `Si votre club n'apparait pas, c'est qu'il n'est pas encore référencé. Dans ce cas là, n'hésitez pas à vous rapprocher de plusieurs interlocuteurs dans votre département en fonction de votre statut`
                : `Si mon club n’apparait pas, c’est qu’il n’accepte probablement pas encore le pass
              Sport. N’hésitez pas à vous rapprocher de votre club en lui proposant d’accepter le
              dispositif.`}
            </p>
          </div>
        </div>
      </div>

      {!isProVersion && <EligibilityTestBanner />}
    </>
  );
};

export default ClubFinder;
