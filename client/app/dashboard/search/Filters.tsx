import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/state/redux";
import { useAppDispatch } from "@/state/redux";
import { fetchCompanies } from "@/services/companyService";
import { setCompanies, setCompaniesError } from "@/state/slices/companySlice";
import { CompanyApiResponse } from "@/types/types";
import { setCompaniesLoading } from "@/state/slices/companySlice";
import {
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { setFilters } from "@/state/slices/globalSlice";
import { FilterKey } from "@/types/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const placeTypes = [
  { label: "Construction", value: "construction_company" },
  { label: "Architect", value: "architect" },
  { label: "Hardware Store", value: "hardware_store" },
  { label: "Plumber", value: "plumber" },
  { label: "Electrician", value: "electrician" },
];

const Filters = () => {
  const [error, setError] = useState("");
  const { isCompaniesLoading, companiesError } = useAppSelector(
    (state) => state.company
  );

  const { location, company_type, radius } = useAppSelector(
    (state) => state.global.filters
  );
  const filters = useAppSelector((state) => state.global.filters);

  const dispatch = useAppDispatch();

  const handleChange = (key: FilterKey, value: string | number) => {
    dispatch(setFilters({ [key]: value }));
    const newFilters = { ...filters, ...{ [key]: value } };
    console.log("New Filter", newFilters);

    console.log("Updating filters");
  };

  const fetchBusinesses = async () => {
    dispatch(setCompaniesLoading(true));
    setError("");
    dispatch(setCompaniesError(""));
    try {
      const response: CompanyApiResponse = await fetchCompanies(
        company_type,
        location
      );
      dispatch(setCompanies(response.data.results));
      if (response.data.error_message) {
        throw new Error(response.data.error_message);
      }
    } catch (err) {
      setError("Failed to fetch businesses");
      dispatch(setCompaniesError(err.message));
      //dispatch(setCompanies([]));
      console.error(err);
    } finally {
      dispatch(setCompaniesLoading(false));
    }
  };

  return (
    <div className="border-2 p-2">
      Filters
      <div className="space-y-1">
        <div>
          <Label htmlFor="location">Search Location</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => handleChange("location", e.target.value)}
          ></Input>
        </div>

        <div>
          <Label htmlFor="radius">Search Radius</Label>
          <Input
            id="radius"
            value={radius}
            onChange={(e) => handleChange("radius", e.target.value)}
          ></Input>
        </div>

        <div>
          <span>Company Type</span>
          <Select
            defaultValue={company_type}
            onValueChange={(value) => handleChange("company_type", value)}
          >
            <SelectTrigger>Type of the company</SelectTrigger>
            <SelectContent>
              {placeTypes.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button
        onClick={fetchBusinesses}
        disabled={isCompaniesLoading}
        className="hover:opacity-60"
      >
        {isCompaniesLoading ? "Searching..." : "Search Businesses"}
      </Button>
    </div>
  );
};

export default Filters;
