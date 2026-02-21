import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // loading | success | error

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulated API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div className="w-full">
          <h2 className="text-xl font-bold text-purple-700 mb-4">
            FinancePro
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We provide smart financial solutions including loans, credit cards,
            and insurance to help you grow with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full">
          <h3 className="font-semibold mb-4 text-gray-900">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-purple-700">Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-700">About</Link></li>
            <li><Link to="/services" className="hover:text-purple-700">Services</Link></li>
            <li><Link to="/contact" className="hover:text-purple-700">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="w-full">
          <h3 className="font-semibold mb-4 text-gray-900">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Personal Loan</li>
            <li>Business Loan</li>
            <li>Credit Card</li>
            <li>Insurance</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full">
          <h3 className="font-semibold mb-4 text-gray-900">
            Stay Updated
          </h3>

          <p className="text-sm mb-4 text-gray-600">
            Get exclusive loan offers & lower interest rate alerts.
          </p>

          <form onSubmit={handleSubscribe} className="w-full">
            <div className="w-full flex flex-col sm:flex-row gap-2">

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full sm:w-auto px-6 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none text-white transition ${
                  status === "loading"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-700 hover:bg-purple-800"
                }`}
              >
                {status === "loading" ? "Sending..." : "Subscribe"}
              </button>

            </div>
          </form>

          {status === "error" && (
            <p className="text-red-500 text-sm mt-2">
              Please enter a valid email address.
            </p>
          )}

          {status === "success" && (
            <p className="text-green-600 text-sm mt-2">
              ✅ Successfully subscribed!
            </p>
          )}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FinancePro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;