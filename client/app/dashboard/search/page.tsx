"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { useSearchParams } from "next/navigation";
import FiltersBar from "./FiltersBar";
import Filters from "./Filters";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
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
              ? "w-3/12 opacity-100 visible "
              : "w-0 opacity-0 invisible"
          }`}
        >
          <Filters></Filters>
        </div>
        <div className="basis-4/12 overflow-auto">
          {/* <Listings></Listings> */}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
