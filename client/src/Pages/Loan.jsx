import React from "react";
import { Link } from "react-router-dom";
import { CreditCard, RefreshCw, DollarSign, ToolCase, CheckCircle } from "lucide-react";

const Loan = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-10 rounded-2xl shadow-xl gap-10 mt-16 relative overflow-hidden">

      {/* Top-Left: Main Loan Card */}
      <div className="flex-1 flex justify-start md:justify-start">
        <Link
          to="/personal-loan"
          className="flex flex-col items-center justify-center w-44 h-14 rounded-2xl p-4 text-white font-bold
                     bg-gradient-to-br from-green-400 to-blue-500
                     hover:from-blue-500 hover:to-green-400
                     shadow-2xl hover:shadow-3xl
                     transition-all duration-700 transform hover:scale-105 text-center mb-70"
        >
          <DollarSign size={32} className="mb-2 animate-bounce" />
          <span className="text-base md:text-lg">Personal Loan</span>
        </Link>
      </div>

      {/* Middle: Other Loan Options */}
      <div className="flex-1 flex flex-col md:justify-center gap-5 mb-20">
        <Link
          to="/personalloan"
          className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-md 
                     hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <RefreshCw size={24} className="text-blue-600" />
          <span className="font-semibold text-gray-800">Fresh Personal Loan</span>
        </Link>
        <Link
          to="/debconsolidation"
          className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl shadow-md 
                     hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <CreditCard size={24} className="text-purple-600" />
          <span className="font-semibold text-gray-800">Debt Consolidation</span>
        </Link>
        <Link
          to="/overdraft"
          className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-green-100 to-green-200 rounded-xl shadow-md 
                     hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <ToolCase size={24} className="text-green-600" />
          <span className="font-semibold text-gray-800">Flexi Loan / Overdraft</span>
        </Link>
        <Link
          to="/shorttermloan"
          className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl shadow-md 
                     hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <DollarSign size={24} className="text-yellow-600" />
          <span className="font-semibold text-gray-800">Upto 50 Lakh Loan</span>
        </Link>
      </div>

      {/* Right Side: Quick Summary */}
      <div className="flex-1 text-center md:text-left space-y-6 mb-40">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-600 ">
          Personal Loans — Quick Summary
        </h2>

        <ul className="space-y-4">
          {[
            "Apply online in minutes",
            "Borrow up to 50 Lakhs",
            "Best Loan offers guaranteed"
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700 hover:text-green-500 transition-all duration-300 cursor-pointer group"
            >
              <CheckCircle
                size={24}
                className="text-green-500 group-hover:animate-bounce transition-all duration-300"
              />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full opacity-20 animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-pulse -z-10"></div>
    </section>
  );
};

export default Loan;
