"use server";

import { revalidatePath } from "next/cache";
import { deleteCompanyById } from "@/lib/db/repositories/companyRepository";

export const deleteCompany = async (id: string) => {
  try {
    await deleteCompanyById(id);
    revalidatePath("/dashboard/companies");
  } catch (error) {
    console.error("Failed to delete company", error);
    throw error;
  }
};
