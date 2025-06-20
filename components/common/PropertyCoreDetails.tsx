import React from "react";
import { Text } from "../ui/Text";
import { Property } from "@/api/endpoints/properties";

const PropertyCoreDetails = ({ property }: { property?: Property }) => {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      {[
        { value: property?.features?.bedrooms || "-", label: "Bedroom" },
        { value: property?.features?.bathrooms || "-", label: "Bathrooms" },
        {
          value: property?.features?.floorPlanSize ? `${property?.features?.floorPlanSize}` : "-",
          label: "Floor Plan",
        },
        {
          value: property?.landSize && property?.landSizeUnit ? 
            `${property?.landSize} ${property?.landSizeUnit}` : "-",
          label: "Plot Size",
        },
      ].map((item, index) => (
        <div key={index} className="flex flex-col gap-2.5">
          <Text variant={"small"} className="font-bold">
            {item.value}
            {
              // Floor Plan
              item.label === "Floor Plan" && <sup>2</sup>
            }
          </Text>
          <Text variant={"small"} className="text-neutral">
            {item.label}{" "}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default PropertyCoreDetails;
