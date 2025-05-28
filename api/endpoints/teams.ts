import api from "../axios";
import {
  ApiResponse,
  PaginatedResponse,
  QueryParams,
  TeamPageContent,
} from "../types";
export interface Project {
  name: string;
  description: string;
  projectType: string;
  location: string;
  size: string;
  role: string;
  achievements: string;
  year: number;
  images: string[];
  clientName: string;
  testimonial: string;
}

export interface SocialMedia {
  linkedin: string;
  twitter: string;
  instagram: string;
  facebook: string;
  youtube: string;
  website: string;
}

export interface Team {
  _id: string;
  name: string;
  profileImage: string;
  profileImageFile?: File;
  phone: string;
  email: string;
  location: string;
  title: string;
  biography: string[];
  yearsOfExperience?: number;
  projects: Project[];
  socialMedia: SocialMedia;
  languagesSpoken: string[];
  isActive: boolean;
  activeListings: string[];
  soldProperties: string[];
  createdAt: string;
  updatedAt: string;
}

export interface FormErrors {
  name?: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  biography?: string;
  projects?: string;
}

export const teamsApi = {
  // Get all teams with pagination
  getTeams: async (params?: QueryParams): Promise<PaginatedResponse<Team>> => {
    const response = await api.get("/team", { params });
    return response.data;
  },

  // Get single team by ID
  getTeamById: async (id: string): Promise<ApiResponse<Team>> => {
    const response = await api.get(`/teams/${id}`);
    return response.data;
  },

  // Create new team
  createTeam: async (teamData: any): Promise<ApiResponse<Team>> => {
    const response = await api.post("/team", teamData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // Update team
  updateTeam: async (id: string, teamData: any): Promise<ApiResponse<Team>> => {
    const response = await api.patch(`/team/${id}`, teamData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // Delete team
  deleteTeam: async (id: string): Promise<ApiResponse<null>> => {
    const response = await api.delete(`/team/${id}`);
    return response.data;
  },

  // Get team page CMS content
  getTeamPageContent: async (): Promise<ApiResponse<TeamPageContent>> => {
    const response = await api.get("/cms/team-page");
    return response.data;
  },

  // Create or update team page CMS content
  createTeamPageContent: async (
    pageData: TeamPageContent
  ): Promise<ApiResponse<TeamPageContent>> => {
    const response = await api.post("/cms/team-page", pageData);
    return response.data;
  },
};
