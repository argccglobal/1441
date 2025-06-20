"use client";
import React, { useState } from "react";
import { Text } from "../ui/Text";
import { Icon } from "../ui/Icon";
import { cn } from "@/utils/classNames";

interface SideBarItemAccordionProps {
  title: string;
  text: string;
  tag?: string;
  checkbox?: boolean;
  className?: string;
}

const SideBarItemAccordion: React.FC<SideBarItemAccordionProps> = ({
  title,
  text,
  tag,
  checkbox,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleCheckbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsChecked(!isChecked);
  };

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="cursor-pointer flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Text variant="card_title_small" className="font-medium">
              {title}
            </Text>
            {tag && (
              <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                {tag}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {checkbox && (
            <div
              className={`w-5 h-5 border rounded flex items-center justify-center ${isChecked ? "bg-primary border-primary" : "border-gray-300"}`}
              onClick={toggleCheckbox}
            >
              {isChecked && <Icon name="check" className="text-white text-xs" />}
            </div>
          )}
          {isOpen ? (
            <Icon className="text-black" name="remove" />
          ) : (
            <Icon className="text-black" name="add" />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pt-4" : "max-h-0"}`}
      >
        <Text variant="body" className="text-gray-600">
          {text}
        </Text>
      </div>
    </div>
  );
};

export default SideBarItemAccordion;