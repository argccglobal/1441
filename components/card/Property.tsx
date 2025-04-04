import React from "react";
import PropertyImg from "@/public/property_img.png";
import Image from "next/image";
import { Text } from "../ui/Text";
import { Divider } from "../ui/Divider";
import { Icon } from "../ui/Icon";
const Property = ({ isBlur }: { isBlur?: boolean }) => {
  return (
    <div className="flex relative flex-col gap-5">
      <div className="absolute top-2.5 right-2.5 h-8 flex items-center justify-center w-8 rounded-full bg-[#EDFEFD]">
        <Icon name="bookmark_border" className="text-[20px]" />
      </div>
      <div className="absolute top-0 left-0 px-2.5 py-1 text-white bg-neutralDark">
        <Text variant={"button"} className="text-[12px]">
          New Listing
        </Text>
      </div>
      {isBlur ? (
        <div
          className="h-[250px] flex justify-center items-center relative"
          style={{
            backgroundImage: `url(${PropertyImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(245,245,245,0.9)] to-[rgba(245,245,245,0.6)] backdrop-blur-[15px]" />
          <Text variant={"card_title_large"} className="relative z-10">
            Off Market
          </Text>
        </div>
      ) : (
        <div className="">
          <Image
            src={PropertyImg}
            alt="property"
            height={250}
            className="w-full object-cover max-h-[250px]"
          />
        </div>
      )}

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-[14px]">
          <div className="flex flex-col gap-2.5">
            <Text variant={"small_heading"} className="text-neutralDark">
              For Sale House/ Villa, Abu Dhabi
            </Text>
            <Text variant={"card_title_large"} className="text-neutralDark">
              $1,595,000
            </Text>
          </div>
          <Text variant={"small_heading"} className="text-neutralDark">
            The Grand Haven Estate
          </Text>
        </div>
        <div className="border-t border-border" />
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
  );
};

export default Property;
