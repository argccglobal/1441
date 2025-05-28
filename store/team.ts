import { Team } from "@/api/endpoints/teams";
import { create } from "zustand";

type TeamPage = {
  teamPageData: {
    title: string;
    description: string;
  } | null;
  setTeamPageData: (data: { title: string; description: string }) => void;
  teams: Team[];
  setTeams: (teams: Team[]) => void;
};

export const useTeamPageData = create<TeamPage>((set) => ({
  teamPageData: {
    title: "Welcome to Our Company New",
    description: "We are committed to excellence.",
  },
  teams: [],
  setTeams: (teams: Team[]) => set({ teams }),
  setTeamPageData: (data) => set({ teamPageData: data }),
}));
