"use client";
import Image from "next/image";
import HeroImg from "@/public/home_hero.png";
import TabLinks from "@/components/TabLinks";
import Section from "@/components/layout/Section";
import { Text, textVariants } from "@/components/ui/Text";
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
import AboutImg from "@/public/about.png";
import ContentSection from "@/components/common/ContentSection";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper JS
// import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { aboutApi } from "@/apiRequest/endpoints/about";
import { useAboutPageData } from "@/store/about";
import { Testimonial } from "@/apiRequest/types";
import { Team } from "@/apiRequest/endpoints/teams";
import { useMemberDetailsOffcanvas } from "@/store/memberDetailsOffcanvas";
import MemberDetailsOffcanvas from "@/components/OffCanvas/MemberDetailsOffCanvas";
import Overlay from "@/components/common/Overlay";
export default function Home() {
  const { pageData, setPageData } = useAboutPageData();
  const fetchAboutPageData = async () => {
    try {
      const response = await aboutApi.getAboutPageData();
      setPageData(response?.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchAboutPageData();
  }, []);

  return (
    <div className="flex flex-col">
      {/* <Image src={HeroImg} alt="Hero" />
      <TabLinks /> */}
      <AboutArea />
      <PropertyConsultant />
      <OurPartners />
      <OurClients />
      <Testimonials />
      <OurValues />
    </div>
  );
}

const AboutArea = () => {
  const { pageData, setPageData } = useAboutPageData();
  return (
    <Section bgColor="white">
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col gap-5 max-w-[600px] items-center text-center">
          <Text variant={"section_title_normal"} className="">
            {pageData?.hero?.title}
          </Text>
          <Text variant={"body"} className="text-center">
            {pageData?.hero?.description}
          </Text>
        </div>
        <div className="w-full flex flex-col gap-12">
          <Text variant={"section_title_normal"}>
            {pageData?.aboutUs?.title}
          </Text>
          <div className="flex flex-col gap-8">
            <div className="w-full grid grid-cols-1 md:grid-cols-[auto_500px] gap-16">
              {pageData?.aboutUs?.content &&
                pageData.aboutUs.content.length > 0 && (
                  <ContentSection texts={pageData.aboutUs.content} />
                )}
              {pageData?.aboutUs?.image && (
                <Image
                  src={pageData?.aboutUs.image}
                  width={500}
                  height={500}
                  className="w-full  h-full"
                  alt="AboutImg"
                />
              )}
            </div>
            <Text variant={"body"}>{pageData?.aboutUs?.additionalText}</Text>
          </div>
        </div>
      </div>
    </Section>
  );
};
const PropertyConsultant = () => {
  const { pageData, setPageData } = useAboutPageData();
  const { isOpenCanvas, closeCanvas, openCanvas } = useMemberDetailsOffcanvas();

  return (
    <Section bgColor="white" className="!pt-0">
      {isOpenCanvas && <Overlay setAction={closeCanvas} />}
      <MemberDetailsOffcanvas />
      <div className="flex flex-col gap-12">
        <div className="flex w-full flex-col gap-12">
          <Text variant={"section_title_normal"}>
            {pageData?.consultants.title}
          </Text>
          <div className="grid w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12">
            {
              // 12 item repeted member
              pageData?.consultants.team &&
                pageData?.consultants.team.map((team, index) => (
                  <Member team={team} key={index} />
                ))
            }
          </div>
          <div className="flex justify-end">
            <Link
              href={"/team"}
              className={cn(
                textVariants({
                  variant: "button",
                }),
                "text-propertiesMain"
              )}
            >
              See All
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};
const OurPartners = () => {
  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex w-full flex-col gap-12">
          <Text variant={"section_title_normal"}>Our Partners</Text>
          <div className="flex items-center gap-16 justify-center flex-wrap">
            <Image src={MondayImg} alt="Monday" />
            <Image src={JiraImg} alt="Monday" />
            <Image src={WebFlowImg} alt="Monday" />
            <Image src={MondayImg} alt="Monday" />
            <Image src={AirBnb} alt="Monday" />
          </div>
        </div>
      </div>
    </Section>
  );
};
const OurClients = () => {
  const { pageData, setPageData } = useAboutPageData();

  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex w-full flex-col gap-12">
          <Text variant={"section_title_normal"}>
            {pageData?.clients?.title}
          </Text>
          <Text variant={"body"}>{pageData?.clients?.description}</Text>
          <div className="flex items-start gap-8 flex-wrap">
            {pageData?.clients?.clientList?.map((client, index) => (
              // <div key={index} className="flex flex-col gap-2.5">
              //   <Image src={client?.image} alt="Client" />
              //   <Text variant={"card_title_small"}>{client?.title}</Text>
              // </div>
              <div key={index} className="flex flex-col gap-2.5 min-w-[109px]">
                <div
                  className={cn(
                    "h-8 flex items-center justify-center w-8 rounded-sm"
                  )}
                  style={{ backgroundColor: client.bgColor }}
                >
                  <Icon
                    name={client.icon as any}
                    className="text-[24px] text-white"
                  />
                </div>
                <Text variant={"card_title_small"}>{client.title}</Text>
              </div>
            ))}

            {/* <div className="flex flex-col gap-2.5 min-w-[109px]">
              <div className="h-8 flex items-center justify-center w-8 rounded-sm bg-team">
                <Icon name="money_bag" className="text-[24px] text-white" />
              </div>
              <Text variant={"card_title_small"}>UHNWI</Text>
            </div>
            <div className="flex flex-col gap-2.5 min-w-[109px]">
              <div className="h-8 flex items-center justify-center w-8 rounded-sm bg-services">
                <Icon name="switch_access" className="text-[24px] text-white" />
              </div>
              <Text variant={"card_title_small"}>SWFs</Text>
            </div>
            <div className="flex flex-col gap-2.5 min-w-[109px]">
              <div className="h-8 flex items-center justify-center w-8 rounded-sm bg-contact">
                <Icon name="switch_access" className="text-[24px] text-white" />
              </div>
              <Text variant={"card_title_small"}>International</Text>
            </div>
            <div className="flex flex-col gap-2.5 min-w-[109px]">
              <div className="h-8 flex items-center justify-center w-8 rounded-sm bg-properties">
                <Icon name="home_storage" className="text-[24px] text-white" />
              </div>
              <Text variant={"card_title_small"}>Family Offices</Text>
            </div>
            <div className="flex flex-col gap-2.5 min-w-[109px]">
              <div className="h-8 flex items-center justify-center w-8 rounded-sm bg-team">
                <Icon
                  name="account_balance_wallet"
                  className="text-[24px] text-white"
                />
              </div>
              <Text variant={"card_title_small"}>First Time Buyers</Text>
            </div> */}
          </div>
        </div>
      </div>
    </Section>
  );
};
const Testimonials = () => {
  const { pageData, setPageData } = useAboutPageData();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [totalNavigationItem, setTotalNavigationItem] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const fetchTestimonials = async () => {
    try {
      const response = await aboutApi.getTestimonials();
      setTestimonials(response?.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex w-full flex-col gap-12">
          <Text variant={"section_title_normal"}>
            {pageData?.testimonials.title}
          </Text>

          <Swiper
            modules={[Navigation]}
            className="w-full h-full testimonial"
            spaceBetween={32}
            slidesPerView={2}
            onSwiper={(swiper) => {
              console.log("On Swiper", swiper);
              setTotalNavigationItem(swiper.slides.length);
              setActiveIndex(swiper.activeIndex);
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setTotalNavigationItem(swiper.slides.length);
              setActiveIndex(swiper.activeIndex);
              console.log("On Change", swiper);
            }}
          >
            {testimonials &&
              testimonials.length > 0 &&
              testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-8 p-8 bg-[#F2F4FA]">
                    <Text variant={"body"}>{testimonial?.content}</Text>
                    <div className="flex items-center gap-12 justify-between">
                      <div className="flex flex-col gap-2.5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#131314]"
                        >
                          {testimonial?.role}
                        </Text>
                        <Text variant={"small"} className="text-[#131314]">
                          {testimonial?.company}
                        </Text>
                      </div>
                      <Image
                        src={testimonial?.logo}
                        width={120}
                        height={80}
                        alt="Testimonial"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="flex items-center justify-center gap-5">
            {Array.from({ length: totalNavigationItem - 1 }).map((_, index) => (
              <div
                onClick={() => swiperRef.current.slideTo(index)}
                key={index}
                className={cn(
                  "w-5 h-[6px] cursor-pointer bg-[#D1D1D1]",
                  activeIndex === index && "bg-[#131314]"
                )}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
const OurValues = () => {
  const { pageData, setPageData } = useAboutPageData();

  return (
    <Section bgColor="[#181818]" fluid>
      <div className="flex flex-col gap-12">
        <div className="container">
          <div className="flex flex-col gap-12">
            <Text variant={"section_title_normal"} className="text-white">
              {pageData?.values?.title}
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-12">
              {pageData?.values &&
                pageData?.values.items.length > 0 &&
                pageData?.values.items.map((value, index) => (
                  <div key={index} className="flex flex-col gap-5">
                    <Text
                      variant={"card_title_small"}
                      // className="text-properties"
                      style={{ color: value.color }}
                    >
                      {value.title}
                    </Text>
                    <Text variant={"body"} className="text-white">
                      {value.description}
                    </Text>
                  </div>
                ))}

              {/* <div className="flex flex-col gap-5">
                <Text variant={"card_title_small"} className="text-team">
                  Over & Above
                </Text>
                <Text variant={"body"} className="text-white">
                  Lorem ipsum dolor sit amet consectetur. In nisl morbi
                  adipiscing proin amet quis.
                </Text>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_small"} className="text-services">
                  Navigate
                </Text>
                <Text variant={"body"} className="text-white">
                  Lorem ipsum dolor sit amet consectetur. In nisl morbi
                  adipiscing proin amet quis.
                </Text>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_small"} className="text-contact">
                  Discretion
                </Text>
                <Text variant={"body"} className="text-white">
                  Lorem ipsum dolor sit amet consectetur. In nisl morbi
                  adipiscing proin amet quis.
                </Text>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <h1
            className="text-[430px] font-[900]"
            style={{
              borderImageSource:
                "linear-gradient(88.41deg, #88F1F2 2.7%, #00CFE6 35.13%, #A082FF 63.37%, #7F69FF 100%)",
              borderImageSlice: "1",
              background:
                "linear-gradient(88.41deg, #88F1F2 2.7%, #00CFE6 35.13%, #A082FF 63.37%, #7F69FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {pageData?.values?.brandText}
          </h1>
        </div>
      </div>
    </Section>
  );
};
