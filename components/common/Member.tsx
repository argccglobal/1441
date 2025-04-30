import React from "react";
import TeamMbrImg from "@/public/team_member.png";
import Image from "next/image";
import { Text } from "../ui/Text";
import { Icon } from "../ui/Icon";
import MemberDetailsOffcanvas from "../OffCanvas/MemberDetailsOffCanvas";
import Overlay from "./Overlay";
import { useMemberDetailsOffcanvas } from "@/store/memberDetailsOffcanvas";
const Member = () => {
  const { isOpenCanvas, closeCanvas, openCanvas } = useMemberDetailsOffcanvas();
  return (
    <>
      <div className="flex flex-col gap-5">
        <Image className="w-full" src={TeamMbrImg} alt="Team Member" />
        <div className="flex items-center justify-between gap-5">
          <Text
            onClick={() => openCanvas()}
            className="flex-auto cursor-pointer"
            variant={"card_title_small"}
          >
            Sultan Almansoori
          </Text>{" "}
          <div className="flex items-center gap-5">
            <Icon name="call" className="text-[20px]" />
            <Icon name="email" className="text-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
