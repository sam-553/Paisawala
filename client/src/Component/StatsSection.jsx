import React, { useEffect, useState } from "react";

const stats = [
  { value: 84, suffix: "%", label: "Conversion Ratio" },
  { value: 2150, suffix: "Cr", label: "Assets Managed" },
  { value: 96, suffix: "%", label: "Customer Satisfaction" },
  { value: 980, suffix: "+", label: "Location Served" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // total animation time
    const steps = 50;
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, i) => {
          const increment = Math.ceil(stats[i].value / steps);
          const next = count + increment;
          return next >= stats[i].value ? stats[i].value : next;
        })
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 leading-snug">
          Numbers That Define{" "}
          <span className="text-purple-600">Paisewaala Trust</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="text-center p-4 sm:p-6 rounded-xl hover:shadow-xl hover:scale-105 transition duration-300 bg-white"
            >
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-2">
                {counts[i]}{item.suffix}
              </div>

              <div className="text-sm sm:text-base text-gray-600 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;