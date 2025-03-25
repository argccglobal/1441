"use client";
import React, {
  Children,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Text } from "./Text";
import { Icon } from "./Icon";
interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const MobileMenu: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");
  useEffect(() => {
    console.log(contentRef);
    // Calculate the actual content height and update the state
    // @ts-ignore
    setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="py-[15px] overflow-hidden">
      <div
        className="cursor-pointer flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <Text size="body_1" weight="semibold" color="white">
          {title}
        </Text>
        <Icon
          className={`text-white ${
            isOpen ? "transform rotate-180" : ""
          } transition duration-200`}
          name="keyboard_arrow_down"
        />
      </div>
      <div
        style={{ maxHeight: contentHeight, minHeight: "0px" }}
        className={`items-start overflow-hidden duration-500 ease-in-out transition-height flex flex-col gap-6 ${
          isOpen ? ` h-[${contentHeight}] pt-[30px]` : " h-0 p-0"
        }`}
      >
        <div className="flex flex-col gap-6" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
