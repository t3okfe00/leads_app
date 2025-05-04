import prisma from "../client";
import { Company } from "@prisma/client";

export const getAllCompanies = async (): Promise<Company[]> => {
  console.log("Fetching all companies from the database");
  return prisma.company.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
