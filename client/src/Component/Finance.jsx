import React from "react";
import { Link } from "react-router-dom";

const Finance = () => {
  const phoneNumber = "917232246247";
  const message = "Hi Paisewaala team, I want more details about your services.";
  const encodedMessage = encodeURIComponent(message);
  return (
    <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-14 px-6 relative overflow-hidden">

      
      <div className="absolute w-72 h-72 bg-purple-300 opacity-20 rounded-full -top-10 -left-10 blur-3xl animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-300 opacity-20 rounded-full -bottom-10 -right-10 blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 text-center hover:shadow-2xl transition duration-500">

         
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-snug">
            A few easy steps can help you practice better financial
            decision-making.
          </h2>

         
          <div className="flex flex-col sm:flex-row justify-center gap-5">



            
            <Link
              to={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-purple-600 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-purple-700 hover:scale-105 shadow-md transition">
              Chat with Us
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
export default Finance