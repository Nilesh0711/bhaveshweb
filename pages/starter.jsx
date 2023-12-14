import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper";

const Starter = () => {
  return (
    <div>
      <Head>
        <title>
          IIT Madras - Bhavesh Gupta | Prime Minister Research Fellow | IIT Madras
        </title>
        <meta name="description" content="Center for Quantum Information, Communication and Computing | Department of Physics | Prime Minister Research Fellow" />
        <meta name="keywords" content="Quantum" />
        <meta name="keywords" content="PMRF" />
        <meta name="keywords" content="IIT Madras" />
        <meta name="keywords" content="CQuICC" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
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
              alt="image"
              className="object-cover w-full h-screen object-center bg-center bg-cover"
              src="/img/slider/pic_1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="image"
              className="object-cover w-full h-screen object-center bg-center bg-cover"
              src="/img/slider/pic_2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="image"
              className="object-cover w-full h-screen object-center bg-center bg-cover"
              src="/img/slider/pic_3.jpg"
            />
          </SwiperSlide>
        </Swiper>

        <div className="absolute flex-col items-center flex text-white opacity-80 w-full z-50">
          <h1 className="text-2xl font-light mt-6">PMRF RESEARCH SCHOLOR</h1>
          <div className="text-xl font-light mt-6">( PMRF ID : 2502421 )</div>
        </div>

        <div className="absolute flex-col items-center flex text-white w-full z-10 h-full justify-center">
          <div className="text-2xl md:text-8xl">Bhavesh Gupta</div>
          <div className="mt-12">
            <Link href="/home">
              <button
                type="button"
                className="text-white opacity-80 hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-light text-lg px-5 py-2.5 text-center mr-2 mb-2"
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
