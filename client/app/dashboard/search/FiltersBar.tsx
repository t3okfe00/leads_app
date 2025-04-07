import { FiltersState, setFilters, toggleFiltersFullOpen } from "@/state";
import { useAppSelector } from "@/state/redux";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import FilterButton from "./FilterButton";

const FiltersBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  // Get the filter state from Redux global state
  const filters = useAppSelector((state) => state.global.filters);
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );

  const [searchInput, setSearchInput] = useState(filters.location);

  const updateURL = debounce((newFilters: FiltersState) => {
    const updatedSearchParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      updatedSearchParams.set(
        key,
        Array.isArray(value) ? value.join(",") : value.toString()
      );

      router.push(`${pathname}?${updatedSearchParams.toString()}`);
    });
  });

  const handleFilterChange = (key: string) => {
    // const newFilters = { ...filters, [key]: newValue };
    // dispatch(setFilters(newFilters));
    // updateURL(newFilters);
  };

  return (
    <div className="flex justify-between items-center w-full py-5 border-b border-2">
      <FilterButton></FilterButton>
    </div>
  );
};

export default FiltersBar;
