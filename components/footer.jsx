import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 shadow md:px-6 md:py-8 bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >
            Bhavesh Gupta
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
            <li>
              <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">
          Last updated: 30 November 2025
        </span>
      </footer>
    </div>
  );
};

export default Footer;