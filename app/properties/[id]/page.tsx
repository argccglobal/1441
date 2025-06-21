"use client";
import {
  usePropertyDetailsOffcanvas,
  usePropertyPageData,
} from "@/store/propertyDetailsOffcanvas";

import Section from "@/components/layout/Section";
import { Text, textVariants } from "@/components/ui/Text";
import React, { useEffect, useRef, useState } from "react";
import VectorBottomLeftImg from "@/public/vector_bottom_left.svg";
import VectorBottomRightImg from "@/public/vector_bottom_right.svg";
import VectorTopRightImg from "@/public/vector_top_right.svg";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { IconType } from "@/types";
// import Property from "@/components/card/Property";
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
import { useParams, useRouter } from "next/navigation";
import api from "@/apiRequest/axios";
import {
  AreaExplore,
  propertiesApi,
  Property,
} from "@/apiRequest/endpoints/properties";

const Page = () => {
  // const { propertiesPageData } = usePropertyPageData();
  // const router = useRouter();
  const params = useParams();
  const slug = params?.id;
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

  // return <div>Properties</div>;
  const [propertyDetails, setPropertyDetails] = useState<Property | null>(null);
  const fetchPropertyDetails = async () => {
    if (slug) {
      const response = await propertiesApi.getPropertyById(slug as string);
      console.log(response);
      setPropertyDetails(response.data);
    }
  };

  useEffect(() => {
    fetchPropertyDetails();
  }, [slug]);

  const [seAllFeatures, setSeAllFeatures] = useState<boolean>(false);

  return (
    <>
      {activeTab && propertyDetails && (
        <PropertyOffcanvas data={propertyDetails} />
      )}

      {isOpenCanvas && <Overlay setAction={setIsOpenCanvas} />}

      <Section bgColor="white" className="!pt-0">
        {/* {router?.query?.slug} */}
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
                    {propertyDetails?.title}
                  </Text>
                  <span className="px-2.5 py-1 bg-[#88F1F2]">
                    <Text variant={"small"} className="text-[12px]">
                      {propertyDetails?.status === "active" ? "Active" : "Sold"}
                    </Text>
                  </span>
                </div>
                <Text variant={"card_title_small"}>
                  {propertyDetails?.location?.city},{" "}
                  {propertyDetails?.location?.country}
                </Text>
                <Text variant={"card_title_small"}>
                  {propertyDetails?.currency} {propertyDetails?.price}{" "}
                </Text>
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
                  {propertyDetails?.media?.sliderPhotos?.map((photo, index) => (
                    <SwiperSlide>
                      <Image
                        src={photo.url}
                        alt="Large Image"
                        fill
                        key={index}
                        // width={600}
                        // height={400}
                        className="object-cover w-full"
                      />
                    </SwiperSlide>
                  ))}
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
                      {propertyDetails?.media?.galleryPhotos?.length || 0}{" "}
                      Photos
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
                {propertyDetails?.media?.galleryPhotos
                  ?.slice(0, 4)
                  .map((photo, index) => (
                    <div
                      key={index}
                      className="relative h-full group overflow-hidden"
                    >
                      <Image
                        src={photo.url}
                        alt={`Small Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
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
                    {propertyDetails && (
                      <PropertyCoreDetails property={propertyDetails} />
                    )}
                  </div>
                </div>
                <ContentSection
                  color="!text-neutralDark"
                  texts={[propertyDetails?.description || "No Description"]}
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
                  {activeExploreTab === "about" && (
                    <About about={propertyDetails?.areaExplore?.about} />
                  )}
                  {activeExploreTab === "landmarks" && (
                    <Landmarks
                      landmarks={propertyDetails?.areaExplore?.landmarks}
                    />
                  )}
                  {activeExploreTab === "schools" && (
                    <Schools schools={propertyDetails?.areaExplore?.schools} />
                  )}
                  {activeExploreTab === "others" && (
                    <Other others={propertyDetails?.areaExplore?.others} />
                  )}
                </div>
                <div className="border-t border-border"></div>
                {/* <SimilarProduct /> */}
              </div>
              <div className="h-full bg-border"></div>
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-5">
                  <Text variant={"card_title_large"}>Features</Text>
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center flex-wrap w-full gap-y-5">
                      {[
                        propertyDetails?.features.hasCentralHeating &&
                          "Central Heating",
                        propertyDetails?.features.hasGarden && "Garden",
                        propertyDetails?.features.hasParking && "Parking",
                        propertyDetails?.features.hasSwimmingPool &&
                          "Swimming Pool",
                      ].map((item, index) => (
                        <Text
                          key={index}
                          variant={"small"}
                          className="flex-[1/2] w-1/2 Garden"
                        >
                          {item}
                        </Text>
                      ))}
                      {seAllFeatures &&
                        propertyDetails?.features?.moreFeatures &&
                        propertyDetails?.features?.moreFeatures.map(
                          (item, index) => (
                            <Text
                              key={index}
                              variant={"small"}
                              className="flex-[1/2] w-1/2 Garden"
                            >
                              {item.name} Name
                            </Text>
                          )
                        )}
                    </div>
                    {propertyDetails?.features?.moreFeatures &&
                      propertyDetails?.features?.moreFeatures.length > 0 && (
                        <span
                          onClick={() => setSeAllFeatures(!seAllFeatures)}
                          className={cn(
                            textVariants({
                              variant: "button",
                            }),
                            "underline cursor-pointer"
                          )}
                        >
                          {seAllFeatures ? "View Less" : "View More"}{" "}
                          {propertyDetails?.features?.moreFeatures.length}{" "}
                          Features
                        </span>
                      )}
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
                        {propertyDetails?.details.epcRating}
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Text variant={"small"} className="min-w-[106px]">
                        Ownership Type :
                      </Text>
                      <Text variant={"small"} className="">
                        {propertyDetails?.details.ownershipType}
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
                        <Icon name="email" className="text-[20px]" />
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
                        <Icon name="email" className="text-[20px]" />
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
const About = ({ about }: { about: any }) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_large"}>
          {about?.title ? about?.title : "About Buckinghamshire"}
        </Text>
        <BulletText
          style="disc"
          texts={[about?.description || "No Description"]}
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
const Landmarks = ({ landmarks }: { landmarks: any }) => {
  return (
    <div className="flex flex-col gap-5">
      <Text variant={"card_title_large"}>Stations</Text>
      <div className="grid grid-cols-[auto_1px_auto] gap-8">
        <div className="flex flex-col gap-5">
          {landmarks &&
            landmarks.length > 0 &&
            landmarks.map((item: any, index: number) => (
              <StationItem {...item} />
            ))}
        </div>

        <div className="bg-border h-full"></div>
        {/* <div className="flex flex-col gap-5">
          {rightPartStation.map((item, index) => (
            <StationItem {...item} />
          ))}
        </div> */}
      </div>
    </div>
  );
};
const StationItem = ({
  icon,
  name,
  distance,
}: {
  // iconName: string;
  // title: string;
  // distance: string;
  _id: string;
  name: string;
  type: string;
  icon: string;
  distance: number;
  location: {
    latitude: number;
    longitude: number;
  };
}) => {
  return (
    <div className="flex items-center gap-2.5">
      <Icon name={icon as IconType} className="text-[20px]" />
      <div className="flex flex-auto items-center gap-2.5 justify-between">
        <Text variant={"card_title_large"}>{name}</Text>
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
const Schools = ({ schools }: { schools: any }) => {
  return (
    <div className="flex flex-col gap-5">
      {schools &&
        schools.map((school: any, index: number) => (
          <SchoolsItem key={index} school={school} />
        ))}
    </div>
  );
};

const SchoolsItem = ({ school }: { school: any }) => {
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

        <Text variant={"body"}>Age: {school.ageRange}</Text>
        <Text variant={"body"}>Ofsted: {school.ofstedRating}</Text>
      </div>
    </div>
  );
};

const Other = ({ others }: { others: any }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2.5">
        <Text variant={"body"}>
          Thurston, Bury Saint Edmunds IP31 3QZ, UK, Thurston, England, United
          Kingdom.
          {/* {others.} */}
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

export default Page;
