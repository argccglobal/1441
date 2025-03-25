"use client";
import { LinkText } from "./ui/LinkText";
import { Button } from "./ui/Button";
import { Icon } from "../components/ui/Icon";
import { Text } from "./ui/Text";

interface CookiesProps {
  cookie: boolean;
  closeCookie: () => void;
  handleSIdebar: () => void;
  show: boolean;
  description: string;
  descriptionLinkText: string;
}

function Cookies({
  cookie,
  closeCookie,
  handleSIdebar,
  description,
  descriptionLinkText,
  show,
}: CookiesProps) {
  return (
    cookie == true && (
      <>
        <div className="w-screen relative bg-white">
          <div className=" py-5 ">
            <div className="container ">
              <div
                onClick={closeCookie}
                className="cursor-pointer absolute top-5 right-5"
              >
                <Icon name="close" className="text-black" />
              </div>
              <div className="flex gap-5 flex-wrap items-center">
                <div className="max-w-[800px]">
                  <Text variant={"small"} className="mb-5" color="neutral">
                    {description} {descriptionLinkText}
                  </Text>
                </div>
                <div className="flex w-full md:w-auto gap-2.5 sm:gap-5 flex-wrap justify-between items-center">
                  <div className="flex  sm:gap-5 w-full sm:w-auto justify-between sm:justify-normal lg:order-3">
                    <div onClick={closeCookie} className="">
                      <Button
                        className="px-[50px] sm:px-5 text-body_2 rounded-sm hover:bg-primary hover:text-white hover:border-primary"
                        size="small"
                        // primary
                        outline
                        label="Reject All"
                      />
                    </div>
                    <div onClick={closeCookie} className="">
                      <Button
                        className="px-[50px] bg-[#222222] !text-white sm:px-5 text-body_2 rounded-sm hover:bg-primary hover:text-white hover:border-primary"
                        size="small"
                        // primary
                        label="Accept All"
                      />
                    </div>
                  </div>
                  <div
                    className="cursor-pointer w-full flex justify-end sm:w-auto"
                    onClick={() => handleSIdebar()}
                  >
                    <LinkText
                      className=" !text-body_2"
                      type="text"
                      label="Manage settings"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Cookies;
