import api from "../axios";
import { ApiResponse } from "../types";

export interface PropertyPageData {
  _id?: string;
  hero: {
    title: string;
    description: string;
    _id?: string;
  };
  filterArea: {
    title: string;
    description: string;
    _id?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export const propertyPageApi = {
  // Get property page data
  getPropertyPageData: async (): Promise<ApiResponse<PropertyPageData>> => {
    const response = await api.get("/cms/property-page");
    return response.data;
  },
};
