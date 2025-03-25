import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Text } from "./Text";
import Image from "next/image";
import { Button } from "./Button";
interface CarouselProps {
  sliders: {
    title: string;
    icon: string;
  }[];
}
export const Carousel: React.FC<CarouselProps> = ({ sliders }) => {
  return (
    <div className="overflow-hidden  sm:hidden flex bg-black  items-center justify-center flex-col">
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        freeMode={true}
        centeredSlides={true}
        // breakpoints={{
        //   768: {
        //     slidesPerView: 4,
        //   },
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {sliders &&
          sliders.length > 0 &&
          sliders.map((slider, i) => (
            <SwiperSlide key={i} className="w-[180px]">
              <div className="flex min-h-[185px] flex-col items-center text-center justify-between rgb-border w-auto bg-clip-border px-5 py-5 rounded-[20px]">
                <Text
                  className="mb-[25px]"
                  size="body_1"
                  color="white"
                  weight="bold"
                >
                  {slider.title}
                </Text>
                <div className="flex h-[50px] items-center justify-center">
                  <Image
                    className=""
                    src={slider.icon}
                    width={50}
                    height={50}
                    alt={slider.title}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Image
        className="my-[15px]"
        src="/arrow.png"
        width={50}
        height={50}
        alt="Diamond"
      />
      <Button label="BRAND EQUITY" size="small" primary />
    </div>
  );
};
