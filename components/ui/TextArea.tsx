"use client";
import { cn } from "@/utils/classNames";
import * as React from "react";
interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name?: string;
  rows: number;
  cols: number;
  placeholder: string;
  className?: string;
  errorMsg?: string;
}
export const TextArea = ({
  errorMsg,
  id,
  name,
  rows,
  cols,
  placeholder,
  className,
  ...props
}: TextAreaProps) => {
  return (
    <>
      <textarea
        {...props}
        className={cn(
          "border w-full border-border outline-none px-2.5 py-2 text-neutralDark focus:border-primary placeholder:!text-placeholder text-body_2 placeholder:text-body_2",
          className
        )}
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
      ></textarea>

      {errorMsg && (
        <span className="text-sm  top-10 font-roboto font-light text-danger-600 w-full mt-2.5 leading-[21px]">
          {errorMsg}
        </span>
      )}
    </>
  );
};
