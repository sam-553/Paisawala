import React, { useState, useEffect } from "react";

const cards = [
  {
    title: "Instant Personal Loan",
    subtitle: "Fast Approval • Quick Disbursal",
    desc: "Apply online in minutes and get instant loan approval with minimal documents. Simple, secure and hassle-free process.",
    btn: "Download App Now",
  },
  {
  title: "Credit Card",
  subtitle: "Instant Approval • Reward Benefits",
  desc: "Apply for a credit card with exclusive rewards, cashback offers, and flexible repayment options. Enjoy secure transactions and build your credit score with every purchase.",
  btn: "Download App Now",
},
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [pause]);

  const next = () => setActive((prev) => (prev + 1) % cards.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <section className="bg-gradient-to-br from-purple-700 via-indigo-700 to-teal-600 text-white py-14 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden mt-10">

      {/* Glow Effect */}
      <div className="absolute w-[350px] sm:w-[400px] md:w-[500px] h-[350px] sm:h-[400px] md:h-[500px] bg-purple-500 opacity-20 blur-[120px] rounded-full top-[-120px] left-[-120px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug md:leading-tight mb-6">
            Aapki Choti Zarurato ka{" "}
            <span className="text-yellow-300">Bharosemand</span>{" "}
            Saathi
          </h1>

          <p className="text-white/80 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Instant loans, credit cards, EMI tools & financial solutions —
            all in one platform.
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div
          className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {/* Card */}
          <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 text-gray-800 transition-all duration-700 min-h-[380px] flex flex-col justify-between">

            {/* Browser Header */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex-1 bg-gray-200 rounded-full h-8 mx-4" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-700 mb-3">
                {cards[active].title}
              </h2>

              <p className="text-gray-500 mb-2 text-sm sm:text-base">
                {cards[active].subtitle}
              </p>

              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                {cards[active].desc}
              </p>

              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg transition">
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

          {/* Desktop Arrows Only */}
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg"
          >
            ◀
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;