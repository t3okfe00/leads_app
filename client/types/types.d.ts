export type CompanyType =
  | "construction_company"
  | "architect"
  | "hardware_store"
  | "plumber"
  | "electrician";

export type FilterKey = "location" | "radius" | "company_type";

export type Coordinates = [number, number];

export type CompanyApiResponse = {
  data: { results: Company[]; error_message?: string };
  status: number;
  statusText: string;
};

export type Company = {
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
  email: string;
  website: string?;
};
