import api from "../axios";
import { ApiResponse, PaginatedResponse, QueryParams } from "../types";

export interface Location {
  _id: string;
  city: string;
  country: string;
  address: string;
}

export interface MediaItem {
  url: string;
  caption: string;
  isFeatured: boolean;
  order: number;
  _id: string;
}

export interface Media {
  _id: string;
  photos: string[];
  galleryPhotos: MediaItem[];
  sliderPhotos: MediaItem[];
  floorPlan: string;
  video: string;
  virtualTour: string;
  featuredPhoto: string[];
}

export interface Features {
  _id: string;
  bedrooms: number;
  bathrooms: number;
  floorPlanSize: number;
  amenities: string[];
  plotSizeUnit: string;
}

export interface Landmark {
  _id: string;
  name: string;
  type: string;
  icon: string;
  distance: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface AreaExplore {
  _id: string;
  about: {
    _id: string;
    title: string;
    description: string;
    expanded: boolean;
  };
  landmarks: Landmark[];
  schools: Array<{
    _id: string;
    name: string;
    distance: number;
    ageRange: string;
    ofstedRating: string;
    type: string;
    location: {
      latitude: number;
      longitude: number;
    };
  }>;
  others: Array<{
    _id: string;
    name: string;
    description: string;
    address: string;
    location: {
      latitude: number;
      longitude: number;
    };
  }>;
  expanded: boolean;
}

export interface Property {
  _id: string;
  title: string;
  propertyType: string;
  listingType: "sale" | "rent";
  description: string;
  price: number;
  currency: string;
  featured: boolean;
  recentlySold: boolean;
  status: string;
  landSize: number;
  landSizeUnit: string;
  landSizeAcres: number;
  location: Location;
  media: Media;
  features: Features;
  areaExplore: AreaExplore;
  details: {
    epcRating: string;
    ownershipType: string;
    yearBuilt: number;
    constructionType: string;
  };
  developmentName: string;
  similarProperties: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export const propertiesApi = {
  // Get all properties with pagination
  getProperties: async (
    params?: QueryParams
  ): Promise<PaginatedResponse<Property>> => {
    const response = await api.get("/properties", { params });
    return response.data;
  },
  getPropertyDetails: async (
    slug: string,
    params?: QueryParams
  ): Promise<PaginatedResponse<Property>> => {
    const response = await api.get(`/properties/${slug}`, { params });
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
