import api from "../axios";
import { FeaturedProperties, HomeData } from "../../store/home";
import { ApiResponse } from "../types";
import { headers } from "next/headers";

export const homeApi = {
  // Get home page data
  getHomeData: async (): Promise<ApiResponse<HomeData>> => {
    const response = await api.get("/cms/home");
    return response.data;
  },
  getFeaturedProperties: async (): Promise<
    ApiResponse<FeaturedProperties[]>
  > => {
    const response = await api.get("/cms/home/featured-properties");
    return response.data;
  },

  // Update hero image
  updateHeroImage: async (file: any): Promise<HomeData> => {
    console.log("files", file);
    const formData = new FormData();
    formData.append("image", file);
    const response = await api.put("/cms/home/hero-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // Update brand section
  updateBrandSection: async (
    brandSection: HomeData["brandSection"]
  ): Promise<HomeData> => {
    const response = await api.patch("/home/brand-section", brandSection);
    return response.data;
  },

  // Update brand logos
  updateBrandLogos: async (logo: any, id: string): Promise<HomeData> => {
    const formData = new FormData();
    formData.append("logo", logo);
    const response = await api.put("/cms/home/brand-logos/" + id, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // Update service section
  updateServiceSection: async (
    serviceSection: HomeData["serviceSection"]
  ): Promise<HomeData> => {
    const response = await api.patch("/home/service-section", serviceSection);
    return response.data;
  },

  // Update services
  updateServices: async (services: HomeData["services"]): Promise<HomeData> => {
    const response = await api.patch("/home/services", { services });
    return response.data;
  },
  getRegions: async (country?: string) => {
    const response = await api.get(
      `/cms/home/regions${country ? `?country=${country}` : ""}`
    );
    return response.data;
  },
  // Update region section
  updateRegionSection: async (
    regionSection: HomeData["regionSection"]
  ): Promise<HomeData> => {
    const response = await api.patch("/home/region-section", regionSection);
    return response.data;
  },

  // Update featured section
  updateFeaturedSection: async (
    featuredSection: HomeData["featuredSection"]
  ): Promise<HomeData> => {
    const response = await api.patch("/home/featured-section", featuredSection);
    return response.data;
  },
};
