import React from "react";

const Finance=()=> {
  return (
    <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-14 px-6 relative overflow-hidden">

      {/* Animated background circles */}
      <div className="absolute w-72 h-72 bg-purple-300 opacity-20 rounded-full -top-10 -left-10 blur-3xl animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-300 opacity-20 rounded-full -bottom-10 -right-10 blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 text-center hover:shadow-2xl transition duration-500">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-snug">
            A few easy steps can help you practice better financial
            decision-making.
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">

            {/* Outline Button */}
            <button className="group border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-purple-50 hover:scale-105 transition">
              Begin Now
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Filled Button */}
            <button className="group bg-purple-600 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-purple-700 hover:scale-105 shadow-md transition">
              Contact Us
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
export default Finance