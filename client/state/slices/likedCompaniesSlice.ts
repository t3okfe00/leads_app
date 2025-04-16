import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Company } from "@/types/types";

interface LikedCompanyState {
  likedCompanies: Company[];
}

const initialState: LikedCompanyState = {
  likedCompanies: [],
};

const likedCompanySlice = createSlice({
  name: "likedCompanies",
  initialState,
  reducers: {
    addLikedCompany(state, action: PayloadAction<Company>) {
      const company = action.payload;
      if (!state.likedCompanies.some((c) => c.place_id === company.place_id)) {
        state.likedCompanies.push(company);
      }
    },
    removeLikedCompany(state, action: PayloadAction<string>) {
      state.likedCompanies = state.likedCompanies.filter(
        (company) => company.place_id !== action.payload
      );
    },
  },
});

export const { addLikedCompany, removeLikedCompany } =
  likedCompanySlice.actions;
export default likedCompanySlice.reducer;
