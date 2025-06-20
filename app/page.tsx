"use client";
import Image from "next/image";
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
import FeaturedImg from "@/public/featured.png";
import SideTabBtn from "@/components/SideTabBtn";
import HeroImg from "@/public/home_hero.png";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { homeApi } from "@/api/endpoints/home";
import useHomeStore, { FeaturedProperties, HomeData } from "@/store/home";
import { ApiResponse } from "@/api/types";
import { useEffect, useRef, useState } from "react";
import PageLoader from "@/components/ui/PageLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { cn } from "@/utils/classNames";
import "swiper/css";

export default function Home() {
  const { setHomeData, homeData, isLoading, setLoading } = useHomeStore();
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const getHomePageData = async () => {
    // setLoading(true);
    try {
      const homePage: ApiResponse<HomeData> = await homeApi.getHomeData();
      if (homePage.statusCode === 200) {
        setHomeData(homePage?.data);
      }
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    getHomePageData();
  }, []);
  return (
    <>
      {isLoading ? (
        <PageLoader message="Loading content..." />
      ) : (
        <div className="flex flex-col">
          <SideTabBtn />
          <Image
            className="w-full"
            width={1920}
            height={1080}
            src={homeData?.heroImage?.imageUrl || ''}
            alt="Hero"
          />
          <TabLinks />
          <BrandLogoSection />
          <ServiceSection />
          <RegionAreaSection />
          <FeaturedSection />
        </div>
      )}
    </>
  );
}

const BrandLogoSection = () => {
  const { homeData } = useHomeStore();
  return (
    <Section bgColor="white">
      <div className="flex flex-col items-center gap-20">
        <div className="max-w-[754px]">
          <Text
            variant={"section_title_normal"}
            className="text-neutral text-center"
          >
            {homeData?.brandSection.quote}
          </Text>
        </div>
        <div className="flex items-center gap-16 justify-center flex-wrap">
          {homeData?.brandLogos.map((item, index) => (
            <Image
              key={index}
              width={120}
              height={25}
              src={item.imageUrl}
              alt="Monday"
            />
          ))}
          {/* <Image src={MondayImg} alt="Monday" />
          <Image src={JiraImg} alt="Monday" />
          <Image src={WebFlowImg} alt="Monday" />
          <Image src={MondayImg} alt="Monday" />
          <Image src={AirBnb} alt="Monday" /> */}
        </div>
      </div>
    </Section>
  );
};

