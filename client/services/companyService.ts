import axios from "axios";
import { CompanyApiResponse } from "@/types/types";

export const fetchCompanies = async (
  company_type: string,
  location: string
): Promise<CompanyApiResponse> => {
  try {
    console.log("Fetching Companies");
    const response = await axios.get("/api/places/search", {
      params: {
        query: `${company_type} in ${location}`,
      },
    });

    return response;
  } catch (err) {
    throw new Error("Failed to fetch businesses");
  }
};
