"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { SmallHeading, Text } from "./Text";
import { CheckboxInput } from "./Checkbox";
import { cn } from "../../lib/utils";
import { on } from "events";
export interface Options {
  value: string;
  label: string;
  type?: string | "checkbox";
  tag?: string;
}

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: Options[];
  error?: boolean;
  errorMsg?: string;
  search?: boolean;
  placeholder: string;
  placeholderClass?: string;
  className?: string;
  multicol?: boolean;
  col?: number;
  optionType?: string | "checkbox";
  dark?: boolean;
  labelKey?: string;
  valueKey?: string;
  label?: string;
  selectValue?: string;
  handleSelect?: () => void;
}
const Select = ({
  error,
  errorMsg,
  options,
  className,
  search,
  placeholder,
  placeholderClass,
  label,
  multicol,
  optionType = "string",
  col,
  dark,
  handleSelect,
  labelKey,
  valueKey,
  ...props
}: SelectProps) => {
  // const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState<Options>({
    value: "",
    label: "",
    type: "",
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (open && !event.target.closest(".option-menu")) {
        setOpen(false);
      }
    };
    console.log("selected", selected);

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, selected]);
  // col = options.length > 20 ? 3 : options.length > 10 ? 2 : 1;
  const classes = ["w-[203%]", "w-[300%]"];
  const [selectedOption, setSelectedOption] = useState<Options[]>([]);
  const handleSelectOption = (option: Options) => {
    if (handleSelect) {
      const selectOption = handleSelect();
      if (optionType != "checkbox") {
        // setSelectedOption([...selectedOption, option]);
        // @ts-ignore
        selectOption(option);
      } else {
        // @ts-ignore
        selectOption(option);
      }
      // @ts-ignore
    }
    setSelected({
      ...option,
      label: option.label,
      value: option.value,
    });
    if (optionType != "checkbox") {
      setOpen(false);
      setInputValue("");
    }
  };

  return (
    <>
      {label && (
        <SmallHeading
          onClick={() => setOpen(!open)}
          className="!mb-2.5"
          color={dark ? "white" : "neutralDark"}
        >
          {label}
        </SmallHeading>
      )}
      <div className={cn("relative flex-auto font-medium", open && "z-[999]")}>
        <div
          onClick={() => setOpen(!open)}
          className={cn(
            open && "!border-primary",
            dark
              ? "text-white !bg-neutralDark border-neutralDark"
              : "bg-productLicensing-50 border-border  text-neutralDark",
            " h-[40px] rounded-sm  border text-body_3 font-normal bg-white w-full px-2.5 py-2 flex items-center justify-between",
            className,

            selected &&
              selected?.value.length > 0 &&
              dark &&
              "bg-neutral text-white border-primary",
            selected &&
              selected?.value.length > 0 &&
              !dark &&
              "bg-productLicensing-50 border-primary"
          )}
        >
          {selected?.value.length > 0 ? (
            selected?.label.length > 25 ? (
              selected?.label.substring(0, 25) + "..."
            ) : (
              <span className="text-body_3">{selected?.label}</span>
            )
          ) : (
            <Text
              className={cn(
                dark ? " !text-body_3 !text-white" : "!text-neutralDark",
                placeholderClass
              )}
              size="body_3"
            >
              {placeholder}
            </Text>
          )}
          <Icon
            className={`!text-body_3 ${
              dark ? "text-white" : "!text-neutralDark"
            } ${open ? "transform rotate-180" : ""} transition duration-200`}
            name="keyboard_arrow_down"
          />
        </div>
        {error && (
          <span className="text-sm font-roboto font-light text-danger-600 w-full mt-2.5 leading-[21px]">
            {errorMsg}
          </span>
        )}
        <ul
          className={`option-menu z-[999] ${
            col && col > 1 && "w-[" + col + "03%]"
          } grid grid-cols-${col} absolute left-0 transform translate-y-full bottom-0 z-10 w-full bg-white overflow-y-auto shadow-[0_2px_4px_0px_rgba(0,0,0,0.2)]  ${
            open ? "max-h-60" : "max-h-0"
          }`}
        >
          {search && (
            <div className="flex items-center px-2 sticky top-0 bg-white">
              <Icon className="text-body_3" name="search" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                placeholder="Enter country name"
                className="text-neutralDark !text-body_3 font-normal placeholder:text-placeholder p-2 outline-none"
              />
            </div>
          )}
          {options?.map((option) => (
            <li
              key={option.value}
              className={`${
                dark
                  ? "text-white hover:bg-neutral bg-neutralDark"
                  : "bg-white hover:bg-[#F7F7F7] text-neutralDark"
              }  !text-body_3 font-normal  w-full px-2.5 py-2 p-2  
            ${
              option?.value.toLowerCase() === selected?.value.toLowerCase() &&
              " bg-[#F7F7F7]"
            }
            ${
              option?.value.toLowerCase().startsWith(inputValue) ||
              option?.label.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
              onClick={() => {
                console.log("clicked");
                if (
                  option?.value.toLowerCase() !== selected.value.toLowerCase()
                ) {
                  handleSelectOption(option);
                }
              }}
            >
              <div className="flex items-center gap-5">
                {optionType == "checkbox" ? (
                  <CheckboxInput
                    onChange={() => handleSelectOption(option)}
                    checkIcon="field"
                    type="checkbox"
                    label={option.label}
                    id={option.value}
                  />
                ) : (
                  <span>
                    {
                      // @ts-ignore
                      labelKey && option[labelKey]
                    }
                    {option.label}
                  </span>
                )}

                {option?.tag && (
                  <Text
                    className="py-1 !text-body_3 px-4 bg-[#EBECFE] rounded-full"
                    size="body_5"
                    tag="span"
                    weight="regular"
                    color="primary"
                  >
                    {option?.tag}
                  </Text>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { Select };
