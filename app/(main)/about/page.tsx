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
import { useRef, useState } from "react";
export default function Home() {
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
  return (
    <Section bgColor="white">
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
        <div className="w-full flex flex-col gap-12">
          <Text variant={"section_title_normal"}>About Us</Text>
          <div className="flex flex-col gap-8">
            <div className="w-full grid grid-cols-1 md:grid-cols-[auto_500px] gap-16">
              <ContentSection
                texts={[
                  "Lorem ipsum dolor sit amet consectetur. In nisl morbi adipiscing proin amet quis. Augue sem egestas venenatis ac lorem integer. Faucibus nibh ligula magna facilisis. Eu adipiscing sem aliquam porta lorem nunc malesuada. Nulla odio arcu sem magnis faucibus in tortor leo. Mauris nunc imperdiet purus augue nunc.",
                  "Ullamcorper bibendum quis egestas fringilla mauris. Pellentesque elementum sit gravida aenean. A arcu ut leo velit. Elementum varius ac pellentesque tincidunt id.",
                  "Egestas diam eget ornare pharetra morbi facilisis tristique ipsum. Fringilla nisi auctor risus lectus etiam sed ultricies. Pellentesque maecenas ut malesuada bibendum tincidunt sit aliquam. Fringilla nec mattis tortor amet egestas in. Arcu mi elementum vulputate auctor amet proin risus. Velit eu consequat diam pharetra.",
                ]}
              />
              <Image src={AboutImg} alt="AboutImg" />
            </div>
            <Text variant={"body"}>
              Turpis mi sed accumsan quis. Euismod nec nisl ut eget. Nec eu
              scelerisque proin turpis lacus volutpat id. Vestibulum ac blandit
              laoreet amet. Penatibus odio viverra sit sed at sit pulvinar
              lorem. Libero egestas eu urna fermentum. Felis phasellus enim odio
              metus. Cras vitae et aenean eu faucibus netus. Pretium facilisi
              ultricies ut bibendum nunc velit massa parturient.
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
};
const PropertyConsultant = () => {
  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex w-full flex-col gap-12">
          <Text variant={"section_title_normal"}>Property Consultants</Text>
          <div className="grid w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12">
            {
              // 12 item repeted member
              Array.from({ length: 4 }).map((_, index) => (
                <Member key={index} />
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
  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex w-full flex-col gap-12">
          <Text variant={"section_title_normal"}>Our Clients</Text>
          <Text variant={"body"}>
            Lorem ipsum dolor sit amet consectetur. In nisl morbi adipiscing
            proin amet quis. Augue sem egestas venenatis ac lorem integer.
            Faucibus nibh ligula magna facilisis. Eu adipiscing sem aliquam
            porta lorem nunc malesuada. Nulla odio arcu sem magnis faucibus in
            tortor leo. Mauris nunc imperdiet purus augue nunc.Ullamcorper
            bibendum quis egestas fringilla mauris. Pellentesque elementum sit
            gravida aenean. A arcu ut leo velit. Elementum varius ac
            pellentesque tincidunt id.
          </Text>
          <div className="flex items-start gap-8 flex-wrap">
            <div className="flex flex-col gap-2.5 min-w-[109px]">
              <div className="h-8 flex items-center justify-center w-8 rounded-sm bg-properties">
                <Icon
                  name="digital_wellbeing"
                  className="text-[24px] text-white"
                />
              </div>
              <Text variant={"card_title_small"}>Royal Families</Text>
            </div>
            <div className="flex flex-col gap-2.5 min-w-[109px]">
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
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
const Testimonials = () => {
  const swiperRef = useRef("");
  const [totalNavigationItem, setTotalNavigationItem] = useState<number>(0);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex w-full flex-col gap-12">
          <Text variant={"section_title_normal"}>Testimonials</Text>

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
            <SwiperSlide>
              <div className="flex flex-col gap-8 p-8 bg-[#F2F4FA]">
                <Text variant={"body"}>
                  Lorem ipsum dolor sit amet consectetur. Fringilla non aenean
                  arcu vel. Suspendisse massa velit convallis urna ultrices mi.
                  Ullamcorper neque netus urna integer ac. Ut orci arcu orci
                  amet imperdiet. Ac eu scelerisque quisque elit cum hendrerit.
                  Egestas nisl bibendum est ut nullam in condimentum tincidunt
                  et.
                </Text>
                <div className="flex items-center gap-12 justify-between">
                  <div className="flex flex-col gap-2.5">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#131314]"
                    >
                      CEO
                    </Text>
                    <Text variant={"small"} className="text-[#131314]">
                      Airbnb
                    </Text>
                  </div>
                  <Image src={AirBnb} alt="AirBnb" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-8 p-8 bg-[#F2F4FA]">
                <Text variant={"body"}>
                  Lorem ipsum dolor sit amet consectetur. Fringilla non aenean
                  arcu vel. Suspendisse massa velit convallis urna ultrices mi.
                  Ullamcorper neque netus urna integer ac. Ut orci arcu orci
                  amet imperdiet. Ac eu scelerisque quisque elit cum hendrerit.
                  Egestas nisl bibendum est ut nullam in condimentum tincidunt
                  et.
                </Text>
                <div className="flex items-center gap-12 justify-between">
                  <div className="flex flex-col gap-2.5">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#131314]"
                    >
                      CEO
                    </Text>
                    <Text variant={"small"} className="text-[#131314]">
                      Airbnb
                    </Text>
                  </div>
                  <Image src={AirBnb} alt="AirBnb" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-8 p-8 bg-[#F2F4FA]">
                <Text variant={"body"}>
                  Lorem ipsum dolor sit amet consectetur. Fringilla non aenean
                  arcu vel. Suspendisse massa velit convallis urna ultrices mi.
                  Ullamcorper neque netus urna integer ac. Ut orci arcu orci
                  amet imperdiet. Ac eu scelerisque quisque elit cum hendrerit.
                  Egestas nisl bibendum est ut nullam in condimentum tincidunt
                  et.
                </Text>
                <div className="flex items-center gap-12 justify-between">
                  <div className="flex flex-col gap-2.5">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#131314]"
                    >
                      CEO
                    </Text>
                    <Text variant={"small"} className="text-[#131314]">
                      Airbnb
                    </Text>
                  </div>
                  <Image src={AirBnb} alt="AirBnb" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-8 p-8 bg-[#F2F4FA]">
                <Text variant={"body"}>
                  Lorem ipsum dolor sit amet consectetur. Fringilla non aenean
                  arcu vel. Suspendisse massa velit convallis urna ultrices mi.
                  Ullamcorper neque netus urna integer ac. Ut orci arcu orci
                  amet imperdiet. Ac eu scelerisque quisque elit cum hendrerit.
                  Egestas nisl bibendum est ut nullam in condimentum tincidunt
                  et.
                </Text>
                <div className="flex items-center gap-12 justify-between">
                  <div className="flex flex-col gap-2.5">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#131314]"
                    >
                      CEO
                    </Text>
                    <Text variant={"small"} className="text-[#131314]">
                      Airbnb
                    </Text>
                  </div>
                  <Image src={AirBnb} alt="AirBnb" />
                </div>
              </div>
            </SwiperSlide>
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
  return (
    <Section bgColor="[#181818]" fluid>
      <div className="flex flex-col gap-12">
        <div className="container">
          <div className="flex flex-col gap-12">
            <Text variant={"section_title_normal"} className="text-white">
              Our Values
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-12">
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_small"} className="text-properties">
                  Bespoke
                </Text>
                <Text variant={"body"} className="text-white">
                  Lorem ipsum dolor sit amet consectetur. In nisl morbi
                  adipiscing proin amet quis.
                </Text>
              </div>
              <div className="flex flex-col gap-5">
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
              </div>
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
            BONDS
          </h1>
        </div>
      </div>
    </Section>
  );
};
