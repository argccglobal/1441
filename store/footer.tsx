import { create } from "zustand";
import { footerApi } from "@/apiRequest/endpoints/footer"; // Adjust path if needed
import { ApiResponse, Footer } from "@/apiRequest/types"; // Assuming this is the generic wrapper

interface FooterState {
  footer: Footer | null;
  loading: boolean;
  error: string | null;
}

const initialState: FooterState = {
  footer: null,
  loading: false,
  error: null,
};

export const useFooterStore = create<
  FooterState & {
    getFooter: () => Promise<void>;
  }
>((set) => ({
  ...initialState,

  getFooter: async () => {
    try {
      set({ loading: true, error: null });
      const response: ApiResponse<Footer> = await footerApi.getFooterData();
      set({
        footer: response.data,
        loading: false,
      });
    } catch (error) {
      set({
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch footer data",
        loading: false,
      });
    }
  },
}));
