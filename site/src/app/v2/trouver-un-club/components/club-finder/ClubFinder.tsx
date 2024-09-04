'use client';

import styles from './style.module.scss';
import { useCallback, useContext, useEffect, useState } from 'react';
import { getClubs, getClubsWithoutLimit, SqlSearchParams } from '../../agent';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ClubFilters from '../club-filters/ClubFilters';
import { ActivityResponse, ClubsOnList, ClubsOnMap } from 'types/Club';
import cn from 'classnames';
import ClubCount from '../club-count/ClubCount';
import { SEARCH_QUERY_PARAMS } from '@/app/constants/search-query-params';
import { useAppendQueryString } from '@/app/hooks/use-append-query-string';
import { useRemoveQueryString } from '@/app/hooks/use-remove-query-string';
import { escapeSingleQuotes } from '../../../../../../utils/string';
import ClubMapView from '../club-map-view/ClubMapView';
import ClubListView from '../club-list-view/ClubListView';
import MissingClubInformationPanel from '../missing-club-information-panel/MissingClubInformationPanel';
import { SegmentedControl } from '@codegouvfr/react-dsfr/SegmentedControl';
import { GeolocationContext } from '@/store/geolocationContext';
import { DEFAULT_DISTANCE } from 'utils/map';
import { push } from '@socialgouv/matomo-next';
import { setFocusOn } from 'utils/dom';

interface Props {
  activities: ActivityResponse;
  isProVersion?: boolean;
}

