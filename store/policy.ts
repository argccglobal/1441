import { policiesApi } from "@/apiRequest/endpoints/policies";
import { Policy, QueryParams } from "@/apiRequest/types";
import { create } from "zustand";

interface PolicyState {
  policies: Policy[];
  loading: boolean;
  error: string | null;
}

const initialState: PolicyState = {
  policies: [],
  loading: false,
  error: null,
};

export const usePolicyStore = create<
  PolicyState & {
    getPolicies: (params?: QueryParams) => Promise<void>;
  }
>((set) => ({
  ...initialState,
  getPolicies: async (params?: QueryParams) => {
    try {
      set({ loading: true, error: null });
      const response = await policiesApi.getPolicies(params);
      set({
        policies: response.data,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },
}));
