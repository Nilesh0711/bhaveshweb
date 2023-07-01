import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Link from "next/link";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <div className="gradient-bg-services">
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar contact={"font-bold text-blue-500"} extra={""} />
      <div className="flex flex-col px-6 md:w-4/5 my-12 m-auto">
        <div className="font-extrabold text-xl md:text-4xl text-black">
          Contact
        </div>
        <div className="info md:mt-20 mt-10">
          <div className="address text-black md:px-8 px-3 space-y-5 md:text-lg">
            <div className="email">
              <strong>Email</strong> - I can be contacted via{" "}
              <span className="italic text-blue-600 font-bold">
                <Link className="hover:bg-blue-600 hover:text-white hover:px-2 hover:py-1 hover:rounded-md" href="mailto:ph22d033@smail.iitm.ac.in">office mail</Link>
              </span>{" "}
              or{" "}
              <span className="italic text-blue-600 font-bold">
                <Link className="hover:bg-blue-600 hover:text-white hover:px-2 hover:py-1 hover:rounded-md" href="mailto:gupta.bhavesh1605@gmail.com">personal mail</Link>
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
        </div>
      </div>
      <ShowMap />
      <div className="gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

const ShowMap = () => {
  return (
    <>
      <div className="map mt-24">
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76741.92515744058!2d80.25873722590696!3d13.043784122778423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d7e7614cd61%3A0x145ea7f76a84c58!2sX6QQ%2B62G%2C%20Hostel%20Zone%2C%20IIT%20Madras%2C%20SAC%20Rd%2C%20Indian%20Institute%20Of%20Technology%2C%20Chennai%2C%20Tamil%20Nadu%20600036!5e0!3m2!1sen!2sin!4v1672404876336!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="h-96"></div>
          <div className="h-52"></div>

          {/* <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 md:flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md hidden">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-not-allowed">
                Button
              </button>
              <p className="text-xs text-gray-500 mt-3">
                <br />
                <br />
                <br />
              </p>
            </div>
          </div> */}
        </section>
      </div>
    </>
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
