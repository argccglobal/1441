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
export default function Home() {
  return (
    <div className="flex flex-col">
      <Image src={HeroImg} alt="Hero" />
      <TabLinks />
      <BrandLogoSection />
      <ServiceSection />
      <RegionAreaSection />
      <FeaturedSection />
    </div>
  );
}

const BrandLogoSection = () => {
  return (
    <Section bgColor="white">
      <div className="flex flex-col items-center gap-20">
        <div className="max-w-[754px]">
          <Text
            variant={"section_title_normal"}
            className="text-neutral text-center"
          >
            “Lorem ipsum dolor sit amet consectetur. Laoreet libero tincidunt
            neque tellus semper morbi”
          </Text>
        </div>
        <div className="flex items-center gap-16 justify-center flex-wrap">
          <Image src={MondayImg} alt="Monday" />
          <Image src={JiraImg} alt="Monday" />
          <Image src={WebFlowImg} alt="Monday" />
          <Image src={MondayImg} alt="Monday" />
          <Image src={AirBnb} alt="Monday" />
        </div>
      </div>
    </Section>
  );
};

const ServiceSection = () => {
  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Text variant={"section_title_normal"}>Services</Text>
          <Text variant={"body"}>
            Lorem ipsum dolor sit amet consectetur. Quisque non id in sit
            suscipit pellentesque condimentum lorem purus.
          </Text>
        </div>
        <div className="grid grid-cols-3 gap-x-8">
          <div
            className="bg-white border-1 border-transparent px-8 py-12 h-[360px] group"
            style={{
              backgroundImage: `linear-gradient(#0000001A, #0000001A), url(${ServiceImg1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col gap-5">
              <Text
                variant={"card_title_large"}
                className="text-white pb-[2px] max-w-fit border-b border-[#00DBCE]"
              >
                Sales
              </Text>
              <Text
                variant={"body"}
                className="text-white hidden group-hover:flex"
              >
                We place multiple bets and explore potential sources of revenue
                from a variety of angles.
              </Text>
            </div>
          </div>
          <div
            className="bg-white border-1 border-transparent px-8 py-12 h-[360px] group"
            style={{
              backgroundImage: `linear-gradient(#0000001A, #0000001A), url(${ServiceImg2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundImage = `linear-gradient(#0000004D, #0000004D), url(${ServiceImg2.src})`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundImage = `linear-gradient(#0000001A, #0000001A), url(${ServiceImg2.src})`;
            }}
          >
            <div className="flex flex-col gap-5">
              <Text
                variant={"card_title_large"}
                className="text-white pb-[2px] max-w-fit border-b border-[#00DBCE]"
              >
                Lettings
              </Text>
              <Text
                variant={"body"}
                className="text-white hidden group-hover:flex"
              >
                We place multiple bets and explore potential sources of revenue
                from a variety of angles.
              </Text>
            </div>
          </div>
          <div
            className="bg-white border-1 border-transparent px-8 py-12 h-[360px] group"
            style={{
              backgroundImage: `linear-gradient(#0000001A, #0000001A), url(${ServiceImg3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col gap-5">
              <Text
                variant={"card_title_large"}
                className="text-white pb-[2px] max-w-fit border-b border-[#00DBCE]"
              >
                International
              </Text>
              <Text
                variant={"body"}
                className="text-white hidden group-hover:flex"
              >
                We place multiple bets and explore potential sources of revenue
                from a variety of angles.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const propertiesData = [
  {
    title: "Properties in London",
    locations: [
      "Knightsbridge",
      "South Kensington",
      "Belgravia",
      "Mayfair",
      "Marylebone / Regents Park",
      "Primrose Hill",
      "Richmond",
      "St Johns Wood",
    ],
  },
  {
    title: "Properties in Buckinghamshire",
    locations: [
      "Beaconsfield",
      "Chalfont St Giles",
      "Chalfont St Peter",
      "Gerrards Cross",
      "Marlow",
      "Rickmansworth",
      "Virginia Water",
    ],
  },
  {
    title: "Property Types",
    locations: [
      "Houses for sale",
      "Apartments for sale",
      "Bungalows for sale",
      "Penthouses for sale",
      "Land for sale",
      "Country Homes for sale",
      "Townhouses for sale",
      "Villas for sale",
      "Estates for sale",
    ],
  },
  {
    title: "Popular Searches",
    locations: [
      "Luxury / Penthouse",
      "Ocean view properties",
      "Waterfront properties",
      "Mountain views",
      "Rural / Country Estate",
      "City Pad",
      "Winter chalet",
      "New Developments",
      "Sustainable Homes",
    ],
  },
];

const RegionAreaSection = () => {
  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <Text variant={"section_title_normal"}>Services</Text>
            <Icon name="keyboard_arrow_down" className="text-[24px]" />
          </div>
          <Text variant={"body"}>
            Real estate for sale: luxury mansions, modern homes and country
            estates
          </Text>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {propertiesData.map((item, index) => (
            <PropertiesRegionAndTypeCol
              title={item.title}
              location={item.locations}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
const FeaturedSection = () => {
  return (
    <Section bgColor="white" className="!pt-0">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <Text variant={"section_title_normal"}>Featured Properties</Text>
          </div>
          <Text variant={"body"}>
            Lorem ipsum dolor sit amet consectetur. Quisque non id in sit
            suscipit pellentesque condimentum lorem purus.
          </Text>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-5 justify-between bg-[#F2F4FA] p-8">
            <div className="flex flex-col gap-5">
              <Text variant={"card_title_large"}>The Luxurist</Text>
              <Text variant={"small_heading"}>Abu Dhabi, UAE</Text>
              <Text variant={"body"}>
                Lorem ipsum dolor sit amet consectetur. Quisque non id in sit
                suscipit pellentesque condimentum lorem purus. Purus nibh
                gravida faucibus ante sed nulla. Mauris massa turpis cursus sit.
                Egestas a consectetur erat iaculis donec adipiscing felis nulla.
                Feugiat egestas ut lacinia malesuada tortor. Sit nam gravida et
                odio odio cursus ligula aliquam quisque.
              </Text>
              <Text variant={"body"}>
                Sapien purus nibh malesuada aliquam tortor egestas tempus.
                Semper quisque nec pellentesque senectus diam blandit. Lobortis
                at aenean vestibulum id at sodales eu.
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
                  { value: "5", label: "Bedroom" },
                  { value: "5", label: "Bathrooms" },
                  { value: "5242", label: "Floor Plan" },
                  { value: "667m2", label: "Plot Size" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col gap-2.5">
                    <Text variant={"small"} className="font-bold">
                      {item.value}
                    </Text>
                    <Text variant={"small"} className="text-neutral">
                      {item.label}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Image src={FeaturedImg} alt="Featured Image" />
        </div>
      </div>
    </Section>
  );
};
const PropertiesRegionAndTypeCol = ({
  title,
  location,
}: {
  title: string;
  location: string[];
}) => {
  return (
    <div className="flex flex-col gap-8">
      <Text variant={"card_title_large"} className="text-neutral">
        {title}
      </Text>
      <div className="flex flex-col gap-5">
        {location.map((loc, index) => (
          <Text
            variant={"small"}
            className="text-neutral cursor-pointer hover:underline max-w-fit"
          >
            {" "}
            {loc}
          </Text>
        ))}
      </div>
    </div>
  );
};
