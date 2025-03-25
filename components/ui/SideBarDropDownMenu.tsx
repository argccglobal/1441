import { cn } from "../../lib/utils";
import { FC, useState } from "react";
import { Text } from "./Text";
import { LinkText } from "./LinkText";
import { Icon } from "./Icon";

interface dropdownList {
  label: string;
  href: string;
  target?: string;
}
interface TabItem {
  id: string;
  tag?: string;
  title: string;
  active: boolean;
  dropdownList: dropdownList[];
}
export const SideBarDropDownMenu = ({
  type,
  TabItems,
}: {
  type: "dark" | "light";
  TabItems: TabItem[];
}) => {
  const [TabItem, setTabItem] = useState(TabItems);
  const changeTab = (index: number) => {
    let newTabItem = {
      ...TabItem[index],
      active: !TabItem[index].active,
    };
    const newItems = [...TabItem];
    newItems.splice(index, 1, newTabItem);
    console.log(newItems);
    setTabItem(newItems);
  };
  return (
    <>
      {type === "dark" ? (
        <div
          className={cn(
            "w-full flex flex-col ",
            type == "dark" && "bg-neutralDark"
          )}
        >
          {TabItem.map((item, index) => (
            <div
              key={item.id}
              onClick={() => changeTab(index)}
              className={cn(
                item.active
                  ? "bg-neutralDark text-white"
                  : "bg-white hover:bg-neutralDark ",
                index == 0 ? "!border-t" : "",
                type == "dark" && "bg-neutralDark hover:bg-neutral text-white",
                "flex border border-t-0 border-neutralDark group/tab flex-col py-[30px] px-8 cursor-pointer items-start justify-start"
              )}
            >
              <div className="flex prevent w-full justify-between gap-5">
                <div className="flex items-center gap-5">
                  <Text
                    className={cn(
                      "capitalize",
                      item.active
                        ? "text-white "
                        : "group-h over/tab:text-white",
                      "leading-none ",
                      type == "dark" && "text-white"
                    )}
                    tag="h6"
                    size="h6"
                    weight="regular"
                    color="neutralDark"
                    title={item.title}
                  >
                    {item.title}{" "}
                  </Text>
                  {item.tag && (
                    <span className="text-[8px] bg-primary rounded-full  py-[4px] px-[15px]">
                      {item.tag}
                    </span>
                  )}
                </div>
                <Icon
                  className={cn(
                    "transform group-hover/tab:text-white",
                    item.active ? "rotate-0" : "-rotate-90"
                  )}
                  name="keyboard_arrow_down"
                />
              </div>
              {item.active && (
                <div className="flex prevent mt-5 flex-col gap-5">
                  {item.dropdownList.map((item, index) => (
                    <LinkText
                      target={item.target}
                      key={index}
                      label={item.label}
                      href={item.href}
                      type="text"
                      className="underline cursor-pointer hover:text-primary text-white"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col ">
          {TabItem.map((item, index) => (
            <div
              key={item.id}
              onClick={() => changeTab(index)}
              className={cn(
                "capitalize",
                item.active
                  ? "bg-productLicensing-50 text-primary"
                  : "bg-white hover:bg-productLicensing-50 ",
                index == 0 ? "!border-t" : "",
                "flex border border-t-0 border-productLicensing-50 group/tab flex-col py-[30px] px-8 cursor-pointer items-start justify-start"
              )}
            >
              <div className="flex w-full justify-between gap-5">
                <Text
                  className={cn(
                    item.active
                      ? "text-primary "
                      : "group-hover/tab:text-primary",
                    "leading-none "
                  )}
                  tag="h6"
                  size="h6"
                  weight="regular"
                  color="neutralDark"
                  title={item.title}
                >
                  {item.title}
                </Text>
                <Icon
                  className={cn(
                    "transform",
                    item.active ? "rotate-0" : "-rotate-90"
                  )}
                  name="keyboard_arrow_down"
                />
              </div>
              {item.active && (
                <div className="flex prevent mt-5 flex-col gap-5">
                  <LinkText
                    label="Icon Text"
                    type="link"
                    className="underline text-primary"
                  />
                  <LinkText
                    label="Icon Text"
                    type="link"
                    className="underline text-primary"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
