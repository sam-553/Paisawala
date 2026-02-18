import React, { useState } from "react";

const branchesData = [
  { bank: "ICICI Bank", city: "Andheri East", state: "Maharashtra", ifsc: "ICIC0001234", micr: "400229002", address: "Chakala, Andheri East, Mumbai - 400099", contact: "022-28212121" },
  { bank: "ICICI Bank", city: "Bandra West", state: "Maharashtra", ifsc: "ICIC0001235", micr: "400229003", address: "Linking Road, Bandra West, Mumbai - 400050", contact: "022-26512121" },
  { bank: "SBI", city: "Fort", state: "Maharashtra", ifsc: "SBIN0012345", micr: "400002345", address: "Fort Branch, Mumbai - 400001", contact: "022-26401234" },
  { bank: "SBI", city: "Shivaji Nagar", state: "Maharashtra", ifsc: "SBIN0012346", micr: "411002345", address: "JM Road, Shivaji Nagar, Pune - 411005", contact: "020-25531234" },
  { bank: "HDFC Bank", city: "Koramangala", state: "Karnataka", ifsc: "HDFC0001234", micr: "560240234", address: "80 Feet Road, Koramangala, Bangalore - 560095", contact: "080-25531234" },
  { bank: "HDFC Bank", city: "Indiranagar", state: "Karnataka", ifsc: "HDFC0001235", micr: "560240235", address: "100 Feet Road, Indiranagar, Bangalore - 560038", contact: "080-25431234" },
  { bank: "Axis Bank", city: "Connaught Place", state: "Delhi", ifsc: "UTIB0001234", micr: "110211234", address: "Connaught Place, New Delhi - 110001", contact: "011-23341234" },
  { bank: "Axis Bank", city: "T Nagar", state: "Tamil Nadu", ifsc: "UTIB0001235", micr: "600211235", address: "Usman Road, T Nagar, Chennai - 600017", contact: "044-24341234" },
];

const SearchIfsc = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredBranches = branchesData.filter((branch) => {
    return (
      (selectedBank === "" || branch.bank === selectedBank) &&
      (selectedState === "" || branch.state === selectedState) &&
      (selectedCity === "" || branch.city === selectedCity)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 max-w-6xl mx-auto mt-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Search IFSC & MICR</h1>
      <p className="text-gray-600 mb-8">
        List of IFSC code, MICR code & Branch Address of all bank branches in India.
        Find verified IFSC codes quickly to use for <strong>NEFT, RTGS & IMPS</strong> transactions.
      </p>

      {/* Filters */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={selectedBank}
          onChange={(e) => setSelectedBank(e.target.value)}
        >
          <option value="">All Banks</option>
          {[...new Set(branchesData.map((b) => b.bank))].map((bank) => (
            <option key={bank} value={bank}>{bank}</option>
          ))}
        </select>

        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">All States</option>
          {[...new Set(branchesData.map((b) => b.state))].map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>

        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">All Cities</option>
          {[...new Set(branchesData.filter(b => (selectedState === "" || b.state === selectedState)).map((b) => b.city))].map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* Branch List */}
      <div className="space-y-4">
        {filteredBranches.length === 0 ? (
          <p className="text-gray-500">No branches found.</p>
        ) : (
          filteredBranches.map((branch, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{branch.bank}</h4>
                  <p className="text-sm text-gray-600">{branch.city}</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">{branch.address}</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">IFSC Code</p>
                    <p className="font-bold text-purple-600 text-sm">{branch.ifsc}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">MICR Code</p>
                    <p className="font-bold text-blue-600 text-sm">{branch.micr}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 pt-3 border-t border-gray-200">
                  Contact: <span className="font-semibold text-gray-900">{branch.contact}</span>
                </p>
                <button
                  onClick={() => navigator.clipboard.writeText(branch.ifsc)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow text-sm flex items-center justify-center gap-2"
                >
                  Copy IFSC Code
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchIfsc;
