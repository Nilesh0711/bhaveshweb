import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-3 text-xl"
          >
            Bhavesh
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
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
    </div>
  );
};

export default Navbar;
