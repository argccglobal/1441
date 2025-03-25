import React, { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { CheckboxInput } from "./Checkbox";
import { LinkText } from "./LinkText";
import { Button } from "./Button";
interface Options {
  value: string;
  label: string;
  type?: string | "checkbox";
  tag?: string;
}
interface FilterProps {
  options: Options[];
  search?: boolean;
  placeholder: string;
  children?: React.ReactNode;
}
const Filter = ({ placeholder, children }: FilterProps) => {
  // const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (open && !event.target.closest(".option-menu")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, setOpen]);
  return (
    <div className="option-menu w-80 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`text-neutralDark border-border border text-body_2 font-normal bg-white w-full px-2.5 py-2 flex items-center justify-between ${
          open && "border-primary"
        }`}
      >
        {placeholder}
        <Icon
          className={`${
            open ? "transform rotate-180" : ""
          } transition duration-200`}
          name="keyboard_arrow_down"
        />
      </div>
      <div
        className={`option-menu bg-white overflow-y-auto shadow-[0_2px_4px_0px_rgba(0,0,0,0.2)]   ${
          open ? "max-h-60 py-2.5 px-5" : "max-h-0"
        } `}
      >
        {children}
        <div className="flex items-center justify-end gap-5 pt-5">
          <LinkText className="!text-border" type="link" label="Reset" />
          <Button size="small" label="Show Results" rounded primary />
        </div>
      </div>
    </div>
  );
};

export { Filter };
