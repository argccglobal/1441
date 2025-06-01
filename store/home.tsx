import { create } from "zustand";

// Types
interface BrandSection {
  _id: string;
  quote: string;
  isActive: boolean;
}

interface BrandLogo {
  _id: string;
  imageUrl: string;
  isActive: boolean;
  displayOrder: number;
}

interface ServiceSection {
  _id: string;
  title: string;
  description: string;
  isActive: boolean;
}

interface Service {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  displayOrder: number;
}

interface RegionSection {
  _id: string;
  title: string;
  isActive: boolean;
  description: string;
}

interface FeaturedSection {
  _id: string;
  title: string;
  isActive: boolean;
  description: string;
}
export interface FeaturedProperties {
  _id: string;
  title: string;
  propertyType: string;
  listingType: string;
  description: string;
  price: number;
  currency: string;
  featured: boolean;
  recentlySold: boolean;
  status: string;
  landSize: number;
  landSizeUnit: string;
  landSizeAcres: number;
  location: {
    city: string;
    country: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    _id: string;
  };
  media: {
    photos: string[];
    _id: string;
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    amenities: string[];
    _id: string;
  };
  details: {
    epcRating: string;
    ownershipType: string;
    yearBuilt: number;
    constructionType: string;
    floorPlanSize: string;
  };
  areaGuide: string;
  listedBy: string | null;
  developmentName: string;
  similarProperties: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface HomeData {
  _id: string;
  heroImage: {
    imageUrl: string;
  };
  brandSection: BrandSection;
  brandLogos: BrandLogo[];
  serviceSection: ServiceSection;
  services: Service[];
  regionSection: RegionSection;
  regionAreas: any[]; // You can define specific type if needed
  featuredProperties?: FeaturedProperties[]; // You can define specific type if needed
  featuredSection: FeaturedSection;
}

interface HomeStore {
  homeData: HomeData | null;
  isLoading: boolean;
  error: string | null;
  setHomeData: (data: HomeData) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// Create store
const useHomeStore = create<HomeStore>((set) => ({
  homeData: null,
  isLoading: true,
  error: null,
  setHomeData: (data) => set({ homeData: data }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}));

export default useHomeStore;
