import { CompanyType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateTypes {
  filters: FiltersState;
  isFiltersFullOpen: boolean;
}

export interface FiltersState {
  location: string;
  radius: number;
  company_type: CompanyType;
}

/* INITIAL STATE */
export const initialState: InitialStateTypes = {
  filters: {
    location: "London",
    radius: 10,
    company_type: "construction_company",
  },
  isFiltersFullOpen: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    toggleFiltersFullOpen: (state) => {
      state.isFiltersFullOpen = !state.isFiltersFullOpen;
    },
  },
});

export const { setFilters, toggleFiltersFullOpen } = globalSlice.actions;

export default globalSlice.reducer;
