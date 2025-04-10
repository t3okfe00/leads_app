export type CompanyType =
  | "construction_company"
  | "architect"
  | "hardware_store"
  | "plumber"
  | "electrician";

export type FilterKey = "location" | "radius" | "company_type";

export type Coordinates = [number, number];
