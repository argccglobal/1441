// Input.tsx
"use client";

import * as React from "react";
import { Icon } from "./Icon";
import { cn } from "../../lib/utils";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  labelPosition?: "bottom" | "right";
  type?: "radio";
}

export const RadioInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, labelPosition, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-2.5",
          labelPosition === "bottom" ? "flex-col" : "flex-row"
        )}
      >
        <input
          id={id}
          ref={ref}
          {...props}
          type="radio"
          className={[
            "appearance-none h-5 w-5 border-2 checked:bg-primary rounded-full hover:border-primary checked:border-primary  focus:outline-none",
            className,
          ].join(" ")}
        />
        {label && <Label className={className} label={label} id={id} />}
      </div>
      //   {errors.exampleRequired && <span>This field is required</span>}
    );
  }
);
RadioInput.displayName = "RadioInput";
const Label = ({
  label,
  id,
  className,
}: {
  label?: string;
  id: string;
  className?: string;
}) => {
  return (
    <label
      htmlFor={id}
      className={["text-body_2 font-normal text-neutralDark", className].join(
        " "
      )}
    >
      {label}
    </label>
  );
};
