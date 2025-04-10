import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/marker-icon.png", // Path to your icon in public folder
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
});
type MapMarkerProps = {
  position: [number, number];
  label: string;
};

const MapMarker = ({ position, label }: MapMarkerProps) => {
  return (
    <Marker position={position}>
      <Popup>{label || "No Text"}</Popup>
    </Marker>
  );
};

export default MapMarker;
