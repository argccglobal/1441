import api from "../axios";
import { ApiResponse, AdditionalLink, Footer } from "../types";

export const footerApi = {
  // Get footer data
  getFooterData: async (): Promise<ApiResponse<Footer>> => {
    const response = await api.get("/cms/footer");
    return response.data;
  },

  // Update footer data
  updateFooter: async (
    footerData: Partial<Footer>
  ): Promise<ApiResponse<Footer>> => {
    const response = await api.post(
      "/cms/footer/create-or-update",
      footerData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },

  // Social Media Management
  addSocialMedia: async ({
    id,
    data,
  }: {
    id: string;
    data: any;
  }): Promise<ApiResponse<Footer>> => {
    const response = await api.post(`/cms/footer/${id}/social-media/`, data);
    return response.data;
  },

  updateSocialMedia: async ({
    footerId,
    id,
    data,
  }: {
    footerId: string;
    id: string;
    data: any;
  }): Promise<ApiResponse<Footer>> => {
    const response = await api.patch(
      `/cms/footer/${footerId}/social-media/${id}`,
      data
    );
    return response.data;
  },

  deleteSocialItem: async ({
    footerId,
    id,
  }: {
    footerId: string;
    id: string;
  }): Promise<ApiResponse<Footer>> => {
    const response = await api.delete(
      `/cms/footer/${footerId}/social-media/${id}`
    );
    return response.data;
  },

  // Category Management
  addLinkCategory: async (
    footerId: string,
    categoryData: any
  ): Promise<ApiResponse<Footer>> => {
    const response = await api.post(`/cms/footer/${footerId}/categories`, {
      ...categoryData,
      links: [],
    });
    return response.data;
  },

  updateLinkCategory: async (
    footerId: string,
    categoryId: string,
    categoryData: Partial<Footer["linkCategories"][0]>
  ): Promise<ApiResponse<Footer>> => {
    const response = await api.patch(
      `/cms/footer/${footerId}/categories/${categoryId}`,
      categoryData
    );
    return response.data;
  },

  deleteLinkCategory: async (
    footerId: string,
    categoryId: string
  ): Promise<ApiResponse<null>> => {
    const response = await api.delete(
      `/cms/footer/${footerId}/categories/${categoryId}`
    );
    return response.data;
  },

  // Link Management
  addLinkToCategory: async (
    footerId: string,
    categoryId: string,
    linkData: Omit<Footer["linkCategories"][0]["links"][0], "_id">
  ): Promise<ApiResponse<Footer>> => {
    const response = await api.post(
      `/cms/footer/${footerId}/categories/${categoryId}/links`,
      linkData
    );
    return response.data;
  },

  updateLinkInCategory: async (
    footerId: string,
    categoryId: string,
    linkId: string,
    linkData: Partial<Footer["linkCategories"][0]["links"][0]>
  ): Promise<ApiResponse<Footer>> => {
    const response = await api.patch(
      `/cms/footer/${footerId}/categories/${categoryId}/links/${linkId}`,
      linkData
    );
    return response.data;
  },

  removeLinkFromCategory: async (
    footerId: string,
    categoryId: string,
    linkId: string
  ): Promise<ApiResponse<null>> => {
    const response = await api.delete(
      `/cms/footer/${footerId}/categories/${categoryId}/links/${linkId}`
    );
    return response.data;
  },

  // Update social media item
  updateSocialMediaItem: async (
    itemId: string,
    itemData: Partial<Footer["socialMediaItems"][0]>
  ): Promise<ApiResponse<Footer>> => {
    const response = await api.put(`/cms/footer/social/${itemId}`, itemData);
    return response.data;
  },

  // Add social media item
  addSocialMediaItem: async (
    itemData: Omit<Footer["socialMediaItems"][0], "_id">
  ): Promise<ApiResponse<Footer>> => {
    const response = await api.post("/cms/footer/social", itemData);
    return response.data;
  },

  // Delete social media item
  deleteSocialMediaItem: async (itemId: string): Promise<ApiResponse<null>> => {
    const response = await api.delete(`/cms/footer/social/${itemId}`);
    return response.data;
  },

  // Additional Link Management
  createAdditionalLink: async (
    footerId: string,
    linkData: Partial<AdditionalLink>
  ): Promise<ApiResponse<Footer>> => {
    const response = await api.post(
      `/cms/footer/${footerId}/additional-links`,
      linkData
    );
    return response.data;
  },

  updateAdditionalLink: async (
    footerId: string,
    linkId: string,
    linkData: Partial<AdditionalLink>
  ): Promise<ApiResponse<Footer>> => {
    const response = await api.patch(
      `/cms/footer/${footerId}/additional-links/${linkId}`,
      linkData
    );
    return response.data;
  },

  deleteAdditionalLink: async (
    footerId: string,
    linkId: string
  ): Promise<ApiResponse<null>> => {
    const response = await api.delete(
      `/cms/footer/${footerId}/additional-links/${linkId}`
    );
    return response.data;
  },

  reorderAdditionalLink: async (
    linkId: string,
    direction: "up" | "down"
  ): Promise<ApiResponse<Footer>> => {
    const response = await api.patch(
      `/cms/footer/additional-links/${linkId}/reorder`,
      { direction }
    );
    return response.data;
  },
};
