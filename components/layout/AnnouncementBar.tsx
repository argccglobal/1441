import React from "react";
import { Text } from "../ui/Text";
import { Icon } from "../ui/Icon";

const AnnouncementBar = () => {
  return (
    <div className=" bg-[#F6F6F6]">
      {/* <Section bgColor=""> */}
      <div className="container">
        <div className="flex relative py-2.5 justify-center">
          <Text variant={"navbar_text"} className="">
            24/7 Customer Support
          </Text>
          <Icon
            name="close"
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      {/* </Section> */}
    </div>
  );
};

export default AnnouncementBar;
