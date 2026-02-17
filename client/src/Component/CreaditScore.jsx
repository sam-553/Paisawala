import React, { useState } from "react";

const CreditScore = () => {
  const [score, setScore] = useState(300);

  const getStatus = () => {
    if (score < 500) return "Very Poor";
    if (score < 650) return "Poor";
    if (score < 700) return "Fair";
    if (score < 750) return "Good";
    return "Excellent";
  };

  // Needle rotation
  const rotation = ((score - 300) / 600) * 180 - 90;

  return (
    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Know Your <span className="text-purple-600">Credit Health</span>
          </h2>

          <p className="text-gray-600 mb-6">
            Move the slider to check how credit score category changes.
          </p>

          {/* Slider */}
          <input
            type="range"
            min="300"
            max="900"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="w-full max-w-md accent-purple-600"
          />
        </div>

        {/* RIGHT GAUGE */}
        <div className="relative w-96 h-48 mx-auto">
          <svg viewBox="0 0 200 120" className="w-full">

            {/* Colored arcs */}
            <path d="M 20 100 A 80 80 0 0 1 50 30"
              fill="none" stroke="#ef4444" strokeWidth="16" strokeLinecap="round" />
            <path d="M 50 30 A 80 80 0 0 1 100 10"
              fill="none" stroke="#f97316" strokeWidth="16" strokeLinecap="round" />
            <path d="M 100 10 A 80 80 0 0 1 150 30"
              fill="none" stroke="#eab308" strokeWidth="16" strokeLinecap="round" />
            <path d="M 150 30 A 80 80 0 0 1 180 100"
              fill="none" stroke="#22c55e" strokeWidth="16" strokeLinecap="round" />

            {/* Needle */}
            <g transform={`rotate(${rotation} 100 100)`}>
              <line
                x1="100"
                y1="100"
                x2="100"
                y2="30"
                stroke="#1e293b"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="100" cy="100" r="6" fill="#1e293b" />
            </g>
          </svg>

          {/* Labels */}
          <div className="absolute top-2 left-4 text-xs font-medium text-red-600">VERY POOR</div>
          <div className="absolute top-2 left-1/4 text-xs font-medium text-orange-600">POOR</div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-medium text-yellow-600">FAIR</div>
          <div className="absolute top-2 right-1/4 text-xs font-medium text-lime-600">GOOD</div>
          <div className="absolute top-2 right-4 text-xs font-medium text-green-600">EXCELLENT</div>

          {/* Score display */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
            <div className="text-5xl font-bold text-gray-800 mb-1">
              {score}
            </div>
            <div className="text-lg font-semibold text-gray-600">
              {getStatus()}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreditScore;
