import React from "react";

const partners = [
  "InCred",
  "TATA CAPITAL",
  "IDFC FIRST BANK",
  "Finnable",
  "Kotak",
  "BAJAJ FINSERV",
  "MUTHOOT CAPITAL",
  "AXIS BANK",
  "Moneyview",
  "HDB",
  "Piramal",
  "TVS CREDIT",
  "Indifi",
  "Aditya Birla",
  "IIFL",
  "SmartCoin",
  "Chola",
  "FlexSalary",
  "Protium",
  "FundLoans",
  "Navi Finserv",
];

const Partners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Our <span className="text-purple-600">Partners</span>
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Get on board & unlock{" "}
          <span className="text-purple-600 font-semibold">
            financial freedom
          </span>
        </p>

        {/* Auto Scroll Wrapper */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">

            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="
                  min-w-[180px]
                  bg-white border rounded-xl p-6
                  flex items-center justify-center
                  shadow-sm cursor-pointer
                  transition duration-300
                  hover:scale-110
                  hover:-translate-y-2
                  hover:shadow-purple-200 hover:shadow-xl
                  hover:border-purple-500
                "
              >
                <span className="font-semibold text-gray-700 hover:text-purple-600">
                  {partner}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 10s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Partners;
