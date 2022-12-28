import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// import * as fs from "node:fs/promises";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className="flex flex-col px-6 md:w-4/5 my-12 m-auto">
        <div className="font-extrabold text-4xl text-neutral-900">Contact</div>
        <div className="info md:mt-20 mt-10">
          <div className="address md:px-8 px-3 space-y-5">
            <div className="email">
              <strong>Email</strong> - I can be contacted via{" "}
              <span className="italic text-blue-600 font-bold">
                office mail
              </span>{" "}
              or{" "}
              <span className="italic text-blue-600 font-bold">
                personal mail
              </span>{" "}
            </div>
            <div className="email">
              <strong>Phone</strong> - I am available at ☎️ (+91) 9082140965
            </div>
            <div className="email">
              <strong>Address</strong> - 617, Sindhu Tower Hostel, IIT Madras,
              India - 600036
            </div>
          </div>
          <div className="map my-12">
            <section class="text-gray-600 body-font relative">
              <div class="absolute inset-0 bg-gray-300">
                <iframe
                  // style={{"filter: grayscale(1) contrast(1.2) opacity(0.4);"}}
                  marginheight="0"
                  marginwidth="0"
                  title="map"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                  width="100%"
                  height="100%"
                  frameborder="0"
                ></iframe>
              </div>
              <div class="container px-5 py-24 mx-auto flex">
                <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                  <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                    Feedback
                  </h2>
                  <p class="leading-relaxed mb-5 text-gray-600">
                    Post-ironic portland shabby chic echo park, banjo fashion
                    axe
                  </p>
                  <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div class="relative mb-4">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                  <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                  <p class="text-xs text-gray-500 mt-3">
                    Chicharrones blog helvetica normcore iceland tousled brook
                    viral artisan.
                  </p>
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

const saveFeedBack = () => {
  const data = {
    email: "example12",
    test: "test1",
  };
  let string = `sample/${data.email}.json`;
  fs.writeFile(string, JSON.stringify(data), (err, data) => {
    if (err) {
      alert("error");
    }
  });
};

export default Contact;
