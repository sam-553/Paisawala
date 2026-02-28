import React from "react";
import {
  Target,
  Eye,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
  Globe,
  Lock
} from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20 mt-8">

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-purple-600">Paisewaala</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Paisewaala is a next-generation digital financial platform built to 
          simplify credit access and empower financial growth across India. 
          We combine technology, transparency, and trust to deliver seamless 
          loan solutions, credit insights, and financial tools for modern India.
        </p>
      </div>

      {/* Brand Story */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We started Paisewaala with one simple belief — financial services 
            should be accessible, transparent, and stress-free. Millions of 
            individuals across India face difficulty accessing timely credit.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our platform bridges that gap by offering fast approvals, digital 
            onboarding, and responsible lending practices powered by smart 
            technology.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-10 rounded-3xl shadow-xl">
          <ShieldCheck size={40} className="mb-4" />
          <h3 className="text-xl font-semibold mb-3">
            Built on Transparency & Security
          </h3>
          <p className="text-white/90">
            Every process at Paisewaala is designed to ensure fairness, 
            compliance, and data security — because trust is our strongest asset.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-20">

        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition hover:-translate-y-2">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-purple-600" size={28} />
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <ul className="text-gray-600 space-y-3 list-disc pl-6">
            <li>Deliver instant and transparent financial solutions</li>
            <li>Promote financial literacy and credit awareness</li>
            <li>Enable responsible and ethical lending</li>
            <li>Drive inclusive digital financial growth</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition hover:-translate-y-2">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-indigo-600" size={28} />
            <h3 className="text-xl font-semibold">Our Vision</h3>
          </div>
          <ul className="text-gray-600 space-y-3 list-disc pl-6">
            <li>Become India’s most trusted digital credit ecosystem</li>
            <li>Simplify finance using intelligent technology</li>
            <li>Empower individuals and small businesses nationwide</li>
            <li>Build a financially confident India</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Why Choose Paisewaala?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6 text-center rounded-2xl bg-white shadow hover:shadow-xl transition hover:-translate-y-2">
            <Zap className="mx-auto mb-3 text-purple-600" size={30} />
            <h4 className="font-semibold mb-2">Instant Approvals</h4>
            <p className="text-sm text-gray-600">
              Quick digital processing with minimal documentation.
            </p>
          </div>

          <div className="p-6 text-center rounded-2xl bg-white shadow hover:shadow-xl transition hover:-translate-y-2">
            <Lock className="mx-auto mb-3 text-indigo-600" size={30} />
            <h4 className="font-semibold mb-2">Secure Platform</h4>
            <p className="text-sm text-gray-600">
              Advanced data encryption and privacy protection.
            </p>
          </div>

          <div className="p-6 text-center rounded-2xl bg-white shadow hover:shadow-xl transition hover:-translate-y-2">
            <Globe className="mx-auto mb-3 text-green-600" size={30} />
            <h4 className="font-semibold mb-2">PAN India Reach</h4>
            <p className="text-sm text-gray-600">
              Serving customers across cities and rural India.
            </p>
          </div>

          <div className="p-6 text-center rounded-2xl bg-white shadow hover:shadow-xl transition hover:-translate-y-2">
            <Users className="mx-auto mb-3 text-pink-600" size={30} />
            <h4 className="font-semibold mb-2">Customer First</h4>
            <p className="text-sm text-gray-600">
              Transparent pricing and dedicated support team.
            </p>
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="max-w-4xl mx-auto text-center">
        <TrendingUp size={40} className="mx-auto text-purple-600 mb-4" />
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Empowering India’s Financial Future
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At Paisewaala, we are building more than a fintech platform — 
          we are shaping a smarter financial ecosystem that drives growth, 
          trust, and opportunity for millions.
        </p>
      </div>

    </section>
  );
};

export default AboutUs;