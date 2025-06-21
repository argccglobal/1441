"use client";
import Section from "@/components/layout/Section";
import { Text } from "@/components/ui/Text";
import React, { useEffect } from "react";
import VectorBottomLeftImg from "@/public/vector_bottom_left.svg";
import VectorBottomRightImg from "@/public/vector_bottom_right.svg";
import VectorTopRightImg from "@/public/vector_top_right.svg";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import Property from "@/components/card/Property";
import { Input } from "@/components/ui/Input";
import SearchSelect from "@/components/ui/SearchSelect";
import { cn } from "@/utils/classNames";
import UnlockAccessPopup from "@/components/Modal/UnlockAccessPopup";
import BuyingModal from "@/components/Modal/BuyingModal";
import SellingModal from "@/components/Modal/SellingModal";
import InvestingModal from "@/components/Modal/InvestingModal";
import Pagination from "@/components/common/Pagination";
import { propertiesApi } from "@/apiRequest/endpoints/properties";
import {
  propertyPageApi,
  PropertyPageData,
} from "@/apiRequest/endpoints/propertyPage";
import { usePropertyPageData } from "@/store/propertyDetailsOffcanvas";

const page = () => {
  const { propertiesPageData } = usePropertyPageData();

  const [isOpen, setIsOpen] = React.useState(false);
  const handleSortSelect = (option?: any) => {
    setIsOpen(!isOpen);
  };
  const [isOpeBuyingModal, setIsOpeBuyingModal] =
    React.useState<boolean>(false);
  const [isOpeSellingModal, setIsOpeSellingModal] =
    React.useState<boolean>(false);
  const [isOpeInvestingModal, setIsOpeInvestingModal] =
    React.useState<boolean>(false);

  const [properties, setProperties] = React.useState<{
    data: any[];
    meta: {
      total: number;
      page: number;
      limit: number;
      pages: number;
    };
  }>({
    data: [],
    meta: {
      total: 0,
      page: 0,
      limit: 0,
      pages: 0,
    },
  });
  // getProperties
  const fetchProperties = async (params?: any) => {
    try {
      const response = await propertiesApi.getProperties(params);
      if (response) {
        setProperties({
          data: response.data || [],
          meta: {
            total: response.total || 0,
            page: response.page || 0,
            limit: response.limit || 0,
            pages: response.totalPages || 0,
          },
        });
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
    // fetchPropertiesContent();
  }, []);

  const nextPage = () => {
    if (properties.meta.page < properties.meta.pages) {
      const params = {
        page: properties.meta.page + 1,
        limit: properties.meta.limit,
      };
      fetchProperties(params);
    }
  };
  const prevPage = () => {
    if (properties.meta.page > 1) {
      const params = {
        page: properties.meta.page - 1,
        limit: properties.meta.limit,
      };
      fetchProperties(params);
    }
  };

  const changePage = (page: number) => {
    const params = {
      page: page,
      limit: properties.meta.limit,
    };
    fetchProperties(params);
  };

  return (
    <>
      <Section bgColor="white">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <Text variant={"section_title_normal"}>
              {propertiesPageData?.filterArea.title}
            </Text>
            <Text variant={"body"}>
              {propertiesPageData?.filterArea.description}
            </Text>
            <div className="border-t border-border"></div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid  grid-cols-2 xs:grid-cols-4  md:grid-cols-[auto_120px_140px_120px_120px_120px_120px_44px] gap-2.5">
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
              <Text variant={"body"}>
                Showing {properties?.data.length} of {properties?.meta?.total}{" "}
                results
              </Text>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
              {properties?.data?.map((item, index) => (
                <Property
                  key={index}
                  isBlur={item?.isPrivate}
                  property={item}
                />
              ))}
            </div>
            <div className="flex items-center gap-5">
              <div
                onClick={() => prevPage()}
                className="flex cursor-pointer items-center justify-center h-10 w-10 border border-neutralDark"
              >
                <Icon name="west" className="text-[16px] text-neutralDark" />
              </div>

              <Pagination
                currentPage={properties.meta.page}
                totalPages={Math.ceil(
                  properties.meta.total / properties.meta.limit
                )}
                onChange={(page) => {
                  console.log("Page changed:", page);
                  changePage(page);
                }}
              />
              <div
                onClick={() => nextPage()}
                className="flex cursor-pointer items-center justify-center h-10 w-10 border border-neutralDark"
              >
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
