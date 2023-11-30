import Head from "next/head";
import Link from "next/link";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import * as fs from "node:fs/promises";
import ImageLoader from "../components/imageLoader";

import React from "react";

const About = (props) => {
  const responsibilityData = props.responsibilityData;

  return (
    <div>
      <Head>
        <title>About - Bhavesh Gupta | Prime Minister Research Fellow</title>
        <meta name="description" content="CQuICC | Center for Quantum Information, Communication and Computing | Department of Physics | IIT Madras | Prime Minister Research Fellow" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar about={"font-bold text-blue-500"} extra={""} />
      <main className="gradient-bg-services">
        <div className="md:grid grid-cols-3 md:w-4/5 mx-auto">
          <section className="flex flex-col mx-auto md:order-last col-span-2 md:col-span-1">
            <PhotoImage />
          </section>
          <AboutInformation className="md:col-span-2" />
        </div>
      </main>

      <div className="gradient-bg-transactions">
        <Ranking />
      </div>

      <div>
        <PositionResponsibility responsibilityData={responsibilityData} />
      </div>

      <div className="pt-10 md:pt-32 gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

const Ranking = () => {
  return (
    <>
      <div className="md:w-4/5 mx-auto pb-12 px-4">
        <h2 className="relative group py-5 md:py-10 text-xl text-black md:text-3xl font-bold">
          Education
        </h2>
        <ul className="list-disc text-gray-700 list-inside text-base md:text-lg space-y-4 md:mx-3">
          <li>
            <strong>Ph.D. (Ongoing)</strong> - Indian Institute of Technology
            Madras, Chennai, India.
          </li>
          <li>
            <strong>M.Sc. (2022)</strong> - National Institute of Technology
            Rourkela, Odisha, India.
          </li>
          <li>
            <strong>B.Sc. (2017)</strong> - National Institute of Technology
            Rourkela, Odisha, India.
          </li>
        </ul>

        <h2
          id="academic-achievements"
          className="relative group mt-5 py-5 md:py-10 font-bold text-xl md:text-3xl text-black"
        >
          Academic Achievement
        </h2>
        <ul className="text-gray-700 list-disc list-inside space-y-4 md:mx-3 text-base md:text-lg">
          <li>
            <strong>Prime Minister&rsquo;s Research Fellowship</strong> - 2022
          </li>
          <li>
            <strong>AIR 52</strong> in
            <em> Joint Entrance Screening Test (JEST)</em> - 2022
          </li>
          <li>
            <strong>AIR 92 (JRF)</strong> in
            <em> Joint CSIR-UGC National Eligibility Test (NET) in Physics</em>-
            2022
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
      </div>
    </>
  );
};

const PositionResponsibility = ({ responsibilityData }) => {
  return (
    <section className="md:w-4/5 mx-auto pb-12 px-4">
      <div className="relative group py-5 md:py-10 text-xl text-black md:text-3xl font-bold">
        Position of Responsibility
      </div>

      <div className="">
        {responsibilityData.map((e, index) => {
          let link = e.link.length != 0 ? true : false;
          return (
            <section key={index} className="text-base">
              <ul className="list-disc text-gray-700 text-base md:text-lg space-y-4 md:mx-3">
                <li>
                  <span className="font-bold text-black">{e.head} </span>
                  <span className="text-md">{e.content}</span>
                  {link != "" && (
                    <span>
                      <Link href={e.link}>
                        {" "}
                        <FaShare className="inline pointer mb-1 ml-1 text-blue-500" />
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
  );
};

const AboutInformation = () => {
  return (
    <>
      <section className="flex flex-col md:m-auto col-span-2 pt-5 md:pt-12 px-5">
        <h1 className="font-extrabold text-2xl md:text-4xl text-black">
          About
        </h1>
        <div className="info md:my-20 my-5 md:text-left text-justify text-gray-600 md:text-lg text-base">
          <div>Hi, I am Bhavesh. Again, welcome to my website.</div>
          <br />
          <div>
            I am a second-year PhD in the
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
              Dr. Prabha Mandayam.
            </a>{" "}
            My current research aims to Quantum key Distribution (QKD), Quantum
            Error Correction (QEC) and Quantum Fault Tolerance in the Noisy
            intermediate-scale quantum (NISQ) era.
          </div>
          <br />
          <div className="md:text-lg text-base">
            Besides my research, I also do swimming and gym, though I do not
            find much time. Sometimes, I also play table-tennis and watch
            geopolitics.
          </div>

          <Motivation />
        </div>
      </section>
    </>
  );
};

const PhotoImage = () => {
  return (
    <>
      <header className="flex flex-col items-center mx-auto justify-center mt-10 mb-10 md:mb-20 md:my-20">
        <ImageLoader
          mainImageSrc={
            "https://drive.google.com/uc?export=view&id=1jG6V7tSpO2U3Xq9G5HsLKiuO8i1Voxmr"
          }
          altImageSrc={"/img/loading.jpg"}
          altText={"image"}
          classValue={
            "object-cover object-center mb-2 rounded-md w-4/5 h-[550px]"
          }
        />
        <article className="text-center">
          <h1 className="text-4xl my-4 text-black font-extrabold ">
            Bhavesh Gupta
          </h1>
          <h2 className="text-xl text-blue-500">Contact Details</h2>
          <div className="my-2 flex flex-row space-x-2 items-center justify-center">
            <Link href="mailto:ph22d033@smail.iitm.ac.in">
              <svg
                width="24px"
                className="text-gray-900 hover:text-blue-800"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
              </svg>
            </Link>
            <Link
              href="https://scholar.google.com/citations?hl=en&user=O6da4soAAAAJ&authuser=1&scilu=&scisig=ACseELIAAAAAZGnoTk3wZe_5IjMu9B8U9H6unsY&gmla=AHoSzlVNLwPEvUR0q6sMvcplEdPenj43RrPY0LwyqRHpOBnYE6ok95VO13qEdkA52dEOcZY-Esz9AjHNmbH1Ry0bHNkznlA2cCd9Ulc&sciund=2492603626801537851"
              target="_blank"
            >
              <svg
                width="24px"
                height="24px"
                className="text-gray-900 hover:text-blue-800"
                viewBox="-2 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                preserveAspectRatio="xMinYMin"
              >
                <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z" />
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/@bhaveshgupta2760"
              target="_blank"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                className="text-gray-900 hover:text-blue-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </Link>
            <Link href="https://linkedin.com/in/bhavesh-guptaa" target="_blank">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                className="text-gray-900 hover:text-blue-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
                <line x1="8" y1="11" x2="8" y2="16" />{" "}
                <line x1="8" y1="8" x2="8" y2="8.01" />{" "}
                <line x1="12" y1="16" x2="12" y2="11" />{" "}
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />{" "}
              </svg>
            </Link>
            <Link href="https://github.com/bhaveshgupta1605" target="_blank">
              <svg
                width="23px"
                height="23px"
                className="text-gray-900 hover:text-blue-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
              </svg>
            </Link>
          </div>
        </article>
        <p className="text-base my-6 text-center px-5 md:px-12 text-gray-800">
          To know more about me. You can download my
          <Link
            target="_blank"
            className="italic text-blue-600 font-semibold"
            href="https://drive.google.com/file/d/1K3BbIhvtgCbSUrBbffdC6eP2edRcRVjY/view?usp=share_link"
          >
            {" "}
            CV here
          </Link>
          . To contact me, visit the
          <Link className="italic text-blue-600 font-semibold" href="/contact">
            {" "}
            contact
          </Link>{" "}
          page.
        </p>
      </header>
    </>
  );
};

const Motivation = () => {
  return (
    <>
      <h2 className="relative group my-5 mt-10 md:mt-10 md:my-10 text-xl md:text-3xl font-bold text-black">
        Motivation for pursuing a Ph.D. in Quantum Information and Computing
      </h2>
      <p className="text-justify text-gray-600 md:text-lg text-base">
        I came across quantum mechanics and quantum statistical mechanics as one
        of my core courses and advanced quantum mechanics and quantum field
        theory as my professional electives during my undergrad and postgrad.
        Thus, I got exposure to some problems and research in quantum in-
        formation and computing. The most promising application that attracted
        me was in Computational Chemistry to provide immense power to the
        machine to successfully map the molecules, which, in turn, potentially
        opens opportunities for pharmaceutical research like drug design &
        development. With the help of artificial intelligence & machine
        learning, Quantum computing can help develop various techniques to
        combat cybersecurity threats. I found problems related to
        decoherence/noise affecting qubits most interesting. However, as the
        number of applications increased, it became challenging for traditional
        computers to match the accuracy and speed. <br />
        <br />
        Moreover, quantum computing can help in processing complex problems in
        significantly less time with quality, even though all my past work
        experience was in gravity. Now I want to work more on
        technological-driven problems. Lastly, I did not had any professors and
        projects in my undergrad and postgrad institute related to quantum
        information and computing. Honestly, I did not enjoy gravity as much as
        quantum computing. Thus I ended up interested in learning Quantum
        Information and Computing. My broad research interests are Quantum Error
        correction and Quantum cryptography as a tool to explore nature's most
        beautiful and elegant structures. <br />
      </p>
    </>
  );
};

export async function getStaticProps() {
  let responsibilityData = await fs.readFile(
    "data/about/position_responsibility.json",
    "utf-8"
  );

  responsibilityData = JSON.parse(responsibilityData);

  return {
    props: { responsibilityData },
  };
}

export default About;
