import React, { useState } from "react";

const PersonalLoan = () => {
  const [bank, setBank] = useState("");
  const [roi, setRoi] = useState(12);
  const [amount, setAmount] = useState(100000);
  const [emi, setEmi] = useState(null);

  const banks = [
    "Bajaj Finserv",
    "IDFC First Bank",
    "Kotak Mahindra Bank",
    "Axis Bank",
    "Axis Finance",
    "Chola",
    "Aditya Birla Capital",
    "Tata Capital",
  ];

  const partners = [
    "IDFC First Bank",
    "Tata Capital",
    "Bajaj Finserv",
    "Axis Bank",
    "Kotak Mahindra",
    "HDFC Bank",
    "ICICI Bank",
    "Fullerton India",
    "IndusInd Bank",
    "MoneyTap",
    "CASHe",
    "Kissht",
  ];

  const calculateEmi = () => {
    const r = roi / 12 / 100;
    const n = 12;

    const emiVal =
      (amount * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    setEmi(Math.round(emiVal));
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Personal Loan Via Paisawala
            </h1>

            <p className="text-purple-100 mb-6">
              Quick access to funds for travel, emergency, wedding or home
              renovation. Compare top lenders, apply instantly and track
              your credit score easily.
            </p>

            <ul className="space-y-2">
              <li>✔ Free Credit Score Check</li>
              <li>✔ Compare Top Bank Offers</li>
              <li>✔ ₹50K – ₹50L Loan Range</li>
              <li>✔ Fast Safe Disbursal</li>
              <li>✔ Dedicated Loan Expert</li>
            </ul>
          </div>

          <div className="bg-white text-gray-900 rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Check Personal Loan Offers
            </h2>

            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full border rounded-lg px-4 py-3 mb-4"
            />

            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* PERSONAL LOAN USES */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Personal Loan Uses
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            "Vacation",
            "Emergency",
            "Wedding",
            "Education",
            "Debt Consolidation",
            "Gadgets",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-lg hover:scale-105 transition"
            >
              <h4 className="font-semibold text-lg">{item}</h4>
              <p className="text-sm text-gray-600 mt-2">
                Flexible financing for your {item.toLowerCase()} needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTEREST RATE CALCULATOR */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Interest Rates Chart
          </h2>

          <p className="text-gray-600">
            Compare interest rates, loan amounts, and processing fees
            to find the best personal loan offer. Evaluate EMI per lakh
            and make informed financial decisions easily.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

          <div className="grid md:grid-cols-3 gap-6 mb-6">

            <div>
              <label className="font-semibold text-sm block mb-2">
                Select Bank
              </label>

              <select
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400"
              >
                <option>Select Bank</option>
                {banks.map((b, i) => (
                  <option key={i}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-semibold text-sm block mb-2">
                Select ROI %
              </label>

              <input
                type="number"
                value={roi}
                onChange={(e) => setRoi(Number(e.target.value))}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="font-semibold text-sm block mb-2">
                Loan Amount
              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          <button
            onClick={calculateEmi}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:opacity-90"
          >
            Check Now
          </button>

          {emi && (
            <div className="mt-6 text-center bg-purple-50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold">
                Estimated EMI
              </h3>
              <p className="text-2xl font-bold text-purple-700">
                ₹ {emi} / month
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FEATURES & BENEFITS */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features and Benefits of Personal Loan
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            "Instant Approval",
            "Minimal Documentation",
            "Flexible Tenure",
            "Competitive Interest Rates",
            "No Collateral Required",
            "Quick Disbursal",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-purple-50 rounded-xl text-center hover:shadow-lg hover:scale-105 transition"
            >
              ⭐ {item}
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Lending Partners
        </h2>

        <div className="flex justify-center gap-6 flex-wrap px-6">
          {partners.map((p, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-xl p-6 text-center w-40 hover:scale-105 transition"
            >
              🏦
              <p className="font-semibold mt-2">{p}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PersonalLoan;