// companySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Company } from "@/types/types";

interface CompanyState {
  companies: Company[];
  isCompaniesLoading: boolean;
  companiesError: string | null;
}

const initialState: CompanyState = {
  companies: [],
  isCompaniesLoading: false,
  companiesError: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompanies(state, action: PayloadAction<Company[]>) {
      state.companies = action.payload;
    },
    setCompaniesLoading(state, action: PayloadAction<boolean>) {
      state.isCompaniesLoading = action.payload;
    },
    setCompaniesError(state, action: PayloadAction<string | null>) {
      state.companiesError = action.payload;
    },
  },
});

export const { setCompanies, setCompaniesLoading, setCompaniesError } =
  companySlice.actions;
export default companySlice.reducer;
