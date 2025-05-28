import { Team } from "./endpoints/teams";

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
  statusCode?: number;
}
// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
  statusCode?: number;
}

// API Error Types
export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

// Pagination Types
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Common Query Parameters
export interface QueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
  search?: string;
}

export interface AdditionalLink {
  _id: string;
  title: string;
  href: string;
}

export enum QuestionType {
  SELECT = "select",
  TEXT = "text",
}

export enum QuestionCategory {
  INVESTING = "investing",
  SELLING = "selling",
  BUYING = "buying",
}

export interface Option {
  _id?: string;
  text: string;
  order: number;
}

export interface Answer {
  _id?: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  _id?: string;
  text: string;
  type: QuestionType;
  category: QuestionCategory;
  options?: Option[];
  order: number;
  isActive: boolean;
  answers: Answer[];
  explanation?: string;
  displayOrder: number;
}

export interface UserAnswer {
  _id?: string;
  question: string;
  answer: string;
  propertyId?: string;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AboutHeroSection {
  title: string;
  description: string;
}

export interface AboutUsSection {
  title: string;
  image: string;
  imageFile?: File | null; // Optional for file upload
  content: string[];
  additionalText: string;
}

export interface TeamMember {
  teamId: Team;
  _id?: string;
}

export interface ConsultantsSection {
  title: string;
  team: Team[];
  seeAllLink: string;
}
interface ServiceSection {
  title: string;
  description: string;
}

interface ctaSection {
  title: string;
  description: string;
  button_text: string;
  button_link: string;
}
export interface ServicePageData {
  service: ServiceSection;
  cta: ctaSection;
}
export interface PartnersSection {
  title: string;
  logos: string[];
}

export interface ClientType {
  title: string;
  isActive?: boolean;
  displayOrder?: number;
  icon?: string;
  bgColor?: string;
}

export interface ClientsSection {
  title: string;
  description: string;
  clientList: ClientType[];
}

export interface Testimonial {
  content: string;
  role: string;
  company: string;
  logo: string;
  logoFile?: File | null;
}

export interface TestimonialsSection {
  title: string;
  items: Testimonial[];
}

export interface Value {
  title: string;
  description: string;
  color: string;
}

export interface ValuesSection {
  title: string;
  items: Value[];
  brandText: string;
}

export interface AboutPageData {
  hero: AboutHeroSection;
  aboutUs: AboutUsSection;
  consultants: ConsultantsSection;
  partners: PartnersSection;
  clients: ClientsSection;
  testimonials: TestimonialsSection;
  values: ValuesSection;
}

export interface ContactSection {
  title: string;
  description: string;
  anchors: {
    href_text: string;
    href: string;
  }[];
  cta_items: {
    title: string;
    description: string;
    button_text: string;
    button_link: string;
  }[];
}

export interface OfficeSection {
  title: string;
  image_url: string;
}

export interface Region {
  _id?: string;
  region_name: string;
}

export interface Country {
  _id?: string;
  country_name: string;
  region_id: string;
}

export interface Office {
  _id?: string;
  address_line_one: string;
  address_line_two: string;
  po_box_text: string;
  telephone: string;
  working_hours_text: string;
  latitude: number;
  longitude: number;
  region_id: string;
  country_id: string;
  vacancy_section_title: string;
  vacancy_section_description: string;
}

export interface Vacancy {
  _id?: string;
  title: string;
  description: string;
  link: string;
  is_published: boolean;
  office_id: string;
}

export interface ContactPageData {
  contactSection: ContactSection;
  officeSection: OfficeSection;
  regions: Region[];
  countries: Country[];
  offices: Office[];
  vacancies: Vacancy[];
}

export interface Contact {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  status: "new" | "in-progress" | "completed";
  createdAt?: string;
  updatedAt?: string;
}

export interface TeamPageContent {
  title: string;
  subtitle?: string;
  description: string;
  banner?: string;
  metaTitle?: string;
  metaDescription?: string;
  sections?: {
    heading: string;
    content: string;
  }[];
}

// Testimonial Types
export interface Testimonial {
  _id: string;
  content: string;
  role: string;
  company: string;
  logo: string;
  isActive: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTestimonialDto {
  content: string;
  role: string;
  company: string;
  logo: string;
  isActive?: boolean;
  displayOrder?: number;
}

export interface UpdateTestimonialDto extends Partial<CreateTestimonialDto> {}

// API Error Types
export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

// Pagination Types
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Common Query Parameters
export interface QueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
  search?: string;
}

export interface TeamPageContent {
  title: string;
  subtitle?: string;
  description: string;
  banner?: string;
  metaTitle?: string;
  metaDescription?: string;
  sections?: {
    heading: string;
    content: string;
  }[];
}
