import React, { useEffect, useState } from "react";

const reviews = [
  {
    name: "Subhash Sorkul",
    text: "Dear Team Paisewaala, thank you for assisting throughout the process.",
  },
  {
    name: "Manoj Kumar",
    text: "Exceptional financial support and smooth loan experience.",
  },
  {
    name: "Mukul Kumar Jha",
    text: "Prompt responses and great support during loan approval.",
  },
  {
    name: "Amit Patel",
    text: "Commitments fulfilled on time. Very happy with service.",
  },
  {
    name: "Sanjay Kumar",
    text: "Very helpful team and quick service.",
  },
];

const Testimonials=()=> {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-white text-4xl">💬</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            What People think about
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
            Paisewaala
          </h2>

          <p className="text-green-600 text-lg mb-2 max-w-md transition">
            {reviews[index].text}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            — {reviews[index].name}
          </p>

          {/* dots */}
          <div className="flex gap-2 mt-4">
            {reviews.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  i === index ? "bg-purple-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="grid md:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold">
                  {r.name[0]}
                </div>
                <h4 className="font-semibold text-sm">{r.name}</h4>
              </div>
              <p className="text-sm text-gray-600">{r.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Testimonials