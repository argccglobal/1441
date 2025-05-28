import api from "../axios";
import {
  AboutPageData,
  ApiResponse,
  PaginatedResponse,
  QueryParams,
  Testimonial,
} from "../types";

export const aboutApi = {
  getTestimonials: async (
    params?: QueryParams
  ): Promise<PaginatedResponse<Testimonial>> => {
    const response = await api.get("/cms/testimonials", { params });
    return response.data;
  },

  getAboutPageData: async (): Promise<ApiResponse<AboutPageData>> => {
    const response = await api.get<ApiResponse<AboutPageData>>("/cms/about");
    return response.data;
  },
  updateAboutPageData: async (
    params:
      | "hero"
      | "aboutUs"
      | "consultants"
      | "partners"
      | "clients"
      | "testimonials"
      | "values",
    data: any
  ): Promise<ApiResponse<AboutPageData>> => {
    console.log("Updating about page data for section:", params, data);
    const response = await api.put<ApiResponse<AboutPageData>>(
      `/cms/about/${params}`,
      data
    );
    return response.data;
  },
  updateAboutUsSectionData: async (
    data: any
  ): Promise<ApiResponse<AboutPageData>> => {
    console.log("data here", data);
    const response = await api.put<ApiResponse<AboutPageData>>(
      `/cms/about/about-us`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },
  addClientList: async (
    // clients/add
    data: any
  ): Promise<ApiResponse<AboutPageData>> => {
    console.log("data here", data);
    const response = await api.put<ApiResponse<AboutPageData>>(
      `/cms/about/clients/add`,
      data
    );
    return response.data;
  },

  addValue: async (data: any): Promise<ApiResponse<AboutPageData>> => {
    console.log("data here", data);
    const response = await api.put<ApiResponse<AboutPageData>>(
      `/cms/about/values/add`,
      data
    );
    return response.data;
  },
};
export const getAboutPageData = async () => {
  const response = await axios.get<ApiResponse<AboutPageData>>("/about");
  return response.data;
};

export const updateAboutPageData = async (data: AboutPageData) => {
  const response = await axios.put<ApiResponse<AboutPageData>>(
    "/cms/about",
    data
  );
  return response.data;
};

// Mock data for development
export const mockAboutPageData: AboutPageData = {
  hero: {
    title: "Your Premier Property Partner",
    description:
      "Exceptional service in luxury real estate, backed by decades of expertise and a commitment to excellence",
  },
  aboutUs: {
    title: "About Us",
    image: "/images/about/company-image.jpg",
    content: [
      "With over 20 years of experience in luxury real estate, we've built our reputation on trust, expertise, and unparalleled service.",
      "Our team of seasoned professionals brings deep market knowledge and exclusive access to the most prestigious properties.",
      "We pride ourselves on creating bespoke solutions for each client, whether they're seeking their dream home or making strategic investments.",
    ],
    additionalText:
      "Our commitment to discretion and excellence has made us the trusted choice for high-net-worth individuals, royal families, and discerning investors worldwide.",
  },
  consultants: {
    title: "Our Expert Team",
    team: [
      {
        id: 1,
        name: "James Wilson",
        role: "Senior Property Consultant",
        image: "/images/team/james-wilson.jpg",
      },
      {
        id: 2,
        name: "Sarah Chen",
        role: "Investment Advisor",
        image: "/images/team/sarah-chen.jpg",
      },
    ],
    seeAllLink: "/our-team",
  },
  partners: {
    title: "Our Strategic Partners",
    logos: [
      "/images/partners/luxury-homes.svg",
      "/images/partners/investment-group.svg",
      "/images/partners/global-estates.svg",
    ],
  },
  clients: {
    title: "Who We Serve",
    description:
      "We cater to a distinguished clientele who demand the highest standards of service and discretion in their real estate endeavors.",
    clientTypes: [
      {
        icon: "crown",
        title: "Royal Families",
        bgColor: "properties",
      },
      {
        icon: "chart",
        title: "UHNW Individuals",
        bgColor: "team",
      },
      {
        icon: "building",
        title: "Family Offices",
        bgColor: "services",
      },
    ],
  },
  testimonials: {
    title: "Client Testimonials",
    items: [
      {
        content:
          "Their attention to detail and market knowledge is unmatched. They made the entire process seamless and confidential.",
        role: "Private Investor",
        company: "Global Investment Firm",
        logo: "/images/testimonials/global-inv.svg",
      },
    ],
  },
  values: {
    title: "Our Core Values",
    items: [
      {
        title: "Excellence",
        description:
          "Delivering exceptional results through meticulous attention to detail",
        color: "properties",
      },
      {
        title: "Integrity",
        description:
          "Building lasting relationships based on trust and transparency",
        color: "team",
      },
      {
        title: "Innovation",
        description:
          "Embracing new solutions while maintaining traditional values",
        color: "services",
      },
    ],
    brandText: "TRUSTED",
  },
};
