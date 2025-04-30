"use client";
import Image from "next/image";
import HeroImg from "@/public/home_hero.png";
import TabLinks from "@/components/TabLinks";
import Section from "@/components/layout/Section";
import { Text } from "@/components/ui/Text";
import ServiceCard from "@/components/common/ServiceCard";
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <Image src={HeroImg} alt="Hero" />
      <TabLinks /> */}
      <ConciergeService />
    </div>
  );
}

const ConciergeService = () => {
  return (
    <Section className="" bgColor="white">
      {/* Concierge Services
       */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Text variant={"section_title_normal"}>Concierge Services</Text>
          <Text variant={"body"}>
            Exclusive Concierge Services Designed to Simplify, Secure, and
            Elevate Your Property Ownership and Investment Experience.
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
