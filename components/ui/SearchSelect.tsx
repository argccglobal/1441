"use client";
import React, { useEffect, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Text, textVariants } from "./Text";
import { cn } from "@/utils/classNames";
import { Icon } from "./Icon";
import { CheckboxInput } from "./Checkbox";

export interface SelectOption {
  [key: string]: any;
  label: string;
  value: string | number;
  tag?: string;
}

interface SearchSelectProps {
  name: string;
  options: SelectOption[];
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  value?: SelectOption;
  className?: string;
  dark?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  required?: boolean;
  tooltipText?: string;
  onChange?: (value: SelectOption | SelectOption[] | null) => void;
  onBlur?: () => void;
  control?: any; // For react-hook-form integration
}

const SearchSelect: React.FC<SearchSelectProps> = ({
  name,
  options,
  label,
  placeholder = "Select",
  error,
  errorMessage,
  disabled,
  value,
  className,
  dark,
  isMulti,
  isSearchable = true,
  required,
  tooltipText,
  onChange,
  onBlur,
  control,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Initialize selectedOptions with value prop if provided
  useEffect(() => {
    if (value) {
      setSelectedOptions(
        isMulti ? (Array.isArray(value) ? value : [value]) : [value]
      );
    }
  }, [value, isMulti]);

  // Update selected options when value prop changes
  useEffect(() => {
    if (value === null || value === undefined) {
      setSelectedOptions([]);
    } else if (value !== selectedOptions[0]) {
      setSelectedOptions(
        isMulti ? (Array.isArray(value) ? value : [value]) : [value]
      );
    }
  }, [value, isMulti]);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter options based on search
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = (option: SelectOption) => {
    let newSelection: SelectOption[];

    if (isMulti) {
      newSelection = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
    } else {
      newSelection = [option];
    }

    setSelectedOptions(newSelection);
    onChange?.(isMulti ? newSelection : option);

    if (!isMulti) {
      setIsOpen(false);
    }
    setSearchValue("");
  };

  const renderValue = () => {
    if (selectedOptions.length === 0) return placeholder;
    if (!isMulti) return selectedOptions[0].label;
    return `${selectedOptions.length} selected`;
  };

  // Add function to handle input click
  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from bubbling to parent
  };

  const selectContent = (
    <div
      ref={wrapperRef}
      className={cn(
        "select-box relative",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      {label && (
        <Text
          variant="placeholder"
          className="mb-2.5 flex items-center gap-2.5"
          color={dark ? "white" : "neutralLight"}
        >
          {label}
          {required && <span className="text-danger-600">*</span>}
        </Text>
      )}

      <div
        className={cn(
          "select-wrapper relative min-h-[40px] rounded-sm border",
          dark
            ? "bg-neutralDark border-neutralDark text-white"
            : "bg-white border-border text-neutralDark",
          error && "border-danger-600",
          className
        )}
      >
        <div
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className="flex items-center justify-between px-2.5 py-2 cursor-pointer"
        >
          <Text
            variant="placeholder"
            className={cn(
              "font-normal",
              dark ? "text-white" : "text-neutralDark",
              isInputFocused && "opacity-0"
            )}
          >
            {renderValue()}
          </Text>
          <Icon
            name={isOpen ? "expand_less" : "keyboard_arrow_down"}
            className={cn("text-xl", dark ? "text-white" : "text-neutralDark")}
          />
        </div>

        {isSearchable && isOpen && (
          <input
            ref={searchInputRef}
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onClick={handleInputClick}
            onFocus={() => {
              setIsInputFocused(true);
            }}
            onBlur={() => {
              setIsInputFocused(false);
              setTimeout(() => {
                if (!isOpen) {
                  setSearchValue("");
                }
              }, 200);
            }}
            placeholder={
              isInputFocused ? `Search ${placeholder.toLowerCase()}` : ""
            }
            className={cn(
              "absolute inset-0 w-full px-2.5 py-2",
              "bg-transparent outline-none",
              "z-20", // Increased z-index
              textVariants({ variant: "placeholder" })
            )}
            autoFocus
          />
        )}
      </div>

      {isOpen && (
        <div className="absolute w-full mt-[-1px] bg-white border  rounded-sm shadow-lg z-10">
          <ul className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className={cn(
                    "px-2.5 py-2 cursor-pointer hover:bg-background",
                    selectedOptions.includes(option) && "bg-background"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {isMulti && (
                      <div></div>
                      // <CheckboxInput
                      //   checked={selectedOptions.includes(option)}
                      //   readOnly
                      // />
                    )}
                    <Text variant="placeholder">{option.label}</Text>
                    {option.tag && (
                      <span className="px-2 py-0.5 text-xs bg-background text-primary-600 rounded-full">
                        {option.tag}
                      </span>
                    )}
                  </div>
                </li>
              ))
            ) : (
              <li className="px-2.5 py-2 text-placeholder">No results found</li>
            )}
          </ul>
        </div>
      )}

      {error && errorMessage && (
        <p className="mt-1 text-sm text-danger-600">{errorMessage}</p>
      )}
    </div>
  );

  // React Hook Form integration
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? "This field is required" : false }}
        render={({ field }) =>
          React.cloneElement(selectContent, {
            value: field.value,
            onChange: (val: any) => {
              field.onChange(val);
              onChange?.(val);
            },
            onBlur: () => {
              field.onBlur();
              onBlur?.();
            },
          })
        }
      />
    );
  }

  return selectContent;
};

export default SearchSelect;
