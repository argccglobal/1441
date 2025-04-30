"use client";
import React from "react";
import Modal from "./ModalWrapper";
import { Text, textVariants } from "../ui/Text";
import { cn } from "@/utils/classNames";
import { Input } from "../ui/Input";
import Link from "next/link";
import { Button } from "../ui/Button";
import OtpInput from "react-otp-input";

const UnlockAccessPopup = ({
  isOpen,
  closeModel,
}: {
  isOpen: boolean;
  closeModel: () => void;
}) => {
  const handleClose = () => {
    console.log("close");
  };
  const [activeTab, setActiveTab] = React.useState<string | null>("email");
  return (
    <Modal isOpen={isOpen} closeModel={closeModel}>
      <div className="w-[504px] min-h-[400px] flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <Text variant={"section_title_normal"}>Unlock Exclusive Access</Text>
          <Text variant={"small"} className="text-neutral">
            This property is only available to Ruby Key Holders. Sign in now to
            view the full details and explore exclusive listings.
          </Text>
        </div>
        <div className="flex items-center gap-8">
          <button
            onClick={() => setActiveTab("email")}
            className={cn(
              textVariants({
                variant: "button",
              }),
              "border-b-[2px] pb-2.5",
              activeTab === "email"
                ? "border-propertiesMain"
                : "border-transparent"
            )}
          >
            Sign in with email
          </button>
          <button
            onClick={() => setActiveTab("ruby")}
            className={cn(
              textVariants({
                variant: "button",
              }),
              "border-b-[2px] pb-2.5",
              activeTab === "ruby"
                ? "border-propertiesMain"
                : "border-transparent"
            )}
          >
            Access with ruby key
          </button>
        </div>

        {activeTab === "ruby" && <RubyKey />}

        {activeTab === "email" && <EmailLogin />}
      </div>
    </Modal>
  );
};
const EmailLogin = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Input type="text" id="name" name="email" placeholder="Email Address" />
        <Input type="password" id="name" name="email" placeholder="Password" />
        <Link
          href={"/"}
          className={cn(
            textVariants({
              variant: "button",
            }),
            "text-propertiesMain"
          )}
        >
          Forgot Password?
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5 flex-auto">
          <Text variant={"small"} className="text-neutral">
            Don’t have an account?
          </Text>
          <Link
            href={"/"}
            className={cn(
              textVariants({
                variant: "button",
              }),
              "text-propertiesMain"
            )}
          >
            Sign Up
          </Link>
        </div>
        <Button outline label="Sign In" size="small" />
      </div>
    </>
  );
};
const RubyKey = () => {
  const [verifyByCode, setVerifyByCode] = React.useState<boolean>(false);
  const [otp, setOtp] = React.useState<string>("");
  return (
    <div className="w-full h-full flex-auto flex flex-col gap-8 justify-between ">
      {verifyByCode ? (
        <>
          <div className="flex flex-col gap-8 items-center justify-center">
            <Text variant={"small"} className="text-neutral">
              Enter your 6 digit authentication number send to you email
              ra*********l@gmail.com
            </Text>
            <OtpInput
              value={otp}
              containerStyle={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
              }}
              onChange={setOtp}
              placeholder="-"
              numInputs={6}
              renderSeparator={<span></span>}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  className="px-2.5 py-2 !h-10 !w-10 rounded-sm flex text-center items-center border-border border outline-none focus:border-primary"
                />
              )}
            />
          </div>
          <div className="flex justify-end">
            <Button outline label="Sign In" size="small" />
          </div>
        </>
      ) : (
        <>
          <Input
            type="text"
            name="Ruby key number"
            id="ruby_key"
            placeholder="Ruby key number"
          />
          <div className="flex justify-end">
            <Button
              onClick={() => setVerifyByCode(true)}
              outline
              label="Continue"
              size="small"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UnlockAccessPopup;
