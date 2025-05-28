import React from "react";
import TeamMbrImg from "@/public/team_member.png";
import Image from "next/image";
import { Text } from "../ui/Text";
import { Icon } from "../ui/Icon";
import MemberDetailsOffcanvas from "../OffCanvas/MemberDetailsOffCanvas";
import Overlay from "./Overlay";
import { useMemberDetailsOffcanvas } from "@/store/memberDetailsOffcanvas";
import { Team } from "@/api/endpoints/teams";
const Member = ({ team }: { team: Team }) => {
  const { isOpenCanvas, closeCanvas, openCanvas, setSelectedMember } =
    useMemberDetailsOffcanvas();
  const openCanvasHandler = () => {
    setSelectedMember(team);
    openCanvas();
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        <Image
          className="w-full"
          // fill
          width={300}
          height={300}
          src={team.profileImage}
          alt="Team Member"
        />
        <div className="flex items-center justify-between gap-5">
          <Text
            onClick={() => openCanvasHandler()}
            className="flex-auto cursor-pointer"
            variant={"card_title_small"}
          >
            {team.name}
          </Text>{" "}
          <div className="flex items-center gap-5">
            <a href={`to:${team.phone}`}>
              <Icon name="call" className="text-[20px]" />
            </a>
            <a href={`mailto:${team.email}`}>
              <Icon name="email" className="text-[20px]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
