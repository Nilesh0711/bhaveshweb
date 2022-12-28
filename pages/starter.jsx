import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

const Starter = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
        <Link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
      </Head>
      <SliderImage />
    </div>
  );
};

const SliderImage = () => {
  return (
    <>
      <div className="slider w-full h-screen flex flex-col">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="object-cover object-center"
              src="/img/slider/pic_1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover object-center"
              src="/img/slider/pic_2.jpg"
            />
          </SwiperSlide>
        </Swiper>

        <div className="absolute flex-col items-center flex text-white w-full z-50">
          <div className="text-2xl font-light mt-6">
            PMRF Research Scholor, IIT Madras
          </div>
        </div>

        <div className="absolute flex-col items-center flex text-white w-full z-50 h-1/2 justify-center">
          <div className="text-6xl">Bhavesh Gupta</div>

          <div className="mt-12">
            <Link href="/home">
              <button
                type="button"
                class="text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-light text-lg px-5 py-2.5 text-center mr-2 mb-2"
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
