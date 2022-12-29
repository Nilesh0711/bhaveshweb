import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className="flex flex-col px-6 md:w-4/5 my-12 m-auto">
        <div className="font-extrabold text-4xl text-neutral-900">About</div>
        <div className="info md:my-20 my-10 md:w-1/2">
          <p>Hi, I am Bhavesh. Again, welcome to my website.</p>
          <br />
          <p>
            I am a first-year PhD in the
            <a
              target="_blank"
              className="italic text-blue-600 font-semibold"
              href="https://physics.iitm.ac.in"
            >
              {" "}
              Department of Physics
            </a>{" "}
            at the Indian Institute of Technology Madras. I work in the field of
            <a
              target="_blank"
              className="italic text-blue-600 font-semibold"
              href="https://quantum.iitm.ac.in"
            >
              {" "}
              Quantum Information and Computation
            </a>{" "}
            under the supervision of
            <a
              target="_blank"
              className="italic text-blue-600 font-semibold"
              href="https://physics.iitm.ac.in/~prabhamd/index.html"
            >
              {" "}
              Dr. Prabha Mandayam
            </a>{" "}
            and co-supervised by
            <a
              target="_blank"
              className="italic text-blue-600 font-semibold"
              href="https://sites.google.com/view/chandrashekar/home"
            >
              {" "}
              Dr. Chandrashekar Radhakrishnan.
            </a>{" "}
            My current research aims to Quantum key Distribution (QKD), Quantum
            Error Correction (QEC) and Quantum Fault Tolerance in the Noisy
            intermediate-scale quantum (NISQ) era.
          </p>
          <br />
          <p>
            Besides my research, I also do swimming and gym, though I do not
            find much time. Sometimes, I also play table-tennis and watch
            geopolitics.
          </p>
          <h2
            id="education"
            className="relative group my-10 text-3xl font-bold"
          >
            Education
          </h2>
          <ul className="list-disc list-inside space-y-4 md:mx-3">
            <li>
              <strong>Ph.D. (Ongoing)</strong> - Indian Institute of Technology Madras, Chennai, India.
            </li>
            <li>
              <strong>M.Sc. (2022)</strong> - National Institute of Technology Rourkela, Odisha, India.
            </li>
            <li>
              <strong>B.Sc. (2017)</strong> - National Institute of Technology Rourkela, Odisha, India.
            </li>
          </ul>

          <h2
            id="academic-achievements"
            className="relative group my-10 font-bold text-3xl"
          >
            Academic Achievement
          </h2>
          <ul className="list-disc list-inside space-y-4 md:mx-3">
            <li>
              <strong>Prime Minister&rsquo;s Research Fellowship</strong> - 2022
            </li>
            <li>
              <strong>AIR 52</strong> in
              <em> Joint Entrance Screening Test (JEST)</em> - 2022
            </li>
            <li>
              <strong>AIR 92 (JRF)</strong> in
              <em>
                {" "}
                Joint CSIR-UGC National Eligibility Test (NET) in Physics
              </em>
              - 2022
            </li>
            <li>
              <strong>AIR 10507</strong> in
              <em> Joint Entrance Exam Advanced (JEE - Advanced)</em> - 2017
            </li>
            <li>
              <strong>AIR 13705</strong> in
              <em> Joint Entrance Exam Mains (JEE - Mains)</em> - 2017
            </li>
          </ul>

          <p className=" my-10">
            To know more about me. You can download my
            <a
              target="_blank"
              className="italic text-blue-600 font-semibold"
              href="#"
            >
              {" "}
              CV here
            </a>
            . To contact me, visit the
            <a
              target="_blank"
              className="italic text-blue-600 font-semibold"
              href="#"
            >
              {" "}
              contact
            </a>{" "}
            page.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
