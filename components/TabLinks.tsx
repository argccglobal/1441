import React from "react";
import { Text, textVariants } from "./ui/Text";
import { cn } from "@/utils/classNames";
import NextLink from "next/link";
const TabLinks = () => {
  const className = "bg-properties bg-team bg-contact bg-services";
  const tabs = ["properties", "team", "services", "contact Us"];

  return (
    <div className="grid grid-cols-4 items-center">
      {tabs.map((tab) => (
        <Link key={tab} name={tab} />
      ))}
    </div>
  );
};

interface LinkProps {
  name: string;
}

const Link = ({ name }: LinkProps) => {
  return (
    <NextLink
      href={`/${name}`}
      className={`bg-${name} py-2 flex justify-center `}
    >
      <span
        className={cn(
          "capitalize",
          textVariants({
            variant: "card_title_small",
          })
        )}
      >
        {name}
      </span>
    </NextLink>
  );
};

export default TabLinks;
