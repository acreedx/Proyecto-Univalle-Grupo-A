"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface SwiperComponentProps {
  slides: string[];
  description: string[];
}
const SwiperComponent: FC<SwiperComponentProps> = ({ slides, description }) => {
  return (
    <div className="bg-gray-700 p-10 rounded-3xl shadow-2xl pb-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="drop-shadow-xl w-full object-contain h-80"
              />
              <h1 className="text-white text-xl font-bold text-center mt-6 px-24">
                {description[index]}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SwiperComponent;
