import Image from "next/image";
import { Icon } from "./Icon";
import Link from "next/link";
import { SmallText, Text } from "./Text";
import React, { useState } from "react";
import MegaMenu from "../common/MegaMenu";
import { Button } from "./Button";
import SocialShare from "../common/SocialShare";
import { cn } from "../../lib/utils";
import { LinkText } from "./LinkText";
import { sidebarSocialShareItems } from "../../data/social";
import useProductMenuStore from "@/store/UseProductMenu";

interface SideBarProps {
  navItems: {
    label: string;
    href: string;
  }[];
  show: boolean;
  onClick: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({
  navItems,
  show,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHomeMenu = () => {
    setIsOpen(!isOpen);
  };

  const boxTab = [
    {
      label: "Plus+",
      href: "/strategy",
      color: "#00FFB5",
    },
    {
      label: "Tech",
      href: "hex-code-technology",
      color: "#BE38F3",
    },
    {
      label: "Coach",
      href: "coaching-forward",
      color: "#887BFF",
    },
    {
      label: "Product",
      href: "product-licensing",
      color: "#334AFF",
    },
  ];
  const className = [
    "border-[#00FFB5]",
    "border-[#BE38F3]",
    "border-[#887BFF]",
    "border-[#334AFF]",
    "text-[#00FFB5]",
    "text-[#BE38F3]",
    "text-[#887BFF]",
    "text-[#334AFF]",
  ];
  const setSelectedMenu = useProductMenuStore(
    // @ts-ignore
    (state) => state.setSelectedMenu
  );

  return (
    <div
      className={`sidebar z-[999999] transition duration-700 ease-in-out flex flex-col sm:max-w-[375px] h-screen fixed top-0 right-0 transform w-full bg-white ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-5 mb-8">
        <Link onClick={() => setSelectedMenu()} href="/">
          <Image src="/logo.svg" width={100} height={40} alt="logo" />
        </Link>
        <div onClick={onClick} className="cursor-pointer">
          <Icon name="close" className="text-black" />
        </div>
      </div>

      <div className="flex flex-col">
        {navItems &&
          navItems.map((item, index) => (
            <Link
              key={index}
              className="flex items-center gap-2.5 p-5  hover:bg-background"
              href={item.href}
              onClick={onClick}
            >
              <span className="text-neutralDark text-base font-roboto text-body_1 font-normal">
                0{index + 1}.
              </span>
              <span className="text-neutralDark text-base font-roboto text-body_1 font-normal">
                {item.label}
              </span>
            </Link>
          ))}
      </div>

      <div className="mt-8 mx-5 flex items-center gap-5">
        {boxTab.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            onClick={onClick}
            className={cn(
              "cursor-pointer border flex items-center justify-center p-2.5 w-[68.75px] rounded-sm",
              "border-[" + item.color + "]"
            )}
          >
            <SmallText className={" !leading-none text-[" + item.color + "]"}>
              {item.label}
            </SmallText>
          </Link>
        ))}
      </div>

      <div className="my-8 h-px w-full bg-border"></div>
      <div className="ml-5">
        <SocialShare footerSocialShareItems={sidebarSocialShareItems} />
      </div>
      <LinkText
        className="flex cursor-pointer ml-5 !mt-8 "
        type="text"
        href="/login"
        label="Intranet Login"
      />
    </div>
  );
};
