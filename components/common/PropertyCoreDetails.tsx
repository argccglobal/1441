import React from "react";
import { Text } from "../ui/Text";

const PropertyCoreDetails = () => {
  return (
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
  );
};

export default PropertyCoreDetails;
