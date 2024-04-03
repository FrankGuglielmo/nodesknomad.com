// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../images/pinpoint.png'; // Update this path to the location where you saved 'marker.png'


const customMarkerIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: new L.Point(30, 30), // Size of the icon, adjust as needed
  className: 'leaflet-custom-marker'
});

const MapComponent = ({ location, cafes }) => {
  const defaultPosition = [37.7749, -122.4194]; // Coordinates for San Francisco

  if (!location) {
    location = defaultPosition;
  }

  return (
    // <div className="rounded-map-container" > {/* Apply the class here */}
    <MapContainer center={location} zoom={15} style={{ height: '80vh', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    {cafes.map((shop, idx) => (
      shop.coordinates && shop.coordinates.latitude && shop.coordinates.longitude ?
        <Marker
          key={idx}
          position={[shop.coordinates.latitude, shop.coordinates.longitude]}
          icon={customMarkerIcon}
        >
          <Popup>{shop.name}</Popup>
        </Marker>
        : null
    ))}
  </MapContainer>
    // </div>
  );
};

export default MapComponent;