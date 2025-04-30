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
