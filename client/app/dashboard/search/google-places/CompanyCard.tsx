import { Company } from "@/types/types";

import { useAppDispatch } from "@/state/redux";
import { addLikedCompany } from "@/state/slices/likedCompaniesSlice";
import { toast } from "react-toastify";
import { Badge } from "@/components/ui/badge";
import { createCompany } from "@/lib/db/repositories/companyRepository";
import CustomButton from "@/components/companies/CustomButton";

import { mapGooglePlacesToCompanyDTO } from "@/utils/mapGooglePlacesToCompanyDTO";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const dispatch = useAppDispatch();

  const handleLikeCompany = () => {
    dispatch(addLikedCompany(company));
    toast.success(`${company.name} added to your list!`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="group bg-surface p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-700 ease-in-out w-full mx-auto border border-surface mt-4 border-dtBlue-50 hover:bg-slate-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          {company?.name || "N/A"}
        </h3>
        <CustomButton
          size="sm"
          onClick={() => createCompany(mapGooglePlacesToCompanyDTO(company))}
          className="border-2 border-black bg-white text-black hover:bg-slate-200"
          variant="secondary"
        >
          Add To List
        </CustomButton>
      </div>

      <div className="text-sm text-gray-600 mb-3">
        <strong>Status: </strong>
        <span
          className={`${
            company?.business_status === "OPERATIONAL"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {company?.business_status || "N/A"}
        </span>
      </div>

      <div className="text-sm text-gray-600 mb-3">
        <strong>Rating: </strong>
        {company?.rating || "N/A"}
      </div>

      <div className="text-sm text-gray-600 mb-4 font-heading">
        <strong>Address: </strong>
        {company?.formatted_address || "N/A"}
      </div>

      <div>
        {company?.types?.map((type, index) => (
          <Badge
            key={index}
            variant="outline"
            className="text-xs font-semibold mr-1 border-r-1 border-black group-hover:border-black group-hover:bg-white transition-colors duration-700 ease-in-out"
          >
            {type}
          </Badge>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3">
        <span
          className={`inline-block px-4 py-1 text-xs font-semibold rounded-full ${
            company?.opening_hours?.open_now
              ? "bg-green-200 text-green-700"
              : "bg-red-200 text-red-700 border-2 border-red-950"
          }`}
        >
          {company?.opening_hours?.open_now ? "Open Now" : "Closed"}
        </span>
      </div>
    </div>
  );
};

export default CompanyCard;
