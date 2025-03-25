"use client";

import React, { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

// extend btn element or paragraph element from react props

// const spaceStyle = cva("",
// {
//     variant: {

//     }
// }
// );
const SpaceStyle = cva("", {
  variants: {
    space: {
      "page-banner-y-padding": "h-[7rem]", // 112px //
      "section-y-padding": "h-[5rem]", // 80px //
      "hero-title-b-margin": "h-[4rem]", // 64px //
      "subtitle-b-margin": "h-[2rem]", // 32px //
      "line-space": "h-[1.75]rem", // 28px //
      "para-space": "h-[1.75]rem", // 28px //
      "card-3/4-x-space": "h-[2rem]", // 32px // name will be margin 3/4
      "card-inside-padding": "h-[2rem]", // 32px
      "card-x-sm-space": "h-[3rem]", // 16px
      "card-row-margin": "h-[3rem]", // 48px // Changes
      "card-title-b-margin": "h-[1.25]rem", // 20px //
      "section-heading-b-margin": "h-[3rem]", // 48px //
      "blog-image-b-margin": "h-[2rem]", // 32px
      "section-footer-link-space": "h-[3rem]", // 48px //
      "blog-column-negative-margin": "h-[3rem]", // 48px
      "tow-column-x-space": "h-[3rem]", // 48px
      "blog-list-b-margin": "h-[2rem]", // 32px
    },
  },
  defaultVariants: {},
});

export interface SpaceProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SpaceStyle> {}
/**
 * Primary UI component for user interaction
 */
export const Space = ({ className, space, ...props }: SpaceProps) => {
  return (
    <div
      className={cn(SpaceStyle({ space, className }), "w-full bg-background")}
      {...props}
    />
  );
};
