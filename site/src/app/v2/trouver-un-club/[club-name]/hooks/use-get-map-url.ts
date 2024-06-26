import { Club } from '../../../../../../types/Club';
import { useGeolocation } from '@uidotdev/usehooks';

// 'dir' for directions from origin to destination
// 'search' for displaying the map with a specific place
type MapMode = 'dir' | 'search';

function useGetMapUrl(club: Club | null) {
  const userLocation = useGeolocation();
  const hasUserLocation = userLocation.latitude && userLocation.longitude;
  const mapMode: MapMode = hasUserLocation ? 'dir' : 'search';

  // source: https://developers.google.com/maps/documentation/urls/get-started
  const baseUrl = new URL(`https://www.google.com/maps/${mapMode}/`);
  const searchParams = new URLSearchParams({ api: '1' });

  if (club === null) return null;

  let clubLocation = getClubLocation(club);

  if (mapMode === 'dir') {
    if (clubLocation !== null) {
      searchParams.append('origin', `${userLocation.latitude},${userLocation.longitude}`);
      searchParams.append('destination', clubLocation);

      baseUrl.search = searchParams.toString();

      return baseUrl;
    }

    return null;
  }

  if (mapMode === 'search') {
    if (clubLocation !== null) {
      searchParams.append('query', clubLocation);
      baseUrl.search = searchParams.toString();

      return baseUrl;
    }

    return null;
  }

  return null;
}

function getClubLocation(club: Club) {
  // Prioritize geo coordinates first, if not present, take full address
  if (club.geoloc_finale?.lat && club.geoloc_finale?.lon) {
    return `${club.geoloc_finale.lat},${club.geoloc_finale.lon}`;
  }

  if (club.adresse) {
    return `${club.adresse} ${club.commune || ''} ${club.cplt_1 || ''}`.trim();
  }

  return null;
}

export { useGetMapUrl };
