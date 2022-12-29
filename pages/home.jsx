import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main id="main-content" className="relative grow">
        <Welcome />
        <Gallery />
        <Quotes />
      </main>
      <Footer />
    </div>
  );
};

const Welcome = () => {
  return (
    <>
      <section className="flex flex-col text-center w-2/5 items-center justify-center mx-auto">
        <p className="mt-12 text-2xl font-semibold">Welcome to my homepage</p>
        <p className="mt-6">
          I am Bhavesh Gupta, a research scholar in the Physics Department at
          IIT Madras. See my about page for more information. Visit my contact
          page to get in touch.
          <br /> To know more, visit my{" "}
          <Link className="text-blue-500" href="./about">
            about{" "}
          </Link>
          page. To contact me, visit the{" "}
          <Link className="text-blue-500" href="../contact">
            contact{" "}
          </Link>
          page.
        </p>
      </section>
    </>
  );
};

const Gallery = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/img/galleryHome/ckt.jpg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/img/galleryHome/depth.jpg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/img/galleryHome/graph.jpg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/img/galleryHome/ibm_qiskit.jpg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/img/galleryHome/qcomputer.jpg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Holden Caulfield
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/img/galleryHome/result.jpg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Alper Kamu
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Quotes = () => {
  return (
    <>
      <div className="quotes my-6">
        <div className="title text-center text-2xl text-semibold">
          <p>
            Motivation for pursuing a Ph.D. in Quantum Information and
            Computing: I came across quantum mechanics and quantum statistical
            mechanics as one of my core courses and advanced quantum mechanics
            and quantum field theory as my professional electives during my
            undergrad and postgrad. Thus, I got exposure to some problems and
            research in quantum in- formation and computing. The most promising
            application that attracted me was in Computational Chemistry to
            provide immense power to the machine to successfully map the
            molecules, which, in turn, potentially opens opportunities for
            pharmaceutical research like drug design & development. With the
            help of artificial intelligence & machine learning, Quantum
            computing can help develop various techniques to combat
            cybersecurity threats. I found problems related to decoherence/noise
            affecting qubits most interesting. However, as the number of
            applications increased, it became challenging for traditional
            computers to match the accuracy and speed. <br />
            <br />
            Moreover, quantum computing can help in processing complex problems
            in significantly less time with quality, even though all my past
            work experience was in gravity. Now I want to work more on
            technological-driven problems. Lastly, I did not had any professors
            and projects in my undergrad and postgrad institute related to
            quantum information and computing. Honestly, I did not enjoy gravity
            as much as quantum computing. Thus I ended up interested in learning
            Quantum Information and Computing. My broad research interests are
            Quantum Error correction and Quantum cryptography as a tool to
            explore nature's most beautiful and elegant structures. <br />
            <br />
            Research Interest: Quantum Error Correction: I came across basic
            principles of quantum physics called superposition, entanglement,
            and Interference are the basis of quantum computing and give massive
            parallelism that is impossible on a conventional computer. Circuit
            (Gate) model is the most popular and understood so far. A quantum
            particle is susceptible to its surroundings. Any noise in the
            environment will destroy its quantum coherence. If a qubit is lost,
            this means an immediate error. How can we keep many of them in sync
            or maintain coherence between many quantum particles to build a real
            quantum computer? In general, it is tough to control quantum systems
            because the information starts leaking away if you have little
            interaction with the outside world. We want our qubits to be
            entangled with each other but don’t want them to be entangled with
            anything else. However, the trouble is that our qubits will be made
            of physical stuff, and our qubits are dumb; they will entangle with
            anything they can. So, we must design our qubits carefully to
            protect them from entangling with the environment; this is called
            decoherence. Then we need to shield our qubits from any noise.
            Furthermore, it gets worse the more qubits we have entangled with
            each other. Is it possible to make a working quantum computer with
            many qubits, or will decoherence and noise ruin everything? For each
            qubit, you must have a bunch of wires to manipulate and measure it.
            This is manageable for a small number of qubits, but as the number
            of qubits increases, the amount of extra stuff we need increases
            linearly, which is a massive engineering problem. So any quantum
            computer design needs to be able to entangle all of the qubits and
            then control and measure them in a scalable way. Problems of
            decoherence/noise affecting qubits take us to the need for Quantum
            Error Correction (QEC). This is an error correction scheme to make
            fault-tolerant quantum computers using many entangled qubits
            together to represent one noise-free qubit. How many we need depends
            on how good the qubits are, but estimates are in the range of 100 to
            1000 physical qubits to make one fault-tolerant qubit, which is many
            qubits brings us to scalability obstacles. Both algorithms and
            physical devices should be robust to make quantum computing and
            everyday reality. We need quantum computers with qubits in a million
            orders to break the current RSA encryption security using Shor’s
            algorithm, which is an essential concern worldwide. This application
            is itself enough to explain the importance of quantum error
            correction. Today we are in the Noisy intermediate-scale quantum
            (NISQ) era describes the current state of the art in fabricating
            quantum processors containing about 50 to a few 100 qubits. However,
            they are not advanced enough to reach fault tolerance nor large
            enough to profit sustainably from quantum supremacy. The term
            ’noisy’ refers to the fact that quantum processors are susceptible
            to the environment and may lose their quantum state due to quantum
            decoherence. In the NISQ era, quantum processors are not
            sophisticated enough to continuously implement quantum error
            correction. Intermediate-scale refers to the quantum volume related
            to the not-so-large number of qubits and moderate gate fidelity.
          </p>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://dummyimage.com/302x302"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HOLDEN CAULFIELD
                  </h2>
                  <p className="text-gray-500">Senior Product Designer</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://dummyimage.com/300x300"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    ALPER KAMU
                  </h2>
                  <p className="text-gray-500">UI Develeoper</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://dummyimage.com/305x305"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HENRY LETHAM
                  </h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
