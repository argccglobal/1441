import { cn } from "@/utils/classNames";
import { cva, VariantProps } from "class-variance-authority";

import { ComponentPropsWithoutRef, forwardRef, ElementType } from "react";

export const textVariants = cva("", {
  variants: {
    variant: {
      // ?New
      navbar_text: "text-[14px] leading-[1.5] font-normal",
      small: "text-sm leading-[1.5] font-normal ",
      card_title_small: "text-base leading-[1] font-medium ",
      card_title_large: "text-lg leading-[1] font-normal",
      section_title_normal: "text-[26px] leading-[1.5] font-bold",
      body: "text-base leading-[1.5] font-light",
      small_heading: "text-sm leading-[1] font-bold ",
      button: "text-sm leading-[1] font-normal",
      placeholder: "text-[12px] font-light leading-[1.5] ",
      footer_menu_title: "text-base font-semibold leading-[1]",
      extra_small: "text-[10px] leading-[1.5] font-light",
      page_title: "text-[80px] leading-[1] font-normal",
      // Old
      // h1_page_title: "text-[48px] leading-[53.5px] font-bold font-poppins",
      // h2_page_title_2: "text-[48px] leading-[72px] font-medium font-poppins",
      // navbar: "text-sm leading-[21px] font-normal font-poppins",
      // section_title: "text-[26px] leading-[39px] font-semibold font-poppins",
      // body: "text-sm leading-[26px] font-light font-poppins",
      // card_title_large: "text-base leading-6 font-medium font-poppins",
      // card_title_small: "text-sm leading-[21px] font-medium font-poppins",
      // label: "text-xs leading-[18px] font-normal font-poppins",
      // resource_header: "text-base leading-6 font-medium font-poppins",
      // placeholder: "text-xs leading-[18px] font-light font-poppins",
      // button: "text-sm leading-[21px] !font-normal font-poppins",
      // small: "text-xs leading-[18px] font-light font-poppins",
      // tag: "text-sm leading-[21px] font-normal font-poppins",
      // extra_small: "text-[10px] leading-[15px] font-light font-poppins",
      // nav_text_2: "text-xs leading-[18px] font-normal font-poppins",
      // side_nav_header: "text-sm leading-[21px] font-semibold font-poppins",
    },
    font: {
      lato: "font-[Lato]",
      roboto: "font-[roboto]",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    font: "lato",
    align: "left",
  },
});

type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

export interface TextProps
  extends ComponentPropsWithoutRef<"p">,
    VariantProps<typeof textVariants> {
  as?: TextElement;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    { className = "", variant, font, align, as: Component = "p", ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "text-neutralDark",
          textVariants({ variant, font, align }),
          className
        )}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";