const ServiceSection = () => {
  const { homeData } = useHomeStore();
  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Text variant={"section_title_normal"}>
            {homeData?.serviceSection.title}
          </Text>
          <Text variant={"body"}>{homeData?.serviceSection.description}</Text>
        </div>
        <div className="grid grid-cols-3 gap-x-8">
          {homeData?.services.map((service) => (
            <div
              key={service._id}
              className="bg-white card border-1 border-transparent px-8 py-12 h-[360px] group"
              // style={{
              //   backgroundImage: `linear-gradient(#0000001A, #0000001A), `,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
              style={{
                backgroundImage: `linear-gradient(#0000001A, #0000001A), url(${service.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = `linear-gradient(#0000004D, #0000004D), url(${service.imageUrl})`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = `linear-gradient(#0000001A, #0000001A), url(${service.imageUrl})`;
              }}
            >
              <div className="flex flex-col gap-5">
                <Text
                  variant={"card_title_large"}
                  className="text-white pb-[2px] max-w-fit border-b border-[#00DBCE]"
                >
                  {service.title}
                </Text>
                <Text
                  variant={"body"}
                  className="text-white hidden group-hover:flex"
                >
                  {service.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const RegionAreaSection = () => {
  const { homeData } = useHomeStore();
  const [regionAreas, setRegionAreas] = useState<FeaturedProperties[]>([]);
  const fetchRegions = async (country?: string) => {
    try {
      const getRegions = await homeApi.getRegions(country);
      console.log("getRegions", getRegions);
      // const fullHomePageData = {
      //   ...homeData,
      //   regionAreas: getRegions.data,
      // };
      setRegionAreas(getRegions.data);
      // setHomeData(fullHomePageData);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchRegions();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [country, setCountry] = useState<any>({
    id: "UK",
    name: "United Kingdom",
  });
  const changeCountry = (country: { id: string; name: string }) => {
    fetchRegions(country.id);
    setCountry(country);
    setIsOpen(false);
  };
  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <div
            className="flex cursor-pointer menu max-w-fit items-center relative gap-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen && (
              <div
                className="absolute listedOption -right-[30px] top-full flex flex-col bg-white py-[5px] min-w-[200px] shadow-[0px_0px_4px_0px_#00000033]"
                ref={menuRef}
              >
                <Text
                  onClick={() =>
                    changeCountry({
                      id: "UK",
                      name: "United Kingdom",
                    })
                  }
                  variant={"placeholder"}
                  className="px-2.5 cursor-pointer py-2 text-neutralDark hover:bg-gray-100"
                >
                  United Kingdom
                </Text>
                <Text
                  onClick={() =>
                    changeCountry({
                      id: "UAE",
                      name: "United Arab Emirates",
                    })
                  }
                  variant={"placeholder"}
                  className="px-2.5 cursor-pointer py-2 text-neutralDark hover:bg-gray-100"
                >
                  United Arab Emirates
                </Text>
                <Text
                  onClick={() =>
                    changeCountry({
                      id: "USA",
                      name: "United States",
                    })
                  }
                  variant={"placeholder"}
                  className="px-2.5 cursor-pointer py-2 text-neutralDark hover:bg-gray-100"
                >
                  United States
                </Text>
                <Text
                  onClick={() =>
                    changeCountry({
                      id: "USA",
                      name: "United States",
                    })
                  }
                  variant={"placeholder"}
                  className="px-2.5 cursor-pointer py-2 text-neutralDark hover:bg-gray-100"
                >
                  United States
                </Text>
              </div>
            )}
            <Text variant={"section_title_normal"}>{country.name}</Text>
            <Icon name="keyboard_arrow_down" className="text-[24px]" />
          </div>
          <Text variant={"body"}>{homeData?.regionSection.description}</Text>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {regionAreas.map((item, index) => (
            <PropertiesRegionAndTypeCol
              key={index}
              title={item.title}
              locations={[item.location?.city || '']}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
const FeaturedSection = () => {
  const { homeData } = useHomeStore();
  const [featuredPropertiesData, setFeaturedPropertiesData] = useState<
    FeaturedProperties[]
  >([]);
  const getFeaturedData = async () => {
    try {
      const featured: any = await homeApi.getFeaturedProperties();
      console.log("featured", featured.data);
      setFeaturedPropertiesData(featured.data);
    } catch (error) {}
  };

  useEffect(() => {
    getFeaturedData();
  }, []);
  useEffect(() => {
    // Fetch data from the API
    // getFeaturedProperties
  });

  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <Text variant={"section_title_normal"}>
              {homeData?.featuredSection.title}
            </Text>
          </div>
          <Text variant={"body"}>{homeData?.featuredSection?.description}</Text>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            className="h-full"
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {featuredPropertiesData.map((property, index) => (
              <SwiperSlide key={index}>
                <div className="w-full">
                  <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-5 justify-between bg-[#F2F4FA] p-8">
                      <div className="flex flex-col gap-5">
                        <Text variant={"card_title_large"}>
                          {property?.title}
                        </Text>
                        <Text
                          variant={"small_heading"}
                        >{`${property?.location.city}, ${property?.location.country}`}</Text>
                        <Text variant={"body"}>{property?.description}</Text>
                        <Text variant={"body"}>
                          {`${property?.developmentName || ""}`}
                        </Text>

                        <Link href="#" className="flex items-center gap-2.5">
                          <Text as="span" variant={"button"}>
                            More Details
                          </Text>
                          <Icon name="east" className="text-[20px]" />
                        </Link>
                      </div>
                      <div className="border-t pt-5 border-border">
                        <div className="flex items-center gap-8 flex-wrap">
                          {[
                            {
                              value: property?.features.bedrooms.toString(),
                              label: "Bedroom",
                            },
                            {
                              value: property?.features.bathrooms.toString(),
                              label: "Bathrooms",
                            },
                            {
                              value: property?.details?.floorPlanSize || "N/A",
                              label: "Floor Plan",
                            },
                            {
                              value: `${property?.landSize} ${property?.landSizeUnit}`,
                              label: "Plot Size",
                            },
                          ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-2.5">
                              <Text variant={"small"} className="font-bold">
                                {item.value}
                                {
                                  // Floor Plan
                                  item.label === "Floor Plan" && <sup>2</sup>
                                }
                              </Text>
                              <Text variant={"small"} className="text-neutral">
                                {item.label}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Image
                      src={FeaturedImg}
                      className="h-full"
                      alt="Featured Image"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-end gap-5">
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className={cn(
              "flex cursor-pointer items-center justify-center h-8 w-8 border border-neutralDark",
              isBeginning ? "opacity-50 cursor-not-allowed" : ""
            )}
          >
            <Icon name="west" className="text-[16px] text-neutralDark" />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className={cn(
              "flex cursor-pointer items-center rotate-180 justify-center h-8 w-8 border border-neutralDark",
              isEnd ? "opacity-50 cursor-not-allowed" : ""
            )}
            // className="flex cursor-pointer items-center justify-center h-8 w-8 border border-neutralDark"
          >
            <Icon name="west" className="text-[16px] text-neutralDark" />
          </div>
        </div>
      </div>
    </Section>
  );
};
const PropertiesRegionAndTypeCol = ({
  title,
  locations,
}: {
  title: string;
  locations: Array<{name: string} | string>;
}) => {
  return (
    <div className="flex flex-col gap-8">
      <Text variant={"card_title_large"} className="text-neutral">
        {title}
      </Text>
      <div className="flex flex-col gap-5">
        {locations &&
          locations.map((loc: any, index) => (
            <Text
              key={index}
              variant={"small"}
              className="text-neutral cursor-pointer hover:underline max-w-fit"
            >
              {" "}
              {typeof loc === 'string' ? loc : loc?.name}
            </Text>
          ))}
      </div>
    </div>
  );
};
