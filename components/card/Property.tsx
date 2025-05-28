import React from "react";
import PropertyImg from "@/public/property_img.png";
import Image from "next/image";
import { Text } from "../ui/Text";
import { Divider } from "../ui/Divider";
import { Icon } from "../ui/Icon";
import UnlockAccessPopup from "../Modal/UnlockAccessPopup";
import { Property } from "@/api/endpoints/properties";
import { useRouter } from "next/navigation";
const Property = ({
  isBlur,
  property,
}: {
  isBlur?: boolean;
  property: Property;
}) => {
  const [isOpenUnlockModal, setIsOpenUnlockModal] = React.useState(false);
  const router = useRouter();
  return (
    <div
      className="flex relative flex-col gap-5"
      onClick={() => {
        if (isBlur) {
          setIsOpenUnlockModal(true);
        } else {
          // window.location.href = `/properties/${property.id}`;
          router.push(`/properties/${property._id}`);
        }
      }}
    >
      <UnlockAccessPopup
        isOpen={isOpenUnlockModal}
        closeModel={() => setIsOpenUnlockModal(false)}
      />
      <div className="absolute top-2.5 right-2.5 h-8 flex items-center justify-center w-8 rounded-full bg-[#EDFEFD]">
        <Icon name="bookmark_border" className="text-[20px]" />
      </div>
      <div className="absolute top-0 left-0 px-2.5 py-1 text-white bg-neutralDark">
        <Text variant={"button"} className="text-[12px] text-white">
          {property?.recentlySold
            ? "Recently Sold"
            : property?.featured
            ? "Featured"
            : property?.status}
        </Text>
      </div>
      {isBlur ? (
        <div
          onClick={() => setIsOpenUnlockModal(true)}
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
            src={
              property.media.featuredPhoto &&
              property.media.featuredPhoto.length > 0
                ? property.media.featuredPhoto[0]
                : PropertyImg.src
            }
            width={600}
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
              {/* For Sale House/ Villa, Abu Dhabi */}
              {property.propertyType && (
                <span className="text-neutralDark">
                  {property.propertyType} /
                </span>
              )}{" "}
              {property.location.city && (
                <span className="text-neutralDark">
                  {property.location.city}
                </span>
              )}{" "}
              {property.location.country && (
                <span className="text-neutralDark">
                  {property.location.country}
                </span>
              )}
            </Text>
            <Text variant={"card_title_large"} className="text-neutralDark">
              {property.currency} {property.price.toLocaleString()}
            </Text>
          </div>
          <Text variant={"small_heading"} className="text-neutralDark">
            {property.title}
          </Text>
        </div>
        <div className="border-t border-border" />
        <div className="flex items-center gap-8 flex-wrap">
          {[
            { value: property.features.bedrooms || "-", label: "Bedroom" },
            { value: property.features.bathrooms || "-", label: "Bathrooms" },
            {
              value: property.features.floorPlanSize || "-",
              label: "Floor Plan",
            },
            {
              value: property.landSizeAcres
                ? `${property.landSizeAcres} acres`
                : property.landSize
                ? `${property.landSize} ${property.landSizeUnit || "units"}`
                : "-",
              label: "Plot Size",
            },
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
