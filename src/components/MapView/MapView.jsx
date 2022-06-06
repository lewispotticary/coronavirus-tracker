//Defines the default map center and zoom

import { useMap } from 'react-leaflet';

function MapView({ mapCenter, zoom }) {
    const map = useMap();
    map.setView(mapCenter, zoom);
    map.closePopup();
    return null;
}

export default MapView
