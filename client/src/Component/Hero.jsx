import React, { useState, useEffect } from "react";

const cards = [
  {
    title: "Instant Personal Loan",
    subtitle: "Fast Approval • Quick Disbursal",
    desc: "Apply online in minutes and get instant loan approval with minimal documents. Simple, secure and hassle-free process.",
    btn: "Apply Now",
  },
  {
    title: "Check Credit Score Free",
    subtitle: "No Cost • No Impact",
    desc: "Track your credit health anytime. Get your credit score instantly and improve your chances for better loan offers.",
    btn: "Check Score",
  },
  {
    title: "Best Credit Cards",
    subtitle: "Cashback • Rewards • Travel",
    desc: "Compare top credit cards with exclusive benefits, cashback offers and easy approval — all in one place.",
    btn: "Explore Cards",
  },
  {
    title: "Build Good Credit Score",
    subtitle: "Better Loans • Lower Interest",
    desc: "Maintain a strong credit profile to unlock premium financial products, higher limits and lower interest rates.",
    btn: "Learn More",
  },
];
const stats = [
  { value: "84%", label: "Conversion Ratio" },
  { value: "2150Cr", label: "Assets Managed" },
  { value: "96%", label: "Customer Satisfaction" },
  { value: "980+", label: "Location Served" },
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(false);

  // Auto slider
  useEffect(() => {
    if (pause) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [pause]);

  const next = () => setActive((active + 1) % cards.length);
  const prev = () =>
    setActive((active - 1 + cards.length) % cards.length);

  return (
    <section className="bg-gradient-to-br from-purple-700 via-indigo-700 to-teal-600 text-white py-24 px-6 relative overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT TEXT */}
        <div>
          <p className="text-sm mb-4 text-green-300 tracking-widest uppercase">
            Paisewaala
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Aapki Choti Zarurato ka  
            <span className="text-yellow-300"> Bharosemand </span>  
            Saathi
          </h1>

          <p className="text-white/80 max-w-md">
            Instant loans, credit cards, EMI tools & financial solutions —
            all in one platform.
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div
          className="relative"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {/* Card */}
          <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl p-8 text-gray-800 transition-all duration-700">

            {/* Browser Header */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex-1 bg-gray-200 rounded-full h-8 mx-4" />
            </div>

            {/* Content */}
            <div className="min-h-[240px] transition-all duration-700">
              <h2 className="text-2xl font-bold text-purple-700 mb-3">
                {cards[active].title}
              </h2>

              <p className="text-gray-500 mb-2">
                {cards[active].subtitle}
              </p>

              <p className="text-gray-600 mb-6">
                {cards[active].desc}
              </p>

              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg transition">
                {cards[active].btn}
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all rounded-full ${
                    active === i
                      ? "bg-purple-600 w-8 h-2"
                      : "bg-gray-300 w-2 h-2"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-[-25px] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg"
          >
            ◀
          </button>

          <button
            onClick={next}
            className="absolute right-[-25px] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
    
  );
};

export default Hero;
