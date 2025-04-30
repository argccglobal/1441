import { create } from "zustand";
import { headerApi, HeaderData } from "@/api/endpoints/header";

interface HeaderStore {
  headerData: HeaderData | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setHeaderData: (data: HeaderData) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;

  // API calls
  fetchHeaderData: () => Promise<void>;
  createHeader: (formData: FormData) => Promise<void>;
  createAnnouncement: (message: string) => Promise<void>;
  updateAnnouncement: (message: string, isActive: boolean) => Promise<void>;
}

const useHeaderStore = create<HeaderStore>((set) => ({
  headerData: null,
  isLoading: false,
  error: null,

  // Actions
  setHeaderData: (data) => set({ headerData: data }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),

  // API calls
  fetchHeaderData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await headerApi.getHeaderData();
      console.log("response", response);
      if (response.statusCode === 200) {
        set({ headerData: response.data });
      } else {
        set({ error: response.message || "Failed to fetch header data" });
      }
    } catch (error) {
      set({ error: "An error occurred while fetching header data" });
    } finally {
      set({ isLoading: false });
    }
  },

  createHeader: async (formData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await headerApi.createHeader(formData);
      if (response.statusCode === 200) {
        set({ headerData: response.data });
      } else {
        set({ error: response.message || "Failed to create header" });
      }
    } catch (error) {
      set({ error: "An error occurred while creating header" });
    } finally {
      set({ isLoading: false });
    }
  },

  createAnnouncement: async (message) => {
    set({ isLoading: true, error: null });
    try {
      const response = await headerApi.createAnnouncement({ message });
      if (response.statusCode === 200) {
        set({ headerData: response.data });
      } else {
        set({ error: response.message || "Failed to create announcement" });
      }
    } catch (error) {
      set({ error: "An error occurred while creating announcement" });
    } finally {
      set({ isLoading: false });
    }
  },

  updateAnnouncement: async (message, isActive) => {
    set({ isLoading: true, error: null });
    try {
      const response = await headerApi.updateAnnouncement({
        message,
        isActive,
      });
      if (response.statusCode === 200) {
        set({ headerData: response.data });
      } else {
        set({ error: response.message || "Failed to update announcement" });
      }
    } catch (error) {
      set({ error: "An error occurred while updating announcement" });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useHeaderStore;
export type { HeaderData };
