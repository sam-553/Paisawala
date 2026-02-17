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
    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, i) =>
          count < stats[i].value
            ? count + Math.ceil(stats[i].value / 50)
            : stats[i].value
        )
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Numbers That Define{" "}
          <span className="text-purple-600">Paisewaala Trust</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {counts[i]}{item.suffix}
              </div>
              <div className="text-gray-600 font-medium">
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
