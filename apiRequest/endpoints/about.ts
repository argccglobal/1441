import api from "../axios";
import {
  AboutPageData,
  ApiResponse,
  PaginatedResponse,
  QueryParams,
  Testimonial,
} from "../types";

export const aboutApi = {
  getTestimonials: async (
    params?: QueryParams
  ): Promise<PaginatedResponse<Testimonial>> => {
    const response = await api.get("/cms/testimonials", { params });
    return response.data;
  },

  getAboutPageData: async (): Promise<ApiResponse<AboutPageData>> => {
    const response = await api.get<ApiResponse<AboutPageData>>("/cms/about");
    return response.data;
  },
  updateAboutPageData: async (
    params:
      | "hero"
      | "aboutUs"
      | "consultants"
      | "partners"
      | "clients"
      | "testimonials"
      | "values",
    data: any
  ): Promise<ApiResponse<AboutPageData>> => {
    console.log("Updating about page data for section:", params, data);
    const response = await api.put<ApiResponse<AboutPageData>>(
      `/cms/about/${params}`,
      data
    );
    return response.data;
  },
  updateAboutUsSectionData: async (
    data: any
  ): Promise<ApiResponse<AboutPageData>> => {
    console.log("data here", data);
    const response = await api.put<ApiResponse<AboutPageData>>(
      `/cms/about/about-us`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },
  addClientList: async (
    // clients/add
    data: any
  ): Promise<ApiResponse<AboutPageData>> => {
    console.log("data here", data);
    const response = await api.put<ApiResponse<AboutPageData>>(
      `/cms/about/clients/add`,
      data
    );
    return response.data;
  },

  addValue: async (data: any): Promise<ApiResponse<AboutPageData>> => {
    console.log("data here", data);
    const response = await api.put<ApiResponse<AboutPageData>>(
      `/cms/about/values/add`,
      data
    );
    return response.data;
  },
};
export const getAboutPageData = async () => {
  const response = await aboutApi.getAboutPageData();
  return response.data;
};

export const updateAboutPageData = async (
  params:
    | "hero"
    | "aboutUs"
    | "consultants"
    | "partners"
    | "clients"
    | "testimonials"
    | "values",
  data: any
) => {
  const response = await aboutApi.updateAboutPageData(params, data);
  return response.data;
};
