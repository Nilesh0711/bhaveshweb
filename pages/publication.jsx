import React, { useState } from "react";
import * as fs from "node:fs/promises";
import Head from "next/head";
import Navbar from "../components/navbar";
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
      <Navbar/>
      <div className="flex flex-col px-6 md:w-4/5 my-12 m-auto">
        <div className="font-extrabold text-4xl text-neutral-900">
          Publications
        </div>
        <div className="info md:my-20 my-10 md:w-1/2">
          <div className="font-bold text-2xl">Publications</div>
          <div className="my-5">To be updated soon.</div>
          <div className="data mt-16">
            <div className="font-bold text-2xl">Work in progress</div>
            <ul className="list-disc list-inside space-y-4 my-6 md:mx-3">
              {data.map((e) => {
                return <li key={e.key}>{e.text}</li>;
              })}
            </ul>

            <section>
              <div className="font-bold text-2xl mt-16">
                Colloquiums and Seminars
              </div>
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-6">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Date
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Complex Fluids & Soft Matter, 2021
                      </th>
                      <td className="py-4 px-6">December 2021</td>
                      <td className="py-4 px-6">ISR and IIT Gandhinagar, Online Colloquium</td>
                    </tr>
                    <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Young Physicists’ Colloquium, 2019
                      </th>
                      <td className="py-4 px-6">September 2019</td>
                      <td className="py-4 px-6">Saha Institute of Nuclear Physics, Kolkata</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Complex Fluids & Soft Matter, 2021
                      </th>
                      <td className="py-4 px-6">December 2021</td>
                      <td className="py-4 px-6">ISR and IIT Gandhinagar, Online Colloquium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer/>
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
