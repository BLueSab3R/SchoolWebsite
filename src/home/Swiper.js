import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="slider/1.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="slider/2.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="slider/3.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="slider/4.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="slider/5.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="slider/6.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="slider/7.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="slider/8.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="slider/9.jpg"></img></SwiperSlide>
      </Swiper>
    </>
  );
}