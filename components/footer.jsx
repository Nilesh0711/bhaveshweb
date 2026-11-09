import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-6 md:px-10 md:py-10 bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <Link
              href="/home"
              className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors"
            >
              Bhavesh Gupta
            </Link>
            <p className="text-xs text-gray-500 mt-1">
              Ph.D. Scholar | Prime Minister Research Fellow | IIT Madras
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-6 text-sm">
            <li>
              <Link href="/home" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/research" className="hover:text-white transition-colors">
                Research
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-800" />
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <span>&copy; {new Date().getFullYear()} Bhavesh Gupta. All rights reserved.</span>
          <span>Indian Institute of Technology Madras, Chennai, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;