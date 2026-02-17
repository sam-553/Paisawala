import React from "react";
import { Link } from "react-router-dom";
import { CreditCard, LineChart, ToolCase, CheckCircle } from "lucide-react";

const Tools = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-10 rounded-2xl shadow-xl gap-10 mt-16 relative overflow-hidden ">

    
<div className="flex-1 flex justify-start md:justify-start ">
  <Link
    to="/tools"
    className="flex  items-center justify-center w-40 h-12 space-y-6 rounded-2xl p-4 text-white font-bold shadow-2xl
               bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400
               hover:from-yellow-400 hover:via-purple-500 hover:to-pink-500
               transition-all duration-700 transform hover:scale-105 hover:shadow-3xl
               text-center mb-44"
  >
    <ToolCase size={32} className="mb-2 animate-bounce" />
    <span className="text-base md:text-lg">All Tools</span>
  </Link>
</div>



      {/* Middle: Tool Options */}
      <div className="flex-1 flex flex-col md:justify-center gap-5 mb-20">
        <Link
          to="/emicalculator"
          className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <LineChart size={24} className="text-blue-600" />
          <span className="font-semibold text-gray-800">EMI Calculator</span>
        </Link>
        <Link
          to="/ifscsearch"
          className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <CreditCard size={24} className="text-purple-600" />
          <span className="font-semibold text-gray-800">IFSC Code Search</span>
        </Link>
      </div>

      {/* Right Side: Quick Summary */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
          EMI Calculator — Quick Summary
        </h2>

        <ul className="space-y-4">
          {[
            "Calculate monthly installment",
            "Break down principal and interest",
            "Support prepayment & comparison"
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

export default Tools;
