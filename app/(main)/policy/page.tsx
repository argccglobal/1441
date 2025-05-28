"use client";
import Image from "next/image";
import HeroImg from "@/public/home_hero.png";
import TabLinks from "@/components/TabLinks";
import Section from "@/components/layout/Section";
import { Text } from "@/components/ui/Text";
import ServiceCard from "@/components/common/ServiceCard";
import { useEffect, useState } from "react";
import { cn } from "@/utils/classNames";
import ContentSection from "@/components/common/ContentSection";
import { Icon } from "@/components/ui/Icon";
import { Divider } from "@/components/ui/Divider";
import SideTabBtn from "@/components/SideTabBtn";
import { usePolicyStore } from "@/store/policy";
export default function Home() {
  const { getPolicies, policies } = usePolicyStore();

  useEffect(() => {
    getPolicies();
  }, []);
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
  const [activeCategoryContent, setActiveCategoryContent] = useState<{
    title: string;
    content: string[];
  }>({
    title: "",
    content: [],
  });
  const { policies } = usePolicyStore();
  console.log("policies", policies);

  const handleActiveCtg = (category: string, content: any) => {
    setActiveTab(category);
    setActiveCategoryContent(content);
  };

  return (
    <Section bgColor="white" className="!py-20">
      <div className="grid items-start grid-cols-1 sm:grid-cols-[300px_auto] gap-12">
        <div className="flex flex-col shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] border border-neutralDark">
          <div className="px-8 py-[30px] bg-neutralDark">
            <Text variant={"card_title_large"} className="text-white">
              Categories
            </Text>
          </div>
          {policies.map((policy, index) => (
            <div
              key={index}
              onClick={() =>
                handleActiveCtg(policy.category, {
                  title: policy.title,
                  content: policy.content,
                })
              }
              className={cn(
                "px-8 cursor-pointer py-[30px] border-neutralDark hover:bg-[#E7E7E7]",
                policy.category
                  ? activeTab === policy.category
                    ? "bg-[#E7E7E7]"
                    : ""
                  : index == 0
                  ? "bg-[#E7E7E7]"
                  : "",
                index === 0 ? "" : "border-t"
              )}
            >
              <Text variant={"card_title_large"} className="">
                {policy.category}
              </Text>
            </div>
          ))}

          {/* <div
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
          </div> */}
        </div>
        <div className="flex flex-col gap-12">
          <Text variant={"section_title_normal"}>
            {activeCategoryContent.title}
          </Text>

          <div className="flex flex-col gap-8">
            {activeCategoryContent.content.map(
              (content: string, index) =>
                content && (
                  <Text
                    key={index}
                    variant="body"
                    className={"text-neutral"}
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
