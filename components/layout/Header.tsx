import React from "react";
import AnnouncementBar from "./AnnouncementBar";
import { Icon } from "../ui/Icon";
import Image from "next/image";
import LogoImg from "@/public/logo.svg";
import { Text } from "../ui/Text";
const Header = () => {
  return (
    <div>
      <AnnouncementBar />
      <div className="container">
        <div className="grid grid-cols-3 items-center gap-5 justify-between h-[60px] bg-white">
          <div className="flex items-center gap-8">
            <Icon name="menu" className="text-[24px]" />
            <Icon name="search" className="text-[24px]" />
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <Image src={LogoImg} alt="Logo" />
            <Text variant={"small"}>Properties & Investments</Text>
          </div>
          <div className="flex justify-end">
            <Icon name="Person" className="text-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
