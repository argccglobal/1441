import { contactApi } from "@/api/endpoints/contact";
import { ContactPageData, QueryParams } from "@/api/types";
import { create } from "zustand";

interface ContactState {
  contactData: ContactPageData | null;
  loading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  contactData: null,
  loading: false,
  error: null,
};

export const useContactStore = create<
  ContactState & {
    getContactData: () => Promise<void>;
  }
>((set) => ({
  ...initialState,
  getContactData: async () => {
    try {
      set({ loading: true, error: null });
      const response = await contactApi.getContactPageData();
      set({
        contactData: response,
        loading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },
}));
