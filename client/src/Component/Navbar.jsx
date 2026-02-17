import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/logo.jpeg"
            alt="Logo"
            className="h-8 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-600 items-center">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/loans"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors relative group"
          >
            Loans
            <ChevronDown
              className="transition-transform duration-300 group-hover:rotate-180"
              size={16}
            />
          </Link>

          <Link
            to="/cards"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            Cards
          </Link>

          <Link
            to="/tools"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors relative group"
          >
            Tools
            <ChevronDown
              className="transition-transform duration-300 group-hover:rotate-180"
              size={16}
            />
          </Link>

          <Link
            to="/blog"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            Blog
          </Link>

          {/* Credit Score Button */}
          <button className="relative flex items-center px-4 py-2 rounded-full overflow-hidden font-medium text-white mr-28 
            bg-gradient-to-r from-blue-500 to-blue-700 
            hover:from-blue-600 hover:to-blue-800 
            transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            {/* Free Badge at the left border */}
            <span className="absolute left-0 top-0 h-full w-14 flex items-center justify-center bg-white text-green-500 font-bold rounded-l-full 
              shadow-inner transform hover:scale-110 transition-transform duration-300"
            >
              Free
            </span>

            <span className="ml-16 text-white tracking-wide">Credit Score</span>
          </button>

          {/* Login Link */}
          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors bg-gray-200 px-4 py-2 rounded-md"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg px-6 pb-6 overflow-hidden transition-max-height duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/loans" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">
            Loans
          </Link>
          <Link to="/cards" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">
            Cards
          </Link>
          <Link to="/tools" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">
            Tools
          </Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
