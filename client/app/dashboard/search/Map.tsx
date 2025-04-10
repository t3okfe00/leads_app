"use client";
import React from "react";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = dynamic(() => import("./AppMap"), { ssr: false });
const Map = () => {
  return <MapComponent></MapComponent>;
};

export default Map;
