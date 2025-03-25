import React from "react";
import { Input } from "./Input";
import { Icon } from "./Icon";

export const Search = ({ type }: { type: "large" | "small" }) => {
  return (
    <>
      {type === "large" ? (
        <div className="flex max-w-[350px] justify-between gap-2.5 h-[40px] px-2.5 items-center bg-white border-border">
          <Input
            id="search"
            className="w-48 border-none text-neutral placeholder:text-neutral"
            type="text"
            placeholder="Search"
          />
          <Icon
            name="search"
            className="text-h4 text-neutralLight cursor-pointer flex items-center"
          />
        </div>
      ) : (
        <div className="flex max-w-[350px] justify-between gap-2.5 h-[30px] px-2.5 items-center bg-white border-border">
          <Input
            id="search"
            className="w-48 border-none text-neutral placeholder:text-placeholder"
            type="text"
            placeholder="Search"
          />
          <Icon
            name="search"
            className="!text-body_1 text-neutralLight cursor-pointer flex items-center"
          />
        </div>
      )}
    </>
  );
};
