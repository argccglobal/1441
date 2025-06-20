"use client";
import Image from "next/image";
import HeroImg from "@/public/home_hero.png";
import TabLinks from "@/components/TabLinks";
import Section from "@/components/layout/Section";
import { Text } from "@/components/ui/Text";
import ServiceCard from "@/components/common/ServiceCard";
import { ServiceType, useServicePageStore } from "@/store/servicePage";
import { useEffect } from "react";
import { HaveQuestions } from "../tenancy-services/components/HaveQuestions";
export default function Home() {
  const { pageData, getServicePageData, services } = useServicePageStore();

  useEffect(() => {
    getServicePageData(ServiceType.CONCIERGE);
  }, []);

  console.log("services", services);

  console.log(pageData);
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
  const { pageData, services } = useServicePageStore();
  return (
    <Section className="" bgColor="white">
      {/* Concierge Services
       */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Text variant={"section_title_normal"}>
            {pageData?.service.title}
          </Text>
          <Text variant={"body"}>{pageData?.service.description}</Text>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
          {services.map((service, index) => {
            return <ServiceCard service={service} />;
          })}
        </div>
      </div>
    </Section>
  );
};
