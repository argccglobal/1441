"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Section from "@/components/layout/Section";
import { Text } from "@/components/ui/Text";
import React from "react";
import VectorBottomLeftImg from "@/public/vector_bottom_left.svg";
import VectorBottomRightImg from "@/public/vector_bottom_right.svg";
import VectorTopRightImg from "@/public/vector_top_right.svg";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

import BuyingModal from "@/components/Modal/BuyingModal";
import SellingModal from "@/components/Modal/SellingModal";
import InvestingModal from "@/components/Modal/InvestingModal";
import {
  propertyPageApi,
  PropertyPageData,
} from "@/apiRequest/endpoints/propertyPage";
import { usePropertyPageData } from "@/store/propertyDetailsOffcanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpeBuyingModal, setIsOpeBuyingModal] =
    React.useState<boolean>(false);
  const [isOpeSellingModal, setIsOpeSellingModal] =
    React.useState<boolean>(false);
  const [isOpeInvestingModal, setIsOpeInvestingModal] =
    React.useState<boolean>(false);

  const { setPropertiesPageData, propertiesPageData } = usePropertyPageData();

  const fetchPropertiesContent = async () => {
    try {
      const response = await propertyPageApi.getPropertyPageData();
      // setProperties(response?.data);
      console.log("response", response);
      const data: PropertyPageData = response?.data;
      setPropertiesPageData(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  React.useEffect(() => {
    fetchPropertiesContent();
  }, []);

  return (
    <div className="flex flex-col">
      <BuyingModal
        isOpen={isOpeBuyingModal}
        closeModel={() => setIsOpeBuyingModal(false)}
      />
      <SellingModal
        isOpen={isOpeSellingModal}
        closeModel={() => setIsOpeSellingModal(false)}
      />
      <InvestingModal
        isOpen={isOpeInvestingModal}
        closeModel={() => setIsOpeInvestingModal(false)}
      />

      <div className="relative bg-[#181818] min-h-[680px]">
        <Section bgColor="transparent">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div className="flex flex-col gap-16">
              <Text variant={"page_title"} className="text-white">
                {propertiesPageData?.hero.title}
              </Text>
              <Text variant={"body"} className="text-white">
                {propertiesPageData?.hero.description}
              </Text>
            </div>
            <div className="flex z-10 flex-col gap-5">
              <div
                onClick={() => setIsOpeBuyingModal(true)}
                className="flex cursor-pointer justify-between items-center py-6 px-8 rounded-[10px] border-[3px] border-[#D97FFF] gap-5"
              >
                <Text variant={"card_title_large"} className="text-[#BE38F3]">
                  I’m Buying
                </Text>
                <Icon name="east" className="text-[#BE38F3] text-[24px]" />
              </div>
              <div
                onClick={() => setIsOpeSellingModal(true)}
                className="flex justify-between items-center py-6 px-8 rounded-[10px] border-[3px] border-[#4C5BFF] gap-5"
              >
                <Text variant={"card_title_large"} className="text-[#3334FF]">
                  I’m Selling
                </Text>
                <Icon name="east" className="text-[#3334FF] text-[24px]" />
              </div>
              <div
                onClick={() => setIsOpeInvestingModal(true)}
                className="flex justify-between items-center py-6 px-8 rounded-[10px] border-[3px] border-[#9DE2FF] gap-5"
              >
                <Text variant={"card_title_large"} className="text-[#32C9FE]">
                  I’m Investing
                </Text>
                <Icon name="east" className="text-[#32C9FE] text-[24px]" />
              </div>
            </div>
          </div>
        </Section>
        <div className="absolute  left-0 bottom-0">
          <Image src={VectorBottomLeftImg} alt="vector" />
        </div>
        <div className="absolute right-0 bottom-0">
          <Image src={VectorBottomRightImg} alt="vector" />
        </div>
        <div className="absolute right-0 top-0">
          <Image src={VectorTopRightImg} alt="vector" />
        </div>
      </div>
      {children}
    </div>
  );
}
