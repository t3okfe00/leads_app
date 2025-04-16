import React from "react";

import FilterButton from "./FilterButton";

const FiltersBar = () => {
  return (
    <div className="flex justify-between items-center w-full py-5 border-b border-2">
      <FilterButton></FilterButton>
    </div>
  );
};

export default FiltersBar;
