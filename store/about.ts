import { Team } from "@/api/endpoints/teams";
import { AboutPageData } from "@/api/types";
import { create } from "zustand";
type AboutPage = {
  pageData: AboutPageData | null;
  setPageData: (data: AboutPageData) => void;
};

export const useAboutPageData = create<AboutPage>((set) => ({
  pageData: null,

  setPageData: (data) => set({ pageData: data }),
}));
