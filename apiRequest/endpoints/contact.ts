import api from "../axios";
import {
  AboutPageData,
  ApiResponse,
  ContactPageData,
  PaginatedResponse,
  QueryParams,
  ServicePageData,
} from "../types";

export const contactApi = {
  getContactPageData: async () => {
    const response = await api.get("/contact-sections");
    return { contactSection: response.data.data };
  },
  getContactPageDataFull: async (): Promise<ApiResponse<ContactPageData>> => {
    const response = await api.get("/contact-page");
    return response.data;
  },
};
