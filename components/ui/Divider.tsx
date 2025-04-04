"use client";

import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { Text } from "./Text";
import Link from "next/link";
import { Icon } from "./Icon";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/classNames";

// extend btn element or paragraph element from react props

// const dividerStyle = cva("",
// {
//     variant: {

//     }
// }
// );
const dividerStyle = cva("bg-border", {
  variants: {
    type: {
      horizontal: "h-[0.5px] w-full",
      vertical: "w-[0.5px] h-full",
    },
  },
});
// Div Element
export interface DividerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerStyle> {}
/**
 * Primary UI component for user interaction
 */
export const Divider = ({ className, type, ...props }: DividerProps) => {
  return <div className={cn(dividerStyle({ type, className }))} {...props} />;
};
