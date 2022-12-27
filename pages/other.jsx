import React from "react";
import Head from "next/head";


const Other = () => {
  return (
    <div>
      <Head>
        <title>Others</title>
        <meta name="description" content="Others" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col px-6 md:w-4/5 my-12 m-auto">
        <div className="font-extrabold text-4xl text-neutral-900">
          Other things i do ...
        </div>
        <div className="info my-16 md:w-1/2 text-2xl md:text-left text-center underline">under development</div>
        <div className="my-32"></div>
      </div>
    </div>
  );
};

export default Other;
