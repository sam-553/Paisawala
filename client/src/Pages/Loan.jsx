import React from "react";
import { Link } from "react-router-dom";
import { CreditCard, RefreshCw, DollarSign, ToolCase, CheckCircle } from "lucide-react";

const Loan = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-6 md:p-10 rounded-2xl shadow-xl gap-8 relative overflow-hidden mt-16">

      {/* Top-Left: Main Loan Card */}
      <div className="flex-1 flex justify-center md:justify-start hidden md:block mb-60 ">
        <Link
          to="/personalloan"
          className="flex flex-col items-center justify-center w-40 md:w-44 h-14 rounded-2xl p-4 text-white font-bold
                     bg-gradient-to-br from-green-400 to-blue-500
                     hover:from-blue-500 hover:to-green-400
                     shadow-2xl hover:shadow-3xl
                     transition-all duration-700 transform hover:scale-105 text-center"
        >
          <DollarSign size={28} className="mb-1 md:mb-2 animate-bounce" />
          <span className="text-sm md:text-lg">Personal Loan</span>
        </Link>
      </div>

      {/* Middle: Other Loan Options */}
      <div className="flex-1 flex flex-col md:justify-center gap-4 md:gap-5 mt-6 md:mt-0 w-full max-w-md">
        {[
          { text: "Fresh Personal Loan", icon: <RefreshCw size={24} className="text-blue-600" />, link: "/personalloan", bg: "from-blue-100 to-blue-200" },
          { text: "Debt Consolidation", icon: <CreditCard size={24} className="text-purple-600" />, link: "/debconsolidation", bg: "from-purple-100 to-purple-200" },
          { text: "Flexi Loan / Overdraft", icon: <ToolCase size={24} className="text-green-600" />, link: "/overdraft", bg: "from-green-100 to-green-200" },
          { text: "Upto 50 Lakh Loan", icon: <DollarSign size={24} className="text-yellow-600" />, link: "/shorttermloan", bg: "from-yellow-100 to-yellow-200" },
        ].map((loan, index) => (
          <Link
            key={index}
            to={loan.link}
            className={`flex items-center gap-4 px-5 py-3 md:px-6 md:py-4 bg-gradient-to-r ${loan.bg} rounded-xl shadow-md
                       hover:shadow-xl hover:scale-105 transition-all duration-300`}
          >
            {loan.icon}
            <span className="font-semibold text-gray-800 text-sm md:text-base">{loan.text}</span>
          </Link>
        ))}
      </div>

      {/* Right Side: Quick Summary */}
      <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6 mt-6 md:mt-0 w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-600">
          Personal Loans — Quick Summary
        </h2>

        <ul className="space-y-3">
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
                size={20} 
                className="text-green-500 group-hover:animate-bounce transition-all duration-300"
              />
              <span className="font-medium text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-green-200 rounded-full opacity-20 animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-blue-200 rounded-full opacity-20 animate-pulse -z-10"></div>
    </section>
  );
};

export default Loan;
