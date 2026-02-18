import React, { useState, useRef, useEffect } from "react";

const CreditScoreForm = () => {
  const [mobile, setMobile] = useState("");
  const [fullName, setFullName] = useState("");
  const [consent, setConsent] = useState(false);
  const [loanInterest, setLoanInterest] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const otpRefs = useRef([]);

  // Handle OTP input
  const handleOtpChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) otpRefs.current[index + 1].focus();
    }
  };

  const handleOtpBackspace = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  // Scroll animation
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((sec, i) => {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            setVisibleSections((prev) => ({ ...prev, [i]: true }));
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900 p-4 mt-16 space-y-12">

      {/* Banner */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-xl p-6 lg:p-12 transform transition duration-700 ${
          visibleSections[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
          Check Your Loan Eligibility in Minutes
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto text-center">
          Answer one simple question and explore personal loan options matched to your credit profile.
        </p>
        <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-purple-700 font-bold">💳</span>
        </div>
      </section>

      {/* Credit Score Form */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`bg-white rounded-xl shadow-lg p-6 lg:p-12 max-w-3xl mx-auto transform transition duration-700 ${
          visibleSections[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Check <span className="text-purple-600">Experian Credit Score</span>
        </h2>
        <form className="space-y-6">
          {/* Mobile */}
          <div className="relative">
            <label className="block mb-1">Enter Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="9876543210"
              maxLength={10}
              className="pl-4 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Full Name */}
          <div>
            <label>Full Name (as PAN Card)</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              maxLength={60}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 mr-2"
            />
            <label className="text-sm">
              I consent to share my details, authorize RupeeQ to obtain my credit score and agree to the terms.
            </label>
          </div>

          {/* Loan Interest */}
          <div>
            <h6>Do you need a Personal Loan?</h6>
            <div className="flex flex-col gap-2 mt-1">
              {["yes", "maybe", "no"].map((val) => (
                <label
                  key={val}
                  className="flex items-center gap-2 hover:text-green-600 transition-colors cursor-pointer"
                >
                  <input
                    type="radio"
                    name="loan_interested"
                    value={val}
                    checked={loanInterest === val}
                    onChange={() => setLoanInterest(val)}
                  />
                  {val === "yes"
                    ? "Yes, I’m looking for a loan"
                    : val === "maybe"
                    ? "Maybe, just checking my options"
                    : "Not now, just exploring"}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold p-3 rounded-md mt-4 transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </section>

      {/* OTP Input */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`bg-white rounded-xl shadow-lg p-6 lg:p-12 max-w-xl mx-auto transform transition duration-700 ${
          visibleSections[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Enter OTP</h2>
        <div className="flex gap-3 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleOtpBackspace(index, e)}
              ref={(el) => (otpRefs.current[index] = el)}
              className="w-14 h-14 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-lg transition-transform transform hover:scale-110"
            />
          ))}
        </div>
      </section>

      {/* Features / Loan Options */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transform transition duration-700 ${
          visibleSections[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {[
          { title: "Fresh Personal Loan", desc: "Get instant approval with minimal paperwork.", icon: "💰" },
          { title: "Debt Consolidation", desc: "Combine multiple loans at lower rates.", icon: "📊" },
          { title: "Flexi Loan / Overdraft", desc: "Flexible overdraft options to manage finances.", icon: "💳" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Experian Info */}
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className={`bg-blue-50 rounded-xl p-6 lg:p-12 max-w-3xl mx-auto transform transition duration-700 ${
          visibleSections[4] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Why Experian Credit Score Matters</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Instant insight into your creditworthiness.</li>
          <li>Helps you get the best loan offers tailored to your profile.</li>
          <li>Improves transparency and decision-making for lenders.</li>
        </ul>
      </section>

    </div>
  );
};

export default CreditScoreForm;
