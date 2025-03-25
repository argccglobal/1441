// components/Menu.tsx
import React, { useState } from "react";
import { Text } from "./Text";
import Image from "next/image";
import { Slider } from "./Slider";
import { SwiperSlide } from "swiper/react";
interface Tools {
  name: string;
  images: string[];
}
interface Content {
  title: string;
  color?: string;
  body: string;
  list: string[];
  // tools: Tools;
}
interface Item {
  title: string;
  content: Content;
}
interface TabProps {
  items: Item[];
}
{
  /* 
Ac quam non mattis pellentesque aliquam sollicitudin tortor. Rutrum morbi sit proin aliquet quis dignissim ut.
Mattis vulputate pellentesque platea eget.
Posuere eget mauris eget amet arcu vitae lectus egestas. Tortor hendrerit ut blandit faucibus in. Volutpat porttitor iaculis cursus nibh
 Arcu sed augue in elit felis lacus.
Quam libero pulvinar metus leo non est dictum sapien. */
}

const pointer = [
  "Elit purus tristique dignissim cursus nulla.",
  "Ac quam non mattis pellentesque aliquam sollicitudin tortor.Rutrum morbi sit proin aliquet quis dignissim ut.",
  "Mattis vulputate pellentesque platea eget.",
  "Posuere eget mauris eget amet arcu vitae lectus egestas.Tortor hendrerit ut blandit faucibus in.Volutpat porttitor iaculis cursus nibh.",
  "Arcu sed augue in elit felis lacus.",
  "Quam libero pulvinar metus leo non est dictum sapien.",
];
export const StrategyTab: React.FC<TabProps> = ({ items }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(0);
  const [activeItems, setActiveItems] = useState(items[0]);
  const handleMenuClick = (index: number, item: Item) => {
    if (activeMenuIndex === index) return null;
    setActiveItems(item);
    setActiveMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const colors = ["#ca4efe", "#00ffb5", "#900fbc", "#1aa7ec", "#334aff"];
  return (
    <>
      <div className="tabSlider flex items-start w-full gap-4 md:gap-8 lg:gap-16 justify-between flex-wrap">
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
                      style={{ ["--bg-color" as any]: "#09F8E7" }}
                      className={`tab group text-center h-[100px] md:h-[106px] w-[208px] cursor-pointer  z-10 hover:text-white text-white flex-1  items-center justify-center hover:before:transition-all  transition-width duration-300 relative hover:before:h-full before:absolute before:content-start before:left-0 before:top-0 before:w-full p-4 md:p-8 flex gap-8 md:gap-5 bg-transparent before:bg-${"#00ffb5"} ${
                        activeMenuIndex === index
                          ? "before:h-full"
                          : "before:h-[14px]"
                      }`}
                    >
                      <Text
                        size="h6"
                        tag="h6"
                        weight="medium"
                        className="z-40 group-hover:text-neutralDark"
                        color={
                          activeMenuIndex === index ? "neutralDark" : "white"
                        }
                      >
                        {item.title}
                      </Text>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
        </Slider>
        {items.map((item: Item, index) => {
          // Return is active items and item title is equal
          if (activeItems.title === item.title) {
            return (
              <div
                key={index}
                className="px-5 sm:p-0 w-full order-last flex gap-4 flex-wrap items-start justify-between"
              >
                <div className="w-full">
                  <div className="flex w-fit gap-[6px] mb-8 flex-col">
                    <Text weight="bold" tag="h5" color="white">
                      {activeItems.title}
                    </Text>
                    <div
                      style={{
                        backgroundColor:
                          activeMenuIndex != null ? "#09F8E7" : "",
                      }}
                      className={`tab-title-border h-[6px] w-auto`}
                    ></div>
                  </div>
                  <Text
                    className="mb-5"
                    size="body_1"
                    weight="light"
                    color="white"
                  >
                    {item.content.body}
                  </Text>

                  <ul className=" ">
                    {item.content.list.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=" text-white flex items-start"
                        >
                          <span className="m-2.5 h-[3px] w-[3px] rounded-full bg-white"></span>
                          <Text size="body_1" weight="light" color="white">
                            {item}
                          </Text>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

// pages/index.tsx
