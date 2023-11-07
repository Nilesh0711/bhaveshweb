import React from "react";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <div className="gradient-bg-welcome">
      <div className="flex flex-col items-center text-center py-12">
      <p className="font-bold text-black text-xl md:text-3xl">Prime Minister Research Fellow </p>
      <section className="flex flex-col items-center justify-center mx-5">
            <h3
              id="soft--active-matter-labhttpswwwiitkacinsam"
              className="relative group mt-6 text-blue-500 text-md md:text-xl font-semibold"
            >
              <a href="https://quantum.iitm.ac.in">
                CQuICC - Center for Quantum Information, Communication and
                Computing
              </a>
            </h3>
            <h3
              id="department-of-physicshttpsiitkacinphy-iit-kanpurhttpsiitkacin"
              className="relative group mt-4 font-semibold text-md md:text-xl text-blue-500"
            >
              <a href="https://physics.iitm.ac.in">Department of Physics</a>,
              <a href="https://www.iitm.ac.in/"> IIT Madras</a>
            </h3>
          </section>
      </div>

      <hr className="h-px bg-gray-300 border-0 w-4/5 mx-auto"/>

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto text-black md:mr-auto flex flex-wrap text-sm md:text-base items-center uppercase justify-center">
            <Link
              href="/home"
              className={`mr-3 md:mr-5 ${props.home} ${props.extra} hover:text-blue-900 md:hover:underline decoration-2 decoration-sky-500`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`mr-3 md:mr-5 ${props.about} ${props.extra} hover:text-blue-900 md:hover:underline decoration-2 decoration-sky-500`}
            >
              About
            </Link>
            <Link
              href="/research"
              className={`mr-3 md:mr-5 ${props.research} ${props.extra} hover:text-blue-900 md:hover:underline decoration-2 decoration-sky-500`}
            >
              Research
            </Link>
            <Link
              href="/publication"
              className={`mr-3 md:mr-5 ${props.publication} ${props.extra} hover:text-blue-900  md:hover:underline decoration-2 decoration-sky-500`}
            >
              Publication
            </Link>
            <Link
              href="/supervisor"
              className={`mr-3 md:mr-5 ${props.supervisor} ${props.extra} hover:text-blue-900 md:hover:underline decoration-2 decoration-sky-500`}
            >
              Supervisor
            </Link>
            <Link
              href="/teaching"
              className={`mr-3 md:mr-5 ${props.teaching} ${props.extra} hover:text-blue-900 md:hover:underline decoration-2 decoration-sky-500`}
            >
              Teaching
            </Link>
            <Link
              href="/contact"
              className={`mr-3 md:mr-5 ${props.contact} ${props.extra} hover:text-blue-900 md:hover:underline decoration-2 decoration-sky-500`}
            >
              Contact
            </Link>
            
            <Link
              href="/other"
              className={`mr-3 md:mr-5 ${props.other} ${props.extra} hover:text-blue-900 md:hover:underline decoration-2 decoration-sky-500`}
            >
              Other
            </Link>
          </nav>
        </div>
      </header>

      <hr className="h-px bg-gray-300 border-0 w-4/5 mx-auto"/>
    </div>
  );
};

export default Navbar;