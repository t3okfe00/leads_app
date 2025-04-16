"use client";
import React from "react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./AppMap"), { ssr: false });
const Map = () => {
  return <MapComponent></MapComponent>;
};

export default Map;
