import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';
import styles from './styles.module.scss';
import { Club } from 'types/Club';

interface Props {
  club: Club;
}

const Map: React.FC<Props> = ({ club }) => {
  if (!club.geoloc_finale) {
    return null;
  }

  const position: LatLngLiteral = { lat: club.geoloc_finale.lat, lng: club.geoloc_finale.lon };

  return (
    <MapContainer
      className={styles.map}
      center={position}
      zoom={17}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={position} alt="Voir le nom du club">
        <Popup>{club.nom}</Popup>
      </Marker>

      <ZoomControl zoomInTitle="zoom avant" zoomOutTitle="zoom arrière" />
    </MapContainer>
  );
};

export default Map;
