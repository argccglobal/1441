"use client";
import React, { useEffect, useState, useRef } from "react";
import { Icon } from "./Icon";
import { SmallHeading, Text } from "./Text";
import { CheckboxInput } from "./Checkbox";
import { cn } from "../../lib/utils";
import { on } from "events";
import { string } from "zod";
import { ToolTip } from "./ToolTip";
import { EnglishSpeakingToolTip } from "@/app/(apply)/pre-application-details/EnglishSpeakingToolTip";
import { relative } from "path";
export interface Options {
  [key: string]: any | string | number | boolean | null | undefined;
}

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  refName?: any;
  options: Options[];
  error?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  selectedItem?: Options;
  search?: boolean;
  placeholder: string;
  placeholderClass?: string;
  className?: string;
  multicol?: boolean;
  col?: number;
  optionType?: string | "checkbox";
  dark?: boolean;
  labelKey: string;
  valueKey: string;
  label?: string;
  selectValue?: string;
  gap?: string;
  reset?: boolean;
  toolTipText?: string;
  handleSelect?: () => void;
  ref_key?: any;
  relative?: boolean;
  tabIndexValue?: any;
  withoutIcon?: boolean;
}
const SearchSelect = ({
  refName,
  toolTipText,
  options,
  error,
  errorMsg,
  selectedItem,
  ref_key,
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
  disabled,
  reset,
  relative,
  tabIndexValue,
  withoutIcon = false,
  ...props
}: SelectProps) => {
  // const [countries, setCountries] = useState(null);

  const [selected, setSelected] = useState<any>({
    labelKey,
    valueKey,
  });
  const [inputValue, setInputValue] = useState(selected[labelKey]);
  // useEffect(() => {
  //   setInputValue(selected[labelKey]);
  // }, [selected]);
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
  // col = options.length > 20 ? 3 : options.length > 10 ? 2 : 1;
  const classes = ["w-[203%]", "w-[300%]"];
  const [selectedOption, setSelectedOption] = useState<Options[]>([]);
  const handleSelectOption = (option: Options, type?: any) => {
    console.log("option test", option);
    if (handleSelect) {
      // @ts-ignore
      const selectOption = handleSelect();

      if (optionType != "checkbox") {
        console.log("selectOption", option);
        // @ts-ignore
        selectOption(option);
        selectedItem = option;
      } else {
        console.log(disabled);

        // @ts-ignore
        selectOption(option, type, ref_key);
        selectedItem = option;
      }
      // @ts-ignore
    }
    setSelected({
      ...option,
      label: option[labelKey],
      value: option[valueKey],
    });
    console.log("labelKey input", option[labelKey]);
    setInputValue("");

    // Reset the selection if required
    if (reset) {
      setSelected({});
    }

    // Close the dropdown and clear input for non-checkbox
    if (optionType !== "checkbox") {
      setOpen(false);
      // setInputValue("");
    }
  };

  useEffect(() => {
    // @ts-ignore
    if (selectedItem == "reset") {
      setSelected({});
    }
    if (selectedItem) {
      setSelected({
        ...selectedItem,
        label: selectedItem[labelKey],
        // @ts-ignore
        value: selectedItem[valueKey],
      });
    }
  }, [selectedItem, labelKey, valueKey]);
  const focusRef = useRef<HTMLInputElement>(null);
  const focusSearchInput = () => {
    const searchInput = true;
    const menuList = document.querySelector(".option-menu");
    if (focusRef && focusRef.current) {
      console.log("searchInput", focusRef);
      focusRef.current.focus();
      menuList?.scrollTo(0, 0);
    }
  };

  return (
    <>
      {label && (
        <SmallHeading
          onClick={() => {
            setOpen(!open);
            focusSearchInput();
          }}
          className="!mb-2.5 flex items-center gap-2.5 "
          color={dark ? "white" : "neutralDark"}
        >
          <span>{label}</span>
          {toolTipText && <EnglishSpeakingToolTip />}
        </SmallHeading>
      )}
      <div
        className={cn(
          "select-box flex-auto font-medium",
          relative === false ? "" : "relative",
          open && "z-[999]"
        )}
      >
        <div
          data-ref={refName}
          onClick={() => {
            setOpen(!open);
            focusSearchInput();
          }}
          className={cn(
            open && "",
            dark
              ? "text-white  !bg-neutralDark border-neutralDark"
              : "bg-productLicensing-50 border-border  text-neutralDark",
            "select-wrapper h-[40px] rounded-sm  border text-body_3 font-normal bg-white w-full px-2.5 py-2 flex items-center justify-between",
            className,

            selected &&
              selected[valueKey] &&
              selected[valueKey].length > 0 &&
              dark &&
              "bg-neutralDark text-white "
          )}
        >
          <Text
            size="body_3"
            className={cn(
              "!text-body_3",
              dark
                ? "text-white"
                : selected[labelKey]
                ? "!text-neutralDark"
                : "!text-placeholder",
              ""
            )}
            // size="body_2"
          >
            {selected[labelKey] ? selected[labelKey] : placeholder}
          </Text>
          <>
            {withoutIcon === false && (
              <>
                {open ? (
                  <Icon
                    name="expand_less"
                    className={cn(
                      dark ? "!text-white" : "text-neutralDark",
                      "text-xl"
                    )}
                  />
                ) : (
                  <Icon
                    name="keyboard_arrow_down"
                    className={cn(
                      dark ? "!text-white" : "text-neutralDark",
                      "text-xl"
                    )}
                  />
                )}
              </>
            )}
          </>
        </div>
        {error && (
          <>
            <span className="text-sm  font-roboto font-light text-danger-600 w-full mt-2.5 leading-[21px]">
              {errorMsg}
            </span>
          </>
        )}
        <ul
          className={`option-menu hide-scroll  z-[9999] ${
            col && col > 1 && "w-[" + col + "03%]"
          } grid grid-cols-${col} absolute left-0 transform top-10 z-10 w-full bg-white overflow-y-auto shadow-[0_2px_4px_0px_rgba(0,0,0,0.2)]  ${
            open ? "max-h-60" : "max-h-0"
          }`}
        >
          {options && options.length > 0 ? (
            <>
              <input
                // onFocus={() => setOpen(true)}
                ref={focusRef}
                tabIndex={tabIndexValue}
                id="input-search"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                placeholder={"Search " + placeholder.toLocaleLowerCase()}
                className={cn(
                  "text-neutralDark border-b  border-border w-full !text-body_3 font-normal placeholder:text-placeholder p-2 outline-none",
                  dark
                    ? "text-white bg-neutralDark placeholder:text-white"
                    : "text-neutralDark bg-white placeholder:text-placeholder"
                )}
              />
            </>
          ) : (
            <></>
          )}

          {inputValue && inputValue.length > 0 ? (
            <>
              {options?.map((option: Options, i: number) => (
                <li
                  key={option[valueKey]}
                  className={`${i == 0 ? " " : ""}  ${
                    dark
                      ? "text-white hover:bg-neutral bg-neutralDark"
                      : "bg-white hover:bg-[#F7F7F7] text-neutralDark"
                  }  text-body_3 font-normal  w-full px-2.5 py-2 p-2  
              ${
                selected &&
                selected[valueKey] &&
                option[valueKey].toLowerCase() ===
                  selected[valueKey].toLowerCase() &&
                (dark ? " active dark" : " active")
              }
              ${
                (option[labelKey] &&
                  option[labelKey].toLowerCase().startsWith(inputValue)) ||
                option[labelKey]?.toLowerCase().includes(inputValue)
                  ? "block"
                  : "hidden"
              }`}
                  onClick={() => {
                    if (
                      option[valueKey].toLowerCase() !==
                      (selected[valueKey] && selected[valueKey].toLowerCase())
                    ) {
                      handleSelectOption(option);
                    } else {
                      setOpen(false);
                    }
                  }}
                >
                  <div className="flex items-center gap-5">
                    {optionType == "checkbox" ? (
                      <CheckboxInput
                        disabled={disabled}
                        onChange={(e) => {
                          console.log(e.target.checked);
                          console.log("disabled", disabled);
                          if (e.target.checked && !disabled) {
                            handleSelectOption(option, "add");
                          } else {
                            handleSelectOption(option, "remove");
                          }
                        }}
                        checkIcon="field"
                        type="checkbox"
                        label={option[labelKey]}
                        id={option[valueKey]}
                      />
                    ) : (
                      <span>{option[labelKey]}</span>
                    )}

                    {option?.tag && (
                      <Text
                        className="py-1 px-4 bg-[#EBECFE] rounded-full"
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
            </>
          ) : (
            <>
              {options?.map((option: Options) => (
                <li
                  key={option[valueKey]}
                  className={`${
                    dark
                      ? "text-white hover:bg-neutral bg-neutralDark"
                      : "bg-white hover:bg-[#F7F7F7] text-neutralDark"
                  }  text-body_3 font-normal  w-full px-2.5 py-2 p-2  
            ${
              selected &&
              selected[valueKey] &&
              option[valueKey].toLowerCase() ===
                selected[valueKey].toLowerCase() &&
              (dark ? " active dark" : " active")
            }
            ${"block"}`}
                  onClick={() => {
                    console.log("clicked");
                    console.log(option[valueKey], selected[valueKey]);
                    if (
                      option[valueKey].toLowerCase() !==
                      (selected[valueKey] && selected[valueKey].toLowerCase())
                    ) {
                      handleSelectOption(option);
                    }
                  }}
                >
                  <div className="flex items-center gap-5">
                    {optionType == "checkbox" ? (
                      <CheckboxInput
                        disabled={disabled}
                        onChange={(e) => {
                          console.log(e.target.checked);
                          console.log("disabled", disabled);
                          if (e.target.checked && !disabled) {
                            handleSelectOption(option, "add");
                          } else {
                            handleSelectOption(option, "remove");
                          }
                        }}
                        checkIcon="field"
                        type="checkbox"
                        label={option[labelKey]}
                        id={option[valueKey]}
                      />
                    ) : (
                      <span>{option[labelKey]}</span>
                    )}

                    {option?.tag && (
                      <Text
                        className="py-1 px-4 bg-[#EBECFE] rounded-full"
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
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export { SearchSelect };
