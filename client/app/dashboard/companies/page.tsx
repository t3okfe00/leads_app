"use client";
import React from "react";
import { useAppSelector } from "@/state/redux";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/state/redux";
import { removeLikedCompany } from "@/state/slices/likedCompaniesSlice";
import { Mail, Phone, MapPin } from "lucide-react";
import AddCompanyForm from "@/components/companies/AddCompanyForm";
// TODO: When connect a database, make AddCompanyForm useclient
// make this server component

const CompaniesPage = () => {
  const { likedCompanies } = useAppSelector((state) => state.likedCompanies);
  const dispatch = useAppDispatch();

  const handleRemoveCompany = (companyId: string) => {
    dispatch(removeLikedCompany(companyId));
  };

  if (likedCompanies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-xl font-semibold mb-2">Liked Companies</h1>
        <p className="text-gray-500 text-sm">
          You have not added any company to list yet.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full overflow-x-auto p-3">
        <h1 className="text-lg font-semibold mb-3">Company List</h1>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="hidden md:grid md:grid-cols-12 bg-gray-50 px-3 py-2 border-b text-xs">
            <div className="md:col-span-3 font-medium text-gray-600">Name</div>
            <div className="md:col-span-3 font-medium text-gray-600">
              Address
            </div>
            <div className="md:col-span-2 font-medium text-gray-600">Email</div>
            <div className="md:col-span-2 font-medium text-gray-600">Phone</div>
            <div className="md:col-span-2 font-medium text-gray-600">Types</div>
          </div>

          <div className="divide-y divide-gray-100">
            {likedCompanies.map((company) => (
              <div
                key={company.placeId}
                className="grid grid-cols-1 md:grid-cols-12 px-3 py-2 hover:bg-gray-50 transition-colors text-xs"
              >
                {/* Mobile Layout */}
                <div className="md:hidden space-y-2 pb-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{company.name}</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs text-red-600 hover:text-red-700 border-red-200 hover:border-red-300 hover:bg-red-50 h-6 px-2"
                      onClick={() => handleRemoveCompany(company.id)}
                    >
                      Remove
                    </Button>
                  </div>

                  <div className="flex items-center text-xs">
                    <MapPin size={10} className="mr-1" />
                    {company.formatted_address}
                  </div>

                  <div className="flex items-center text-xs text-gray-600">
                    <Mail size={10} className="mr-1" />
                    <a
                      href={`mailto:${company.email}`}
                      className="text-blue-600"
                    >
                      {company.email}
                    </a>
                  </div>

                  <div className="flex items-center text-xs text-gray-600">
                    <Phone size={10} className="mr-1" />
                    <a href={`tel:${company.rating}`} className="text-blue-600">
                      {company.rating}
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-1">
                    {company.types?.map((type, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs px-1 py-0"
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Desktop Layout: Grid */}
                <div className="md:block md:col-span-3 my-auto text-xs break-words">
                  {company.name}
                </div>

                <div className="md:block md:col-span-3 my-auto text-xs break-words">
                  {company.formatted_address}
                </div>

                <div className="md:block md:col-span-2 my-auto text-xs">
                  <a
                    href={`mailto:${company.email}`}
                    className="text-blue-600 hover:text-blue-800"
                    title={company.email}
                  >
                    something@gmail.com
                  </a>
                </div>

                <div className="md:block md:col-span-2 my-auto text-xs">
                  <a
                    href={`tel:${company.rating}`}
                    className="text-blue-600 hover:text-blue-800"
                    title={company.rating}
                  >
                    +3587238171273
                  </a>
                </div>

                <div className="md:flex md:col-span-2 my-auto gap-1 flex-wrap">
                  {company.types?.map((type, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs px-1 py-0 h-5"
                    >
                      {type}
                    </Badge>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs text-red-600 hover:text-red-700 border-red-200 hover:border-red-300 hover:bg-red-50 h-5 px-1 ml-auto"
                    onClick={() => handleRemoveCompany(company.place_id)}
                  >
                    ✕
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-3">
        <AddCompanyForm />
      </div>
    </div>
  );
};

export default CompaniesPage;
