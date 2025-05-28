import React from "react";
import { Text } from "../ui/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Property from "../card/Property";
import { Icon } from "../ui/Icon";
import { cn } from "@/utils/classNames";

const SimilarProduct = () => {
  const swiperRef = React.useRef<any>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex flex-col">
      <Text variant={"section_title_normal"}>Similar Properties</Text>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-end gap-5">
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className={cn(
              "flex cursor-pointer items-center justify-center h-8 w-8 border border-neutralDark",
              isBeginning ? "opacity-50 cursor-not-allowed" : ""
            )}
          >
            <Icon name="west" className="text-[16px] text-neutralDark" />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className={cn(
              "flex cursor-pointer items-center rotate-180 justify-center h-8 w-8 border border-neutralDark",
              isEnd ? "opacity-50 cursor-not-allowed" : ""
            )}
            // className="flex cursor-pointer items-center justify-center h-8 w-8 border border-neutralDark"
          >
            <Icon name="west" className="text-[16px] text-neutralDark" />
          </div>
        </div>
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            className=" h-full"
            spaceBetween={32}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            <SwiperSlide>
              <div className="w-full">
                <Property />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <Property />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <Property />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
