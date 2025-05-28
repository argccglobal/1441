"use client";
import Image from "next/image";
import HeroImg from "@/public/home_hero.png";
import TabLinks from "@/components/TabLinks";
import Section from "@/components/layout/Section";
import { Text } from "@/components/ui/Text";
import ServiceCard from "@/components/common/ServiceCard";
import { ServiceType, useServicePageStore } from "@/store/servicePage";
import { useEffect } from "react";
export default function Home() {
  const { pageData, getServicePageData } = useServicePageStore();

  useEffect(() => {
    getServicePageData(ServiceType.LANDLORD_TENANCY);
  }, []);

  return (
    <div className="flex flex-col">
      {/* <Image src={HeroImg} alt="Hero" />
      <TabLinks /> */}
      <ConciergeService />
      <HaveQuestions />
    </div>
  );
}

const ConciergeService = () => {
  const { pageData } = useServicePageStore();
  return (
    <Section className="" bgColor="white">
      {/* Concierge Services
       */}
      <div className="flex flex-col gap-12">
        <div className="flex w-full items-center justify-center flex-col gap-5">
          <Text variant={"section_title_normal"} className="text-center">
            {pageData?.service.title}
          </Text>
          <Text variant={"body"} className="text-center">
            {pageData?.service.description}
          </Text>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
          {Array.from({ length: 8 }).map((_, index) => {
            return <ServiceCard />;
          })}
        </div>
      </div>
    </Section>
  );
};

export const HaveQuestions = () => {
  const { pageData } = useServicePageStore();

  return (
    <div className="bg-[#3C434A] mb-28">
      <div className="container py-12">
        <div className="flex items-center gap-5 justify-between">
          <div className="flex flex-col gap-5 max-w-[600px]">
            <Text variant={"section_title_normal"} className="text-white">
              {pageData?.cta.title}
            </Text>
            <Text variant={"body"} className="text-white">
              {pageData?.cta.description}
            </Text>
          </div>
          <button className="px-[30px] bg-white py-3 rounded-[2px] hover:bg-neutral hover:text-white">
            {pageData?.cta.button_text}
          </button>
        </div>
      </div>
    </div>
  );
};
