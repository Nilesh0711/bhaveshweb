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
        <title>Bhavesh Gupta | Prime Minister Research Fellow | Department of Physics | IIT Madras</title>
        <meta name="description" content="CQuICC | Center for Quantum Information, Communication and Computing | Department of Physics | IIT Madras | Prime Minister Research Fellow" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <SliderImage />
    </div>
  );
};

// export const metadata: Metadata = {
//   title: {
//     default : "International Conference on Quantum Communication, Measurement and Computing, 26-30 August 2024, Chennai",
//     template: '%s | International Conference on Quantum Communication, Measurement and Computing, 26-30 August 2024, Chennai'
//   },
//   description:
//     "International Conference | IIT Madras | Quantum Communications and Quantum Cryptography | Quantum Sensing and Quantum Metrology | Quantum Computing and Quantum Simulation | Quantum Networks | Quantum Information Theory | Quantum Control and Quantum Engineering | Foundations of Quantum Physics",
//   icons: {
//     icon: ["/favicon.ico?v=1"],
//     apple: ["/apple-touch-icon.png?v=4"],
//     shortcut: ["/apple-touch-icon.png"],
//   },
//   manifest: "/site.webmanifest",
// };

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
          <div className="text-xl font-light mt-6">
          ( PMRF ID : 2502421 )
          </div>
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
