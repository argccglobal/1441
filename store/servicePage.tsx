import { servicePageApi } from "@/apiRequest/endpoints/services";
import { create } from "zustand";

export enum ServiceType {
  CONCIERGE = "CONCIERGE",
  LANDLORD_TENANCY = "LANDLORD_TENANCY",
}
interface ServiceSection {
  title: string;
  description: string;
}

interface ctaSection {
  title: string;
  description: string;
  button_text: string;
  button_link: string;
}
interface ServicePageData {
  service: ServiceSection;
  cta: ctaSection;
}

interface ServicePageState {
  pageData: ServicePageData | null;
  services: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicePageState = {
  pageData: null,
  services: [],
  loading: false,
  error: null,
};

export const useServicePageStore = create<
  ServicePageState & {
    getServicePageData: (type: ServiceType) => Promise<void>;
  }
>((set) => ({
  ...initialState,
  getServicePageData: async (type: ServiceType) => {
    try {
      set({ loading: true, error: null });
      const response = await servicePageApi.getServicePageData(type);
      const services = await servicePageApi.getService(type);
      set({ pageData: response.data, loading: false, services: services.data });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },
}));
