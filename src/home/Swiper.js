import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import style from './Home.module.scss'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, EffectFade, Pagination]);

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
  const [showInformation, setShowInformation] = useState(true);

  const handleSlideChange = () => {
    if (swiper) {
      setActiveIndex(swiper.realIndex);
      if (swiper.isEnd) {
        setTimeout(() => {
          swiper.slideTo(0, 500);
        }, 500);
      }
      setShowInformation(false);
      setTimeout(() => {
        setShowInformation(true);
      }, 300);
    }
  };

  return (
    <div className={style.container}>
      <Swiper
        loop={false}
        freeMode={false}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        spaceBetween={0}
        slidesPerView={1}
        effect='fade'
        autoplay={{
          delay: 4000,
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
            <img src={slide.image} alt={`Slide${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${style.information} ${showInformation ? style.show : style.hide}`}>
        {/* Content of the information element */}
      </div>
    </div>
  );
}
