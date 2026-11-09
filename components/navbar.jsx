import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import navbarItems from "../data/navbar/navbarItems";

const NavBarItem = ({ title, pathName, currentPath, onClick }) => {
  const normCurrent = (currentPath || "").replace(/\/$/, "");
  const normTarget = (pathName || "").replace(/\/$/, "");
  const isActive = normCurrent === normTarget;

  return (
    <Link
      href={pathName}
      onClick={onClick}
      className={`px-3 py-2 text-sm md:text-base font-medium rounded-md transition-all duration-200 ${
        isActive
          ? "text-blue-600 font-bold bg-blue-50 md:bg-transparent md:border-b-2 md:border-blue-600 rounded-none"
          : "text-gray-700 hover:text-blue-600 hover:bg-gray-100 md:hover:bg-transparent"
      }`}
    >
      {title}
    </Link>
  );
};

const Navbar = () => {
  const router = useRouter();
  const currentPath = router?.pathname || "";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="gradient-bg-welcome border-b border-gray-200">
      <div className="flex flex-col items-center text-center pt-8 pb-6 px-4">
        <p className="font-bold text-gray-900 text-xl md:text-3xl tracking-tight">
          Prime Minister Research Fellow
        </p>
        <section className="flex flex-col items-center justify-center mt-3 space-y-1">
          <h3 className="text-blue-600 hover:text-blue-800 text-sm md:text-lg font-semibold transition-colors">
            <a
              href="https://quantum.iitm.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              CQuICC - Center for Quantum Information, Communication and Computing
            </a>
          </h3>
          <h4 className="text-sm md:text-base text-gray-700 font-medium">
            <a
              href="https://physics.iitm.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 underline-offset-2 hover:underline"
            >
              Department of Physics
            </a>
            ,{" "}
            <a
              href="https://www.iitm.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 underline-offset-2 hover:underline"
            >
              IIT Madras
            </a>
          </h4>
        </section>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between md:justify-center py-2">
          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center justify-between w-full py-1">
            <span className="text-sm font-semibold uppercase text-gray-600">Menu</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex flex-wrap items-center justify-center space-x-1 lg:space-x-4 uppercase">
            {navbarItems.map((element, index) => (
              <NavBarItem
                key={index}
                title={element.title}
                pathName={element.pathName}
                currentPath={currentPath}
              />
            ))}
          </nav>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <nav className="md:hidden px-4 pt-2 pb-4 space-y-1 border-t border-gray-200 bg-white shadow-sm flex flex-col uppercase">
            {navbarItems.map((element, index) => (
              <NavBarItem
                key={index}
                title={element.title}
                pathName={element.pathName}
                currentPath={currentPath}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
