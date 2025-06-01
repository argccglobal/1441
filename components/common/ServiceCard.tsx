import Image from "next/image";
import React from "react";
import { Text } from "../ui/Text";
import ServiceImg from "@/public/service.png";

const ServiceCard = ({ service }: { service: any }) => {
  return (
    <div className="flex flex-col gap-5">
      <Image src={service.image} width={260} height={160} alt="Service" />
      <Text variant={"body"} className="!font-normal">
        {service.title}
      </Text>
    </div>
  );
};

export default ServiceCard;
