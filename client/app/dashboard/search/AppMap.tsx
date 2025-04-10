// app/dashboard/search/MyMap.tsx
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import MapMarker from "./MapMarker";
import "leaflet/dist/leaflet.css";
import { Coordinates } from "@/types/types";

const MyMap = () => {
  const locations: Coordinates[] = [
    [51.505, -0.09],
    [51.515, -0.1],
    [51.525, -0.11],
    [51.535, -0.12],
    [51.545, -0.13],
    [51.555, -0.14],
    [51.565, -0.15],
    [51.575, -0.16],
    [51.585, -0.17],
    [51.595, -0.18],
  ];
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <MapMarker
          key={location[0]}
          position={location}
          label="SANANE"
        ></MapMarker>
      ))}
    </MapContainer>
  );
};

export default MyMap;
