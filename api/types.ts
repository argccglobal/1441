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
