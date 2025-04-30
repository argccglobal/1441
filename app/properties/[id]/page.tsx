"use client";
import { usePropertyDetailsOffcanvas } from "@/store/propertyDetailsOffcanvas";

import Section from "@/components/layout/Section";
import { Text, textVariants } from "@/components/ui/Text";
import React, { useRef, useState } from "react";
import VectorBottomLeftImg from "@/public/vector_bottom_left.svg";
import VectorBottomRightImg from "@/public/vector_bottom_right.svg";
import VectorTopRightImg from "@/public/vector_top_right.svg";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import Property from "@/components/card/Property";
import { Input } from "@/components/ui/Input";
import SearchSelect from "@/components/ui/SearchSelect";
import { cn } from "@/utils/classNames";
import { LinkText } from "@/components/ui/LinkText";
import SliderImg1 from "@/public/slider_image_1.png";
import GalleryImg1 from "@/public/gallery_1.png";
import GalleryImg2 from "@/public/gallery_2.png";
import GalleryImg3 from "@/public/gallery_3.png";
import GalleryImg4 from "@/public/gallery_4.png";
import MemberImg from "@/public/member.png";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper JS
// import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import PropertyCoreDetails from "@/components/common/PropertyCoreDetails";
import ContentSection from "@/components/common/ContentSection";
import BulletText from "@/components/common/BulletText";
import Link from "next/link";
import Map from "@/components/Map";
import SimilarProduct from "@/components/common/SimilarProduct";
import { Button } from "@/components/ui/Button";
import { CheckboxInput } from "@/components/ui/Checkbox";
import PropertyOffcanvas from "@/components/OffCanvas/PropertyOffcanvas";
import Overlay from "@/components/common/Overlay";

