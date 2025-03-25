import { useState } from "react";
import { cn } from "../../lib/utils";
import { Text } from "./Text";

const menuDemo = [
  {
    id: 1,
    title: "Popular Search",
    active: true,
  },
  {
    id: "all_published_jobs_count",
    title: "All Vacancies",
    active: false,
  },
  {
    id: "contract_work_jobs_count",
    title: "Contract Work",
    active: false,
  },
  {
    id: "freelance_or_remote_jobs_count",
    title: "Freelance/Remote",
    active: false,
  },
  {
    id: "uae_jobs_count",
    title: "UAE Jobs",
    active: false,
  },
  {
    id: "london_jobs_count",
    title: "Jobs in London",
    active: false,
  },
  {
    id: "bd_jobs_count",
    title: "Jobs in Bangladesh",
    active: false,
  },
];
interface SideBarMenuProps {
  menu?: any;
}
export const SideBarMenu: React.FC<SideBarMenuProps> = ({
  menu = menuDemo,
}) => {
  const [TabItem, setTabItem] = useState([menu]);
  const changeTab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const newTabItem = TabItem.map((item) => {
      if (item.title === e.currentTarget.innerText) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setTabItem(newTabItem);
  };
  return (
    <div className="w-full flex flex-col ">
      <div
        className={cn(
          "bg-primary text-white !border-t",
          "flex border border-t-0 border-primary group/tab flex-col py-[30px] px-8 cursor-pointer items-center justify-center"
        )}
      >
        <Text
          className={cn("text-white", "leading-none ")}
          tag="h6"
          size="h6"
          weight="regular"
          color="neutralDark"
        >
          Category
        </Text>
      </div>
      {TabItem.map((item, index) => (
        <div
          key={item.id}
          onClick={changeTab}
          className={cn(
            item.active
              ? "bg-productLicensing-50 "
              : "bg-white hover:bg-productLicensing-50 ",
            index == 0 ? "!border-t" : "",
            "flex border border-t-0 border-primary group/tab flex-col py-[30px] px-8 cursor-pointer items-center justify-center"
          )}
        >
          <Text
            className={cn(
              item.active ? "text-primary " : "group-hover/tab:text-primary",
              "leading-none "
            )}
            tag="h6"
            size="h6"
            weight="regular"
            color="neutralDark"
          >
            {item.title}
          </Text>
        </div>
      ))}
    </div>
  );
};
