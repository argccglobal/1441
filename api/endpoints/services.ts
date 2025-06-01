import api from "../axios";
import {
  AboutPageData,
  ApiResponse,
  PaginatedResponse,
  QueryParams,
  ServicePageData,
} from "../types";

export enum ServiceType {
  CONCIERGE = "CONCIERGE",
  LANDLORD_TENANCY = "LANDLORD_TENANCY",
}

export const servicePageApi = {
  getServicePageData: async (
    type: ServiceType
  ): Promise<ApiResponse<ServicePageData>> => {
    const response = await api.get<ApiResponse<ServicePageData>>(
      `/cms/service-pages/${type}`
    );
    return response.data;
  },

  updateServicePageData: async (
    type: ServiceType,
    data: any
  ): Promise<ApiResponse<AboutPageData>> => {
    console.log("data", data);
    const response = await api.put<ApiResponse<AboutPageData>>(
      `/cms/service-pages/${type}`,
      data
    );
    return response.data;
  },
  getService: async (type: ServiceType): Promise<ApiResponse<any>> => {
    const response = await api.get<ApiResponse<any>>(`/services?type=${type}`);
    return response.data;
  },
};
