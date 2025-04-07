import { Button } from "@/components/ui/button";
import { toggleFiltersFullOpen } from "@/state";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { Filter } from "lucide-react";
import React from "react";

const FilterButton = () => {
  const isFilterFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );

  const dispatch = useAppDispatch();

  return (
    <Button
      variant="outline"
      className={`${isFilterFullOpen && "bg-black text-white"}`}
      onClick={() => dispatch(toggleFiltersFullOpen())}
    >
      <Filter></Filter>
      Filters
    </Button>
  );
};

export default FilterButton;
