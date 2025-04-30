"use client";
import React, { useState } from "react";
import { Icon } from "./ui/Icon";
import { Text, textVariants } from "./ui/Text";
import { cn } from "@/utils/classNames";
import Overlay from "./common/Overlay";

const SideTabBtn = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  return (
    <>
      {activeTab && <Overlay setAction={setActiveTab} />}
      <div className="fixed z-[100] top-[40%] right-0 w-[52px] h-auto flex flex-col">
        {activeTab && (
          <div className="relative">
            <div className="absolute top-0 p-8 rounded-md rounded-tr-[0] right-0 transform -translate-x-[52px] min-w-[600px] h-[320px] bg-white flex flex-col gap-8">
              {activeTab === "concierge" && <ConciergeTab />}
              {activeTab === "ai" && <AiGenerator />}
              {activeTab === "r_key" && <RubyKey />}
            </div>
          </div>
        )}

        <div
          onClick={() => setActiveTab("concierge")}
          className="flex border-b border-white items-center justify-center py-5 bg-neutralDark hover:bg-neutral cursor-pointer"
        >
          <Icon name="room_service" className="text-[20px] text-white " />
        </div>
        <div
          onClick={() => setActiveTab("ai")}
          className="flex  border-b border-white items-center justify-center py-5 bg-neutralDark hover:bg-neutral cursor-pointer"
        >
          <Icon name="stars_2" className="text-[20px] text-white " />
        </div>
        <div
          onClick={() => setActiveTab("r_key")}
          className="flex items-center justify-center py-5 bg-neutralDark hover:bg-neutral cursor-pointer"
        >
          <Icon name="key" className="text-[20px] text-white " />
        </div>
      </div>
    </>
  );
};

const ConciergeTab = () => {
  return (
    <>
      <Text variant={"card_title_large"}>Concierge</Text>
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 9 }).map((_, index) => {
          return (
            <div className="flex items-center justify-start">
              <Text
                variant={"body"}
                className="underline cursor-pointer leading-none font-normal"
              >
                Option {index + 1}
              </Text>
            </div>
          );
        })}
      </div>
    </>
  );
};
const AiGenerator = () => {
  return (
    <>
      <div className="flex flex-col gap-2.5">
        <Text variant={"card_title_large"}>Hi, I’m Homer.</Text>
        <Text variant={"small"}>
          I’m your AI assistant. Please ask me anything
        </Text>
      </div>
      <div className="flex flex-col gap-2.5">
        <textarea
          className={cn(
            textVariants({
              variant: "placeholder",
            }),
            "w-full h-[120px] rounded-[20px] border border-border p-2.5"
          )}
          placeholder="Ask anything"
        ></textarea>
        <div className="flex items-center gap-1 flex-wrap">
          {["Sales", "Marketing", "Buy Property", "Investment", "Advisory"].map(
            (text) => (
              <button
                key={text}
                className="w-auto bg-[#E7E7E7] min-h-[18px] rounded-full px-2.5 py-1 gap-1.5 flex items-center"
              >
                <Icon name="diamond" className="text-[#1C1B1F] text-[10px]" />
                <Text variant={"small"}>{text}</Text>
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};
const RubyKey = () => {
  return (
    <>
      <Text variant={"card_title_large"}>Ruby Key</Text>
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 9 }).map((_, index) => {
          return (
            <div className="flex items-center justify-start">
              <Text
                variant={"body"}
                className="underline cursor-pointer leading-none font-normal"
              >
                Option {index + 1}
              </Text>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideTabBtn;
