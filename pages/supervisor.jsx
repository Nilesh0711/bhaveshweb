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
          Supervisor - Bhavesh Gupta | Prime Minister Research Fellow | IIT
          Madras
        </title>
        <meta
          name="description"
          content="Center for Quantum Information, Communication and Computing | Department of Physics | Prime Minister Research Fellow"
        />
        <meta name="keywords" content="Quantum" />
        <meta name="keywords" content="PMRF" />
        <meta name="keywords" content="IIT Madras" />
        <meta name="keywords" content="CQuICC" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="flex flex-col px-6 md:w-4/5 py-12 m-auto">
          <h1 className="font-extrabold text-xl md:text-4xl text-black">
            Supervisor
          </h1>
          <div className="info md:mt-20 mt-5">
            <div className="md:text-lg text-black md:w-1/2">
              I am being supervised by <strong>Dr. Prabha Mandayam </strong> and
              co-supervised by <strong>Dr. Siddharth Dhomkar </strong> at IITM.
              Links to her web pages are given herein.
            </div>
            <div className="supervisors "></div>
          </div>
        </div>
      </main>
      

      <Supervisor1 />

      <div className="mt-6 h-[50px]"></div>

      <div className="bg-gray-600 w-[90%] h-[1px] mx-auto my-6"></div>

      <div className="mt-16"></div>

      <Supervisor2 />

      <div className="pt-32 gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

const Supervisor1 = () => {
  return (
    <>
      <div className="md:grid grid-cols-3 md:w-4/5 mx-auto">
        <section className="flex flex-col mx-auto md:order-last col-span-2 md:col-span-1">
          <ImageLoader
            mainImageSrc={"/img/supervisor/sup1.jpg"}
            altImageSrc={"/img/loading.jpg"}
            altText={"image"}
            classValue={"object-cover object-center rounded-md w-72 h-72"}
          />
        </section>
        <section className="flex flex-col md:m-auto col-span-2 px-5">
          <h1 className="font-bold text-2xl md:text-3xl text-black">
            Dr. Prabha Mandayam {"(Associate Professor)"}
          </h1>
          <div className="my-2 text-lg md:text-lg text-gray-600">
            Department of Physics, IITM
          </div>
          <p className="my-4 leading-relaxed text-lg text-gray-600">
            Research interests are in the area of quantum computing and quantum
            information theory. In particular, interested in quantum error
            correction, understanding the interplay between quantum foundations
            and quantum cryptography, and, using quantum information as a tool
            to explore fundamental questions in theoretical physics.
          </p>
          <div className="my-2 flex justify-start">
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
        </section>
      </div>
    </>
  );
};

const Supervisor2 = () => {
  return (
    <>
      <div className="md:grid grid-cols-3 md:w-4/5 mx-auto">
        <section className="flex flex-col mx-auto md:order-last col-span-2 md:col-span-1">
          <ImageLoader
            mainImageSrc={"/img/supervisor/sup2.jpg"}
            altImageSrc={"/img/loading.jpg"}
            altText={"image"}
            classValue={"object-cover object-center rounded-md w-72 h-72"}
          />
        </section>
        <section className="flex flex-col md:m-auto col-span-2 px-5">
          <h1 className="font-bold text-2xl md:text-3xl text-black">
            Dr. Siddharth Dhomkar {"(Assistant Professor) "}
          </h1>
          <div className="my-2 text-lg md:text-lg text-gray-600">
            Department of Physics, IITM
          </div>
          <p className="my-4 leading-relaxed text-lg text-gray-600">
            My research interests are optical spins, magnetic resonance, machine
            learning for quantum control, and scanning confocal fluorescence
            microscopy. The following topics are currently being explored:
          </p>
          <ul className="my-2 list-disc text-gray-700 list-inside text-base md:text-base space-y-1 md:mx-3">
              <li>T1-based quantum sensing with NV-nanodiamonds</li>
              <li>
                Investigating decoherence-free sub-spaces in diamond and hBN
              </li>
              <li>
                Understanding electron-nuclear dynamics for high-fidelity
                readout and nuclear hyperpolarization
              </li>
              <li>
                Developing methods for efficient simulation of superconducting
                qubits
              </li>
              <li>Defect generation and characterization</li>
              <li>
                Employing ML-based techniques for noise spectroscopy and
                mitigation
              </li>
              <li>Vector AC-magnetometry with NVs in diamond</li>
              <li>Optimal surface passivation of diamond</li>
            </ul>
          <div className="flex justify-start my-4">
            <Link
              href={"https://physics.iitm.ac.in/faculty-inner.php?fuid=120"}
            >
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
        </section>
      </div>
    </>
  );
};


export default Supervisor;
