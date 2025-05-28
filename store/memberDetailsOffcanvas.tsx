import { Team } from "@/api/endpoints/teams";
import { create } from "zustand";

type MemberDetailsOffcanvasState = {
  isOpenCanvas: boolean;
  activeTab: "biography" | "projects";
  openCanvas: () => void;
  closeCanvas: () => void;
  setActiveTab: (tab: "biography" | "projects") => void;
  selectedMember: Team | null;
  setSelectedMember: (member: Team | null) => void;
};

export const useMemberDetailsOffcanvas = create<MemberDetailsOffcanvasState>(
  (set) => ({
    isOpenCanvas: false,
    activeTab: "biography",
    openCanvas: () => set({ isOpenCanvas: true }),
    closeCanvas: () => set({ isOpenCanvas: false }),
    setActiveTab: (tab) => set({ activeTab: tab }),
    selectedMember: null,
    setSelectedMember: (member) => set({ selectedMember: member }),
  })
);
