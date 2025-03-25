"use client";

import React from "react";
import { Text } from "./Text";
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
  const linkStyle = " text-neutralDark hover:text-productLicensing-700";
  return type == "link" ? (
    <Link
      target={target}
      onClick={onClick}
      className={cn(
        "group/link uppercase flex items-center gap-2.5 leading-none transition duration-300 text-body_2 font-normal",
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
        className={` text-${textColor} ${
          noUnderline === true
            ? "no-underline"
            : "underline underline-offset-2 group-hover/link:underline"
        }  text-body_2`}
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
          "!text-" + textColor,
          "text-body_2 underline-offset-2",
          noUnderline == true
            ? "no-underline"
            : "underline group-hover/text:underline"
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
