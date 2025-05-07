import { getAllCompanies } from "@/lib/db/repositories/companyRepository";
import CompaniesList from "@/components/companies/CompaniesList";
import { Company } from "@prisma/client";

const CompaniesPage = async () => {
  try {
    const companies: Company[] = await getAllCompanies();
    return <CompaniesList companies={companies}></CompaniesList>;
  } catch (error) {
    console.log("*************", error);
    return <div>{error.message}</div>;
  }
};

export default CompaniesPage;
