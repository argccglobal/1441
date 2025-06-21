import { PropertyPageData } from "@/apiRequest/endpoints/propertyPage";
import { create } from "zustand";

type PropertyDetailsOffcanvasState = {
  isOpenCanvas: boolean;
  activeTab: string;
  setIsOpenCanvas: (isOpen: boolean) => void;
  setActiveTab: (tab: string) => void;
};

export const usePropertyDetailsOffcanvas =
  create<PropertyDetailsOffcanvasState>((set) => ({
    isOpenCanvas: false,
    activeTab: "",
    setIsOpenCanvas: (isOpen) => set({ isOpenCanvas: isOpen }),
    setActiveTab: (tab) => set({ activeTab: tab }),
  }));

type PropertyPage = {
  propertiesPageData: PropertyPageData | null;
  setPropertiesPageData: (data: PropertyPageData) => void;
};
export const usePropertyPageData = create<PropertyPage>((set) => ({
  propertiesPageData: null,
  setPropertiesPageData: (data) => set({ propertiesPageData: data }),
}));
