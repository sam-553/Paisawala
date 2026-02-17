import React from "react";

const Overdraft = () => {
  return (
    <div className="min-h-screen bg-white font-sans mt-10">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm mb-4">
              Paisawala.com - Login to Become Human
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Flexiloan/Overdraft — Flexible Credit
            </h1>
            <p className="text-lg mb-6 text-white/90">
              Get a flexible credit limit you can tap into whenever you need—like a safety net for irregular expenses or short-term cash flow gaps.
            </p>
            <p className="text-sm mb-6 text-white/90">
              Whether it's covering urgent bills, managing cash flows, or seizing a sudden opportunity, a personal overdraft gives you the control. Borrow only what you need, pay interest on what you actually use, and reuse the facility as you repay.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                Why Choose an Overdraft Personal Credit Line with Paisawala?
              </h3>
              <ul className="space-y-3">
                {[
                  "Pre-approved limits from top banks & NBFCs",
                  "Interest only on amount used",
                  "Withdraw & repay as needed, giving you flexibility in the dynamic world",
                  "100% digital onboarding, without cumbersome paperwork",
                  "Quick digital approval through Paisawala"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle mt-0.5 flex-shrink-0">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Check <span className="text-purple-600">Overdraft Offers</span>
            </h2>
            <p className="text-sm text-gray-600 mb-6">Enter Mobile Number</p>
            <form>
              <div className="mb-4">
                <label className="block text-xs text-gray-600 mb-2">10 Digit Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <p className="text-xs text-gray-500 mb-6">
                By submitting this form, you agree to the{" "}
                <a href="#" className="text-purple-600 underline">
                  CRI Report Terms of Use & Privacy Policy
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

      {/* What is Overdraft */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">What is an Overdraft Personal Credit Line?</h2>
            <p className="text-gray-700 mb-4">
              An Overdraft (Personal Credit Line) gives you a pre-approved line of credit that you can access whenever you need funds—without applying for a new loan each time. Unlike a standard term loan, you're charged interest only on the amount you use, not the full limit. And you can keep re-using the limit as you repay.
            </p>
            <p className="text-gray-700">
              For example: if you have an overdraft limit of ₹2 lakhs and only use ₹50,000, you'll pay interest on just ₹50,000—not on ₹2 lakhs (with up to ₹2 lakhs still accessible if needed).
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card text-purple-600">
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
              Overdraft Principle:
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Spend what you need (up to limit) → Pay interest only on what you spent → Repay when ready
            </p>

            <div className="space-y-4 mt-6">
              {[{ title: "Need 1: Emergency", desc: "Life happens. Car breaks down, medical issue, etc." },
                { title: "Need 2: Cash Flow Gaps", desc: "Freelancers, business owners, or salaried folks waiting for bonus" },
                { title: "Need 3: Opportunity", desc: "Quick investment or purchase that can't wait" }].map((item, idx) => (
                <div key={idx} className="bg-white rounded p-4">
                  <p className="font-semibold text-gray-900 mb-2">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-700 mt-4">
              Once a month (or on-demand), the lender withdraws the interest amount from your linked account. You can pay only the interest or you can also reduce the principal.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Let's say you have been approved for a personal overdraft (approval takes just a few minutes). Your provider approves you for a ₹4L credit limit. Instead of getting a lump sum, you have that amount available like a revolving line. You can withdraw funds, pay it back, and withdraw again as many times as you need.
          </p>

          <h3 className="font-bold text-gray-900 mt-6 mb-4">Example Scenario:</h3>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              In the first month, she withdraws ₹50,000 for a medical emergency, paying interest only on that amount. Two months later, she repays ₹25,000, reducing her outstanding to ₹25,000. A few months later, she withdraws another ₹30,000 for a home renovation, raising her outstanding to ₹55,000.
            </li>
            <li>
              Throughout this time, her ₹4 lakh limit remains. The monthly EMI never exhausted her credit limit—and she only pays interest on the amount used. As a smart financial tool, overdraft keeps borrowing costs under control.
            </li>
          </ol>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Features and Benefits of Overdraft Credit Line</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Flexible Withdrawals", desc: "Use funds when needed; replenish at will" },
              { title: "Interest on Usage Only", desc: "Interest on the amount used, not the full credit limit" },
              { title: "Revolving Credit", desc: "Repay and reuse limit when required" },
              { title: "Instant Access", desc: "Withdraw funds instantly via net-banking or credit" },
              { title: "No Pre-payment Penalty", desc: "Repay early without extra charges" }
            ].map((item, idx) => (
              <div key={idx} className="bg-purple-50 rounded-lg p-6 shadow">
                <p className="font-semibold text-gray-900 mb-2">{item.title}</p>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Who Should Consider */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who Should Consider This Facility?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Have irregular income (freelancers/gig workers)</li>
              <li>Need flexibly available cash without fees on a card</li>
              <li>Face a fluctuating business cashflow (micro-business owner)</li>
              <li>Want a safety net for occasional urgent expenses</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Eligibility Criteria for Personal Loans</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Age: 21-60 years</li>
              <li>Minimum Income: ₹25,000+ monthly (salaried) with stable income</li>
              <li>Credit Score: 650+ (750+ for better limit/rate)</li>
              <li>Documents Required: PAN, Aadhaar, bank statement, salary slip/ITR, address proof</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">How to Apply via Paisawala</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Check your eligibility on Paisawala; submit credit score</li>
            <li>Compare instant offers from partner lenders</li>
            <li>Submit minimal documents digitally</li>
            <li>Get credit limit approved & access funds instantly</li>
            <li>Pay interest only on what you withdraw (24-48 hours)</li>
          </ol>
        </div>
      </section>

      {/* Charges & Interest */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Charges & Interest</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Interest rates typically range from 11-24% per annum, depending on your credit profile</li>
            <li>Processing fee: 1.5-3% of sanctioned limit, typically paid upfront</li>
            <li>Minimal withdrawal or annual fees (check with lender)</li>
          </ul>
        </div>
      </section>

      {/* Why Paisawala */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Paisawala for Overdraft Personal Credit Line?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Compare multiple overdraft facilities from leading NBFCs and banks</li>
            <li>100% digital, paperless, credit score checks with 100% online application</li>
            <li>Trusted Reputation: offers tailored to your credit health</li>
          </ul>
          <p className="mt-6 text-gray-700 font-semibold">
            Ready to get started? Check your credit score now & discover the overdraft limit you qualify for. Apply via Paisawala—transparent, fast, and built for modern India.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Overdraft;
