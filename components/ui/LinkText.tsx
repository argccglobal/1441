"use client";

import React from "react";
import { Text, textVariants } from "./Text";
import Link from "next/link";
import { Icon } from "./Icon";
import { cn } from "@/utils/classNames";

interface LinkTextProps {
  type?: "link" | "text";
  label: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
  href?: string;
  className?: string;
  noUnderline?: boolean;
  textColor?: string;
  target?: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const LinkText = ({
  type = "link",
  href = "javascript:void(0)",
  label,
  icon = "",
  iconPosition = "left",
  className,
  target,
  textColor,
  noUnderline,
  onClick,
  ...props
}: LinkTextProps) => {
  noUnderline = icon ? true : false;
  const iconSize = "text-base";
  const linkStyle = " text-neutralDark ";
  return type == "link" ? (
    <Link
      target={target}
      onClick={onClick}
      className={cn(
        "group/link  flex items-center gap-2.5 leading-none transition duration-300 text-body_2 font-normal",
        linkStyle,
        className
      )}
      {...props}
      href={href}
    >
      {iconPosition === "left" && icon && (
        <Icon className={iconSize} name={icon} />
      )}
      <span
        className={cn(
          textVariants({
            variant: "button",
          })
        )}
      >
        {label}
      </span>
      {iconPosition === "right" && icon && (
        <Icon className={iconSize} name={icon} />
      )}
    </Link>
  ) : (
    <Link
      target={target}
      href={href}
      onClick={onClick}
      className={cn(
        "group/text text-body_1 font-regular flex items-center gap-2.5 leading-none transition duration-300",
        linkStyle,
        className
      )}
      {...props}
    >
      {iconPosition === "left" && icon && (
        <Icon className={iconSize} name={icon} />
      )}
      <span
        className={cn(
          textVariants({
            variant: "button",
          })
        )}
      >
        {label}
      </span>
      {iconPosition === "right" && icon && (
        <Icon className={iconSize} name={icon} />
      )}
    </Link>
  );
};
