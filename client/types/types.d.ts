export type CompanyType =
  | "construction_company"
  | "architect"
  | "hardware_store"
  | "plumber"
  | "electrician";

export type FilterKey = "location" | "radius" | "company_type";

export type Coordinates = [number, number];

export type Company = {
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
  placeId: string;
  reference: string;
  types: string[];
};