const ClubFinder = ({ activities, isProVersion }: Props) => {
  const limit = 20;
  const router = useRouter();
  const pathname = usePathname();
  const appendQueryString = useAppendQueryString();
  const removeQueryString = useRemoveQueryString();
  const searchParams = useSearchParams();
  let distanceParam =
    (searchParams && searchParams.get(SEARCH_QUERY_PARAMS.distance)) || DEFAULT_DISTANCE.toString();

  const geolocationContext = useContext(GeolocationContext);
  const { latitude, longitude, loading } = geolocationContext;

  const [clubsOnList, setClubsOnList] = useState<ClubsOnList>({
    results: [],
    total_count: 0,
    firstRecievedClubIndex: 0,
  });

  const [clubsOnMap, setClubsOnMap] = useState<ClubsOnMap>({
    results: [],
    total_count: 0,
    isFetchingClubsOnMap: true,
  });

  const [clubParams, setClubParams] = useState<SqlSearchParams>({
    limit,
    offset: 0,
    ...(searchParams && {
      [SEARCH_QUERY_PARAMS.clubName]: searchParams.get(SEARCH_QUERY_PARAMS.clubName)
        ? `search(nom,"${searchParams.get(SEARCH_QUERY_PARAMS.clubName)!.toUpperCase()}")`
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
      [SEARCH_QUERY_PARAMS.distance]: undefined,
    }),
  });

  const [isGeolocationFilterActive, setIsGeolocationFilterActive] = useState(true);

  const parseParameterFromQuery = (searchQueryParam: keyof typeof SEARCH_QUERY_PARAMS) => {
    const param = searchParams && searchParams.get(SEARCH_QUERY_PARAMS[searchQueryParam]);

    if (searchQueryParam === 'isShowingMapTab') {
      return Number(param) === 1 ? param : undefined;
    }
  };

  const showClubListOnMap = parseParameterFromQuery('isShowingMapTab') === '1';

  const { clubName, city, postalCode, activity, disability, offset, distance } = clubParams;

  useEffect(() => {
    const clubParams = {
      limit,
      offset,
      clubName,
      city,
      postalCode,
      disability,
      activity,
    };
    if (offset === 0) {
      getClubs(clubParams).then((clubs) => setClubsOnList({ ...clubs, firstRecievedClubIndex: 0 }));
    } else {
      getClubs(clubParams).then((res) =>
        setClubsOnList((clubs) => {
          return {
            results: [...clubs.results, ...res.results],
            total_count: res.total_count,
            firstRecievedClubIndex: offset + 1,
          };
        }),
      );
    }
  }, [clubName, city, postalCode, activity, disability, offset, limit]);

  useEffect(() => {
    if (!loading && distance !== undefined) {
      setClubsOnMap((provider) => ({ ...provider, isFetchingClubsOnMap: true }));
      getClubsWithoutLimit({
        clubName,
        city: isGeolocationFilterActive ? undefined : city,
        postalCode: isGeolocationFilterActive ? undefined : postalCode,
        activity,
        disability,
        distance,
        offset,
      }).then((response) => setClubsOnMap({ ...response, isFetchingClubsOnMap: false }));
    }
  }, [
    offset,
    clubName,
    city,
    postalCode,
    activity,
    disability,
    distance,
    loading,
    isGeolocationFilterActive,
  ]);

  const buildDistanceExpression = useCallback((): string | null => {
    if (!latitude && !longitude) {
      return null;
    }

    return `within_distance(geoloc_finale, GEOM'POINT(${longitude} ${latitude} )',${distanceParam}km)`;
  }, [latitude, longitude, distanceParam]);

  useEffect(() => {
    if (!loading) {
      setClubParams((previousState) => {
        return {
          ...previousState,
          [SEARCH_QUERY_PARAMS.distance]: buildDistanceExpression(),
        };
      });
    }
  }, [loading, buildDistanceExpression]);

  useEffect(() => {
    setIsGeolocationFilterActive(!!latitude);
  }, [latitude]);

  useEffect(() => {
    setFocusOn(`#club-list > li:nth-child(${clubsOnList.firstRecievedClubIndex}) a`);
  }, [clubsOnList.firstRecievedClubIndex]);

  const seeMoreClubsHandler = () => {
    setClubParams((clubParams) => ({ ...clubParams, offset: clubParams.offset + limit }));
  };

  const onCityChanged = ({ city, postalCode }: { city?: string; postalCode?: string }) => {
    const queryParams = [
      { key: SEARCH_QUERY_PARAMS.centerLat, value: '' },
      { key: SEARCH_QUERY_PARAMS.centerLng, value: '' },
      { key: SEARCH_QUERY_PARAMS.zoom, value: '' },
    ];

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
      const escapedSingleQuotesCity = escapeSingleQuotes(city);

      setClubParams((clubParams) => ({
        ...clubParams,
        offset: 0,
        city: `commune='${escapedSingleQuotesCity.toUpperCase()}'`,
        postalCode: undefined,
      }));

      queryParams.push({
        key: SEARCH_QUERY_PARAMS.city,
        value: escapedSingleQuotesCity.toUpperCase(),
      });
      queryParams.push({ key: SEARCH_QUERY_PARAMS.postalCode, value: '' });
    } else {
      queryParams.push({ key: SEARCH_QUERY_PARAMS.city, value: '' });
      queryParams.push({
        key: SEARCH_QUERY_PARAMS.postalCode,
        value: postalCode?.toUpperCase() || '',
      });
    }
    const queryString = appendQueryString(queryParams);
    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  const onActivityChanged = (activity?: string) => {
    if (!activity) {
      setClubParams((clubParams) => ({ ...clubParams, offset: 0, activity: undefined }));

      const queryString = removeQueryString(SEARCH_QUERY_PARAMS.activity);
      router.push(`${pathname}?${queryString}`, { scroll: false });
    } else {
      const escapedSingleQuotesActivity = escapeSingleQuotes(activity);

      setClubParams((clubParams) => ({
        ...clubParams,
        offset: 0,
        activity: `activites='${escapedSingleQuotesActivity}'`,
      }));

      const queryString = appendQueryString([
        { key: SEARCH_QUERY_PARAMS.activity, value: escapedSingleQuotesActivity },
      ]);

      router.push(`${pathname}?${queryString}`, { scroll: false });
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

    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  const onDistanceChanged = (distance: string) => {
    push(['trackEvent', 'Searching clubs', 'Change distance', `Distance: ${distance}`]);

    setClubParams((clubParams) => ({
      ...clubParams,
      offset: 0,
    }));

    const queryString = appendQueryString([{ key: SEARCH_QUERY_PARAMS.distance, value: distance }]);
    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  const onAroundMeActiveStateChanged = (isAroundMeFilterActive: boolean) => {
    setIsGeolocationFilterActive(isAroundMeFilterActive);

    let queryString: String;
    if (isAroundMeFilterActive) {
      setClubParams((previousState) => ({
        ...previousState,
        city: undefined,
        postalCode: undefined,
        distance: buildDistanceExpression(),
      }));

      queryString = appendQueryString([
        { key: SEARCH_QUERY_PARAMS.city, value: '' },
        { key: SEARCH_QUERY_PARAMS.postalCode, value: '' },
      ]);

      router.push(`${pathname}?${queryString}`, { scroll: false });
    } else {
      setClubParams((previousState) => ({
        ...previousState,
        distance: null,
      }));
    }
  };

  const showClubsOnListTabHandler = () => {
    const queryString = appendQueryString([
      { key: SEARCH_QUERY_PARAMS.isShowingMapTab, value: '0' },
    ]);

    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  const showClubsOnMapTabHandler = () => {
    let removableQueryStrings = [{ key: SEARCH_QUERY_PARAMS.isShowingMapTab, value: '1' }];

    push(['trackEvent', 'Carte Button', 'Clicked', 'Find a club page']);

    if (latitude && isGeolocationFilterActive) {
      removableQueryStrings.push({ key: SEARCH_QUERY_PARAMS.city, value: '' });

      setClubParams((prevState) => ({
        ...prevState,
        city: undefined,
      }));
    }

    const queryString = appendQueryString(removableQueryStrings);
    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  return (
    <div className={cn('fr-mb-10w', styles.spacer)}>
      <ClubFilters
        activities={activities}
        isGeolocationVisible={showClubListOnMap}
        isGeolocationCheckboxActive={!!latitude}
        isGeolocationFilterActive={isGeolocationFilterActive}
        isMapVisible={showClubListOnMap}
        onCityChanged={onCityChanged}
        onActivityChanged={onActivityChanged}
        onDisabilityChanged={onDisabilityChanged}
        onDistanceChanged={onDistanceChanged}
        onAroundMeActiveStateChanged={onAroundMeActiveStateChanged}
      />

      {isProVersion && (
        <div className="fr-mb-9w">
          <MissingClubInformationPanel isProVersion={true} />
        </div>
      )}

      <div className={styles.center}>
        <SegmentedControl
          hideLegend={true}
          legend="Choisissez entre la vue liste et la vue cartographie pour voir les clubs; Utiliser les flèches droite et gauche pour changer de vue"
          segments={[
            {
              label: 'Liste',
              iconId: 'fr-icon-settings-5-line',
              nativeInputProps: {
                checked: !showClubListOnMap,
                onChange: showClubsOnListTabHandler,
              },
            },
            {
              label: 'Carte',
              iconId: 'fr-icon-settings-5-line',
              nativeInputProps: {
                checked: showClubListOnMap,
                onChange: showClubsOnMapTabHandler,
              },
            },
          ]}
        />
      </div>

      <div className={cn('fr-mt-9w')}>
        <ClubCount
          displayedClubCount={
            showClubListOnMap ? clubsOnMap.total_count : clubsOnList.results.length
          }
          totalClubCount={clubsOnList.total_count}
          isPaginating={!showClubListOnMap}
        />
      </div>

      <div className="fr-pt-3w">
        {showClubListOnMap ? (
          <ClubMapView
            clubsProvider={clubsOnMap}
            isGeolocationCircleVisible={isGeolocationFilterActive}
          />
        ) : (
          <ClubListView clubs={clubsOnList} onSeeMoreClubsClicked={seeMoreClubsHandler} />
        )}
      </div>

      {!isProVersion && (
        <div className="fr-mt-9w">
          <MissingClubInformationPanel isProVersion={false} />
        </div>
      )}
    </div>
  );
};

export default ClubFinder;
