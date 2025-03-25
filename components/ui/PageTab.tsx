import { cn } from "../../lib/utils";
import { useState } from "react";

const tabsDummy = [
  {
    index: 0,
    label: "Our Capabilities1",
  },
  {
    index: 1,
    label: "Our Capabilities2",
  },
  {
    index: 2,
    label: "Our Capabilities3",
  },
  {
    index: 3,
    label: "Our Capabilities4",
  },
];

export const PageTab = ({ tabs = tabsDummy }: any) => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState({
    index: 0,
    label: tabs[0].label,
  });
  const toggleFixedMenu = (tab: any) => {
    console.log(tab);
    setActiveTab({
      index: tab.index,
      label: tab.label,
    });
    console.log("open", open);
    setOpen(!open);
  };
  return (
    <div
      className={cn(
        "fixed -rotate-90 right-0   top-1/3 transform -translate-y-full",
        "translate-x-[40%]"
      )}
    >
      <div className="relative">
        {open && (
          <div className="absolute -translate-y-[100%] transform">
            {tabs.map((tab: any, i: number) => (
              <button
                key={i}
                onClick={() =>
                  toggleFixedMenu({
                    index: i,
                    label: tab.label,
                  })
                }
                className={cn(
                  "py-4 z-10 border text-body_2 border-primary border-b-0 hover:text-white px-16 transform bg-transparent !text-primary ",
                  activeTab.index === i && "bg-primary !text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() =>
          toggleFixedMenu({
            index: activeTab.index,
            label: activeTab.label,
          })
        }
        className={cn(
          "py-4 z-10 border text-body_2 border-primary border-b-0 hover:text-white px-16 transform bg-transparent bg-primary !text-white"
        )}
      >
        {activeTab.label}
      </button>
    </div>
  );
};
