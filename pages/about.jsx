import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import * as fs from "node:fs/promises";
import ImageLoader from "../components/imageLoader";

import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const About = (props) => {
  const responsibilityData = props.responsibilityData;
  const quantumCorrectionData = props.quantumCorrectionData;
  const quantumMitigationData = props.quantumMitigationData;
  const quantumSuppressionData = props.quantumSuppressionData;

  return (
    <div>
      <Head>
        <title>
          About - Bhavesh Gupta | Prime Minister Research Fellow | IIT Madras
        </title>
        <meta
          name="description"
          content="Center for Quantum Information, Communication and Computing | Department of Physics | Prime Minister Research Fellow"
        />
        <meta name="keywords" content="Quantum" />
        <meta name="keywords" content="PMRF" />
        <meta name="keywords" content="IIT Madras" />
        <meta name="keywords" content="CQuICC" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />
      <main className="gradient-bg-services">
        <div className="md:grid grid-cols-3 md:w-4/5 mx-auto">
          <section className="flex flex-col mx-auto md:order-last col-span-2 md:col-span-1">
            <PhotoImage />
          </section>
          <AboutInformation className="md:col-span-2" />
        </div>
      </main>

      <QuantumErrorCorrectionMitigation
        quantumCorrectionData={quantumCorrectionData}
        quantumMitigationData={quantumMitigationData}
        quantumSuppressionData={quantumSuppressionData}
      />

      <Ranking />

      <PositionResponsibility responsibilityData={responsibilityData} />

      <div className="pt-10 md:pt-32 gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

const Ranking = () => {
  return (
    <>
      <div className="md:w-4/5 mx-auto pb-6 md:pb-12 px-4">
        <h2 className="relative group md:py-10 text-xl text-black md:text-3xl font-bold">
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
              <ul className="list-disc text-gray-700 text-base md:text-lg space-y-4 md:mx-3 list-inside">
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
              Dr. Prabha Mandayam.{" "}
            </a>
            My current research interest aims at the Noise Model, Decoherence
            Mechanism, Quantum Error
            Correction/Prevention/Suppression/Mitigation and Quantum Fault
            Tolerance in the Noisy intermediate-scale quantum (NISQ) era.
          </div>
          <br />
          <div className="md:text-lg text-base">
            In addition to my research endeavors, I actively engage in athletic
            pursuits such as swimming and badminton. Furthermore, I demonstrate
            a keen interest in the study of the equity market, consistently
            seeking to expand my understanding of financial dynamics and market
            trends.
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
        <div className="md:w-4/5 md:h-[550px] h-[350px] w-[300px]">
          <ImageLoader
            mainImageSrc={
              "https://drive.google.com/uc?export=view&id=1jG6V7tSpO2U3Xq9G5HsLKiuO8i1Voxmr"
            }
            altImageSrc={"/img/loading.jpg"}
            altText={"image"}
            classValue={
              "object-cover object-center mb-2 rounded-md"
            }
          />
        </div>
        <article className="text-center">
          <div className="text-4xl my-4 text-black font-extrabold ">
            Bhavesh Gupta
          </div>
          <h2 className="text-xl text-blue-500">Contact Details</h2>
          <div className="my-2 flex flex-row space-x-3 items-center justify-center">
            <Link href="mailto:ph22d033@smail.iitm.ac.in">
              <MdAlternateEmail className="hover:text-blue-800 w-6 h-6" />
            </Link>
            <Link
              href="https://scholar.google.com/citations?hl=en&user=O6da4soAAAAJ&authuser=1&scilu=&scisig=ACseELIAAAAAZGnoTk3wZe_5IjMu9B8U9H6unsY&gmla=AHoSzlVNLwPEvUR0q6sMvcplEdPenj43RrPY0LwyqRHpOBnYE6ok95VO13qEdkA52dEOcZY-Esz9AjHNmbdivRy0bHNkznlA2cCd9Ulc&sciund=2492603626801537851"
              target="_blank"
            >
              <FaGoogle className="hover:text-blue-800 w-5 h-5" />
            </Link>
            <Link
              href="https://www.youtube.com/@bhaveshgupta2760"
              target="_blank"
            >
              <AiOutlineYoutube className="hover:text-blue-800 w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com/in/bhavesh-guptaa" target="_blank">
              <AiOutlineLinkedin className="hover:text-blue-800 w-6 h-6" />
            </Link>
            <Link href="https://github.com/bhaveshgupta1605" target="_blank">
              <FaGithub className="hover:text-blue-800 w-6 h-6" />
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
        Thus, I got exposure to some problems and research in quantum
        information and computing. The most promising application that attracted
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
        Decoherence is a concept in quantum mechanics that refers to the process
        by which a quantum system loses coherence and becomes more classical or,
        in other words, more like a classical probability distribution. When a
        quantum system interacts with its environment, the entanglement between
        the system and its surroundings can lead to decoherence. The environment
        effectively monitors the quantum system, causing it to lose its delicate
        quantum superposition and become entangled with the environment instead.
        This results in the emergence of classical behaviour and a loss of
        distinct quantum features. Understanding and controlling decoherence is
        essential for developing quantum technologies, such as quantum computing
        and quantum information processing, where maintaining quantum coherence
        is necessary for the proper functioning of quantum algorithms and
        protocols. <br />
        <br />
        Moreover, quantum computing can help in processing complex problems in
        significantly less time with quality, even though all my past work
        experience was in gravity. Now I want to work more on
        technological-driven problems. Lastly, I did not had any professors and
        projects in my undergrad and postgrad institute related to quantum
        information and computing. Honestly, I did not enjoy gravity as much as
        quantum computing. Thus I ended up interested in learning Quantum
        Information and Computing. My broad research interests are Quantum Error
        correction and Quantum cryptography as a tool to explore nature&#x27;s
        most beautiful and elegant structures. <br />
      </p>
    </>
  );
};

const QuantumErrorCorrectionMitigation = ({
  quantumCorrectionData,
  quantumMitigationData,
  quantumSuppressionData,
}) => {
  return (
    <section className="md:w-4/5 mx-auto px-4">
      <div className="relative group py-5 md:py-10 text-xl text-black md:text-3xl font-bold">
        Quantum Error Correction and Mitigation
      </div>

      <div className="text-gray-800 md:text-lg text-base">
        <p className="mb-4">
          Quantum computers leverage the principles of quantum mechanics, such
          as interference, superposition (Bloch sphere), and entanglement, to
          perform certain types of calculations much faster than classical
          computers. These properties allow them to process a large number of
          possibilities simultaneously (Quantum parallelism).
        </p>

        <p className="mb-4">
          Entanglement is a state where the state of one qubit is directly
          related to the state of another, even if they are physically
          separated. Changes to one qubit instantaneously affect the other,
          providing a form of correlation that can be exploited for computation,
          like the Control-NOT gate.
        </p>

        <p className="mb-4">
          Quantum Gates are used to perform operations on qubits. They
          manipulate the quantum states of qubits and can perform complex
          operations more efficiently than classical logic gates.
        </p>

        <p>
          Quantum Error Correction and Mitigation are two distinct approaches to
          address the challenges posed by errors in quantum computers.
        </p>
      </div>

      <div>
        <article>
          <h1 className="my-6 md:my-12 text-lg text-black md:text-2xl font-bold">
            Quantum Error Correction :{" "}
          </h1>
          <div>
            {quantumCorrectionData.map((section) => renderSection(section))}
          </div>
        </article>
        <article>
          <h1 className="my-6 md:my-12 text-lg text-black md:text-2xl font-bold">
            Quantum Error Mitigation :{" "}
          </h1>
          <div>
            {quantumMitigationData.map((section) => renderSection(section))}
          </div>
        </article>
        <article>
          <h1 className="my-6 md:my-12 text-lg text-black md:text-2xl font-bold">
            Error Suppression :{" "}
          </h1>
          <div>
            {quantumSuppressionData.map((section) => renderSection(section))}
          </div>
        </article>
      </div>
      <div className="text-gray-800 md:text-lg text-base my-12">
        <p className="mb-4">
          Quantum Noise Channel: Understanding how quantum information is
          transmitted, manipulated, and affected by various sources of noise and
          imperfections in quantum systems. It is a mathematical description of
          how quantum systems evolve and interact with their surroundings.
          Mathematically, a quantum channel is described by a completely
          positive and trace-preserving (CPTP) map. A CPTP map ensures that the
          quantum channel is physically meaningful and preserves the
          probabilities, ensuring the total probability of all possible outcomes
          remains 1.
        </p>
      </div>
    </section>
  );
};

const renderSection = (section) => (
  <div
    key={section.title}
    className="relative bg-blue-100 py-4 px-6 rounded-r-3xl rounded-b-3xl shadow-md mb-4"
  >
    <div className="text-blue-800 text-2xl font-bold mb-2">
      {section.title}:
    </div>
    <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-4 md:mx-3">
      {section.items.map(({ key, value }) => (
        <li key={key} className="mb-1">
          <strong className="text-gray-800">{key}:</strong> {value}
        </li>
      ))}
    </ul>
  </div>
);

export async function getStaticProps() {
  let responsibilityData = await fs.readFile(
    "data/about/position_responsibility.json",
    "utf-8"
  );

  let quantumCorrectionData = await fs.readFile(
    "data/about/quantum_correction.json",
    "utf-8"
  );

  let quantumMitigationData = await fs.readFile(
    "data/about/quantum_correction.json",
    "utf-8"
  );

  let quantumSuppressionData = await fs.readFile(
    "data/about/quantum_correction.json",
    "utf-8"
  );

  responsibilityData = JSON.parse(responsibilityData);
  quantumCorrectionData = JSON.parse(quantumCorrectionData);
  quantumMitigationData = JSON.parse(quantumMitigationData);
  quantumSuppressionData = JSON.parse(quantumSuppressionData);

  return {
    props: {
      responsibilityData,
      quantumCorrectionData,
      quantumMitigationData,
      quantumSuppressionData,
    },
  };
}

export default About;
