"use client";

import React, { useEffect, useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import { Icon } from "../ui/Icon";
import Image from "next/image";
import LogoImg from "@/public/logo.svg";
import LettingsImg from "@/public/lettings.png";
import { Text, textVariants } from "../ui/Text";
import { Divider } from "../ui/Divider";
import Link from "next/link";
import { cn } from "@/utils/classNames";
import Overlay from "../common/Overlay";
import useHeaderStore from "@/store/header";
const Header = () => {
  const { headerData, isLoading, fetchHeaderData, updateAnnouncement } =
    useHeaderStore();
  useEffect(() => {
    fetchHeaderData();
  }, [fetchHeaderData]);
  const [isOpenMegaMenu, setIsOpenMegaMenu] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const initialAnnActive = headerData?.announcements?.isActive || false;
  const [isOpenAnnouncement, setIsOpenAnnouncement] = useState(true);

  console.log(headerData?.announcements?.isActive);
  return (
    <div>
      {initialAnnActive && isOpenAnnouncement && (
        <AnnouncementBar
          message={headerData?.announcements?.message || ""}
          setIsOpenAnnouncement={setIsOpenAnnouncement}
        />
      )}

      {isOpenMegaMenu && <Overlay setAction={setIsOpenMegaMenu} />}
      {openProfileMenu && <Overlay setAction={setOpenProfileMenu} />}
      <div
        className={cn(
          "fixed top-0 z-[99] left-0 transition duration-300 transform -translate-x-full",
          isOpenMegaMenu ? "translate-x-0" : ""
        )}
      >
        <SideBarMegaMenu setIsOpenMegaMenu={setIsOpenMegaMenu} />
      </div>
      <div className="container">
        <div className="grid grid-cols-3 items-center gap-5 justify-between h-[60px] bg-white">
          <div className="flex items-center gap-8">
            <Icon
              onClick={() => setIsOpenMegaMenu(true)}
              name="menu"
              className="text-[24px] cursor-pointer"
            />
            <Icon name="search" className="text-[24px]" />
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <Image
              className="max-h-[20px] w-auto"
              width={60}
              height={20}
              src={headerData?.logo || LogoImg}
              alt="Logo"
            />
            <Text variant={"small"}>{headerData?.title}</Text>
          </div>
          <div className="flex relative justify-end">
            <Icon
              onClick={() => setOpenProfileMenu(true)}
              name="Person"
              className="text-[24px]"
            />
            {openProfileMenu && (
              <div className="absolute z-[99] pt-2 transform translate-y-full bottom-0 ">
                <div className="border bg-white border-border flex flex-col">
                  <div className="px-5 cursor-pointer py-[17px] flex items-center gap-2.5">
                    <Icon name="account_circle" className="text-[20px]" />
                    <Text variant={"button"}>Account Settings</Text>
                  </div>
                  <div className="px-5 cursor-pointer py-[17px] flex items-center gap-2.5">
                    <Icon name="logout" className="text-[20px]" />
                    <Text variant={"button"}>Sign Out</Text>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SideBarMegaMenu = ({ setIsOpenMegaMenu }: any) => {
  const megaMenu = [
    {
      title: "Sales",
      type: "mega_menu",
      links: [
        {
          title: "Residential",
          href: "/residential",
          type: "link",
        },
        {
          title: "Commercial",
          href: "/commercial",
          type: "link",
        },
      ],
      // links: ["For Sale", "To Let", "To Rent"],
    },
    {
      title: "Lettings",
      type: "image",
    },
    {
      title: "Concierge Services",
      type: "mega_menu",
      links: [
        {
          title: "Estate Planning & Investments",
          href: "/estate-planning",
          type: "link",
        },
        {
          title: "Property Financing",
          href: "/property-financing",
          type: "link",
        },
        {
          title: "Design & Build",
          href: "/design-build",
          type: "link",
        },
        {
          title: "Relocation & Global Citizenship",
          href: "/relocation",
          type: "link",
        },
        {
          title: "See All",
          href: "/services",
          type: "link",
        },
      ],
    },
    {
      title: "Landlord & Tenant Services",
      type: "mega_menu",
      links: [
        {
          title: "Property Marketing",
          href: "/property-marketing",
          type: "link",
        },
        {
          title: "Surveying & Valuations",
          href: "/surveying-valuations",
          type: "link",
        },
        {
          title: "Environmental / Health Services",
          href: "/environmental-health",
          type: "link",
        },
        {
          title: "Tenancy & Rental Compliance App",
          href: "/compliance-app",
          type: "link",
        },
        {
          title: "See All",
          href: "/landlord-services",
          type: "link",
        },
      ],
    },
  ];

  const [activeMenu, setActiveMenu] = useState(megaMenu[0]);

  return (
    <div className="flex flex-col min-w-[900px] items-center justify-between bg-white">
      <div className="flex  w-full items-center gap-5 justify-between  py-4 px-[52px]">
        <div className="flex flex-col items-start gap-2.5">
          <Image src={LogoImg} alt="Logo" />
          <Text variant={"small"}>Properties & Investments</Text>
        </div>
        <Icon
          onClick={() => setIsOpenMegaMenu(false)}
          name="close"
          className="text-[24px] cursor-pointer"
        />
      </div>
      <Divider className="w-full h-px" />
      <div className="p-8 w-full">
        <div className="flex flex-col">
          <div className="grid min-h-[300px] grid-cols-2">
            <div className="border-r border-border">
              {megaMenu.map((item, index) => {
                if (item.type === "mega_menu") {
                  return (
                    <div
                      key={index}
                      className={cn(
                        "flex cursor-pointer items-center gap-5 justify-between px-5 h-[50px]",
                        {
                          "bg-[#F6F6F6]": activeMenu.title === item.title,
                        }
                      )}
                      onMouseEnter={() => setActiveMenu(item)}
                    >
                      <Text
                        variant={"body"}
                        className="leading-none font-normal"
                      >
                        {item.title}
                      </Text>
                      <Icon name="chevron_right" className="text-[20px]" />
                    </div>
                  );
                }
                if (item.type === "image") {
                  return (
                    <div
                      key={index}
                      className={cn(
                        "flex cursor-pointer items-center gap-5 justify-between px-5 h-[50px]",
                        {
                          "bg-[#F6F6F6]": activeMenu.title === item.title,
                        }
                      )}
                      onMouseEnter={() => setActiveMenu(item)}
                    >
                      <Text
                        variant={"body"}
                        className="leading-none font-normal"
                      >
                        {item.title}
                      </Text>
                      {/* <Icon name="chevron_right" className="text-[20px]" /> */}
                    </div>
                  );
                }
              })}
            </div>
            <div className="w-full">
              {activeMenu.type == "image" ? (
                <div className="w-full">
                  <Image
                    src={LettingsImg}
                    className="w-full h-full"
                    alt="Logo"
                  />
                </div>
              ) : (
                <>
                  {activeMenu?.links?.slice(0, 4).map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex  items-center gap-5 justify-between px-5 h-[50px] "
                      >
                        <Text
                          variant={"body"}
                          className="leading-none font-normal"
                        >
                          {item.title}
                        </Text>
                        {/* <Icon name="chevron_right" className="text-[20px]" /> */}
                      </Link>
                    );
                  })}
                  {activeMenu?.links.length > 4 && (
                    <div className="flex justify-end">
                      <Link
                        href={"#"}
                        className={cn(
                          textVariants({
                            variant: "body",
                          }),
                          "leading-none text-[14px] font-normal text-propertiesMain"
                        )}
                      >
                        See All
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <Divider className="w-full h-px" />
          <div className="grid min-h-[300px] grid-cols-2">
            <div className="border-r border-border">
              {["About", "Fees & Charges", "Terms", "FAQ's", "Contact Us"].map(
                (item) => (
                  <Link
                    href="#"
                    key={item}
                    className="flex  items-center gap-5 justify-between px-5 h-[50px]"
                  >
                    <Text variant={"body"} className="leading-none font-normal">
                      {item}
                    </Text>
                  </Link>
                )
              )}
            </div>
            <div className="">
              <Link
                href={"#"}
                className="flex  items-center gap-5  px-5 h-[50px] "
              >
                <Text
                  variant={"body"}
                  className="leading-none min-w-[150px] font-normal"
                >
                  Homer (AI Assistant)
                </Text>
                <Icon name="stars_2" className="text-[20px]" />
              </Link>
              <Link
                href={"#"}
                className="flex  items-center gap-5 px-5 h-[50px] "
              >
                <Text
                  variant={"body"}
                  className="leading-none min-w-[150px] font-normal"
                >
                  Ruby Key
                </Text>
                <Icon name="key" className="text-[20px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
