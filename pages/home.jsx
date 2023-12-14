import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home - Bhavesh Gupta | Prime Minister Research Fellow | IIT Madras</title>
        <meta name="description" content="Center for Quantum Information, Communication and Computing | Department of Physics | Prime Minister Research Fellow" />
        <meta name="keywords" content="Quantum" />
        <meta name="keywords" content="PMRF" />
        <meta name="keywords" content="IIT Madras" />
        <meta name="keywords" content="CQuICC" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar home={"font-bold text-blue-500"} extra={""} />
      <main id="main-content" className="relative grow gradient-bg-services">
        <Welcome />
        <Gallery />
        <Quotes />
      </main>
      <div className="gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

const Welcome = () => {
  return (
    <>
      <section className="flex flex-col text-center md:w-3/5 items-center justify-center mx-auto px-4">
        <h1 className="pt-12 text-xl md:text-2xl font-semibold text-gray-900">Welcome to my homepage</h1>
        <div className="pt-6 text-base md:text-lg text-gray-600">
          I am Bhavesh Gupta, a research scholar in the Physics Department at
          IIT Madras.
          <br /> To know more, visit my
          <Link className="italic text-blue-600 font-semibold "href="./about">
          {" "}about{" "}
          </Link>
          page for more information. To get in touch, visit the
          <Link className="italic text-blue-600 font-semibold "href="./contact">
          {" "}contact{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

const Gallery = () => {
  return (
    <>
      <section className="text-gray-600 body-font gradient-bg-services">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-64 object-cover object-center"
                  src="/img/galleryHome/ckt.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-900 opacity-0 hover:opacity-100">
                  <div className="title-font text-lg font-medium text-gray-300 mb-3">
                    The write-once runs anywhere Qiskit pipeline.
                    <br />
                    <br />
                    Users supply a single input circuit and communicate the
                    desired target device platform via the choice of backend
                    passed to the Qiskit transpiler.
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-64 object-cover object-center"
                  src="/img/galleryHome/depth.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-900 opacity-0 hover:opacity-100">
                  <div className="title-font text-lg font-medium text-gray-300 mb-3">
                    Coding Multi-qubit Circuits in Qiskit <br />
                    <br /> Quantum Circuits, Bell States, and Entanglement{" "}
                    <br /> Multi-qubit quantum circuit with Hadamard gates, CNOT
                    gates, X gates, etc.
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-64 object-cover object-center"
                  src="/img/galleryHome/graph.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-900 opacity-0 hover:opacity-100">
                  <div className="title-font text-lg font-medium text-gray-300 mb-3">
                    Quantum mechanics and computer science <br /> <br />{" "}
                    Introduced before moving on to describe what a quantum
                    computer is, how it can be used to solve problems faster
                    than 'classical' computers and its real-world
                    implementation.
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-64 object-cover object-center"
                  src="/img/galleryHome/ibm_qiskit.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-900 opacity-0 hover:opacity-100">
                  <div className="title-font text-lg font-medium text-gray-300 mb-3">
                    Qiskit is an open-source SDK for working with quantum
                    computers at the level of pulses, circuits, and application
                    modules. Qiskit includes a comprehensive set of quantum
                    gates and a variety of pre-built circuits so users at all
                    levels can use Qiskit for research and application
                    development.
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-64 object-cover object-center"
                  src="/img/galleryHome/qcomputer.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-900 opacity-0 hover:opacity-100">
                  <div className="title-font text-lg font-medium text-gray-300 mb-3">
                    The consortium, including Toyota, Hitachi, Toshiba, and Sony
                    Group, was formed last year to accelerate research and
                    development in the country that takes advantage of quantum
                    computing. A consortium of Japanese companies will use an
                    IBM quantum computer for research and development purposes.
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-64 object-cover object-center"
                  src="/img/galleryHome/chip.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-900 opacity-0 hover:opacity-100">
                  <div className="title-font text-lg font-medium text-gray-300 mb-3">
                    It has just five qubits that can be manipulated, but the
                    company expects processors of 50-100 qubits to emerge within
                    the next decade. General-purpose machines, which IBM calls
                    "universal" quantum computers, will eventually use more than
                    100,000 qubits.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


const Quotes = () => {
  return (
    <>
      <div className="gradient-bg-transactions flex md:flex-row flex-col items-center justify-center px-5 py-5 md:space-x-10 md:space-y-0 space-y-14 ">
        <div className="md:w-1/3 w-full mx-auto rounded-lg px-5 pt-5 pb-10 text-gray-800">
          <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
              <img src="/img/testimonial/qworld.jpg" alt="image" />
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <div className="text-sm md:text-base text-black text-center px-5">
              Best part was the description of concepts along with codes. People
              who have little/weak background of quantum information can also
              benefit from the workshop. For the rest of the queries, mentors
              were always available.
            </div>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div className="w-full">
            <div className="text-md text-indigo-500 font-bold text-center">
              Workshops, 2020
            </div>
            <div className="text-xs text-gray-500 text-center">QBronze</div>
          </div>
        </div>
        <div className="md:w-1/3 w-full mx-auto rounded-lg  px-5 pt-5 pb-10 text-gray-800">
          <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
              <img src="/img/testimonial/david.jpg" alt="image" />
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <div className="text-sm md:text-base text-black text-center px-5 md:py-2">
              Quantum computation is a distinctively new way of harnessing
              nature. It will be the first technology that allows useful tasks
              to be performed in collaboration between parallel universe.
            </div>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div className="w-full">
            <div className="text-md text-indigo-500 font-bold text-center">
              David Deutsch
            </div>
            <div className="text-xs text-gray-500 text-center">Physicist</div>
          </div>
        </div>
        <div className="md:w-1/3 w-full mx-auto rounded-lg  px-5 pt-5 pb-10 text-gray-800">
          <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
              <img src="/img/testimonial/richard.jpg" alt="image" />
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <div className="text-sm md:text-base text-black text-center px-5 md:py-2">
              Nature isn’t classical, dammit, and if you want to make a
              simulation of nature, you’d better make it quantum mechanical, and
              by golly it’s a wonderful problem, because it doesn’t look so
              easy.
              <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="text-md text-indigo-500 font-bold text-center">
              Richard Feynman
            </div>
            <div className="text-xs text-gray-500 text-center">
              Theoretical physicist
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
