import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade,Autoplay } from "swiper";

const Starter = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SliderImage />
    </div>
  );
};

const SliderImage = () => {
  return (
    <>
      <div className="slider w-full h-full flex flex-col">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="object-cover w-full h-screen object-center bg-center bg-cover"
              src="/img/slider/pic_1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full h-screen object-center bg-center bg-cover"
              src="/img/slider/pic_2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full h-screen object-center bg-center bg-cover"
              src="/img/slider/pic_3.jpg"
            />
          </SwiperSlide>
        </Swiper>

        <div className="absolute flex-col items-center flex text-white opacity-80 w-full z-50">
          <div className="text-2xl font-light mt-6">
            PMRF RESEARCH SCHOLOR
          </div>
        </div>

        <div className="absolute flex-col items-center flex text-white w-full z-10 h-full justify-center">
          <div className="text-2xl md:text-8xl">Bhavesh Gupta</div>
          <div className="mt-12">
            <Link target="_blank" href="/home">
              <button
                type="button"
                className="text-white opacity-80 hover:text-white border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-light text-lg px-5 py-2.5 text-center mr-2 mb-2"
              >
                VIEW WORK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Starter;
