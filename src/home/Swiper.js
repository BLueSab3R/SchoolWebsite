import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import style from './Home.module.scss'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

// import required modules

export default function App() {
  const slides = [
    { image: '/slider/1.jpg' },
    { image: '/slider/2.jpg' },
    { image: '/slider/3.jpg' },
    { image: '/slider/4.jpg' },
    { image: '/slider/5.jpg' },
    { image: '/slider/6.jpg' },
    { image: '/slider/7.jpg' },
    { image: '/slider/8.jpg' },
    { image: '/slider/9.jpg' },
    { image: '/slider/10.jpg' },
  ];
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);


  const handleSlideChange = () => {
    if (swiper) { setActiveIndex(swiper.realIndex) };
  }
  return (
    <div className={style.container}>
      <>
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={handleSlideChange}
          spaceBetween={0}
          slidesPerView = {1}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
          className={style.mySwiper}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={`Slide${index + 1}`}></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>

  );
}