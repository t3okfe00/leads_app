"use server";
import { CompanyDTO } from "@/types/types";
import prisma from "../client";
import { Company } from "@prisma/client";

export const getAllCompanies = async (): Promise<Company[]> => {
  try {
    const companies = await prisma.company.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return companies;
  } catch (error) {
    throw new Error("Database failed to fetch companies");
  }
};

export const deleteCompanyById = async (id: string): Promise<Company> => {
  try {
    const deletedCompany = await prisma.company.delete({
      where: {
        id,
      },
    });
    return deletedCompany;
  } catch (error) {
    console.error("Error deleting company in DB", error);
    throw new Error("Database failed to delete the company");
  }
};

export const createCompany = async (company: CompanyDTO): Promise<Company> => {
  console.log("Company Phone", company.phone);
  try {
    const newCompany = await prisma.company.create({
      data: {
        placeId: company.placeId,
        name: company.name,
        businessStatus: company.businessStatus,
        formattedAddress: company.formattedAddress,
        latitude: company.latitude,
        longitude: company.longitude,
        rating: company.rating,
        phone: company.phone,
        types: company.types,
      },
    });
    console.log("****", newCompany);
    return newCompany;
  } catch (error) {
    console.error("Error creating company in DB", error);
    throw new Error("Database failed to create a new company");
  }
};
