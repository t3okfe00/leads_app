export type CompanyType =
  | "construction_company"
  | "architect"
  | "hardware_store"
  | "plumber"
  | "electrician";

export type FilterKey = "location" | "radius" | "company_type";

export type Coordinates = [number, number];

export type CompanyApiResponse = {
  data: { results: GooglePlacesCompany[]; error_message?: string, next_page_token: string,status:string };
  status: number;
  statusText: string;
};

export type GooglePlacesCompany = {
  id: string;
  business_status: string;
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  place_id: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  };

  reference: string;
  types: string[];
};

export type CompanyDTO = {
  placeId: string;
  email?: string | null;
  name: string;
  businessStatus: string;
  formattedAddress: string;
  latitude: number;
  longitude: number;
  rating: number;
  phone?: string | null;
  types: string[];
  website?: string | null;
};
