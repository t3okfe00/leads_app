import React from "react";
import { useAppSelector } from "@/state/redux";
import CompanyCard from "@/app/dashboard/search/google-places/CompanyCard";

const Companies: React.FC = () => {
  const companies = useAppSelector((state) => state.company.companies);
  const { isCompaniesLoading, companiesError } = useAppSelector(
    (state) => state.company
  );

  if (isCompaniesLoading) {
    return <div>Searching for companies ...</div>;
  }

  if (companiesError) {
    return <div>{companiesError}</div>;
  }

  return (
    <div className="flex flex-col gap-6 max-w-xl mx-auto">
      <h1 className="text-center font-bold text-lg">Companies</h1>

      <div className="overflow-y-auto h-[calc(100vh-200px)]">
        {companies?.map((business) => (
          <CompanyCard key={business?.place_id} company={business} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
