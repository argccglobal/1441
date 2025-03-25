"use client";
import React, { useState } from "react";
import { Icon } from "./Icon";
interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  ref?: any;

  className?: string;
  placeholder?: string;
  setValue?: (value: string) => void;
  props?: any;
}

export const SearchInput = ({
  id,
  ref,
  className,
  placeholder,
  setValue,
  ...props
}: SearchProps) => {
  return (
    <div className="relative flex-1">
      <input
        id={id}
        ref={ref}
        {...props}
        // @ts-ignore
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type="text"
        className={[
          "border w-full min-h-[40px] text-neutralDark border-border placeholder:text-placeholder  outline-none px-2.5 py-2 focus:border-primary !text-body_3 placeholder:text-body_2",
          className,
        ].join(" ")}
      />

      <div className="flex items-center absolute  right-2.5  top-1/2 transform -translate-y-1/2  cursor-pointer">
        <Icon className="text-lg text-neutralDark " name="search" />
      </div>
    </div>
  );
};
