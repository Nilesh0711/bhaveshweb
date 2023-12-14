import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ImageLoader from "../components/imageLoader";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Alert,
} from "@material-tailwind/react";

import { CgNotes } from "react-icons/cg";
import Link from "next/link";

const Research = () => {
  const [alert, setAlert] = useState(false);
  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2500);
  };
  return (
    <div>
      <Head>
        <title>Research - Bhavesh Gupta | Prime Minister Research Fellow | IIT Madras</title>
        <meta name="description" content="Center for Quantum Information, Communication and Computing | Department of Physics | Prime Minister Research Fellow" />
        <meta name="keywords" content="Quantum" />
        <meta name="keywords" content="PMRF" />
        <meta name="keywords" content="IIT Madras" />
        <meta name="keywords" content="CQuICC" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar research={"font-bold text-blue-500"} extra={""} />
      <main className="gradient-bg-services">
        {alert && (
          <div className="text-center text-2xl h-14 flex items-center justify-center text-white rounded-none font-bold bg-red-900">
            Semester not yet completed.
          </div>
        )}

        <div className="flex flex-col px-6 md:w-4/5 py-12 m-auto">
          <h1 className="font-extrabold text-xl md:text-4xl text-black">
            Research
          </h1>
          <Motivation />
          <LoadImage />
          <hr className="mt-16 mx-auto w-48 h-1 bg-gray-900 rounded border-0"></hr>
        </div>
        <ProgressReport showAlert={showAlert} />
      </main>
      <WorkList />
      <div className="pt-32 gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

const LoadImage = () => {
  return (
    <>
      <div className="m-auto">
        <ImageLoader
          mainImageSrc={
            "https://drive.google.com/uc?export=view&id=1sg1_jMC-tumiXq2ug83veDItisqVTI05"
          }
          altImageSrc={"/img/loading.jpg"}
          altText={"image"}
          classValue={
            "object-cover object-center w-full h-full my-2"
          }
        />
        <ImageLoader
          mainImageSrc={
            "https://drive.google.com/uc?export=view&id=10sct43Bv2QdRAouOoUXaNMmAX2Sq_nEp"
          }
          altImageSrc={"/img/loading.jpg"}
          altText={"image"}
          classValue={
            "object-cover object-center w-full h-full my-2"
          }
        />
      </div>
    </>
  );
};

const WorkList = () => {
  return (
    <>
      <section>
        <div className="md:w-4/5 mx-auto px-4">
          <div className="info pt-20 md:w-1/2 text-black">
            <div className="font-bold text-lg md:text-2xl">
              Research Projects
            </div>
            <div className="my-5">
              I am currently reading the following topics.
              <ul className="list-disc text-gray-700 list-inside text-base md:text-lg space-y-4 md:mx-3 mt-12">
                <li>Operator QEC, Entanglement assisted QEC, Holonomic QEC</li>
                <li>Isometric extension, Block encoding, Petz recovery</li>
                <li>Bosonic Codes and Bosonic systems</li>
                <li>Gaussian quantum channel</li>
                <li>Approx. and Noise-Adapted QEC</li>
                <li>Basics of entanglement theory</li>
                <li>Learning Qiskit Programming</li>
              </ul>
            </div>
          </div>
          <div className="info pt-20 md:w-1/2 text-black">
            <div className="font-bold text-lg md:text-2xl">
              Books! I use for Learning
            </div>
            <div className="my-5">
              I am currently reading the following books.
              <ul className="list-disc text-gray-700 list-inside text-base md:text-lg space-y-4 md:mx-3 mt-12">
                <li>QCQI by Neilsen and Chuang</li>
                <li>QEC by Lidar and burn</li>
                <li>QI by Mark Wilde</li>
                <li>QCQI lecture notes by Preskill</li>
                <li>Quantum optics by Garry and Knight</li>
                <li>Quantum Arxiv papers as daily newspaper</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="mt-16 md:mt-24 mx-auto w-48 h-1 bg-gray-900 rounded border-0"></hr>

        <WorshopAttendent />
        <ConferenceAttendent />
      </section>
    </>
  );
};

const WorshopAttendent = () => {
  return (
    <>
      <div className="flex flex-col md:px-6 px-2 md:w-4/5 mt-16 md:m-auto">
        <div className="info md:my-10 my-10 md:w-4/5">
          <div className="font-bold text-lg px-4 md:text-3xl text-black">
            Workshop Attendent
          </div>
          <div className="overflow-x-auto relative my-6">
            <table className="w-full text-md text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs uppercase bg-gray- bg-gray-700 text-white">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Date
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Mode
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap text-white"
                  >
                    Training Program on Quantum Cryptography and Quantum
                    Algorithms
                  </th>
                  <td className="py-4 px-6 text-white">
                    17th to 21st October 2022
                  </td>
                  <td className="py-4 px-6 text-white"> Offline </td>
                  <td className="py-4 px-6 text-white">IIT Madras</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap text-white"
                  >
                    ACM Winter School on Advanced Quantum Computing
                  </th>
                  <td className="py-4 px-6 text-white">
                    {" "}
                    5th to 16th October 2022{" "}
                  </td>
                  <td className="py-4 px-6 text-white">Offline</td>
                  <td className="py-4 px-6 text-white">IIT Madras</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const ConferenceAttendent = () => {
  return (
    <>
      <div className="flex flex-col md:px-6 px-2 md:w-4/5 m-auto">
        <div className="info md:w-4/5">
          <div className="font-bold px-4 text-lg md:text-3xl text-black">
            Conference Attendent
          </div>
          <div className="overflow-x-auto relative my-6">
            <table className="w-full text-md text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs uppercase bg-gray- bg-gray-700 text-white">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Date
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Mode
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap text-white"
                  >
                    Progress in Quantum Science and Technologies
                  </th>
                  <td className="py-4 px-6 text-white">23-27 January 2023</td>
                  <td className="py-4 px-6 text-white">Offline</td>
                  <td className="py-4 px-6 text-white">IIT Madras</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const ProgressReport = ({ showAlert }) => {
  return (
    <>
      <div className="flex justify-center flex-wrap mt-10 md:mt-12">
        <Popover
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <PopoverHandler>
            <Button
              variant="gradient"
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
            >
              <span className="inline-block mr-3">
                <CgNotes />
              </span>{" "}
              Semester Progress Report
            </Button>
          </PopoverHandler>
          <PopoverContent>
            <div className="grid grid-cols-5 grid-row-5 gap-y-5 gap-x-10">
              <SemesterButton
                title={"Semester 1"}
                link={
                  "https://drive.google.com/file/d/1ZfaqVmHknP_1zrpaMfVodQ0dhsV5i2-_/view"
                }
                showAlert={showAlert}
              />
              <SemesterButton
                title={"Semester 2"}
                link={
                  "https://drive.google.com/file/d/1PNwe_XYHqyNQkHMaJ2oN70dP1M0fOG4L/view?usp=share_link"
                }
                showAlert={showAlert}
              />
              <SemesterButton
                title={"Semester 3"}
                link={"https://drive.google.com/file/d/1c4OLDaY5_hmb4gEYKZLYXcRutvq9mN7G/view?usp=sharing"}
                showAlert={showAlert}
              />
              <SemesterButton
                title={"Semester 4"}
                link={""}
                showAlert={showAlert}
              />
              <SemesterButton
                title={"Semester 5"}
                link={""}
                showAlert={showAlert}
              />
              <SemesterButton
                title={"Semester 6"}
                link={""}
                showAlert={showAlert}
              />
              <SemesterButton
                title={"Semester 7"}
                link={""}
                showAlert={showAlert}
              />
              <SemesterButton
                title={"Semester 8"}
                link={""}
                showAlert={showAlert}
              />
              <SemesterButton
                title={"Semester 9"}
                link={""}
                showAlert={showAlert}
              />
              <SemesterButton
                title={"Semester 10"}
                link={""}
                showAlert={showAlert}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

const SemesterButton = (props) => {
  let link = props.link;
  let flag = true;
  let done = "";
  if (link.length > 0) {
    flag = true;
    done = "bg-green-700 hover:bg-green-800 focus:ring-green-300";
  } else {
    flag = false;
    done = "bg-red-700 hover:bg-red-800 focus:ring-red-300";
  }
  let title = props.title.split(" ");

  const handleClick = (e) => {
    e.preventDefault();
    // window.scrollTo(0, 0);
    $("html, body").animate({ scrollTop: 0 }, "slow");
    props.showAlert(e);
  };

  return (
    <>
      {flag ? (
        <Link
          target="_blank"
          href={link}
          className={`${done} focus:outline-none focus:ring-4 text-white font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center justify-center`}
        >
          {title[1]}
        </Link>
      ) : (
        <button
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
          className={`${done} focus:outline-none focus:ring-4 text-white font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center justify-center`}
        >
          {title[1]}
        </button>
      )}
    </>
  );
};

const Motivation = () => {
  return (
    <>
      <div className="font-bold text-xl md:text-3xl text-black text-center my-6 mt-12">
        Research Interest
      </div>
      <div className="md:my-6 text-justify text-gray-600 md:grid grid-cols-2 gap-x-10">
        <p className="md:text-lg text-base">
          <strong className="text-blue-600 text-lg md:text-2xl">
            Quantum Error Correction,
          </strong>{" "}
          I came across basic principles of quantum physics called
          superposition, entanglement, and Interference are the basis of quantum
          computing and give massive parallelism that is impossible on a
          conventional computer. Circuit (Gate) model is the most popular and
          understood so far. A quantum particle is susceptible to its
          surroundings. Any noise in the environment will destroy its quantum
          coherence. If a qubit is lost, this means an immediate error. How can
          we keep many of them in sync or maintain coherence between many
          quantum particles to build a real quantum computer? In general, it is
          tough to control quantum systems because the information starts
          leaking away if you have little interaction with the outside world. We
          want our qubits to be entangled with each other but don’t want them to
          be entangled with anything else. However, the trouble is that our
          qubits will be made of physical stuff, and our qubits are dumb; they
          will entangle with anything they can. So, we must design our qubits
          carefully to protect them from entangling with the environment; this
          is called decoherence. Then we need to shield our qubits from any
          noise. Furthermore, it gets worse the more qubits we have entangled
          with each other. Is it possible to make a working quantum computer
          with many qubits, or will decoherence and noise ruin everything? For
          each qubit, you must have a bunch of wires to manipulate and measure
          it. This is manageable for a small number of qubits, but as the number
          of qubits increases, the amount of extra stuff we need increases
          linearly, which is a massive engineering problem.
        </p>{" "}
        <p className="text-base md:text-lg mt-10 md:mt-0">
          So any quantum computer design needs to be able to entangle all of the
          qubits and then control and measure them in a scalable way. Problems
          of decoherence/noise affecting qubits take us to the need for Quantum
          Error Correction (QEC). This is an error correction scheme to make
          fault-tolerant quantum computers using many entangled qubits together
          to represent one noise-free qubit. How many we need depends on how
          good the qubits are, but estimates are in the range of 100 to 1000
          physical qubits to make one fault-tolerant qubit, which is many qubits
          brings us to scalability obstacles. Both algorithms and physical
          devices should be robust to make quantum computing and everyday
          reality. We need quantum computers with qubits in a million orders to
          break the current RSA encryption security using Shor’s algorithm,
          which is an essential concern worldwide. This application is itself
          enough to explain the importance of quantum error correction. Today we
          are in the Noisy intermediate-scale quantum (NISQ) era describes the
          current state of the art in fabricating quantum processors containing
          about 50 to a few 100 qubits. However, they are not advanced enough to
          reach fault tolerance nor large enough to profit sustainably from
          quantum supremacy. The term ’noisy’ refers to the fact that quantum
          processors are susceptible to the environment and may lose their
          quantum state due to quantum decoherence. In the NISQ era, quantum
          processors are not sophisticated enough to continuously implement
          quantum error correction. Intermediate-scale refers to the quantum
          volume related to the not-so-large number of qubits and moderate gate
          fidelity.
        </p>
      </div>
    </>
  );
};

export default Research;
