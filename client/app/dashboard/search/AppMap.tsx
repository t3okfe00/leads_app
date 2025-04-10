import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useAppSelector } from "@/state/redux"; // Import the hook to access Redux store
import MapMarker from "./MapMarker";
import "leaflet/dist/leaflet.css";
import { Company } from "@/types/types"; // Assuming Company type exists and has geometry.location
import { useState, useEffect } from "react";
import { useMap } from "react-leaflet";

function SetMapView({ center }: { center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center);
    }
  }, [center, map]);

  return null;
}

const MyMap = () => {
  const { companies } = useAppSelector((state) => state.company);

  const [mapCenter, setMapCenter] = useState<[number, number]>([51.505, -0.09]); // Default to London

  useEffect(() => {
    if (companies.length > 0) {
      const firstCompanyCoordinates = companies[0].geometry?.location;
      console.log("First Company Coordinates", firstCompanyCoordinates);

      if (
        firstCompanyCoordinates &&
        firstCompanyCoordinates.lat &&
        firstCompanyCoordinates.lng
      ) {
        setMapCenter([
          firstCompanyCoordinates.lat,
          firstCompanyCoordinates.lng,
        ]);
      }
    }
  }, [companies]);

  return (
    <MapContainer
      center={mapCenter}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />{" "}
      <SetMapView center={mapCenter} />
      {companies.map((company: Company) => {
        const coordinates = company.geometry?.location;
        const markerPositions = [coordinates.lat, coordinates.lng];

        return coordinates ? (
          <MapMarker
            key={company.place_id}
            position={markerPositions}
            label={company.name || "Unnamed"}
          />
        ) : null;
      })}
    </MapContainer>
  );
};

export default MyMap;
