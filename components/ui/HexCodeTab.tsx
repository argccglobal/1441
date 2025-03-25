// components/Menu.tsx
import React, { useState } from "react";
import { Body, CardTitle, SectionTitle, SmallText, Text } from "./Text";
import { Slider } from "./Slider";
import { SwiperSlide } from "swiper/react";
import { Content } from "next/font/google";
import Section from "../common/Section";
import Image from "next/image";
interface Tools {
  name: string;
  images: string[];
}
interface Content {
  title: string;
  color?: string;
  body: string;
  list: string[];
  tools: Tools;
}
interface Item {
  title: string;
  content?: Content;
  children: React.ReactNode;
}
interface HexCodeTabProps {
  items: Item[];
}
interface DataItemType {
  title: string;
  content: string;
}
export const HexCodeTab: React.FC<HexCodeTabProps> = ({ items }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(0);
  const [activeItems, setActiveItems] = useState(items[0]);
  const handleMenuClick = (index: number, item: Item) => {
    if (activeMenuIndex === index) return null;
    setActiveItems(item);
    setActiveMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // let items = [
  //   "Elit purus tristique dignissim cursus nulla."
  //   "Ac quam non mattis pellentesque aliquam sollicitudin tortor. Rutrum morbi sit proin aliquet quis dignissim ut."
  //   "Mattis vulputate pellentesque platea eget."
  //   "Posuere eget mauris eget amet arcu vitae lectus egestas. Tortor hendrerit ut blandit faucibus in. Volutpat porttitor iaculis cursus nibh"
  //   " Arcu sed augue in elit felis lacus."
  //   "Quam libero pulvinar metus leo non est dictum sapien."
  // ]
  const colors = ["#ca4efe", "#00ffb5", "#900fbc", "#887BFF", "#334AFF"];

  return (
    <>
      <div className="hexCabSlider flex items-start w-full gap-8 sm:gap-12 md:gap-16 justify-between flex-wrap">
        <Slider>
          {items &&
            items.map((item, index) => {
              return (
                <>
                  <SwiperSlide
                    className="pl-5 sm:pl-0"
                    key={index}
                    onClick={() => handleMenuClick(index, item)}
                  >
                    <div
                      style={{ ["--bg-color" as any]: colors[index] }}
                      className={`tab text-center h-[100px] md:h-[106px] w-[208px] cursor-pointer z-10 hover:text-white text-white flex-1  items-center justify-center hover:before:transition-all  transition-width duration-300 relative hover:before:h-full before:absolute before:content-start before:left-0 before:top-0 before:w-full p-4 md:p-8 flex gap-8 md:gap-5 bg-transparent before:bg-${
                        colors[index]
                      } ${
                        activeMenuIndex === index
                          ? "before:h-full"
                          : "before:h-[14px]"
                      }`}
                    >
                      <Text
                        size="h6"
                        tag="h6"
                        weight="medium"
                        className="z-40"
                        color="white"
                      >
                        {item.title}
                      </Text>
                    </div>
                  </SwiperSlide>
                  {}
                </>
              );
            })}
        </Slider>
        {activeItems.children}
      </div>
    </>
  );
};

// pages/index.tsx
