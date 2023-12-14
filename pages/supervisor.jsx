import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ImageLoader from "../components/imageLoader";

const Supervisor = () => {
  return (
    <div>
      <Head>
        <title>
          Supervisor - Bhavesh Gupta | Prime Minister Research Fellow | IIT Madras</title>
          <meta name="description" content="Center for Quantum Information, Communication and Computing | Department of Physics | Prime Minister Research Fellow" />
        <meta name="keywords" content="Quantum" />
        <meta name="keywords" content="PMRF" />
        <meta name="keywords" content="IIT Madras" />
        <meta name="keywords" content="CQuICC" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar supervisor={"font-bold text-blue-500"} />
      <main className="gradient-bg-services">
        <div className="flex flex-col px-6 md:w-4/5 py-12 m-auto">
          <h1 className="font-extrabold text-xl md:text-4xl text-black">
            Supervisor
          </h1>
          <div className="info md:mt-20 mt-5">
            <div className="md:text-lg text-black md:w-1/2">
              I am being supervised by <strong>Dr. Prabha Mandayam </strong> at
              IITM. Links to her web pages are given herein.
            </div>
            <div className="supervisors "></div>
          </div>
        </div>
      </main>
      <div>
        <Supervisor1 />
      </div>
      <div className="pt-32 gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

const Supervisor1 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:mt-24 mt-10 md:flex-row flex-col items-center">
          <div className="md:w-1/4 md:h-1/3">
            <ImageLoader
              mainImageSrc={"/img/supervisor/sup1.jpg"}
              altImageSrc={"/img/loading.jpg"}
              altText={"image"}
              classValue={"object-cover object-center rounded-md w-72 h-72"}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center mt-5">
            <div className="title-font text-xl md:text-3xl mb-4 font-medium text-black">
              Dr. Prabha Mandayam {"(Associate Professor)"}
              <div className="mt-3 text-lg md:text-lg text-gray-600">
                Department of Physics, IITM
              </div>
            </div>
            <p className="mb-8 leading-relaxed text-lg text-gray-600">
              Research interests are in the area of quantum computing and
              quantum information theory. In particular, interested in quantum
              error correction, understanding the interplay between quantum
              foundations and quantum cryptography, and, using quantum
              information as a tool to explore fundamental questions in
              theoretical physics.
            </p>
            <div className="flex justify-center">
              <Link href={"https://physics.iitm.ac.in/~prabhamd/index.html"}>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit website
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Supervisor;
