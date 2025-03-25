// components/Menu.tsx
import React, { useEffect, useState } from "react";
import { CardTitle, Text } from "./Text";
import Image from "next/image";
import { Slider } from "./Slider";
import { SwiperSlide } from "swiper/react";
import { FILE_SERVER_BASE_URL } from "@/utils/apiConfig";
import { it } from "node:test";
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
  color_code: string;
  description: string;
  tools_title: string;
  tools_list: {
    list_title: string;
    icons: {
      icon_url: string;
      _id: string;
    }[];
    _id: string;
  }[];
  _id: string;
}
interface TabProps {
  items: {
    title: string;
    color_code: string;
    description: string;
    tools_title: string;
    tools_list: {
      list_title: string;
      icons: {
        icon_url: string;
        _id: string;
      }[];
      _id: string;
    }[];
    _id: string;
  }[];
}

export const Tab: React.FC<TabProps> = ({ items }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(0);
  const [activeItems, setActiveItems] = useState<Item>(items[0]);
  const handleMenuClick = (index: number, item: Item) => {
    if (activeMenuIndex === index) return null;
    setActiveItems(item);
    setActiveMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (items.length > 0) {
      setActiveItems(items[0]);
    }
    // setActiveItems(items[0]);
  }, [items]);

  const colors = ["#ca4efe", "#00ffb5", "#900fbc", "#1aa7ec", "#334aff"];

  return (
    <>
      <div className="tabSlider flex items-start w-full justify-between flex-wrap">
        <Slider>
          {items &&
            items.map(
              (
                item: {
                  title: string;
                  color_code: string;
                  description: string;
                  tools_title: string;
                  tools_list: {
                    list_title: string;
                    icons: {
                      icon_url: string;
                      _id: string;
                    }[];
                    _id: string;
                  }[];
                  _id: string;
                },
                index: number
              ) => {
                return (
                  <>
                    <SwiperSlide
                      className="pl-5 sm:pl-0"
                      key={index}
                      onClick={() => handleMenuClick(index, item)}
                    >
                      <div
                        style={{ ["--bg-color" as any]: item.color_code }}
                        className={`tab text-center h-[100px] md:h-[106px] w-[208px] cursor-pointer mb-12 lg:mb-16 z-10 hover:text-white text-white flex-1  items-center justify-center hover:before:transition-all  transition-width duration-300 relative hover:before:h-full before:absolute before:content-start before:left-0 before:top-0 before:w-full p-4 md:p-8 flex gap-8 md:gap-5 bg-transparent before:bg-[${
                          item.color_code
                        }] ${
                          activeMenuIndex === index
                            ? "before:h-full"
                            : "before:h-[14px]"
                        }`}
                      >
                        <CardTitle
                          nospace
                          CardType="large"
                          className="z-40"
                          color="white"
                        >
                          {item.title}
                        </CardTitle>
                      </div>
                    </SwiperSlide>
                    {}
                  </>
                );
              }
            )}
        </Slider>
        {activeItems && <ActiveItems activeItems={activeItems} />}
      </div>
    </>
  );
};

const ActiveItems = ({ activeItems }: { activeItems: Item }) => {
  const htmlContentToJson = (htmlContent: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const description = doc?.querySelector("p")?.innerText.trim();
    const listItems = Array.from(doc.querySelectorAll("li")).map((li) =>
      li.innerText.trim()
    );

    // Create JSON object
    const jsonData = {
      description: description,
      list_items: listItems,
    };
    console.log("jsonData", jsonData);
    return jsonData;
  };
  return (
    <div className="px-5 sm:p-0 w-full order-last flex gap-8 md:gap-4 flex-wrap items-start justify-between">
      <div className="max-w-[756px] w-full">
        <div className="flex w-fit gap-[6px] mb-8 flex-col">
          <Text weight="bold" tag="h5" color="white">
            {activeItems?.title}
          </Text>
          <div
            style={{
              backgroundColor: activeItems.color_code,
            }}
            className={`tab-title-border h-[6px] w-auto`}
          ></div>
        </div>
        <Text className="mb-5" size="body_1" weight="light" color="white">
          {htmlContentToJson(activeItems.description).description}
        </Text>

        <ul className=" ">
          {htmlContentToJson(activeItems.description).list_items.map(
            (item, index) => {
              return (
                <li key={index} className=" text-white flex items-start">
                  <span className="m-2.5 h-[3px] w-[3px] rounded-full bg-white"></span>
                  <Text size="body_1" weight="light" color="white">
                    {item}
                  </Text>
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className="max-w-[334px] w-full flex flex-col items-start gap-5">
        <Text size="h6" tag="h6" weight="medium" color="white">
          {activeItems.tools_title}
        </Text>
        {activeItems.tools_list.map((item, index) => {
          return (
            <div key={item._id} className="flex flex-col gap-5">
              <Text color="white" size="body_2" weight="regular">
                {item.list_title}
              </Text>
              <div className="flex items-start gap-5">
                {item.icons.map((icon, index) => {
                  return (
                    <Image
                      key={index}
                      alt="icon_logo"
                      src={FILE_SERVER_BASE_URL + "/" + icon.icon_url}
                      width={24}
                      height={24}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// pages/index.tsx
