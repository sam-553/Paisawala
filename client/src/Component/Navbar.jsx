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
            to="/aboutus"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors relative group"
          >
          About Us
            
          </Link>

          <Link
            to="/termsconditions"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            Term & Conditions
          </Link>

          <Link
            to="/privacy"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors relative group"
          >
            Privacy Policy
            
          </Link>

          <Link
            to="/blog"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            Blog
          </Link>

         
        
          <Link
            to="#"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors bg-gray-200 px-4 py-2 rounded-md"
          >
          Download App Now
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
        className={`md:hidden bg-white shadow-lg px-6  overflow-hidden transition-max-height duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/aboutus" onClick={() => setOpen(false)}  className="hover:text-blue-600 transition-colors">
           About Us
          </Link>
          <Link to="/termsconditions" className="hover:text-blue-600 transition-colors" onClick={() => setOpen(false)} >
            Term & Conditions
          </Link>
          <Link to="/privacy" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">
           Privacy Policy
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
