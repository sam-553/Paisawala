import React, { useState } from "react";

const faqs = [
  {
    q: "What is a personal loan?",
    a: "A personal loan is an unsecured loan you can use for expenses like travel, education, medical needs, or emergencies.",
  },
  {
    q: "How much time does it take to get the loan approved?",
    a: "Approval usually takes a few hours to 48 hours depending on eligibility and documents.",
  },
  {
    q: "Will Paisewaala charge any fee from its customers?",
    a: "Basic consultation is free. Any charges will always be clearly disclosed before processing.",
  },
  {
    q: "Can I track my loan application?",
    a: "Yes, you can track status through dashboard updates or support assistance.",
  },
  {
    q: "Who can apply for a personal loan?",
    a: "Salaried employees, self-employed professionals, and business owners meeting eligibility criteria can apply.",
  },
];

const Faq=()=> {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Illustration */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
              <span className="text-8xl">❓</span>
            </div>

            {/* Floating dots */}
            <div className="absolute top-0 left-12 w-10 h-10 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="absolute top-12 right-0 w-10 h-10 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-12 left-0 w-10 h-10 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-0 right-12 w-10 h-10 bg-indigo-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* FAQ Right */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Got a question,
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8">
            Lets get you answers !
          </h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className=" rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span className="font-medium text-gray-800">
                    {item.q}
                  </span>

                  <svg
                    className={`w-5 h-5 transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`px-4 transition-all duration-300 overflow-hidden ${
                    open === i ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Faq