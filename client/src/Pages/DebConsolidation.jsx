import React from "react";
import { CheckCircle } from "lucide-react";

const DebtConsolidation=()=> {
  const steps = [
    "Check your credit score",
    "Get matched offers instantly",
    "Upload documents online",
    "Receive funds directly to bank",
    "Repay old debts",
  ];

  const whyPaisawala = [
    "Compare offers from leading NBFCs & banks",
    "Transparent processing with expert support",
    "Fully digital onboarding and fast disbursal",
    "Check eligibility, see options, and finalize",
  ];

  const features = [
    "Single Loan & EMI",
    "Lower Interest",
    "Better Credit Health",
    "Flexible Tenure",
    "100% Digital Journey",
  ];

  const eligibility = [
    "Age: 21-60 years",
    "Credit Score: 650+ (best offers 750+)",
    "Income: ₹15000+ monthly salary",
    "Employment: Salaried or 2+ years self-employed",
    "Documents: PAN, Aadhaar, bank statements, salary slip/ITR",
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-600 to-teal-500 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Paisawala.com - Login to Become Human
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Debt Consolidation Loan in India
            </h1>
            <p className="text-lg mb-6 text-white/90">
              Struggling with multiple EMIs? Consolidate your debt into one
              lower-cost loan in minutes.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6 space-y-3">
              <p>
                Combine multiple EMIs into one. One EMI, less stress, back
                control of your finances with lower interest and simplified
                repayment.
              </p>
              <p>
                With Paisawala, you can compare offers from trusted banks and
                NBFCs, check your eligibility instantly, and apply online in
                minutes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                Why Choose Debt Consolidation Loans on Paisawala?
              </h3>
              <ul className="space-y-3 list-disc list-inside">
                <li>Free Credit Score Check</li>
                <li>Compare Top Lenders</li>
                <li>Loan amounts from ₹1 lakh up to ₹50 lakhs</li>
                <li>Fast digital disbursal</li>
                <li>Expert Guidance for debt repayment</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Quick Apply Form */}
          <div className="bg-white rounded-xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Quick Apply: Check Your Offer
            </h2>
            <p className="text-sm text-gray-600 mb-6">Enter Mobile Number</p>
            <form>
              <input
                type="tel"
                placeholder="Enter your mobile number to get personalized debt consolidation offers."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-xs text-gray-500 mb-6">
                By submitting this form, you agree to the Terms and Privacy
                Policy.
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

      {/* Features & Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Features & Benefits Of Debt Consolidation Loan
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow text-center font-semibold"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Debt Consolidation Works */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              How Debt Consolidation Works
            </h2>
            <p className="text-gray-700">
              Imagine juggling multiple debts with high interest rates. A debt
              consolidation loan simplifies this into one manageable EMI at a
              lower rate.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Who Should Consider This Loan?
            </h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Multiple high-interest credit cards</li>
              <li>High-interest EMIs or payday loans</li>
              <li>Miss EMI payments due to overlapping dates</li>
              <li>Want to save on interest and simplify finances</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 px-6 bg-purple-50">
        <h2 className="text-3xl font-bold mb-6">Eligibility & Documents</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {eligibility.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Steps to Apply */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 ml-18">
          Apply for Debt Consolidation Loan in Easy Steps
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <p className="text-gray-700 pt-1">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Paisawala */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 ml-18">
          Why Paisawala Is the Right Platform
        </h2>
        <div className="max-w-5xl mx-auto space-y-4">
          {whyPaisawala.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
          <div className="bg-purple-100 rounded-lg p-6 mt-4">
            <p className="font-bold text-gray-900 mb-2">Ready to save?</p>
            <p className="text-gray-700">
              Check your personalized rate now. Compare offers. Apply in
              minutes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default DebtConsolidation
