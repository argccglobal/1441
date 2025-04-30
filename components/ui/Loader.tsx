"use client";

import React from "react";
import { cn } from "@/utils/classNames";

type LoaderProps = {
  size?: "small" | "medium" | "large";
  color?: "primary" | "white";
  className?: string;
};

const Loader = ({
  size = "medium",
  color = "primary",
  className,
}: LoaderProps) => {
  const sizeClasses = {
    small: "w-4 h-4 border-2",
    medium: "w-8 h-8 border-3",
    large: "w-12 h-12 border-4",
  };

  const colorClasses = {
    primary: "border-t-propertiesMain",
    white: "border-t-white",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-solid border-gray-200",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  );
};

export default Loader;
