import React from "react";
import { useAppSelector } from "@/state/redux"; // Import hooks to access Redux store

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
    <div className="flex flex-col gap-6 mt-6 max-w-xl mx-auto">
      <h1>Listings</h1>

      <div className="overflow-y-auto h-[calc(100vh-200px)]">
        {companies?.map((business) => (
          <div
            key={business?.place_id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full border-black border-2"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {business?.name || "N/A"}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              <strong>Status:</strong>{" "}
              <span
                className={`${
                  business?.business_status === "OPERATIONAL"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {business?.business_status || "N/A"}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Rating:</strong> {business?.rating || "N/A"}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Address:</strong> {business?.formatted_address || "N/A"}
            </p>
            <div className="mt-4">
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                  business?.opening_hours?.open_now
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {business?.opening_hours?.open_now ? "Open Now" : "Closed"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
