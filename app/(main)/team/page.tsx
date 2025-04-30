"use client";
import Image from "next/image";
import HeroImg from "@/public/home_hero.png";
import TabLinks from "@/components/TabLinks";
import Section from "@/components/layout/Section";
import { Text } from "@/components/ui/Text";
import MondayImg from "@/public/monday.svg";
import JiraImg from "@/public/jira.svg";
import WebFlowImg from "@/public/webflow.svg";
import AirBnb from "@/public/airbnb.svg";
import ServiceImg1 from "@/public/service_1.png";
import ServiceImg2 from "@/public/service_2.png";
import ServiceImg3 from "@/public/serviec_3.png";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import FeaturedImg from "@/public/featured.png";
import Member from "@/components/common/Member";
import { cn } from "@/utils/classNames";
import Pagination from "@/components/common/Pagination";
import Overlay from "@/components/common/Overlay";
import MemberDetailsOffcanvas from "@/components/OffCanvas/MemberDetailsOffCanvas";
import { useMemberDetailsOffcanvas } from "@/store/memberDetailsOffcanvas";
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <Image src={HeroImg} alt="Hero" />
      <TabLinks /> */}
      <TeamSections />
    </div>
  );
}

const TeamSections = () => {
  const { isOpenCanvas, closeCanvas, openCanvas } = useMemberDetailsOffcanvas();

  return (
    <Section bgColor="white">
      {" "}
      {isOpenCanvas && <Overlay setAction={closeCanvas} />}
      <MemberDetailsOffcanvas />
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col gap-5 max-w-[600px] items-center text-center">
          <Text variant={"section_title_normal"} className="">
            Unique Style. Defined
          </Text>
          <Text variant={"body"}>
            Our team is built on trust, experience, and integrity. We are
            relentless, passionate and creative. We love what we do. Take a
            minute to get to know us. We promise, its worth it
          </Text>
        </div>
        <div className="flex w-full flex-col gap-12">
          <Text variant={"section_title_normal"}>Property Consultants</Text>
          <div className="grid w-full grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12">
            {
              // 12 item repeted member
              Array.from({ length: 12 }).map((_, index) => (
                <Member key={index} />
              ))
            }
          </div>
          <div className="flex items-center gap-5">
            <div className="flex cursor-pointer items-center justify-center h-10 w-10 border border-neutralDark">
              <Icon name="west" className="text-[16px] text-neutralDark" />
            </div>

            <Pagination currentPage={2} totalPages={18} />
            <div className="flex cursor-pointer items-center justify-center h-10 w-10 border border-neutralDark">
              <Icon name="east" className="text-[16px] text-neutralDark" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
