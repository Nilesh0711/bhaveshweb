import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center my-12">
      <p className="font-bold text-3xl">Prime Minister's Research Fellow </p>
      <section className="flex flex-col items-center justify-center mx-5">
            <h3
              id="soft--active-matter-labhttpswwwiitkacinsam"
              className="relative group mt-6 text-blue-500 text-xl font-semibold"
            >
              <a href="https://quantum.iitm.ac.in">
                CQuICC - Center for Quantum Information, Communication and
                Computing
              </a>
            </h3>
            <h3
              id="department-of-physicshttpsiitkacinphy-iit-kanpurhttpsiitkacin"
              className="relative group mt-4 font-semibold text-xl text-blue-500"
            >
              <a href="https://physics.iitm.ac.in">Department of Physics</a>,
              <a href="https://www.iitm.ac.in/"> IIT Madras</a>
            </h3>
          </section>
      </div>

      <hr class="my-3 h-px bg-gray-300 border-0 w-4/5 mx-auto"/>

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-3 text-xl"
          >
            Bhavesh
          </Link> */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap text-md items-center uppercase justify-center">
            <Link
              href="/home"
              className="mr-5 hover:text-gray-900 text-gray-500 hover:underline decoration-2 decoration-sky-500 "
            >
              Home
            </Link>
            <Link
              href="/about"
              className="mr-5 hover:text-gray-900 text-gray-500 hover:underline decoration-2 decoration-sky-500"
            >
              About
            </Link>
            <Link
              href="/research"
              className="mr-5 hover:text-gray-900 text-gray-500 hover:underline decoration-2 decoration-sky-500"
            >
              Research
            </Link>
            <Link
              href="/publication"
              className="mr-5 hover:text-gray-900 text-gray-500 hover:underline decoration-2 decoration-sky-500"
            >
              Publication
            </Link>
            <Link
              href="/teaching"
              className="mr-5 hover:text-gray-900 text-gray-500 hover:underline decoration-2 decoration-sky-500"
            >
              Teaching
            </Link>
            <Link
              href="/contact"
              className="mr-5 hover:text-gray-900 text-gray-500 hover:underline decoration-2 decoration-sky-500"
            >
              Contact
            </Link>
            <Link
              href="/supervisor"
              className="mr-5 hover:text-gray-900 text-gray-500 hover:underline decoration-2 decoration-sky-500"
            >
              Supervisor
            </Link>
            <Link
              href="/other"
              className="mr-5 hover:text-gray-900 text-gray-500 hover:underline decoration-2 decoration-sky-500"
            >
              Other
            </Link>
          </nav>
        </div>
      </header>

      <hr class="my-3 h-px bg-gray-300 border-0 w-4/5 mx-auto"/>
    </div>
  );
};

export default Navbar;
