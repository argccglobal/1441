import { contactApi } from "@/apiRequest/endpoints/contact";
import { ContactPageData, QueryParams } from "@/apiRequest/types";
import { create } from "zustand";

interface ContactState {
  contactData: ContactPageData["contactSection"] | null;
  officeSection: ContactPageData["officeSection"] | null;
  offices: ContactPageData["offices"] | null;
  vacancies: ContactPageData["vacancies"] | null;
  loading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  contactData: null,
  officeSection: null,
  offices: null,
  vacancies: null,
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
      const response = await contactApi.getContactPageDataFull();
      console.log(response);
      set({
        contactData: response.data.contactSection,
        officeSection: response.data.officeSection,
        offices: response.data.offices,
        vacancies: response.data.vacancies,
        error: null,
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
