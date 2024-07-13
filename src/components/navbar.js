import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-[#0d3b66] text-[#faf0ca] text-center font-semibold text-3xl sm:text-6xl border-b-8 border-[#faf0ca] py-4 sm:py-8">
        <Link to="/" className="cursor-pointer" rel="noopener">
          THE NEWS BOARD
        </Link>
      </div>
      <div className="bg-[#0d3b66] flex items-center justify-between h-16 px-4 sm:px-8">
        <button className="text-[#faf0ca] block sm:hidden" onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className="hidden sm:flex flex-grow justify-center space-x-4">
          <Link
            to="/general"
            className="rounded-md px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            rel="noopener"
          >
            GENERAL
          </Link>
          <Link
            to="/business"
            className="rounded-md px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            rel="noopener"
          >
            BUSINESS
          </Link>
          <Link
            to="/entertainment"
            className="rounded-md px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            rel="noopener"
          >
            ENTERTAINMENT
          </Link>
          <Link
            to="/health"
            className="rounded-md px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            rel="noopener"
          >
            HEALTH
          </Link>
          <Link
            to="/science"
            className="rounded-md px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            rel="noopener"
          >
            SCIENCE
          </Link>
          <Link
            to="/sports"
            className="rounded-md px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            rel="noopener"
          >
            SPORTS
          </Link>
          <Link
            to="/technology"
            className="rounded-md px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            rel="noopener"
          >
            TECHNOLOGY
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Shown/Hidden based on isOpen state) */}
      {isOpen && (
        <div className="bg-[#0d3b66] flex flex-col items-center sm:hidden">
          <Link
            to="/general"
            className="block px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            onClick={toggleMenu}
            rel="noopener"
          >
            GENERAL
          </Link>
          <Link
            to="/business"
            className="block px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            onClick={toggleMenu}
            rel="noopener"
          >
            BUSINESS
          </Link>
          <Link
            to="/entertainment"
            className="block px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            onClick={toggleMenu}
            rel="noopener"
          >
            ENTERTAINMENT
          </Link>
          <Link
            to="/health"
            className="block px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            onClick={toggleMenu}
            rel="noopener"
          >
            HEALTH
          </Link>
          <Link
            to="/science"
            className="block px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            onClick={toggleMenu}
            rel="noopener"
          >
            SCIENCE
          </Link>
          <Link
            to="/sports"
            className="block px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            onClick={toggleMenu}
            rel="noopener"
          >
            SPORTS
          </Link>
          <Link
            to="/technology"
            className="block px-3 py-2 text-base font-medium text-[#faf0ca] hover:bg-[#faf0ca] hover:text-[#0d3b66]"
            onClick={toggleMenu}
            rel="noopener"
          >
            TECHNOLOGY
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
