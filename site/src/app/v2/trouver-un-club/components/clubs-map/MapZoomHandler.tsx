import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

const MapZoomHandler = () => {
  const map = useMap();

  const [msg, setMsg] = useState<string | null>(null);

  map.on('zoomend', (e) => {
    setMsg('le zoom de la carte a changé.');
  });

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (msg) {
      timer = setTimeout(() => {
        setMsg(null);
      }, 1000);
    }

    return () => {
      timer && clearTimeout(timer);
    };
  }, [msg]);

  return <div aria-live="polite">{msg ? <p>{msg}</p> : null}</div>;
};

export default MapZoomHandler;
