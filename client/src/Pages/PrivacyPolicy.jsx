import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 mt-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Paisewaala values your trust and is committed to safeguarding your
            personal and financial information with the highest standards of security.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">

          {/* Reusable Sections */}
          {[
            {
              title: "1. Information We Collect",
              content: (
                <ul className="space-y-2">
                  <li>• Personal details: Name, DOB, address, phone, email</li>
                  <li>• KYC documents: Aadhaar, PAN, Passport, DL etc.</li>
                  <li>• Financial info: Bank details, income proof, credit score</li>
                  <li>• Usage data: Device info, IP, browsing activity</li>
                </ul>
              ),
            },
            {
              title: "2. How We Use Information",
              content: (
                <ul className="space-y-2">
                  <li>• Loan & financial service processing</li>
                  <li>• Identity verification & eligibility checks</li>
                  <li>• Customer support & notifications</li>
                  <li>• Analytics & service improvements</li>
                  <li>• Legal & regulatory compliance</li>
                </ul>
              ),
            },
            {
              title: "3. Data Sharing",
              content: (
                <>
                  <p className="mb-3">
                    Data may be securely shared with:
                  </p>
                  <ul className="space-y-2">
                    <li>• Partner Banks / NBFCs</li>
                    <li>• Credit Bureaus</li>
                    <li>• Technology Providers</li>
                    <li>• Regulatory Authorities (if required)</li>
                  </ul>
                  <p className="mt-4 font-medium text-purple-600">
                    We do NOT sell your personal data.
                  </p>
                </>
              ),
            },
            {
              title: "4. Data Security",
              content: (
                <ul className="space-y-2">
                  <li>• SSL encrypted data transmission</li>
                  <li>• Secure cloud infrastructure</li>
                  <li>• Role-based access control systems</li>
                </ul>
              ),
            },
            {
              title: "5. Your Rights",
              content: (
                <ul className="space-y-2">
                  <li>• Access or update your personal data</li>
                  <li>• Opt-out of marketing communications</li>
                  <li>• Request deletion (subject to legal obligations)</li>
                </ul>
              ),
            },
            {
              title: "6. Cookies & Tracking",
              content:
                "Cookies enhance website performance and user experience. You may manage cookie settings through your browser preferences.",
            },
            {
              title: "7. Policy Updates",
              content:
                "Paisewaala may update this Privacy Policy periodically. Changes will be published on our official website.",
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

          {/* Registered Office Section */}
         <div className="relative overflow-hidden rounded-2xl shadow-xl group">

  {/* Animated Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 opacity-95 group-hover:scale-105 transition duration-700"></div>

  <div className="relative p-6 sm:p-10 text-white">

    <h2 className="text-xl sm:text-3xl font-bold mb-8 text-center tracking-wide">
      Registered Office
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

      
      <div className="space-y-3 text-center md:text-left transform transition duration-500 group-hover:-translate-y-1">
        <p className="text-lg font-semibold tracking-wide">
          Paisewaala
        </p>

        <p className="text-purple-100 leading-relaxed">
          Chamber No. 1-4, Tanvi Arcade, 1st Floor,<br />
          Bharti Building, Darwha Road,<br />
          Opp. Gramin Police Station,<br />
          Yavatmal – 445001
        </p>
      </div>

    
      {/* Right - Contact */}
<div className="space-y-4 text-center md:text-right">

  {/* Phone */}
  <a
    href="tel:+917232246247"
    className="flex items-center justify-center md:justify-end gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 hover:bg-white/20 transition duration-300 hover:scale-105"
  >
    <span className="text-lg">📞</span>
    <span className="font-medium tracking-wide">
      +91 7232 246 247
    </span>
  </a>

  {/* Email */}
  <a
  href="mailto:care@paisewaala.in"
  className="flex items-center justify-center md:justify-end gap-3 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 hover:bg-white/20 transition duration-300 hover:scale-105 break-all"
>
  <span className="text-lg">📧</span>
  <span className="font-medium tracking-wide">
    care@paisewaala.in
  </span>
</a>

  <p className="text-purple-200 text-sm mt-3">
    Your privacy is our commitment.
  </p>

</div>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;