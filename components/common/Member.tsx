import React from "react";
import TeamMbrImg from "@/public/team_member.png";
import Image from "next/image";
import { Text } from "../ui/Text";
import { Icon } from "../ui/Icon";
const Member = () => {
  return (
    <div className="flex flex-col gap-5">
      <Image src={TeamMbrImg} alt="Team Member" />
      <div className="flex items-center justify-between gap-5">
        <Text className="flex-auto" variant={"card_title_small"}>
          Sultan Almansoori
        </Text>{" "}
        <div className="flex items-center gap-5">
          <Icon name="call" className="text-[20px]" />
          <Icon name="email" className="text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Member;
