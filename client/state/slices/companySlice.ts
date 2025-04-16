// companySlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Company } from "@/types/types";
import { fetchCompanies as fetchCompaniesService } from "@/services/companyService";

interface CompanyState {
  companies: Company[];
  isCompaniesLoading: boolean;
  companiesError: string | null;
}

export const fetchCompanies = createAsyncThunk(
  "company/fetchCompanies", // Action type
  async (
    params: { company_type: string; location: string },
    { rejectWithValue }
  ) => {
    try {
      const { company_type, location } = params;
      const response = await fetchCompaniesService(company_type, location);
      if (response.data.error_message) {
        return rejectWithValue(response.data.error_message);
      }
      return response.data.results;
    } catch (err) {
      return rejectWithValue(err.data.message);
    }
  }
);

const initialState: CompanyState = {
  companies: [],
  isCompaniesLoading: false,
  companiesError: "",
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.isCompaniesLoading = true;
        state.companiesError = null; // Reset error when fetching
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.isCompaniesLoading = false;
        state.companies = action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.isCompaniesLoading = false;
        state.companiesError = action.payload as string;
      });
  },
});

export default companySlice.reducer;
