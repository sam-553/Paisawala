import React from "react";

const ShortTermLoan = () => {
  const features = [
    {
      title: "Quick Disbursal",
      desc: "Get funds credited to your account in 24-48 hrs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-clock text-purple-600"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: "Flexible Repayment",
      desc: "Choose repayment from 3 to 12 months (up to 24 months on good credit/proof)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-trending-down text-purple-600"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
          <polyline points="16 17 22 17 22 11"></polyline>
        </svg>
      ),
    },
    {
      title: "Documentation",
      desc: "100% online process with minimal paperwork",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-file-text text-purple-600"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
      ),
    },
    {
      title: "Hassle-free process",
      desc: "Use for medical bills, travel, shopping, festive bills or any expense",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-zap text-purple-600"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
    },
  ];

  const eligibility = [
    "Need cash urgently but can repay within a year",
    "Have small temporary expenses (medical bills, last-minute travel, etc.)",
    "Don't want the burden of long-term debt",
    "Have decent regular income (₹10,000—₹15,000+)",
    "Prefer fast approval and zero hassle",
  ];

  const steps = [
    "Check your eligibility on Paisawala; see offers",
    "Compare lenders, choose the best rate/term",
    "Submit minimal document digitally",
    "Get approved—fast (often within hours)",
    "Receive the funds to your bank (24-48 hours)",
  ];

  const charges = [
    "Interest rates: Typically range from 12-26% p.a. (depending on credit profile)",
    "Processing fee: 1.5-3% of loan amount",
    "Pre-payment: Some lenders allow free or low-cost pre-closure",
    "Late payment penalties may apply if EMIs are missed",
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm mb-4">
              Paisawala.com - Login to Become Human
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Short Term Personal Loan (STPL)
            </h1>
            <p className="text-lg mb-6 text-white/90">
              Need funds fast for a few months? A Short-Term Personal Loan (STPL) gets you
              the money quickly—and you repay it over a short period (typically 3-24 months).
            </p>
            <p className="text-sm mb-6 text-white/90">
              Unlike long-term loans, STPLs are ideal for immediate, smaller expenses—medical
              bills, travel, urgent repairs, or other pressing needs. With Paisawala, you get
              a hassle-free digital application and quick disbursal.
            </p>
            <p className="text-sm mb-6 text-white/90">
              Loan: ₹10,000 to ₹5 Lakhs | Loan Approval (Flexible Repayment) (Instant Disbursal)
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Why Choose a Short Term Personal Loan?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-green-500">✔</div>
                  <span className="font-semibold">
                    Quick repayment term (3-12 months) — based on your convenience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-green-500">✔</div>
                  <span className="font-semibold">
                    Minimal paperwork (entirely through Paisawala digital engine)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-green-500">✔</div>
                  <span className="font-semibold">Instant decision, no waiting for weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-green-500">✔</div>
                  <span className="font-semibold">
                    Lower overall interest because the tenure is short, versus paying interest for
                    3-5 years
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Check <span className="text-purple-600">STPL Offers</span>
            </h2>
            <p className="text-sm text-gray-600 mb-6">Enter Mobile Number</p>
            <form>
              <div className="mb-4">
                <label className="block text-xs text-gray-600 mb-2">10 Digit Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <p className="text-xs text-gray-500 mb-6">
                By submitting this form, you agree to the{" "}
                <a href="#" className="text-purple-600 underline">
                  Paisawala Terms of Use & Privacy Policy
                </a>
              </p>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Features and Benefits of <span className="text-purple-600">STPL</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Who Should Apply for STPL?</h2>
          <p className="text-gray-700 mb-6">Short Term Personal Loans are ideal if you:</p>
          <ul className="space-y-3">
            {eligibility.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 text-green-500">✔</div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 px-6 bg-purple-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How to Apply via Paisawala</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charges */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Charges & Interest</h2>
          <ul className="space-y-3">
            {charges.map((charge, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 text-green-500">✔</div>
                <span className="text-gray-700">{charge}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ShortTermLoan;
