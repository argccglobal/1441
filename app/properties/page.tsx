"use client";
import Section from "@/components/layout/Section";
import { Text } from "@/components/ui/Text";
import React from "react";
import VectorBottomLeftImg from "@/public/vector_bottom_left.svg";
import VectorBottomRightImg from "@/public/vector_bottom_right.svg";
import VectorTopRightImg from "@/public/vector_top_right.svg";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import Property from "@/components/card/Property";
import { Input } from "@/components/ui/Input";
import SearchSelect from "@/components/ui/SearchSelect";
import { cn } from "@/utils/classNames";

const page = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleSortSelect = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative bg-[#181818] min-h-[680px]">
        <Section bgColor="transparent">
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-16">
              <Text variant={"page_title"} className="text-white">
                Welcome to our Home
              </Text>
              <Text variant={"body"} className="text-white">
                Lorem ipsum dolor sit amet consectetur. In nisl morbi adipiscing
                proin amet quis. Augue sem egestas venenatis ac lorem integer.
              </Text>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center py-6 px-8 rounded-[10px] border-[3px] border-[#D97FFF] gap-5">
                <Text variant={"card_title_large"} className="text-[#BE38F3]">
                  I’m Buying
                </Text>
                <Icon name="east" className="text-[#BE38F3] text-[24px]" />
              </div>
              <div className="flex justify-between items-center py-6 px-8 rounded-[10px] border-[3px] border-[#4C5BFF] gap-5">
                <Text variant={"card_title_large"} className="text-[#3334FF]">
                  I’m Selling
                </Text>
                <Icon name="east" className="text-[#3334FF] text-[24px]" />
              </div>
              <div className="flex justify-between items-center py-6 px-8 rounded-[10px] border-[3px] border-[#9DE2FF] gap-5">
                <Text variant={"card_title_large"} className="text-[#32C9FE]">
                  I’m Selling
                </Text>
                <Icon name="east" className="text-[#32C9FE] text-[24px]" />
              </div>
            </div>
          </div>
        </Section>
        <div className="absolute left-0 bottom-0">
          <Image src={VectorBottomLeftImg} alt="vector" />
        </div>
        <div className="absolute right-0 bottom-0">
          <Image src={VectorBottomRightImg} alt="vector" />
        </div>
        <div className="absolute right-0 top-0">
          <Image src={VectorTopRightImg} alt="vector" />
        </div>
      </div>
      <Section bgColor="white">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <Text variant={"section_title_normal"}>Properties</Text>
            <Text variant={"body"}>
              Lorem ipsum dolor sit amet consectetur. Quisque non id in sit
              suscipit pellentesque condimentum lorem purus. Purus nibh gravida
              faucibus ante sed nulla. Mauris massa turpis cursus sit.
            </Text>
            <div className="border-t border-border"></div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-[auto_120px_140px_120px_120px_120px_120px_44px] gap-2.5">
              <div className="flex max-w-[350px] justify-between gap-2.5 h-[40px] px-2.5 items-center bg-white border rounded-[2px] overflow-hidden border-border">
                <Input
                  id="search"
                  className="w-48 !px-0 border-none text-neutralDark placeholder:text-neutralDark"
                  type="text"
                  placeholder="Search Location"
                />
                <Icon
                  name="location_on"
                  className="text-h4 text-neutralDark cursor-pointer flex items-center"
                />
              </div>
              <SearchSelect
                placeholder="Buy"
                name="Buy"
                options={[
                  {
                    value: "Buy",
                    label: "Buy",
                  },
                ]}
              />
              <SearchSelect
                placeholder="Property Type"
                name="property_type"
                options={[
                  {
                    value: "Buy",
                    label: "Buy",
                  },
                ]}
              />
              <SearchSelect
                placeholder="Min Beds"
                name="min_beds"
                options={[
                  {
                    value: "Buy",
                    label: "Buy",
                  },
                ]}
              />
              <SearchSelect
                placeholder="Min Bath"
                name="min_bath"
                options={[
                  {
                    value: "Buy",
                    label: "Buy",
                  },
                ]}
              />
              <SearchSelect
                placeholder="Min Price"
                name="min_price"
                options={[
                  {
                    value: "Buy",
                    label: "Buy",
                  },
                ]}
              />
              <SearchSelect
                placeholder="Max Price"
                name="max_price"
                options={[
                  {
                    value: "Buy",
                    label: "Buy",
                  },
                ]}
              />
              <div className="border-border cursor-pointer flex border items-center justify-center">
                <Icon name="tune" className="text-h4 " />
              </div>
            </div>
            <div className="flex justify-end cursor-pointer items-center gap-2">
              <Text variant={"button"} className=" text-propertiesMain">
                Clear Filters{" "}
              </Text>
              <Icon name="close" className="text-[20px] text-propertiesMain" />
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-5 justify-between">
              <Text variant={"body"}>Showing 9 of 40 results</Text>
              <div className="relative">
                <div
                  className="flex gap-5 cursor-pointer items-center"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Text variant={"placeholder"}>Sort By</Text>
                  <Icon name="keyboard_arrow_down" className="text-[24px]" />
                </div>
                {isOpen && (
                  <div className="absolute w-[120px] mt-[-1px] bg-white border rounded-sm shadow-lg z-10">
                    <ul className="max-h-60 overflow-y-auto">
                      {[
                        { value: "New Listings", label: "New Listings" },
                        {
                          value: "Price (Low to High)",
                          label: "Price (Low to High)",
                        },
                        {
                          value: "Price (High to Low)",
                          label: "Price (High to Low)",
                        },
                      ].map((option) => (
                        <li
                          key={option.value}
                          onClick={() => handleSortSelect(option)}
                          className="px-2.5 py-2 cursor-pointer hover:bg-background"
                        >
                          <Text variant="placeholder">{option.label}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* <SearchSelect
                isSearchable={false}
                className="min-w-[120px] border-0 text-neutralDark"
                placeholder="Sort By"
                name="max_price"
                options={[
                  {
                    value: "New Listings",
                    label: "New Listings",
                  },
                  {
                    value: "Price (Low to High)",
                    label: "Price (Low to High)",
                  },
                  {
                    value: "Price (High to Low)",
                    label: "Price (High to Low)",
                  },
                ]}
              /> */}
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-16">
              <Property />
              <Property isBlur />
            </div>
            <div className="flex items-center gap-5">
              <div className="flex cursor-pointer items-center justify-center h-10 w-10 border border-neutralDark">
                <Icon name="west" className="text-[16px] text-neutralDark" />
              </div>
              {[1, 2, 3, 4, 5, "...", 10].map((item) => (
                <div
                  className={cn(
                    "flex cursor-pointer items-center justify-center h-10 w-10 border border-neutralDark",
                    3 === item ? "bg-neutralDark text-white" : "bg-transparent"
                  )}
                >
                  <Text variant={"small"}>{item}</Text>
                </div>
              ))}
              <div className="flex cursor-pointer items-center justify-center h-10 w-10 border border-neutralDark">
                <Icon name="east" className="text-[16px] text-neutralDark" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default page;
