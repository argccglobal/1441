import api from "../axios";
import { ApiResponse } from "../types";

export interface HeaderData {
  _id: string;
  logo: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  announcements?: {
    _id: string;
    message: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export const headerApi = {
  getHeaderData: async (): Promise<ApiResponse<HeaderData>> => {
    const response = await api.get("/cms/header");
    return response.data;
  },

  createHeader: async (
    formData: FormData
  ): Promise<ApiResponse<HeaderData>> => {
    return await api.post("/cms/header", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  createAnnouncement: async (data: {
    message: string;
  }): Promise<ApiResponse<HeaderData>> => {
    return await api.post("/cms/header/announcement", data);
  },

  updateAnnouncement: async (data: {
    message: string;
    isActive: boolean;
  }): Promise<ApiResponse<HeaderData>> => {
    return await api.put("/cms/header/announcement", data);
  },
};
