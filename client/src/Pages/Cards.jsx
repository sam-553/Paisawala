import React from "react";
import { CreditCard, RefreshCw, DollarSign, ToolCase } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Personal Loans",
    description:
      "Get fast, transparent personal loans with minimal paperwork. Compare interest rates and choose the best option.",
    icon: <CreditCard className="w-8 h-8 text-white" />,
    bg: "bg-purple-600",
  },
  {
    id: 2,
    title: "EMI Calculator",
    description:
      "Calculate your loan EMIs in seconds. Compare interest rates and plan your finances smartly.",
    icon: <RefreshCw className="w-8 h-8 text-white" />,
    bg: "bg-green-500",
  },
  {
    id: 3,
    title: "Investment Plans",
    description:
      "Explore safe investment options, mutual funds, and long-term plans tailored to your financial goals.",
    icon: <DollarSign className="w-8 h-8 text-white" />,
    bg: "bg-blue-500",
  },
  {
    id: 4,
    title: "White-label Finance",
    description:
      "Launch your own finance brand with our white-label solutions including apps, website, and admin panel.",
    icon: <ToolCase className="w-8 h-8 text-white" />,
    bg: "bg-indigo-600",
  },
  {
    id: 5,
    title: "Banking Tips",
    description:
      "Stay updated with the latest tips on banking, IFSC codes, credit cards, and financial planning.",
    icon: <CreditCard className="w-8 h-8 text-white" />,
    bg: "bg-pink-500",
  },
  {
    id: 6,
    title: "Fintech Solutions",
    description:
      "Discover modern fintech platforms, digital lending, and tools to manage your finances efficiently.",
    icon: <ToolCase className="w-8 h-8 text-white" />,
    bg: "bg-yellow-500",
  },
];

const Card = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 max-w-7xl mx-auto mt-10">
      <h2 className="text-4xl font-bold text-gray-900 mb-3 text-center">
        Our Services & Solutions
      </h2>
      <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
        Explore our range of financial services, tools, and solutions designed to help you manage money, plan investments, and grow your brand.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${card.bg}`}
            >
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors cursor-pointer">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm flex-1">{card.description}</p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
