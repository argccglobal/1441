import api from "../axios";
import { ApiResponse, PaginatedResponse, QueryParams } from "../types";

interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  features: string[];
  status: "available" | "sold" | "rented";
  type: "sale" | "rent";
  createdAt: string;
  updatedAt: string;
}

export const propertiesApi = {
  // Get all properties with pagination
  getProperties: async (
    params: QueryParams
  ): Promise<PaginatedResponse<Property>> => {
    const response = await api.get("/properties", { params });
    return response.data;
  },

  // Get single property by ID
  getPropertyById: async (id: string): Promise<ApiResponse<Property>> => {
    const response = await api.get(`/properties/${id}`);
    return response.data;
  },

  // Create new property
  createProperty: async (
    propertyData: Omit<Property, "_id" | "createdAt" | "updatedAt">
  ): Promise<ApiResponse<Property>> => {
    const response = await api.post("/properties", propertyData);
    return response.data;
  },

  // Update property
  updateProperty: async (
    id: string,
    propertyData: Partial<Property>
  ): Promise<ApiResponse<Property>> => {
    const response = await api.patch(`/properties/${id}`, propertyData);
    return response.data;
  },

  // Delete property
  deleteProperty: async (id: string): Promise<ApiResponse<null>> => {
    const response = await api.delete(`/properties/${id}`);
    return response.data;
  },

  // Search properties
  searchProperties: async (searchParams: {
    query: string;
    type?: "sale" | "rent";
    minPrice?: number;
    maxPrice?: number;
    location?: string;
  }): Promise<PaginatedResponse<Property>> => {
    const response = await api.get("/properties/search", {
      params: searchParams,
    });
    return response.data;
  },
};
