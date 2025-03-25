import React from "react";
import { Body, Text } from "./Text";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";
interface BulletTextProps {
  pointList?: string[];
  styleType?: "bullet" | "box" | "arrow";
  dark?: boolean;
  fontSize?: string;
}
const BulletText: React.FC<BulletTextProps> = ({
  dark,
  pointList,
  styleType,
  fontSize,
}) => {
  const pointListDemo = pointList
    ? pointList
    : [
        "Short, sharp discrete pieces of work",
        "Urgent people issues",
        "Longer-term strategic organisational work that has critical impact",
        "Sector specific projects. which are strategic in nature. Collaborating with our partner and subject matter experts.",
      ];
  return (
    <>
      {styleType === "arrow" ? (
        <ul className="flex flex-col gap-2.5">
          {pointListDemo.map((point, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <div className="h-7 flex items-center">
                <Icon
                  name="east"
                  className={cn(dark ? "text-white" : "text-neutralDark")}
                />
              </div>
              <Body
                className={cn(fontSize)}
                color={cn(dark ? "white" : "neutralDark")}
                nospace
              >
                {point}
              </Body>
            </li>
          ))}
        </ul>
      ) : styleType === "box" ? (
        <ul className="flex flex-col gap-2.5">
          {pointListDemo.map((point, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <div className="min-h-[28px] min-w-[20px] flex items-center justify-center">
                <div
                  className={cn(
                    "min-h-[10px] min-w-[10px] bg-primary",
                    dark ? "bg-white" : "bg-primary"
                  )}
                ></div>
              </div>
              <Body
                className={cn(
                  fontSize,
                  dark ? "text-white" : "text-neutralDark"
                )}
                color={dark ? "white" : "neutralDark"}
                nospace
              >
                {point}
              </Body>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="pl-4 list-disc">
          {pointListDemo.map((point, index) => (
            <li
              className={cn(
                "!text-body_1 leading-[28px]",
                dark ? "text-white" : "text-neutralDark"
              )}
              key={index}
            >
              <Body
                className={cn(
                  fontSize,
                  "leading-[28px]",
                  dark ? "text-white" : "text-neutralDark"
                )}
                color={dark ? "white" : "neutralDark"}
                nospace
              >
                {point}
              </Body>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BulletText;
