"use client";
import React from "react";
import { useAppSelector } from "@/state/redux";
import FiltersBar from "./FiltersBar";
import Filters from "./SearchWindow";
import Map from "./Map";
import Companies from "./Companies";

const SearchPage = () => {
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );
  return (
    <div className="w-full flex flex-col">
      <FiltersBar></FiltersBar>
      <div className="flex justify-between flex-1 overflow-hidden gap-3 mb-5">
        <div
          className={`h-full overflow-auto transition-all duration-300 ease-in-out ${
            isFiltersFullOpen
              ? "w-2/12 opacity-100 visible "
              : "w-0 opacity-0 invisible"
          }`}
        >
          <Filters></Filters>
        </div>

        <Map></Map>

        <div className="basis-4/12 overflow-auto">
          <Companies></Companies>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
