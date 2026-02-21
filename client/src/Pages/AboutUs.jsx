import React from "react";
import {
  Award,
  Target,
  Eye,
  Users,
  Building2,
  ShieldCheck
} from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20 mt-8">

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Paisawala
        </h1>
        <p className="text-gray-600 leading-relaxed">
         Paisawala is dedicated to providing reliable and sustainable
          financial solutions to individuals and communities. Our mission is to
          empower people through responsible microfinance services, promoting
          financial inclusion and economic growth.
        </p>
      </div>

      {/* Certifications */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
          <Award size={24} className="text-blue-600" />
          Official Certifications & Licences
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50  rounded-xl p-6 text-center hover:shadow-xl transition hover:-translate-y-2">
            <Building2
              className="mx-auto mb-3 text-blue-600"
              size={28}
            />
            <h3 className="font-semibold mb-2">
              Certificate of Incorporation
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              CIN: U88900MH2024NPL431405
            </p>
            <img
              src="/assets/certificate1.webp"
              alt="Certificate"
              className="rounded-lg shadow mx-auto hover:scale-105 transition"
            />
          </div>

          <div className="bg-gray-50  rounded-xl p-6 text-center hover:shadow-xl transition hover:-translate-y-2">
            <ShieldCheck
              className="mx-auto mb-3 text-indigo-600"
              size={28}
            />
            <h3 className="font-semibold mb-2">
              Section 8 Licence Certificate
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Licence No: 159984
            </p>
            <img
              src="/assets/licence.webp"
              alt="Licence"
              className="rounded-lg shadow mx-auto hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

     
      <div className="max-w-5xl mx-auto mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="text-blue-600" size={22} />
          Our Mission
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Provide fast, transparent, and affordable financial solutions</li>
          <li>Promote financial inclusion through digital innovation</li>
          <li>Empower partners with technology and training</li>
          <li>Build long-term trust through ethical practices</li>
        </ul>
      </div>

     
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Eye className="text-indigo-600" size={22} />
          Our Vision
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Become a trusted digital financial ecosystem</li>
          <li>Bridge financial gaps across India</li>
          <li>Create sustainable income opportunities</li>
          <li>Simplify finance through technology</li>
        </ul>
      </div>

      {/* Directors */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 flex justify-center items-center gap-2">
          <Users size={26} className="text-blue-600" />
          Our Directors
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className=" rounded-2xl p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-2">
            <img
              src="/assets/director1.jpg"
              alt="Director"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-100"
            />
            <h3 className="font-semibold text-lg">
              PRANAV PRADIP MOHITE
            </h3>
            <p className="text-sm text-gray-500 mb-3">Director</p>
            <p className="text-gray-600 text-sm">
              We are committed to building a transparent, technology-driven
              financial platform that empowers partners and customers.
            </p>
          </div>

          <div className=" rounded-2xl p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-2">
            <img
              src="/assets/director2.jpg"
              alt="Director"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-100"
            />
            <h3 className="font-semibold text-lg">
              PRANJAL PRANAV MOHITE
            </h3>
            <p className="text-sm text-gray-500 mb-3">Director</p>
            <p className="text-gray-600 text-sm">
              Our focus is responsible growth, digital innovation, and
              empowering communities with accessible financial solutions.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
