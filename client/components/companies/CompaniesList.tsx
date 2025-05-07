"use client";
import CustomButton from "@/components/companies/CustomButton";
import { Company } from "@prisma/client";
import { deleteCompany } from "@/app/actions/company/companyActions";

interface CompaniesListProps {
  companies: Company[];
}

const CompaniesList = ({ companies }: CompaniesListProps) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteCompany(id);

      alert("Company deleted successfully!");
    } catch (error) {
      console.error("Error deleting company:", error);
      alert("Failed to delete the company.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Companies List
      </h1>

      {/* Companies List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Company Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Website
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Phone
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id} className="border-b">
                <td className="px-4 py-2 text-sm text-gray-700">
                  {company.name}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <a
                    href={`http://${company.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {company.website}
                  </a>
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <a
                    href={`mailto:${company.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {company.email}
                  </a>
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {company.phone}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <CustomButton
                    id={company.id}
                    onClick={() => handleDelete(company.id)}
                  >
                    Remove
                  </CustomButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompaniesList;
