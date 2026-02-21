import React from "react";

const TermsConditions = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-20 mt-8">
      <div className="max-w-5xl mx-auto px-6 mt-10">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Terms & Conditions
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Please read these terms carefully before using our financial services.
        </p>

        <div className="space-y-8">

          {/* Acceptance */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing our website, mobile app, or applying for any
              financial services, you agree to these Terms and our Privacy Policy.
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Eligibility
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Indian citizen above 18 years</li>
              <li>• Valid KYC and income documents required</li>
              <li>• Verifiable contact and address details</li>
              <li>• Approval subject to internal verification</li>
            </ul>
          </div>

          {/* Services */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Services Offered
            </h2>
            <p className="text-gray-700">
              Credit Cards, Personal Loans, Business Loans, Home Loans,
              Auto Loans, Education Loans, Demat Accounts, Savings Accounts,
              Micro Loans, Group Loans, Private Funding and more.
            </p>
          </div>

          {/* User Obligations */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. User Obligations
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Provide accurate information</li>
              <li>• Use services legally</li>
              <li>• Repay loans on time</li>
              <li>• Avoid misuse of content or technology</li>
            </ul>
          </div>

          {/* Charges */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Charges & Fees
            </h2>
            <p className="text-gray-700">
              Processing fees, interest rates, penalties, and other charges
              will be clearly mentioned in your agreement.
            </p>
          </div>

          {/* Loan Approval */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Loan Approval & Disbursement
            </h2>
            <p className="text-gray-700">
              Loan approval depends on verification and creditworthiness.
              Disbursement usually takes 1–7 business days after approval.
            </p>
          </div>

          {/* Data Consent */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Data Usage & Consent
            </h2>
            <p className="text-gray-700">
              Your data may be used for credit assessment, shared with
              financial partners, and used for communication related
              to services.
            </p>
          </div>

          {/* Liability */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              We are not responsible for system outages, delays,
              third-party misuse, or rejected applications.
            </p>
          </div>

          {/* IP */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              9. Intellectual Property
            </h2>
            <p className="text-gray-700">
              All branding, content, and technology belong to the company.
              Unauthorized use is prohibited.
            </p>
          </div>

          {/* Termination */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              10. Termination of Services
            </h2>
            <p className="text-gray-700">
              Services may be terminated for violations, fraud,
              or payment defaults.
            </p>
          </div>

          {/* Changes */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              11. Changes to Terms
            </h2>
            <p className="text-gray-700">
              Terms may change anytime. Continued use implies acceptance.
            </p>
          </div>

          {/* Final Statement */}
          <div className="bg-gray-600 text-white rounded-xl p-8 text-center">
            <p>
              By using Ducat Capital Fintech, you agree to these Terms &
              Conditions. Your trust and cooperation help us build a stronger,
              more financially inclusive India.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
