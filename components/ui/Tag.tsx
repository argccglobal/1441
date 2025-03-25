"use client";

import React, { ButtonHTMLAttributes } from "react";
import { Text } from "./Text";
import Link from "next/link";
import { Icon } from "./Icon";
import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

// extend btn element or paragraph element from react props

// const tagStyle = cva("",
// {
//     variant: {

//     }
// }
// );
const tagStyle = cva("text-[12px] leading-[14px] flex w-fit", {
  variants: {
    tag: {
      "1": "text-neutralDark text-body_2 text-productLicensing-600 hover:underline",
      "2": "py-[5px] !text-white uppercase bg-productLicensing-500 rounded-sm px-2.5",
    },
  },
});

export interface TagProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tagStyle> {}
/**
 * Primary UI component for user interaction
 */
export const Tag = ({ className, tag, ...props }: TagProps) => {
  return <button className={cn(tagStyle({ tag, className }))} {...props} />;
};
