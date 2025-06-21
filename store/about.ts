import { Team } from "@/apiRequest/endpoints/teams";
import { AboutPageData } from "@/apiRequest/types";
import { create } from "zustand";
type AboutPage = {
  pageData: AboutPageData | null;
  setPageData: (data: AboutPageData) => void;
};

export const useAboutPageData = create<AboutPage>((set) => ({
  pageData: null,

  setPageData: (data) => set({ pageData: data }),
}));
