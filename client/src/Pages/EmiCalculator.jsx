import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTerm, setLoanTerm] = useState(6);

  // Calculate EMI and breakdown
  const monthlyRate = interestRate / 12 / 100;
  const months = loanTerm * 12;
  const emi = Math.round((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1));
  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  // Example yearly breakdown
  const yearlyData = Array.from({ length: loanTerm }, (_, i) => {
    const principalPaid = Math.round((loanAmount / loanTerm) * (i + 1));
    const interestPaid = Math.round(totalInterest / loanTerm);
    return {
      year: 2026 + i,
      principal: principalPaid,
      interest: interestPaid,
      total: principalPaid + interestPaid,
      outstanding: loanAmount - principalPaid,
      tillDate: Math.round(((principalPaid + interestPaid) / totalPayment) * 100) + "%"
    };
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">EMI Calculator</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Sliders */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Loan Amount (INR)</label>
                <span className="text-sm font-semibold text-gray-900">{loanAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="10000000"
                step="10000"
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Annual Interest Rate (%)</label>
                <span className="text-sm font-semibold text-gray-900">{interestRate}</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="0.1"
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Loan Term (Years)</label>
                <span className="text-sm font-semibold text-gray-900">{loanTerm}</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
              />
            </div>

            {/* EMI Breakdown Chart */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">EMI Breakdown</h3>
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="principal" fill="#7c3aed" />
                    <Bar dataKey="interest" fill="#34d399" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Results and Table */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Loan Amount</span>
                  <span className="font-semibold text-gray-900">Rs. {loanAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Monthly Instalment (EMI)</span>
                  <span className="font-semibold text-gray-900">Rs. {emi.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Total Interest Amount</span>
                  <span className="font-semibold text-gray-900">Rs. {totalInterest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-700">Total Amount (Principal + Interest)</span>
                  <span className="font-semibold text-gray-900">Rs. {totalPayment.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto max-h-96">
                <table className="w-full">
                  <thead className="bg-purple-600 text-white sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Year</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Principal</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Interest</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Total Payment</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Outstanding</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Till Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {yearlyData.map((y) => (
                      <tr key={y.year} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">{y.year}</td>
                        <td className="px-4 py-3 text-sm">Rs. {y.principal.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm">Rs. {y.interest.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm">Rs. {y.total.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm">Rs. {y.outstanding.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm">{y.tillDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
