import Image from "next/image";
import React from "react";
import { Text } from "../ui/Text";
import ServiceImg from "@/public/service.png";

const ServiceCard = () => {
  return (
    <div className="flex flex-col gap-5">
      <Image src={ServiceImg} alt="Service" />
      <Text variant={"body"} className="!font-normal">
        Estate Planning & Investments
      </Text>
    </div>
  );
};

export default ServiceCard;
