// companySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GooglePlacesCompany } from "@/types/types";
import { fetchCompanies as fetchCompaniesService } from "@/services/companyService";
import axios from "axios";

interface CompanyState {
  companies: GooglePlacesCompany[];
  isCompaniesLoading: boolean;
  companiesError: string | null;
}

export const fetchCompanies = createAsyncThunk(
  "company/fetchCompanies", 
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
     
      // action.payload
      return response.data.results;
    } catch (err) {
      if(axios.isAxiosError(err)){
       
        return rejectWithValue(err.response?.statusText);
      }
      
      return rejectWithValue("An unexpected error occurred");
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
        state.companiesError = null;
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
