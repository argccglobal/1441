import React, { FC, use, useEffect, useState } from "react";
import Section from "../common/Section";
import Image from "next/image";
import { CardContainer } from "./Cards/Card";
import { Body, CardTitle } from "./Text";

interface TabProps {
  title: string;
  children: React.ReactNode;
}

interface TabSectionProps {
  tabs: TabProps[];
}

export const TabSection: FC<TabSectionProps> = ({ tabs }) => {
  const [tab, setTab] = useState("");
  console.log("tabs", tabs);
  useEffect(() => {
    if (tabs.length > 0) {
      setTab(tabs[0].title);
    }
    // setTab(tabs[0].title);
  }, [tabs]);
  return (
    <>
      <div className="flex mb-8  items-center flex-wrap gap-card-x-space">
        {tabs.map((tabItem, index) => (
          <>
            <CardTitle
              key={index}
              nospace
              CardType="large"
              className={`cursor-pointer border-b-2 border-transparent mb-1.5 ${
                tab.toLowerCase() === tabItem.title.toLowerCase()
                  ? " border-primary"
                  : ""
              }`}
              onClick={() => setTab(tabItem.title)}
            >
              {tabItem.title}
            </CardTitle>
          </>

          //   <div key={index}>{tabItem.children}</div>
        ))}
      </div>
      {tabs.map((tabItem, index) => (
        <>
          <div className="w-full" key={index}>
            <>{tabItem.title == tab ? tabItem.children : null}</>
          </div>
        </>

        //   <div key={index}>{tabItem.children}</div>
      ))}
    </>
  );
};
