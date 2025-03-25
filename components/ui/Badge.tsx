"use client";

import React from "react";

import Link from "next/link";
import { Icon } from "./Icon";
import { cn } from "@/utils/classNames";
import { Text } from "./Text";

// extend btn element or paragraph element from react props

interface BadgeProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  type?: "badge" | "text" | "tag";
  rounded?: boolean;
  label: string;
  tag?: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
  iconAction?: () => any;
  className?: string;
  onClick?: () => any;
  loading?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Badge = ({
  primary = false,
  type = "badge",
  rounded = false,
  loading = false,
  label,
  tag,
  icon,
  iconPosition = "left",
  iconAction,
  className,
  onClick,
  ...props
}: BadgeProps) => {
  const iconSize = "text-base";
  const tagStyle = "text-body_2 !leading-none";
  const style = !primary
    ? "border-primary !text-white bg-primary hover:bg-productLicensing-500"
    : "border-transparent hover:border-border bg-background hover:bg-background text-neutralDark hover:text-neutral";

  const roundStyle = rounded ? "rounded-full" : "";
  const commonStyle =
    " text-body_2 font-normal flex items-center gap-2.5 leading-none transition duration-300";
  return type === "badge" ? (
    <button
      className={cn(
        "border rounded-sm w-fit px-5 py-[9.5px]",
        style,
        roundStyle,
        commonStyle,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {iconPosition === "left" && icon && (
        <>
          {loading ? (
            <span className="animate-spin flex rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
          ) : (
            <Icon onClick={iconAction} className={iconSize} name={icon} />
          )}
        </>
      )}
      <span>{label}</span>{" "}
      {tag && (
        <Text variant="body" className={tagStyle}>
          {tag}
        </Text>
      )}
      {iconPosition === "right" && icon && (
        <>
          {loading ? (
            <span className="animate-spin flex rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
          ) : (
            <Icon onClick={iconAction} className={iconSize} name={icon} />
          )}
        </>
      )}
    </button>
  ) : type === "tag" ? (
    <button
      onClick={onClick}
      className={cn(
        "py-[3px] rounded-sm !text-body_2 px-2.5",
        "w-fit text-neutral",
        commonStyle,
        style,
        className
      )}
      {...props}
    >
      <span>{label}</span>
    </button>
  ) : (
    <button
      onClick={onClick}
      className={["w-fit text-neutral", commonStyle, className].join(" ")}
      {...props}
    >
      {iconPosition === "left" && icon && (
        <>
          {loading ? (
            <span className="animate-spin flex rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
          ) : (
            <Icon onClick={iconAction} className={iconSize} name={icon} />
          )}
        </>
      )}
      <span>{label}</span>
      {tag && <SmallText className={tagStyle}>{tag}</SmallText>}
      {iconPosition === "right" && icon && (
        <>
          {loading ? (
            <span className="animate-spin flex rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
          ) : (
            <Icon onClick={iconAction} className={iconSize} name={icon} />
          )}
        </>
      )}
    </button>
  );
};
