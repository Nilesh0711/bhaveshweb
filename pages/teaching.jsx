import React from "react";
import * as fs from "node:fs/promises";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { FaFilePdf } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";

const Teaching = (props) => {
  const instituteData = props.instituteData;
  const pmrfTaData = props.pmrfTaData;
  const responsibilityData = props.responsibilityData;

  return (
    <div>
      <Head>
        <title>
          Teaching - Bhavesh Gupta | Prime Minister Research Fellow | IIT Madras
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
      <main className="gradient-bg-services">
        <div className="flex flex-col px-6 md:w-4/5 pt-12 m-auto">
          <h1 className="font-extrabold text-xl md:text-4xl text-black">
            My Teaching Activities
          </h1>
          <div className="info md:mt-20 my-10 md:w-1/2 text-black">
            <section>
              <div className="mt-16 text-lg md:text-2xl font-bold">
                PMRF TA work for NPTEL
              </div>

              <div className="mt-12">
                {pmrfTaData.map((e, index) => {
                  let link = e.link.length != 0 ? true : false;
                  return (
                    <section key={index} className="text-base">
                      <ul className="list-disc text-gray-700 text-base md:text-lg space-y-4 md:mx-3 mt-5">
                        <li>
                          <span className="font-bold text-black">
                            {e.head}{" "}
                          </span>
                          <span className="text-md">{e.content}</span>
                          {link != "" && (
                            <span>
                              <Link href={e.link}>
                                {" "}
                                <FaFilePdf className="inline pointer mb-1 ml-1 text-blue-500" />
                              </Link>
                            </span>
                          )}
                        </li>
                      </ul>
                    </section>
                  );
                })}
              </div>
            </section>

            <section>
              <div className="mt-16 text-lg md:text-2xl font-bold">
                Teaching Responsiblity
              </div>
              <div className="mt-12">
                {responsibilityData.map((e, index) => {
                  let link = e.link.length != 0 ? true : false;
                  return (
                    <section key={index} className="text-base">
                      <ul className="list-disc text-gray-700 text-base md:text-lg space-y-4 md:mx-3 mt-5">
                        <li>
                          <span className="font-bold text-black">
                            {e.head}{" "}
                          </span>
                          <span className="text-md">{e.content}</span>
                          {link != "" && (
                            <span>
                              <Link href={e.link}>
                                {" "}
                                <FaFilePdf className="inline pointer mb-1 ml-1 text-blue-500" />
                              </Link>
                            </span>
                          )}
                        </li>
                      </ul>
                    </section>
                  );
                })}
              </div>
            </section>

            <section>
              <div className="mt-16 text-lg md:text-2xl font-bold">
                Institute Teaching Assistantship
              </div>

              {instituteData.map((e, index) => {
                return (
                  <section key={index} className="text-base">
                    <h4
                      id="2020-2021"
                      className="relative group mt-6 font-semibold text-violet-900"
                    >
                      {e.year}{" "}
                    </h4>
                    {e.teaching.map((element, index) => {
                      return (
                        <ul
                          key={index}
                          className="list-disc list-inside space-y-4 md:p-3 mt-6 text-sm md:text-lg text-gray-600"
                        >
                          <li>{element.title}</li>
                        </ul>
                      );
                    })}
                  </section>
                );
              })}
            </section>
          </div>
        </div>
      </main>

      <div className="gradient-bg-transactions">
        <YoutubeAndDrive />
      </div>

      <div className="gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

const YoutubeAndDrive = () => {
  return (
    <>
      <div className="flex flex-col px-6 md:w-4/5 pb-24 m-auto">
        <section className="md:w-1/2">
          <div className="py-8 italic text-base md:text-xl text-red-600 font-medium">
            Link to playlist is given below ↡{" "}
          </div>
          <div className="p-5 items-center bg-red-100 rounded-md flex flex-row space-x-3">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              className="text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#ff0000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
            <div className="text-sm md:text-base text-red-600 flex-1">
              Find the full lecture playlist on{" "}
            </div>
            <Link
              target="_blank"
              href="https://www.youtube.com/@bhaveshgupta2760"
              className="hover:bg-red-600 text-red-600 hover:text-white p-2 text-sm md:text-base italic rounded-md group"
            >
              Youtube{" "}
              <TbExternalLink className="inline mb-1 ml-1 text-red-600 group-hover:text-white" />
            </Link>
          </div>
        </section>

        <section className="md:w-1/2">
          <div className="my-8 italic text-base md:text-xl font-medium text-blue-600">
            Link to lecture notes is given below ↡{" "}
          </div>
          <div className="p-5 bg-blue-100 rounded-md flex flex-row space-x-3 items-center">
            <svg
              width="24px"
              height="24px"
              className="text-blue-600"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#5b66e7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              preserveAspectRatio="xMinYMin"
            >
              <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z" />
            </svg>
            <div className="text-sm md:text-base text-blue-600 flex-1">
              Find the full lecture playlist on
            </div>
            <Link
              target="_blank"
              href="https://drive.google.com/drive/folders/1TFuXh8dulq5Tb5U-VaXw32W9AwTXhCD8?usp=share_link"
              className="hover:bg-blue-600 text-blue-600 hover:text-white p-2 italic text-sm md:text-base rounded-md group"
            >
              Drive{" "}
              <TbExternalLink className="inline mb-1 ml-1 text-blue-600 group-hover:text-white" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getStaticProps() {
  let instituteData = await fs.readFile(
    "data/teaching/institue_teaching.json",
    "utf-8"
  );
  let pmrfTaData = await fs.readFile(
    "data/teaching/pmrf_teaching.json",
    "utf-8"
  );
  let responsibilityData = await fs.readFile(
    "data/teaching/teaching_responsibility.json",
    "utf-8"
  );

  instituteData = JSON.parse(instituteData);
  pmrfTaData = JSON.parse(pmrfTaData);
  responsibilityData = JSON.parse(responsibilityData);

  return {
    props: { instituteData, pmrfTaData, responsibilityData },
  };
}

export default Teaching;
