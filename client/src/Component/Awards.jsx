import React, { useState, useEffect } from "react";

const awards = [
  "Outstanding Performance Award 2024",
  "Customer Excellence Recognition",
  "Top Fintech Growth Partner",
  "Service Excellence Certificate",
  "Best Loan Partner Award",
  "Innovation in Finance",
  "Customer Trust Award",
  "Financial Inclusion Champion",
  "Digital Lending Excellence",
  "Credit Card Partner Award",
  "Highest Conversion Award",
  "Fastest Growing Fintech",
  "Partner Success Recognition",
  "Customer Satisfaction Award",
  "Loan Service Excellence",
  "Premium Fintech Brand Award",
];

// split into groups of 4
const groupedAwards = [];
for (let i = 0; i < awards.length; i += 4) {
  groupedAwards.push(awards.slice(i, i + 4));
}

const Awards=()=> {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % groupedAwards.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Awards & Recognitions
        </h2>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {groupedAwards.map((group, i) => (
              <div key={i} className="min-w-full grid md:grid-cols-4 gap-6">
                {group.map((award, j) => (
                  <div
                    key={j}
                    className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:scale-105 transition"
                  >
                    <div className="text-4xl mb-3">🏆</div>
                    <p className="text-sm font-medium text-gray-700">
                      {award}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Only 4 Buttons */}
        <div className="flex justify-center gap-3 mt-8">
          {groupedAwards.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? "bg-purple-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* media mention */}
 <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            What world has to say about
            <span className="text-purple-600"> Paisewaala</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-10 text-xl font-bold text-gray-700">
            <span className="hover:text-purple-600 transition">
              Business Standard
            </span>
            <span className="hover:text-purple-600 transition">
              NDTV Profit
            </span>
            <span className="hover:text-purple-600 transition">
              India Trust of India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default  Awards