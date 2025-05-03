"use client";
import React from "react";
import { useAppSelector } from "@/state/redux";
import FiltersBar from "@/app/dashboard/search/google-places/FiltersBar";
import Filters from "@/app/dashboard/search/google-places/SearchWindow";
import Map from "@/app/dashboard/search/google-places/Map";
import Companies from "@/app/dashboard/search/google-places/Companies";
// flex flex-col md:flex-row justify-between flex-1
const SearchPage = () => {
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );
  return (
    <div className="w-full flex flex-col">
      <FiltersBar></FiltersBar>
      <div className="flex flex-col md:flex-row gap-2">
        <div
          className={`transition-all duration-300 ease-in-out border-8 border-dtGreen-100 ${
            isFiltersFullOpen
              ? "w-2/12 opacity-100 visible "
              : "w-0 opacity-0 invisible"
          }`}
        >
          <Filters></Filters>
        </div>
        <div className="w-full h-[calc(100vh-200px)]">
          <Map></Map>
        </div>
        <div>
          <Companies></Companies>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
