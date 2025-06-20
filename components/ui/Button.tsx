"use client";

import React from "react";
import { Text } from "./Text";
import Link from "next/link";
import { Icon } from "./Icon";
import { cn } from "@/utils/classNames";
import { IconType } from "@/types";

// html tag element props in nextjs

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  type?: "button" | "link" | "text";
  btnType?: "submit" | "reset" | "button";
  rounded?: boolean;
  outline?: boolean;
  size?: "normal" | "small";
  label: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
  iconSize?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isLoading?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  isLoading,
  primary = false,
  type = "button",
  btnType = "button",
  href,
  rounded = false,
  outline = false,
  size = "normal",
  label,
  icon,
  iconPosition = "left",
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  iconSize = "text-xl",
  ...props
}: ButtonProps) => {
  const sizeStyle = size === "normal" ? "py-[19px]" : "py-[12px]";
  const style = !outline
    ? primary
      ? "border-primary hover:border-productLicensing-500 !text-white bg-primary hover:bg-productLicensing-500"
      : "border-neutralDark hover:border-neutral text-white bg-neutralDark hover:bg-neutral"
    : outline && primary
    ? "border-primary hover:border-productLicensing-500 bg-transparent hover:text-white hover:bg-productLicensing-500 text-primary"
    : outline && !primary
    ? "border-neutralDark hover:border-neutral hover:bg-neutral  hover:text-white bg-transparent text-neutralDark text-neutral"
    : "";

  const roundStyle = rounded ? "rounded-full" : "";

  return type === "button" ? (
    <>
      {isLoading ? (
        <button
          className={cn(
            "border cursor-pointer rounded-sm flex items-center gap-2.5 leading-none px-[30px] transition duration-300 font-normal ",
            style,
            sizeStyle,
            roundStyle,
            className
          )}
        >
          <span className="animate-spin flex rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
        </button>
      ) : (
        <button
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          type={btnType}
          className={cn(
            "border cursor-pointer rounded-sm flex items-center gap-2.5 leading-none px-[30px] transition duration-300 font-normal ",
            style,
            sizeStyle,
            roundStyle,
            className
          )}
          {...props}
        >
          {iconPosition === "left" && icon && (
            <Icon className={iconSize} name={icon} />
          )}
          <span className="!text-body_2">{label}</span>
          {iconPosition === "right" && icon && (
            <Icon className={iconSize} name={icon} />
          )}
        </button>
      )}
    </>
  ) : type == "link" ? (
    <>
      {isLoading ? (
        <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-primary"></span>
      ) : (
        <LinkButton
          className={className}
          label={label}
          iconSize={iconSize}
          icon={icon}
          href={href || ""}
          iconPosition={iconPosition}
        />
      )}
    </>
  ) : (
    <>
      {isLoading ? (
        <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-primary"></span>
      ) : (
        <TextButton
          onClick={onClick}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          className={className}
          label={label}
          icon={icon}
          iconSize={iconSize}
          iconPosition={iconPosition}
          props
        />
      )}
    </>
  );
};

interface LinkButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
  href?: string;
  className?: string;
  props?: any;
  iconSize: string;
}
const LinkButton: React.FC<LinkButtonProps> = ({
  className,
  label,
  icon,
  iconPosition,
  props,
  href,
  iconSize,
}) => {
  return href ? (
    <Link
      className={cn(
        "flex min-w-max items-center gap-2.5 leading-none font-normal",
        "text-primary !text-body_2 hover:text-productLicensing-500",
        className
      )}
      {...props}
      href={href}
    >
      {iconPosition === "left" && icon && (
        <Icon className={cn(iconSize, "leading-none")} name={icon} />
      )}
      <span>{label}</span>
      {iconPosition === "right" && icon && (
        <Icon className={cn(iconSize, "leading-none")} name={icon} />
      )}
    </Link>
  ) : (
    <button
      className={cn(
        "flex min-w-max items-center gap-2.5 leading-none font-normal",
        "text-primary !text-body_2 hover:text-productLicensing-500",
        className
      )}
      {...props}
    >
      {iconPosition === "left" && icon && (
        <Icon className={cn(iconSize, "leading-none")} name={icon} />
      )}
      <span>{label}</span>
      {iconPosition === "right" && icon && (
        <Icon className={cn(iconSize, "leading-none")} name={icon} />
      )}
    </button>
  );
};

interface TextButton extends React.HTMLAttributes<HTMLBodyElement> {
  props?: any;
  iconPosition?: "left" | "right";
  iconSize?: string;
  icon?: IconType;
  label: string;
  isLoading?: string;
}
const TextButton: React.FC<TextButton> = ({
  className,
  props,
  label,
  icon,
  iconPosition,
  iconSize,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <div
          className={cn(
            "flex items-center gap-2.5 leading-none transition duration-300 text-body_2 font-normal",
            "text-neutralDark hover:text-productLicensing-500",
            className
          )}
        >
          <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-primary">
            {""}
          </span>
        </div>
      ) : (
        <div
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={cn(
            "flex items-center gap-2.5 leading-none transition duration-300 text-body_2 font-normal",
            "text-neutralDark hover:text-productLicensing-500",
            className
          )}
          {...props}
        >
          {iconPosition === "left" && icon && (
            <Icon className={iconSize} name={icon} />
          )}
          <span>{label}</span>
          {iconPosition === "right" && icon && (
            <Icon className={iconSize} name={icon} />
          )}
        </div>
      )}
    </>
  );
};
