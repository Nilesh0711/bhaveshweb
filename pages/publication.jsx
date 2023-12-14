import React, { useState } from "react";
import * as fs from "node:fs/promises";
import Head from "next/head";
import Navbar from "../components/navbar";
import ImageLoader from "../components/imageLoader";

import Footer from "../components/footer";

const Publications = (props) => {
  const data = props.workProgessData;
  return (
    <div>
      <Head>
        <title>Publications - Bhavesh Gupta | Prime Minister Research Fellow | IIT Madras</title>
        <meta name="description" content="Center for Quantum Information, Communication and Computing | Department of Physics | Prime Minister Research Fellow" />
        <meta name="keywords" content="Quantum" />
        <meta name="keywords" content="PMRF" />
        <meta name="keywords" content="IIT Madras" />
        <meta name="keywords" content="CQuICC" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar publication={"font-bold text-blue-500"} extra={""} />
      <main>
        <div className="flex flex-col px-6 md:w-4/5 pt-12 m-auto">
          <h1 className="font-extrabold text-xl md:text-4xl text-black">
            Publications
          </h1>
          <div className="info md:mt-20 mt-10 md:w-1/2">
            <div className="font-bold text-lg text-black md:text-2xl">
              Publications
            </div>
            <div className="my-5 text-black">To be updated soon.</div>
          </div>
        </div>
      </main>
      <section className="">
        <div className="px-6 md:w-4/5 m-auto">
          <div className="info py-5 md:py-10">
            <div className="mt-5">
              <div className="font-bold text-lg md:text-2xl text-black">
                Work in progress
              </div>
              <ul className="list-decimal space-y-4 my-12 text-black md:mx-3">
                {data.map((e, index) => {
                  let desc = e.description;
                  let isImage = e.image.length != 0 ? true : false;
                  return (
                    <li key={index} id={e.title}>
                      <div className="text-xl font-bold my-4 mt-12">
                        {e.title}
                      </div>
                      <div
                        className="my-6 font-mono text-lg"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      />
                      {isImage && (
                        <ImageLoader
                          mainImageSrc={`https://drive.google.com/uc?export=view&id=${e.image}`}
                          altImageSrc={"/img/loading.jpg"}
                          altText={"image"}
                          classValue={
                            "object-cover object-center w-full h-full"
                          }
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
              <section>
                <div className="font-bold text-lg md:text-2xl mt-16 text-black">
                  Colloquiums and Seminars
                </div>
                <div className="my-5 text-black">To be updated soon.</div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <div className="gradient-bg-footer mt-20">
        <Footer />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let workProgessData = await fs.readFile(
    "data/publication/workinprogress.json",
    "utf-8"
  );
  workProgessData = JSON.parse(workProgessData);
  return {
    props: { workProgessData },
  };
}

export default Publications;
