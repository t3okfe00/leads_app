import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/state/redux";
import { useAppDispatch } from "@/state/redux";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { setFilters } from "@/state";
import { FilterKey } from "@/types/types";

const placeTypes = [
  { label: "Construction", value: "construction_company" },
  { label: "Architect", value: "architect" },
  { label: "Hardware Store", value: "hardware_store" },
  { label: "Plumber", value: "plumber" },
  { label: "Electrician", value: "electrician" },
];

const Filters = () => {
  const { location, company_type, radius } = useAppSelector(
    (state) => state.global.filters
  );
  const filters = useAppSelector((state) => state.global.filters);
  console.log("Initial Filters", filters);

  const dispatch = useAppDispatch();

  const handleChange = (key: FilterKey, value: string | number) => {
    dispatch(setFilters({ [key]: value }));
    const newFilters = { ...filters, ...{ [key]: value } };
    console.log("New Filter", newFilters);

    console.log("Updating filters");
  };

  return (
    <div className="border-2 p-2">
      Filters
      <div className="space-y-1">
        {/* Input for location */}
        <div>
          <Label htmlFor="location">Search Location</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => handleChange("location", e.target.value)}
          ></Input>
        </div>
        {/* Input for radius */}
        <div>
          <Label htmlFor="radius">Search Location</Label>
          <Input
            id="radius"
            value={radius}
            onChange={(e) => handleChange("radius", e.target.value)}
          ></Input>
        </div>
        {/* Company Type Selection*/}
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
    </div>
  );
};

export default Filters;
