// Guidesoft: Advanced Search Filters Component
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

interface AdvancedFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  searchQuery: string;
  category: string;
  location: string;
  minHeight: number;
  maxHeight: number;
  minAge: number;
  maxAge: number;
  verified: string;
  sortBy: string;
}

export const AdvancedFilters = ({ onFilterChange }: AdvancedFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: "",
    category: "all",
    location: "",
    minHeight: 150,
    maxHeight: 200,
    minAge: 18,
    maxAge: 35,
    verified: "all",
    sortBy: "rating",
  });

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleHeightChange = (values: number[]) => {
    const newFilters = { ...filters, minHeight: values[0], maxHeight: values[1] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleAgeChange = (values: number[]) => {
    const newFilters = { ...filters, minAge: values[0], maxAge: values[1] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters: FilterState = {
      searchQuery: "",
      category: "all",
      location: "",
      minHeight: 150,
      maxHeight: 200,
      minAge: 18,
      maxAge: 35,
      verified: "all",
      sortBy: "rating",
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          <h3 className="font-semibold text-lg">Advanced Filters</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Reset
        </Button>
      </div>

      {/* Search Query */}
      <div className="space-y-2">
        <Label htmlFor="search">Search</Label>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Search by name..."
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="fashion">Fashion</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
            <SelectItem value="editorial">Editorial</SelectItem>
            <SelectItem value="runway">Runway</SelectItem>
            <SelectItem value="plus-size">Plus Size</SelectItem>
            <SelectItem value="mature">Mature</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          placeholder="Enter city or country"
          value={filters.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
        />
      </div>

      {/* Height Range */}
      <div className="space-y-3">
        <Label>Height: {filters.minHeight}cm - {filters.maxHeight}cm</Label>
        <Slider
          min={150}
          max={200}
          step={1}
          value={[filters.minHeight, filters.maxHeight]}
          onValueChange={handleHeightChange}
          className="w-full"
        />
      </div>

      {/* Age Range */}
      <div className="space-y-3">
        <Label>Age: {filters.minAge} - {filters.maxAge}</Label>
        <Slider
          min={18}
          max={50}
          step={1}
          value={[filters.minAge, filters.maxAge]}
          onValueChange={handleAgeChange}
          className="w-full"
        />
      </div>

      {/* Verified */}
      <div className="space-y-2">
        <Label htmlFor="verified">Verification Status</Label>
        <Select value={filters.verified} onValueChange={(value) => handleFilterChange("verified", value)}>
          <SelectTrigger id="verified">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Models</SelectItem>
            <SelectItem value="verified">Verified Only</SelectItem>
            <SelectItem value="unverified">Unverified Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Sort By */}
      <div className="space-y-2">
        <Label htmlFor="sortBy">Sort By</Label>
        <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange("sortBy", value)}>
          <SelectTrigger id="sortBy">
            <SelectValue placeholder="Select sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="name">Name (A-Z)</SelectItem>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="height">Height</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
};