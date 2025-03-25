type IconType =
  | "pause"
  | "location_on"
  | "work"
  | "grid_view"
  | "error"
  | "expand_less"
  | "upgrade"
  | "meeting_room"
  | "arrow_back"
  | "arrow_back_ios"
  | "arrow_forward_ios"
  | "open_in_full"
  | "arrow_back_outline"
  | "send"
  | "send_outline"
  | "add_circle"
  | "add_circle_outline"
  | "person_outline"
  | "search"
  | "menu"
  | "warning"
  | "arrow_Down_ios"
  | "arrow_right_alt"
  | "keyboard_arrow_down"
  | "arrow_forward"
  | "east"
  | "remove"
  | "close"
  | "add"
  | "remove_circle_outline"
  | "checked"
  | "visibility"
  | "upload"
  | "check"
  | "delete"
  | "content_copy"
  | "visibility_off"
  | "arrow_drop_down"
  | "keyboard_double_arrow_left"
  | "keyboard_double_arrow_right"
  | "favorite"
  | "favorite_outline"
  | "info"
  | "share"
  | "play_arrow"
  | "chevron_left"
  | "chevron_right"
  | "arrow_circle_right"
  | "arrow_circle_left"
  | "expand_more"
  | "location_on"
  | "business_center"
  | "attach_money"
  | "label"
  | "switch_access"
  | "edit"
  | "north"
  | "email"
  | "bookmark_border"
  | "download"
  | "west"
  | "call"
  | "warning_amber"
  | "keyboard_arrow_right"
  | "keyboard_arrow_left"
  | "language"
  | "attachment"
  | "calendar_today"
  | "chat_bubble_outline"
  | "file_download"
  | "account_circle"
  | "logout"
  | "calendar_month"
  | "";

interface HERO {
  title: string;
  description: string;
  background_video_url: string;
  anchors: [];
}

interface FOCUS {
  title: string;
  description: string;
  _id: string;
}
interface FOCUSES {
  focus: FOCUS[];
}

interface CHALLENGES_WE_SOLVED {
  description: string;
  href: string;
  href_text: string;
  ref_our_capability: {
    _id: string;
    header: {
      title: string;
      description: string;
      _id: string;
    };
  }[];
  title: string;
}
interface WE_HAVE_WORKED_WITH {
  title: string;
  worked_with_images: string[];
}
interface PROJECTS_IN_SPOTLIGHT_SECTION {
  title: string;
  ref_case_study: [];
}
interface BOOK {
  book_cover_image_url: string;
  createdAt: string;
  external_link: string;
  isbn: string;
  language: string;
  name: string;
  overview: string;
  page_count: number;
  page_format: string;
  price: number;
  published_date: string;
  ref_author_id: {
    author_name: string;
  };
  ref_category_id: string;
  ref_publisher_id: string;
  status: boolean;
  _id: string;
}
interface BOOKS_SECTION {
  ref_book: BOOK[];
  href: string;
  href_text: string;
  title: string;
}

interface TESTIMONIAL {
  company_name: string;
  full_name: string;
  position: string;
  profile_image_url: string;
  ref_cms_team_profile: string;
  ref_country: string;
  testimonial_text: string;
  _id: string;
}
interface EXPLORE_MORE {
  title: string;
  description: string;
  href_text: string;
  chips: string[];
}
interface TESTIMONIALS {
  href: string;
  href_text: string;
  ref_client_testimonial: TESTIMONIAL;
  title: string;
}

interface COMPANY {
  color_code: string;
  href: string;
  // ref_job_company: JOB_COMPANY;
  ref_job_company: {
    company_title: string;
  };
  menu_items?: {
    href_text: string;
    href: string;
  }[];
  menu_title?: string;
}

interface JOB_COMPANY {
  company_title: string;
}
interface BRANDS_AND_TECHNOLOGY {
  companies: COMPANY[];
  description: string;
  image_url: string;
  title: string;
}
interface ABOUT_HERO {
  title: string;
  description: string;
  statistics: {
    title: string;
    description: string;
    href: string;
    href_text: string;
    _id: string;
  }[];
}

interface ApiResponse {
  success: boolean;
  data?: any;
  error?: {
    message: string;
    statusCode: number;
  };
  public?: boolean;
}
