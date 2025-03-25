// Input.tsx
"use client";

import * as React from "react";
import { Icon } from "./Icon";
import { SmallText } from "./Text";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  labelPosition?: "left" | "right";
  type: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
  placeholder?: string;
  error?: boolean;
  errorMsg?: string;
  bgColor?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      labelPosition = "left",
      id,
      className,
      type,
      error,
      errorMsg,
      bgColor,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = React.useState(false);
    return (
      <div className="flex flex-col gap-2.5">
        {labelPosition == "left" && label && <Label label={label} id={id} />}

        <div className="relative w-auto ">
          <input
            autoComplete="off"
            id={id}
            ref={ref}
            {...props}
            placeholder={placeholder}
            type={show == false ? type : "text"}
            className={[
              "border w-full h-[40px] rounded-sm outline-none px-2.5 py-2 text-neutralDark focus:border-primary placeholder:text-placeholder text-body_3 placeholder:text-body_3",
              className,
              error
                ? "border-danger-600 !text-danger-600"
                : "text-neutralDark border-border",
            ].join(" ")}
          />
          {type == "password" && (
            <div
              onClick={() => setShow(!show)}
              className="text-border flex items-center absolute  right-2.5  top-[20px] transform -translate-y-1/2  cursor-pointer"
            >
              {show == true ? (
                <Icon className="text-xl text-neutralDark" name="visibility" />
              ) : (
                <Icon
                  className="text-xl text-neutralDark"
                  name="visibility_off"
                />
              )}
            </div>
          )}

          {error && errorMsg && (
            <SmallText color="danger-600" className="w-full mt-2.5">
              {errorMsg}
            </SmallText>
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";
export const Label = ({
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
Label.displayName = "Label";
export { Input };
