import api from "../axios";
import { ApiResponse, PaginatedResponse, Policy, QueryParams } from "../types";

export const policiesApi = {
  // Get all policies with optional category filter
  getPolicies: async (
    params?: QueryParams
  ): Promise<PaginatedResponse<Policy>> => {
    const response = await api.get("/policies", { params });
    return response.data;
  },

  // Get single policy by ID policiesApi.getPolicies(params?: QueryParams): Promise<PaginatedResponse<Policy>> => {

  getPolicyById: async (id: string): Promise<ApiResponse<Policy>> => {
    const response = await api.get(`/policies/${id}`);
    return response.data;
  },

  // Create new policy
  createPolicy: async (
    policyData: Partial<Policy>
  ): Promise<ApiResponse<Policy>> => {
    console.log("Creating policy with data:", policyData);
    const { category, content, title } = policyData;
    const response = await api.post("/policies", { category, content, title });
    return response.data;
  },

  // Update policy
  updatePolicy: async (
    id: string,
    policyData: Partial<Policy>
  ): Promise<ApiResponse<Policy>> => {
    const response = await api.put(`/policies/${id}`, policyData);
    return response.data;
  },

  // Delete policy
  deletePolicy: async (id: string): Promise<ApiResponse<void>> => {
    const response = await api.delete(`/policies/${id}`);
    return response.data;
  },
};
