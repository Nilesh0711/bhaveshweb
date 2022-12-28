import React, { useState } from "react";
import * as fs from "node:fs/promises";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const Research = (props) => {
  const [data, setdata] = useState(props.myData);
  return (
    <div>
      <Head>
        <title>Research</title>
        <meta name="description" content="Research" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className="flex flex-col px-6 md:w-4/5 my-12 m-auto">
        <div className="font-extrabold text-4xl text-neutral-900">Research</div>
        <div className="info md:my-20 my-10 md:w-1/2">
          <div className="font-bold text-2xl">Research Projects</div>
          <div className="my-5">
            I am currently working in the following projects.
          </div>
          <div className="data">
            {data.map((element) => {
              return (
                <section key={element.title} className="space-y-8 mt-16">
                  <h2 className="font-semibold text-2xl">{element.title}</h2>
                  <div className="">{element.desc}</div>
                  <figure>
                    <img
                      className="my-2 rounded-md"
                      src={element.pics}
                      alt="colloids"
                    />
                    <figcaption>
                      <strong>Figure</strong> : <em>{element.figure}</em>
                    </figcaption>
                  </figure>
                </section>
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export async function getStaticProps() {
  let myData = await fs.readFile("researchdata/data1.json", "utf-8");
  myData = JSON.parse(myData);
  return {
    props: { myData },
  };
}

export default Research;
