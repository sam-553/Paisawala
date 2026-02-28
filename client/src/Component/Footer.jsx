import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Paisewaala
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Smart financial solutions for loans, credit cards, and insurance.
              Empowering individuals and businesses to grow with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-purple-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="hover:text-purple-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/termsconditions"
                  className="hover:text-purple-600 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-purple-600 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-purple-600 transition"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-lg">
              Registered Office
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Paisewaala</strong><br />
              Chamber No. 1-4, Tanvi Arcade, 1st Floor,<br />
              Bharti Building, Darwha Road,<br />
              Opp. Gramin Police Station,<br />
              Yavatmal – 445001
            </p>

            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <p>
                📞{" "}
                <Link
                  to="tel:07232246247"
                  className="hover:text-purple-600 transition"
                >
                  07232-246-247
                </Link>
              </p>
              <p>
                📧{" "}
                <Link
                  to="care@paisewaala.in"
                  className="hover:text-purple-600 transition"
                >
                  care@paisewaala.in
                </Link>
              </p>
           
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-lg">
              Stay Updated
            </h3>

            <p className="text-sm mb-4 text-gray-600">
              Get exclusive loan offers, rate updates & financial tips.
            </p>

            <form onSubmit={handleSubscribe}>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus("");
                  }}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                />

                <button
                  type="submit"
                  disabled={!email || status === "loading"}
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
          © {new Date().getFullYear()} Paisewaala. Empowering India’s Financial Growth with Trust & Transparency.
        </div>

      </div>
    </footer>
  );
};

export default Footer;