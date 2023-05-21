import React, { useState } from "react";
import * as fs from "node:fs/promises";
import Head from "next/head";
import Navbar from "../components/navbar";
import Link from "next/link";
import Footer from "../components/footer";

const Publications = (props) => {
  const data = props.myData;
  return (
    <div>
      <Head>
        <title>Publications</title>
        <meta name="description" content="Publications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar publication={"font-bold text-blue-500"} extra={""} />
      <main className="gradient-bg-services">
        <div className="flex flex-col px-6 md:w-4/5 pt-12 m-auto">
          <div className="font-extrabold text-xl md:text-4xl text-black">
            Publications
          </div>
          <div className="info md:mt-20 mt-10 md:w-1/2">
            <div className="font-bold text-lg text-black md:text-2xl">
              Publications
            </div>
            <div className="my-5 text-black">To be updated soon.</div>
          </div>
        </div>
      </main>
      <section className="gradient-bg-transactions">
        <div className="px-6 md:w-4/5 m-auto">
          <div className="info py-10 md:w-1/2">
            <div className="data mt-5">
              <div className="font-bold text-lg md:text-2xl text-black">
                Work in progress
              </div>
              <ul className="list-disc list-inside space-y-4 my-6 text-black md:mx-3">
                {data.map((e) => {
                  return <li key={e.key}>{e.text}</li>;
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
      <div className="gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let myData = await fs.readFile(
    "publicationdata/workinprogress.json",
    "utf-8"
  );
  myData = JSON.parse(myData);
  return {
    props: { myData },
  };
}

export default Publications;
