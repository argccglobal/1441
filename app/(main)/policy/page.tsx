"use client";
import Image from "next/image";
import HeroImg from "@/public/home_hero.png";
import TabLinks from "@/components/TabLinks";
import Section from "@/components/layout/Section";
import { Text } from "@/components/ui/Text";
import ServiceCard from "@/components/common/ServiceCard";
import { useState } from "react";
import { cn } from "@/utils/classNames";
import ContentSection from "@/components/common/ContentSection";
import { Icon } from "@/components/ui/Icon";
import { Divider } from "@/components/ui/Divider";
import SideTabBtn from "@/components/SideTabBtn";
export default function Home() {
  return (
    <div className="flex relative flex-col">
      {/* <Image src={HeroImg} alt="Hero" /> */}
      {/* <TabLinks /> */}
      <Policy />
      {/* <ConciergeService /> */}
    </div>
  );
}

const Policy = () => {
  const [activeTab, setActiveTab] = useState("Privacy Policy");
  return (
    <Section bgColor="white" className="!py-20">
      <div className="grid items-start grid-cols-1 sm:grid-cols-[300px_auto] gap-12">
        <div className="flex flex-col shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] border border-neutralDark">
          <div className="px-8 py-[30px] bg-neutralDark">
            <Text variant={"card_title_large"} className="text-white">
              Categories
            </Text>
          </div>
          <div
            onClick={() => setActiveTab("Compliance")}
            className={cn(
              "px-8 cursor-pointer py-[30px] border-y border-neutralDark hover:bg-[#E7E7E7]",
              activeTab === "Compliance" ? "bg-[#E7E7E7]" : ""
            )}
          >
            <Text variant={"card_title_large"} className="">
              Compliance
            </Text>
          </div>
          <div
            onClick={() => setActiveTab("Terms of Business")}
            className={cn(
              "px-8 cursor-pointer py-[30px] border-b border-neutralDark hover:bg-[#E7E7E7]",
              activeTab === "Terms of Business" ? "bg-[#E7E7E7]" : ""
            )}
          >
            <Text variant={"card_title_large"} className="">
              Terms of Business
            </Text>
          </div>
          <div
            onClick={() => setActiveTab("Privacy Policy")}
            className={cn(
              "px-8 cursor-pointer py-[30px] hover:bg-[#E7E7E7]",
              activeTab === "Privacy Policy" ? "bg-[#E7E7E7]" : ""
            )}
          >
            <Text variant={"card_title_large"} className="">
              Privacy Policy
            </Text>
          </div>
        </div>
        {activeTab === "Privacy Policy" && (
          <div className="flex flex-col gap-12">
            <Text variant={"section_title_normal"}>Data & Privacy Policy</Text>
            <ContentSection
              texts={[
                "Lorem ipsum dolor sit amet consectetur. Dolor facilisi gravida varius ultrices eget gravida sollicitudin. Proin sit ultricies diam arcu urna viverra aenean eget. Nibh lacus consectetur et vitae. Purus enim at in neque maecenas. Augue molestie fames sit et proin arcu mauris. Urna aliquam nunc quam pharetra malesuada interdum eget eleifend eu.",
                "Elementum tempor ultrices sem id et cursus vitae. Volutpat tempor pellentesque morbi arcu proin quam sagittis leo. Convallis amet justo sed sollicitudin nunc sapien adipiscing enim. Dolor tellus nibh maecenas et in ac sed varius. Gravida semper sem diam sapien facilisi proin. Magna fringilla blandit lacus dui est feugiat amet nec. Sit id lorem arcu dictum urna facilisis rhoncus magna. Gravida fringilla sagittis ut est nunc eget eu consectetur. At quis nunc pharetra ac.",
                "Eget at eleifend gravida massa velit. Odio sit ac rhoncus pretium. Adipiscing nunc tristique mauris cursus neque ullamcorper mollis proin. Nascetur platea proin id integer ac lectus consectetur malesuada vitae. Tristique dolor aliquet a ipsum habitant amet nibh molestie pulvinar. Gravida egestas facilisis ipsum praesent interdum gravida molestie aenean. Faucibus urna eleifend ut sit sem.",
                "Fames et lacus auctor amet sit. Tortor nisl ullamcorper malesuada laoreet amet leo cursus augue. Euismod faucibus amet quam laoreet interdum pretium. Risus hac gravida turpis volutpat feugiat ac. Penatibus arcu netus praesent semper vel. Netus a dignissim varius metus laoreet integer vel. Curabitur commodo velit curabitur molestie nibh erat aliquet.",
              ]}
            />
          </div>
        )}
      </div>
    </Section>
  );
};
