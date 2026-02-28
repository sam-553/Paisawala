import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Add background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Term & Conditions", path: "/termsconditions" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/logo.webp"
            alt="Logo"
            className="h-9 w-auto object-contain "
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.name}

              {/* Active underline */}
              {location.pathname === link.path && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>
          ))}

          {/* CTA Button */}
         <a
  href="https://paisewaala.in/Paisewaala.apk"
  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 group"
>
  <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition duration-300"></span>
  <span className="relative z-10 flex items-center gap-2">
    Download App
  </span>
</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-lg`}
      >
        <nav className="flex flex-col gap-5 px-6 py-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${
                location.pathname === link.path
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

         
        </nav>
      </div>
    </header>
  );
};

export default Navbar;