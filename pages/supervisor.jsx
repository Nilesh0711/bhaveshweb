import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Supervisor = () => {
  return (
    <div>
      <Head>
        <title>Supervisor</title>
        <meta name="description" content="Supervisor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className="flex flex-col px-6 md:w-4/5 my-12 m-auto">
        <div className="font-extrabold text-4xl text-neutral-900">
          Supervisor
        </div>
        <div className="info md:mt-20 mt-10">
          <div className="text-lg md:w-1/2">
            I am being supervised by <strong>Dr. Prabha Mandayam</strong>{" "}
            co-supervised by <strong>Dr. Chandrashekar Radhakrishnan</strong> at
            IITM. Links to their web pages are given herein.
          </div>
          <div className="supervisors ">
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 md:mt-24 mt-16 md:flex-row flex-col items-center">
                {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"> */}
                <div className="md:w-1/3 md:h-1/3">
                  <img
                    className="object-cover object-center rounded-md w-72 h-72"
                    alt="hero"
                    src="/img/supervisor/sup1.jpg"
                  />
                </div>
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center mt-5">
                  <div className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
                    Dr. Prabha Mandayam {"(Associate Professor)"}
                    <div className="mt-3 text-lg text-gray-900">
                      Department of Physics, IITM
                    </div>
                  </div>
                  <p className="mb-8 leading-relaxed">
                    Research interests are in the area of quantum computing and
                    quantum information theory. In particular, interested in
                    quantum error correction, understanding the interplay
                    between quantum foundations and quantum cryptography, and,
                    using quantum information as a tool to explore fundamental
                    questions in theoretical physics.
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href={"https://physics.iitm.ac.in/~prabhamd/index.html"}
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
                </div>
              </div>
            </section>
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 md:mt-24 mt-16 md:flex-row flex-col items-center">
                {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"> */}
                <div className="md:w-1/3 md:h-1/3">
                  <img
                    className="object-cover object-center rounded-md w-72 h-72"
                    alt="hero"
                    src="/img/supervisor/sup2.jpg"
                  />
                </div>
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center mt-5">
                  <div className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
                    Dr. Chandrashekar Radhakrishnan <br />{" "}
                    {"(Principal Project Scientist at QCuICC)"}
                    <div className="mt-3 text-lg text-gray-900">
                      Department of Physics, IITM
                    </div>
                  </div>
                  <p className="mb-8 leading-relaxed">
                    QCuICC - Center for Quantum Information, Communication and
                    Computing, IITM Research interests are on the topics of
                    Quantum Information theory, Mathematical Physics and
                    Statistical Physics. <br /> <br />
                    Quantum Information Theory:    Quantum Resource theory,
                    Relativistic Quantum Information Theory and Quantum Internet
                    Mathematical Physics:    Group Theory, Laplace transforms
                    and Special Functions Statistical Physics: Generalized
                    Statistical Mechanics, Nonequilibrium Statistical Mechanics
                    and Superstatistics.
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href={"https://sites.google.com/view/chandrashekar/home"}
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Supervisor;
