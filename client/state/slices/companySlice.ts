// companySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Company } from "@/types/types";

interface CompanyState {
  companies: Company[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CompanyState = {
  companies: [],
  isLoading: false,
  error: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompanies(state, action: PayloadAction<Company[]>) {
      state.companies = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setCompanies, setLoading, setError } = companySlice.actions;
export default companySlice.reducer;
