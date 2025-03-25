"use client";
import Image from "next/image";
import { Icon } from "./Icon";
import Link from "next/link";
import { Body, Text } from "./Text";
import React, { useState } from "react";
import { Button } from "./Button";
import { LinkText } from "./LinkText";
import { Badge } from "./Badge";
import SideBarItemAccordion from "../common/SideBarItemAccordion";
import useProductMenuStore from "@/store/UseProductMenu";

interface CookieSideBarProps {
  navItems: {
    label: string;
    href: string;
  }[];
  show: boolean;
  description: string;
  title: string;
  onClick: () => void;
}

export const CookieSideBar: React.FC<CookieSideBarProps> = ({
  navItems,
  show,
  title,
  description,
  onClick,
}) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const handleMoreInfo = () => {
    setMoreInfo(!moreInfo);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const [contentHeight, setContentHeight] = useState("0px");
  // useEffect(() => {
  //   // Calculate the actual content height and update the state
  //   // setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  // }, [isOpen]);
  const setSelectedMenu = useProductMenuStore(
    // @ts-ignore
    (state) => state.setSelectedMenu
  );
  return (
    <div
      className={`overflow-y-auto cookiebar z-50 flex transition duration-700 ease-in-out flex-col sm:max-w-[460px] h-screen fixed top-0 left-0 transform w-full bg-white ${
        show ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-5 mb-8">
        <Link onClick={() => setSelectedMenu("home")} href="/">
          <Image src="/logo.svg" width={100} height={40} alt="logo" />
        </Link>
        <div onClick={onClick} className="cursor-pointer">
          <Icon name="close" className="text-black" />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 p-5 pb-8">
        <Text size="h6" weight="medium">
          {title}
          {/* Privacy Preference Center */}
        </Text>
        <Text className="mb-2.5 leading-normal" size="body_3" weight="light">
          {description}
          {/*  */}
        </Text>
        <div className=" mb-2.5" onClick={handleMoreInfo}>
          <LinkText
            className="text-primary mb-2.5"
            label="More Information"
            type="text"
          />
        </div>

        <div onClick={onClick} className="flex items-start">
          <Button size="small" className="flex" label="Allow All" />
        </div>
      </div>
      {moreInfo && (
        <div className="p-5 pt-8 border-t border-border">
          <Text size="h5" className="mb-10">
            Most Recent preferences
          </Text>
          <div className="flex mb-5 flex-col gap-5">
            <SideBarItemAccordion
              title=" Strictly Necessary Cookies"
              text=" Lorem ipsum dolor sit amet consectetur. Praesent habitant
                egestas vel etiam odio donec bibendum. Phasellus mauris quis est
                posuere amet. Tellus aliquet facilisi lectus elementum purus
                vel."
              tag="Always Active"
            />
            <SideBarItemAccordion
              title=" Performance Cookies"
              text=" Lorem ipsum dolor sit amet consectetur. Praesent habitant
                egestas vel etiam odio donec bibendum. Phasellus mauris quis est
                posuere amet. Tellus aliquet facilisi lectus elementum purus
                vel."
              checkbox
            />
            <SideBarItemAccordion
              title="Target Cookies"
              text=" Lorem ipsum dolor sit amet consectetur. Praesent habitant
                egestas vel etiam odio donec bibendum. Phasellus mauris quis est
                posuere amet. Tellus aliquet facilisi lectus elementum purus
                vel."
              checkbox
            />
            <SideBarItemAccordion
              title="Functional Cookie"
              text=" Lorem ipsum dolor sit amet consectetur. Praesent habitant
                egestas vel etiam odio donec bibendum. Phasellus mauris quis est
                posuere amet. Tellus aliquet facilisi lectus elementum purus
                vel."
              checkbox
            />
          </div>
          <div className="flex justify-between gap-1 items-center">
            <div className="" onClick={onClick}>
              <Button
                href="javascript:void(0)"
                size="small"
                label="Reject All"
              />
            </div>
            <div className="" onClick={onClick}>
              <Button
                href="javascript:void(0)"
                size="small"
                label="Confirm My Choice"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
