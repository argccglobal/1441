// Input.tsx
"use client";

import * as React from "react";
import { Icon } from "./Icon";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  labelPosition?: "left" | "right";
  type?: "checkbox" | "radio";
  checkIcon?: "field" | "ring";
  dark?: boolean;
}
// stripePayment
export const CheckboxInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "checkbox",
      label,
      checkIcon = "ring",
      labelPosition = "right",
      id,
      className,
      dark,
      ...props
    },
    ref
  ) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <div className="flex gap-2.5 items-start">
        {labelPosition == "left" && label && <Label label={label} id={id} />}
        <div className="!min-w-[20px] w-[20px] min-h-[20px] h-[20px]  overflow-hidden relative leading-none">
          <input
            id={id}
            ref={ref}
            {...props}
            type={type}
            className={[
              "peer z-50 w-full overflow-hidden  hover:border-primary appearance-none border border-border checked:border-primary  focus:outline-none",
              checkIcon == "field"
                ? "rounded-sm h-5 w-5 checked:bg-primary"
                : "w-5 h-5 checked:bg-transparent",
              className,
              dark
                ? "bg-white checked:border-white checked:bg-white border-borderDark"
                : "bg",
            ].join(" ")}
          />
          <label
            className={[
              "overflow-hidden w-full h-5  peer-checked:flex hidden absolute leading-none font-semibold items-center transform -translate-y-1/2 -translate-x-1/2 left-[50%] top-[45%] ",
              checkIcon == "field"
                ? " text-sm h-5 w-5 text-white "
                : " text-lg h-5 w-5 text-primary ",
            ].join("")}
            htmlFor={id}
          >
            <Icon
              className="overflow-hidden text-primary text-[20px]"
              name="checked"
              onClick={() => setChecked(!checked)}
            />
          </label>
        </div>
        {labelPosition == "right" && label && (
          <Label className={className} label={label} id={id} />
        )}
      </div>
      //   {errors.exampleRequired && <span>This field is required</span>}
    );
  }
);
CheckboxInput.displayName = "Checkbox";

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
      className={[
        "text-body_2   min-h-[20px] flex items-center font-normal text-neutralDark",
        className,
      ].join(" ")}
    >
      {label}
    </label>
  );
};
