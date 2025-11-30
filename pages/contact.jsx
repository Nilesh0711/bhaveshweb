import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Link from "next/link";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <div className="gradient-bg-services">
      <Head>
        <title>Contact - Bhavesh Gupta | Prime Minister Research Fellow | IIT Madras</title>
        <meta name="description" content="Center for Quantum Information, Communication and Computing | Department of Physics | Prime Minister Research Fellow" />
        <meta name="keywords" content="Quantum" />
        <meta name="keywords" content="PMRF" />
        <meta name="keywords" content="IIT Madras" />
        <meta name="keywords" content="CQuICC" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col px-6 md:w-4/5 my-12 m-auto">
        <h1 className="font-extrabold text-xl md:text-4xl text-black">
          Contact
        </h1>
        <div className="info md:mt-20 mt-10">
          <div className="address text-black md:px-8 px-3 space-y-5 md:text-lg">
            <div className="email">
              <strong>Email</strong> - I can be contacted via{" "}
              <span className="italic text-blue-600 font-bold">
                <Link className="hover:bg-blue-600 hover:text-white hover:px-2 hover:py-1 hover:rounded-md" href="mailto:bhavesh@physics.iitm.ac.in
">office mail</Link>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.732756829556!2d80.23221989999999!3d12.988937199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8002066921%3A0x72ac64139aeaf118!2sDepartment%20Of%20Physics%2C%20Indian%20Institute%20Of%20Technology%20Madras!5e0!3m2!1sen!2sin!4v1764497422499!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="h-96"></div>
          <div className="h-52"></div>
        </section>
      </div>
    </>
  );
};

export default Contact;
