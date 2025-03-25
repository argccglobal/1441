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
  children: React.ReactNode;
  count?: number;
  centerSlider?: boolean;
}

export const Slider: React.FC<CarouselProps> = ({
  children,
  count,
  centerSlider = false,
}) => {
  return (
    <Swiper
      slidesPerView={count ? 3 : "auto"}
      spaceBetween={30}
      freeMode={true}
      centeredSlides={centerSlider}
      breakpoints={{
        768: {
          slidesPerView: count ? count : "auto",
        },
      }}
      loop
      modules={[FreeMode, Pagination]}
    >
      {children}
    </Swiper>
  );
};