const page = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleSortSelect = () => {
    setIsOpen(!isOpen);
  };
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeExploreTab, setActiveExploreTab] = useState("about");
  // const [isOpenCanvas, setIsOpenCanvas] = useState(false);
  // const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleOpenTabCanvas = (tab: string) => {
    setActiveTab(tab);
    setIsOpenCanvas(true);
  };

  const { isOpenCanvas, setIsOpenCanvas, activeTab, setActiveTab } =
    usePropertyDetailsOffcanvas();

  return (
    <>
      {activeTab && <PropertyOffcanvas />}

      {isOpenCanvas && <Overlay setAction={setIsOpenCanvas} />}

      <Section bgColor="white" className="!pt-0">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-5 bg-white sticky top-0 py-5 z-50">
            <div className="flex flex-col gap-5">
              <div className="grid  grid-cols-2 xs:grid-cols-4  md:grid-cols-[auto_120px_140px_120px_120px_120px_120px_44px] gap-2.5">
                <div className="flex max-w-[350px] justify-between gap-2.5 h-[40px] px-2.5 items-center bg-white border rounded-[2px] overflow-hidden border-border">
                  <Input
                    id="search"
                    className="w-48 !px-0 border-none text-neutralDark placeholder:text-neutralDark"
                    type="text"
                    placeholder="Search Location"
                  />
                  <Icon
                    name="location_on"
                    className="text-h4 text-neutralDark cursor-pointer flex items-center"
                  />
                </div>
                <SearchSelect
                  placeholder="Buy"
                  name="Buy"
                  options={[
                    {
                      value: "Buy",
                      label: "Buy",
                    },
                  ]}
                />
                <SearchSelect
                  placeholder="Property Type"
                  name="property_type"
                  options={[
                    {
                      value: "Buy",
                      label: "Buy",
                    },
                  ]}
                />
                <SearchSelect
                  placeholder="Min Beds"
                  name="min_beds"
                  options={[
                    {
                      value: "Buy",
                      label: "Buy",
                    },
                  ]}
                />
                <SearchSelect
                  placeholder="Min Bath"
                  name="min_bath"
                  options={[
                    {
                      value: "Buy",
                      label: "Buy",
                    },
                  ]}
                />
                <SearchSelect
                  placeholder="Min Price"
                  name="min_price"
                  options={[
                    {
                      value: "Buy",
                      label: "Buy",
                    },
                  ]}
                />
                <SearchSelect
                  placeholder="Max Price"
                  name="max_price"
                  options={[
                    {
                      value: "Buy",
                      label: "Buy",
                    },
                  ]}
                />
                <div className="border-border cursor-pointer flex border items-center justify-center">
                  <Icon name="tune" className="text-h4 " />
                </div>
              </div>
              <div className="flex justify-end cursor-pointer items-center gap-2">
                <Text variant={"button"} className=" text-propertiesMain">
                  Clear Filters{" "}
                </Text>
                <Icon
                  name="close"
                  className="text-[20px] text-propertiesMain"
                />
              </div>
            </div>
          </div>
          <LinkText
            href="/"
            icon="west"
            className="mb-12"
            label="Back To Search"
          />
          <div className="flex flex-col gap-12">
            <div className="flex items-start gap-8">
              <div className="flex-auto flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <Text variant={"section_title_normal"} className="">
                    The Grand Haven Estate On C.13.82 Ha (c.34.15 Acres)
                  </Text>
                  <span className="px-2.5 py-1 bg-[#88F1F2]">
                    <Text variant={"small"} className="text-[12px]">
                      Recently Sold
                    </Text>
                  </span>
                </div>
                <Text variant={"card_title_small"}>Abu Dhabi, UAE</Text>
                <Text variant={"card_title_small"}>AED 1,000,000</Text>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex cursor-pointer items-center gap-2.5">
                  <Icon name="bookmark_border" className="text-[20px]" />
                  <Text variant={"small"}>Save</Text>
                </div>
                <div className="flex cursor-pointer items-center gap-2.5">
                  <Icon name="share" className="text-[20px]" />
                  <Text variant={"small"}>Share</Text>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 h-[400px]">
              {/* Left - Large Image */}
              <div className="relative col-span-1 h-full">
                <div
                  onClick={() => swiperRef.current?.slidePrev()}
                  className={cn(
                    "absolute cursor-pointer rotate-180 z-10 bg-[#EBF4FFCC] left-2.5 top-1/2 transform -translate-y-1/2 h-[28px] w-[28px] flex justify-center items-center",
                    isBeginning ? "opacity-50 cursor-not-allowed" : ""
                  )}
                >
                  <Icon name="arrow_forward_ios" className="text-[20px] " />
                </div>
                <div
                  onClick={() => swiperRef.current?.slideNext()}
                  className={cn(
                    "absolute cursor-pointer z-10 bg-[#EBF4FFCC] right-2.5 top-1/2 transform -translate-y-1/2 h-[28px] w-[28px] flex justify-center items-center",
                    isEnd ? "opacity-50 cursor-not-allowed" : ""
                  )}
                >
                  <Icon name="arrow_forward_ios" className="text-[20px]" />
                </div>
                <Swiper
                  modules={[Navigation]}
                  className="w-full h-full"
                  spaceBetween={50}
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
                  <SwiperSlide>
                    <Image
                      src={SliderImg1}
                      alt="Large Image"
                      fill
                      className="object-cover w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={SliderImg1}
                      alt="Large Image"
                      fill
                      className="object-cover w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={SliderImg1}
                      alt="Large Image"
                      fill
                      className="object-cover "
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Right - Four Small Images */}
              <div className="grid relative grid-cols-2 gap-2.5 h-full">
                <div className="absolute z-10 flex items-center gap-5 right-2.5 bottom-5">
                  <div
                    onClick={() => handleOpenTabCanvas("photos")}
                    className="flex cursor-pointer px-5 h-10 rounded-full items-center bg-[#363636B2] gap-2.5"
                  >
                    <Icon
                      name="photo_camera"
                      className="text-white text-[20px]"
                    />
                    <Text variant={"button"} className="text-white">
                      37 Photos
                    </Text>
                  </div>
                  <div
                    onClick={() => handleOpenTabCanvas("floor plan")}
                    className="flex cursor-pointer  px-5 h-10 rounded-full items-center bg-[#363636B2] gap-2.5"
                  >
                    <Icon name="map" className="text-white text-[20px]" />
                    <Text variant={"button"} className="text-white">
                      Floor Plan
                    </Text>
                  </div>
                </div>
                <div className="relative h-full group overflow-hidden">
                  <Image
                    src={GalleryImg2}
                    alt={`Small Image ${1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full group overflow-hidden">
                  <Image
                    src={GalleryImg1}
                    alt={`Small Image ${1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full group overflow-hidden">
                  <Image
                    src={GalleryImg3}
                    alt={`Small Image ${1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full group overflow-hidden">
                  <Image
                    src={GalleryImg4}
                    alt={`Small Image ${1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[773px_1px_auto] gap-12">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-5">
                  <Text variant={"section_title_normal"}>In Details</Text>
                  <div className="flex items-end gap-12 justify-between">
                    <div className="flex items-start gap-8">
                      {/* Icon Item */}
                      <div className="flex flex-col gap-2.5">
                        <div className="h-8 w-8 rounded-[2px]  bg-[#222222] flex items-center justify-center">
                          <Icon
                            name="photo_camera"
                            className="text-white text-[24px]"
                          />
                        </div>
                        <Text variant={"card_title_small"}>Photos</Text>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <div className="h-8 w-8 rounded-[2px]  bg-[#222222] flex items-center justify-center">
                          <Icon name="map" className="text-white text-[24px]" />
                        </div>
                        <Text variant={"card_title_small"}>Floor Plan</Text>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <div className="h-8 w-8 rounded-[2px]  bg-[#222222] flex items-center justify-center">
                          <Icon
                            name="play_circle"
                            className="text-white text-[24px]"
                          />
                        </div>
                        <Text variant={"card_title_small"}>Video</Text>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <div className="h-8 w-8 rounded-[2px]  bg-[#222222] flex items-center justify-center">
                          <Icon
                            name="location_on"
                            className="text-white text-[24px]"
                          />
                        </div>
                        <Text variant={"card_title_small"}>Map</Text>
                      </div>
                    </div>
                    <PropertyCoreDetails />
                  </div>
                </div>
                <ContentSection
                  color="!text-neutralDark"
                  texts={[
                    "Lorem ipsum dolor sit amet consectetur. In nisl morbi adipiscing proin amet quis. Augue sem egestas venenatis ac lorem integer. Faucibus nibh ligula magna facilisis. Eu adipiscing sem aliquam porta lorem nunc malesuada. Nulla odio arcu sem magnis faucibus in tortor leo. Mauris nunc imperdiet purus augue nunc.",
                    "Ullamcorper bibendum quis egestas fringilla mauris. Pellentesque elementum sit gravida aenean. A arcu ut leo velit. Elementum varius ac pellentesque tincidunt id.",
                    "Egestas diam eget ornare pharetra morbi facilisis tristique ipsum. Fringilla nisi auctor risus lectus etiam sed ultricies. Pellentesque maecenas ut malesuada bibendum tincidunt sit aliquam. Fringilla nec mattis tortor amet egestas in. Arcu mi elementum vulputate auctor amet proin risus. Velit eu consequat diam pharetra.",
                  ]}
                />
                <div className="border-t border-border"></div>
                <div className="flex flex-col gap-5">
                  <Text variant={"section_title_normal"}>Explore the area</Text>
                  <div className="flex items-start gap-8">
                    <button
                      onClick={() => setActiveExploreTab("about")}
                      className={cn(
                        textVariants({
                          variant: "button",
                        }),
                        "pb-[6px] border-b-2 ",
                        activeExploreTab === "about"
                          ? "border-propertiesMain"
                          : "border-transparent"
                      )}
                    >
                      About
                    </button>
                    <button
                      onClick={() => setActiveExploreTab("landmarks")}
                      className={cn(
                        textVariants({
                          variant: "button",
                        }),
                        "pb-[6px] border-b-2",
                        activeExploreTab === "landmarks"
                          ? "border-propertiesMain"
                          : "border-transparent"
                      )}
                    >
                      Landmarks
                    </button>
                    <button
                      onClick={() => setActiveExploreTab("schools")}
                      className={cn(
                        textVariants({
                          variant: "button",
                        }),
                        "pb-[6px] border-b-2",
                        activeExploreTab === "schools"
                          ? "border-propertiesMain"
                          : "border-transparent"
                      )}
                    >
                      Schools
                    </button>
                    <button
                      onClick={() => setActiveExploreTab("others")}
                      className={cn(
                        textVariants({
                          variant: "button",
                        }),
                        "pb-[6px] border-b-2",
                        activeExploreTab === "others"
                          ? "border-propertiesMain"
                          : "border-transparent"
                      )}
                    >
                      Others
                    </button>
                  </div>
                  {activeExploreTab === "about" && <About />}
                  {activeExploreTab === "landmarks" && <Landmarks />}
                  {activeExploreTab === "schools" && <Schools />}
                  {activeExploreTab === "others" && <Other />}
                </div>
                <div className="border-t border-border"></div>
                <SimilarProduct />
              </div>
              <div className="h-full bg-border"></div>
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-5">
                  <Text variant={"card_title_large"}>Features</Text>
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center flex-wrap w-full gap-y-5">
                      {[
                        "Garden",
                        "Garage",
                        "Walk In Closet",
                        "Indoor Pool",
                        "Sauna",
                        "Mansion",
                      ].map((item, index) => (
                        <Text
                          variant={"small"}
                          className="flex-[1/2] w-1/2 Garden"
                        >
                          Garden
                        </Text>
                      ))}
                    </div>
                    <Link
                      href={"/"}
                      className={cn(
                        textVariants({
                          variant: "button",
                        }),
                        "underline cursor-pointer"
                      )}
                    >
                      View All 17 Features
                    </Link>
                  </div>
                </div>
                <div className="border-t border-border"></div>
                <div className="flex flex-col gap-5">
                  <Text variant={"card_title_large"}>Data</Text>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                      <Text variant={"small"} className="min-w-[106px]">
                        EPC Rating:
                      </Text>
                      <Text variant={"small"} className="">
                        D
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Text variant={"small"} className="min-w-[106px]">
                        Ownership Type :
                      </Text>
                      <Text variant={"small"} className="">
                        Freehold
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border"></div>
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-5">
                    <Image
                      src={MemberImg}
                      alt="Member"
                      width={80}
                      height={60}
                    />
                    <div className="flex flex-col gap-5">
                      <Link
                        href={"/"}
                        className={cn(
                          "underline",
                          textVariants({
                            variant: "card_title_small",
                          })
                        )}
                      >
                        Sultan Almansoori
                      </Link>
                      <div className="flex items-center gap-5">
                        <Icon name="call" className="text-[20px]" />
                        <Icon name="mail" className="text-[20px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <Image
                      src={MemberImg}
                      alt="Member"
                      width={80}
                      height={60}
                    />
                    <div className="flex flex-col gap-5">
                      <Link
                        href={"/"}
                        className={cn(
                          "underline",
                          textVariants({
                            variant: "card_title_small",
                          })
                        )}
                      >
                        Sultan Almansoori
                      </Link>
                      <div className="flex items-center gap-5">
                        <Icon name="call" className="text-[20px]" />
                        <Icon name="mail" className="text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="flex items-center justify-center hover:bg-neutralDark"
                  size="small"
                  type="button"
                  label="Contact Agent"
                />
                <div className="flex flex-col gap-5">
                  <CheckboxInput
                    label="Notify me via email when similar listings appear"
                    id=""
                    name=""
                  />
                  <CheckboxInput
                    label="I agree to Terms of use and Privacy Policy"
                    id=""
                    name=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
const About = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_large"}>
          {`{Buckinghamshire} Area Guide `}
        </Text>
        <BulletText
          style="disc"
          texts={[
            "Buckinghamshire is a peaceful, friendly area offering an array of beautiful towns and picturesque landscapes. A ceremonial county bordering Greater London, Buckinghamshire offers a quaint, countryside alternative to the bustling streets of the capital, whilst still remaining closely connected to the city through a range of superb transport links.",
            "The area holds a population of over 540,000, and is home to some charming towns including Beaconsfield, High Wycombe and Aylesbury. In fact, Buckinghamshire is the most filmed English county, offering the backdrops for Midsummer Murders, James Bond films, Harry Potter and more.",
            "Whilst the cinematic scenery for many well-known films and TV series, Buckinghamshire is so much more than its on-screen appearances, with a wonderful community surrounded by beautiful natural spaces. The area holds the highest amount of National Trust Parks for one county, giving both residents and visitors alike quick and easy access to several stunning spots.",
            "Located on the M1, Buckinghamshire is around 45 mins to 1 hour-drive to main parts of London.",
          ]}
        />
      </div>
      <LinkText
        label="View More"
        icon="east"
        iconPosition="right"
        href="/properties"
      />
    </div>
  );
};
const Landmarks = () => {
  const leftPartStation = [
    {
      iconName: "transfer_within_a_station",
      title: "Gloucester Road",
      distance: "0.07miles",
    },
    {
      iconName: "directions_subway",
      title: "Gloucester Road",
      distance: "0.07miles",
    },
    {
      iconName: "transfer_within_a_station",
      title: "Gloucester Road",
      distance: "0.07miles",
    },
  ];
  const rightPartStation = [
    {
      iconName: "transfer_within_a_station",
      title: "Gloucester Road",
      distance: "0.07miles",
    },
    {
      iconName: "transfer_within_a_station",
      title: "Gloucester Road",
      distance: "0.07miles",
    },
    {
      iconName: "transfer_within_a_station",
      title: "Gloucester Road",
      distance: "0.07miles",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <Text variant={"card_title_large"}>Stations</Text>
      <div className="grid grid-cols-[auto_1px_auto] gap-8">
        <div className="flex flex-col gap-5">
          {leftPartStation.map((item, index) => (
            <StationItem {...item} />
          ))}
        </div>

        <div className="bg-border h-full"></div>
        <div className="flex flex-col gap-5">
          {rightPartStation.map((item, index) => (
            <StationItem {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
const StationItem = ({
  iconName,
  title,
  distance,
}: {
  iconName: string;
  title: string;
  distance: string;
}) => {
  return (
    <div className="flex items-center gap-2.5">
      <Icon name={iconName} className="text-[20px]" />
      <div className="flex flex-auto items-center gap-2.5 justify-between">
        <Text variant={"card_title_large"}>{title}</Text>
        <Text variant={"card_title_large"} className="text-neutral">
          {distance}
        </Text>
      </div>
    </div>
  );
};

const schoolsData = [
  {
    name: "Our Lady of Victories RC Primary",
    distance: "0.07 miles",
    age: "4-11",
    ofsted: "Good",
  },
  {
    name: "Our Lady of Victories RC Primary",
    distance: "0.07 miles",
    age: "4-11",
    ofsted: "Good",
  },
  {
    name: "Our Lady of Victories RC Primary",
    distance: "0.07 miles",
    age: "4-11",
    ofsted: "Good",
  },
];
const Schools = () => {
  return (
    <div className="flex flex-col gap-5">
      {schoolsData.map((school, index) => (
        <SchoolsItem key={index} school={school} />
      ))}
    </div>
  );
};

const SchoolsItem = ({ school }: { school: (typeof schoolsData)[0] }) => {
  return (
    <div className="flex items-start gap-2.5 w-full">
      <Icon name="school" className="text-[20px]" />
      <div className="flex flex-col w-full gap-2.5">
        <div className="flex-auto flex justify-between gap-5">
          <Text variant={"card_title_small"}>{school.name}</Text>
          <Text variant={"card_title_small"} className="text-neutral">
            {school.distance}
          </Text>
        </div>

        <Text variant={"body"}>Age: {school.age}</Text>
        <Text variant={"body"}>Ofsted: {school.ofsted}</Text>
      </div>
    </div>
  );
};

const Other = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2.5">
        <Text variant={"body"}>
          Thurston, Bury Saint Edmunds IP31 3QZ, UK, Thurston, England, United
          Kingdom.
        </Text>
        <Link
          href={"/"}
          className={cn(
            textVariants({
              variant: "body",
            })
          )}
        >
          See on Google Maps
        </Link>
      </div>

      <Map address="Rajshahi" />
    </div>
  );
};

export default page;
