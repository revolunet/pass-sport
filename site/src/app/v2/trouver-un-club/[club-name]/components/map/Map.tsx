import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';
import styles from './styles.module.scss';
import { Club } from 'types/Club';
import { useRef } from 'react';
import { useLeafletAccessibility } from '@/app/hooks/useLeafletAccessibility';

interface Props {
  club: Club;
}

const Map = ({ club }: Props) => {
  const ref = useRef(null);
  useLeafletAccessibility(ref);

  if (!club.geoloc_finale) {
    return <p>Coordonnées géographiques non disponibles</p>;
  }

  const position: LatLngLiteral = { lat: club.geoloc_finale.lat, lng: club.geoloc_finale.lon };

  return (
    <div ref={ref}>
      <MapContainer
        className={styles.map}
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; contributeurs <a target="_blank" aria-label="Ouvrir openstreetmap.org dans une nouvelle fenêtre" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        <Marker position={position} alt="Voir le nom du club">
          <Popup>{club.nom}</Popup>
        </Marker>

        <ZoomControl zoomInTitle="Agrandir" zoomOutTitle="Dézoomer" />
      </MapContainer>
    </div>
  );
};

export default Map;
