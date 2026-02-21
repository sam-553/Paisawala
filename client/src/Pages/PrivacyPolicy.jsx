import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-20 mt-8">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We value your trust and are committed to protecting your personal
          and financial information.
        </p>

        {/* Content Cards */}
        <div className="space-y-8">

          {/* Info Collection */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">
              1. Information We Collect
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Personal details: Name, DOB, address, phone, email</li>
              <li>• KYC documents: Aadhaar, PAN, Passport, DL etc.</li>
              <li>• Financial info: Bank details, income proof, credit score</li>
              <li>• Usage data: Device info, IP, location, browsing activity</li>
            </ul>
          </div>

          {/* Usage */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">
              2. How We Use Information
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Loan, credit card & financial service processing</li>
              <li>• Identity verification & eligibility assessment</li>
              <li>• Customer support & service notifications</li>
              <li>• Analytics & service improvement</li>
              <li>• Legal and regulatory compliance</li>
            </ul>
          </div>

          {/* Sharing */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">
              3. Data Sharing
            </h2>
            <p className="text-gray-700 mb-3">
              Data may be shared securely with:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Partner banks/NBFCs</li>
              <li>• Credit bureaus</li>
              <li>• Technology service providers</li>
              <li>• Regulatory authorities (if required)</li>
            </ul>
            <p className="mt-4 text-gray-600 font-medium">
              We do NOT sell your personal data.
            </p>
          </div>

          {/* Security */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">
              4. Data Security
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>• SSL encrypted data transfer</li>
              <li>• Secure cloud storage & firewalls</li>
              <li>• Role-based access controls</li>
            </ul>
          </div>

          {/* Rights */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">
              5. Your Rights
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Access or update personal data</li>
              <li>• Opt out of marketing</li>
              <li>• Request deletion (legal conditions apply)</li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">
              6. Cookies & Tracking
            </h2>
            <p className="text-gray-700">
              Cookies help improve performance and user experience.
              You can manage cookie settings in your browser.
            </p>
          </div>

          {/* Updates */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">
              7. Policy Updates
            </h2>
            <p className="text-gray-700">
              Policy updates will be posted on our official website.
              Please review periodically.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gray-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-3">
              Contact Us
            </h2>
            <p>Email: care@paisewaala.in</p>
            <p>Tanvi Arced, 1St Floor,Bharti Building,Darwha Road,yavatmal – 445001</p>
            <p className="mt-4 text-gray-300">
              Your privacy is our commitment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
