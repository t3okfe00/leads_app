import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/state/redux";
import { useAppDispatch } from "@/state/redux";
import { setCompanies } from "@/state/slices/companySlice";
import axios from "axios";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { setFilters } from "@/state/slices/globalSlice";
import { FilterKey } from "@/types/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Company } from "@/types/types";

const placeTypes = [
  { label: "Construction", value: "construction_company" },
  { label: "Architect", value: "architect" },
  { label: "Hardware Store", value: "hardware_store" },
  { label: "Plumber", value: "plumber" },
  { label: "Electrician", value: "electrician" },
];

const Filters = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.get("/api/places/search", {
        params: {
          query: `${company_type} in ${location}`,
        },
      });
      const data: Company[] = response.data.results;

      // Dispatch to Redux store to set companies
      dispatch(setCompanies(data));

      console.log("Resp -> ", response);
    } catch (err) {
      setError("Failed to fetch businesses");
      console.error(err);
    } finally {
      setIsLoading(false);
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
        disabled={isLoading}
        className="hover:opacity-60"
      >
        {isLoading ? "Searching..." : "Search Businesses"}
      </Button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Filters;
