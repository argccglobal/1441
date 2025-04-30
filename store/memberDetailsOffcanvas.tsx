import { create } from "zustand";

type MemberDetailsOffcanvasState = {
  isOpenCanvas: boolean;
  activeTab: "biography" | "projects";
  openCanvas: () => void;
  closeCanvas: () => void;
  setActiveTab: (tab: "biography" | "projects") => void;
};

export const useMemberDetailsOffcanvas = create<MemberDetailsOffcanvasState>(
  (set) => ({
    isOpenCanvas: false,
    activeTab: "biography",
    openCanvas: () => set({ isOpenCanvas: true }),
    closeCanvas: () => set({ isOpenCanvas: false }),
    setActiveTab: (tab) => set({ activeTab: tab }),
  })
);
