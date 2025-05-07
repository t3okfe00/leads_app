import { GooglePlacesCompany } from "@/types/types";
import { CompanyDTO } from "@/types/types";

export const mapGooglePlacesToCompanyDTO = (
  company: GooglePlacesCompany
): CompanyDTO => {
  return {
    placeId: company.place_id,
    email: null,
    name: company.name,
    businessStatus: company.business_status,
    formattedAddress: company.formatted_address,
    latitude: company.geometry.location.lat,
    longitude: company.geometry.location.lng,
    rating: company.rating,
    phone: null,
    website: null,
    types: company.types,
  };
};
