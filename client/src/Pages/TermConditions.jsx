import React from "react";

const TermsConditions = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 mt-6 sm:mt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Please read these terms carefully before using Paisewala’s financial services.
            Your continued use indicates acceptance of these conditions.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">

          {/* Reusable Card Style */}
          {[
            {
              title: "1. Acceptance of Terms",
              content:
                "By accessing our website, mobile application, or applying for financial products, you agree to comply with these Terms & our Privacy Policy.",
            },
            {
              title: "2. Eligibility",
              content: (
                <ul className="space-y-2">
                  <li>• Indian citizen above 18 years</li>
                  <li>• Valid KYC & income documentation required</li>
                  <li>• Accurate contact and address verification</li>
                  <li>• Approval subject to internal risk assessment</li>
                </ul>
              ),
            },
            {
              title: "3. Services Offered",
              content:
                "Credit Cards, Personal Loans, Business Loans, Home Loans, Auto Loans, Education Loans, Demat Accounts, Savings Accounts, Micro Loans, Group Loans, and Private Funding solutions.",
            },
            {
              title: "4. User Obligations",
              content: (
                <ul className="space-y-2">
                  <li>• Provide truthful and updated information</li>
                  <li>• Use services for lawful purposes only</li>
                  <li>• Timely repayment of dues</li>
                  <li>• No misuse of platform technology or branding</li>
                </ul>
              ),
            },
            {
              title: "5. Charges & Fees",
              content:
                "All processing fees, interest rates, penalties, and applicable charges will be transparently disclosed in your agreement before confirmation.",
            },
            {
              title: "6. Loan Approval & Disbursement",
              content:
                "Approval depends on verification, credit score, and partner bank criteria. Disbursement generally occurs within 1–7 business days post approval.",
            },
            {
              title: "7. Data Usage & Consent",
              content:
                "You authorize Paisewala to use your data for credit evaluation, verification, communication, and coordination with financial partners.",
            },
            {
              title: "8. Limitation of Liability",
              content:
                "Paisewala shall not be liable for system downtime, third-party delays, rejection of applications, or unforeseen technical interruptions.",
            },
            {
              title: "9. Intellectual Property",
              content:
                "All branding, logos, design, content, and technology remain the exclusive property of Paisewala. Unauthorized reproduction is prohibited.",
            },
            {
              title: "10. Termination of Services",
              content:
                "We reserve the right to suspend or terminate services in case of fraud, violation of terms, or payment defaults.",
            },
            {
              title: "11. Changes to Terms",
              content:
                "Paisewala may update these Terms at any time. Continued usage after updates implies acceptance of revised terms.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl p-5 sm:p-8 border border-gray-100"
            >
              <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                {item.title}
              </h2>
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.content}
              </div>
            </div>
          ))}

          {/* Final Highlight Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-6 sm:p-8 text-center shadow-lg">
            <p className="text-sm sm:text-base leading-relaxed">
              By using <span className="font-semibold">Paisewala</span>, you agree to these
              Terms & Conditions. We are committed to building a transparent,
              secure, and financially inclusive India.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsConditions;