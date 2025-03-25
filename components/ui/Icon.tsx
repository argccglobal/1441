import { cn } from "@/utils/classNames";
import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: IconType;
  className?: string;
}

export const Icon = ({ name, className, ...props }: IconProps) => {
  return (
    <span
      {...props}
      className={cn(
        "material-icons text-neutralDark text-[20px] material-symbols-outlined !leading-none",
        className
      )}
    >
      {name}
    </span>
  );
};
