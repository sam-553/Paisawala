import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto">

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4 cursor-pointer group">
              <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition">
                Paisewaala
              </span>
            </div>

            <p className="text-sm mb-6">
              Hey only financial marketplace you'll ever need
            </p>

            <h4 className="font-semibold mb-3 text-gray-900">
              Social Media
            </h4>

            {/* Icons */}
            <div className="flex space-x-3">
              
              {/* Facebook */}
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-purple-700 hover:text-white transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 
                  5.405 0 12.073c0 6.019 4.388 11.022 
                  10.125 11.927v-8.437H7.078v-3.49h3.047V9.41
                  c0-3.017 1.792-4.688 4.533-4.688
                  1.312 0 2.686.235 2.686.235v2.953h-1.514
                  c-1.49 0-1.956.926-1.956 1.874v2.25h3.328
                  l-.532 3.49h-2.796V24C19.612 23.095 24 
                  18.092 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-purple-700 hover:text-white transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 
                  4.85.07 3.252.148 4.771 1.691 
                  4.919 4.919.058 1.265.069 1.645.069 
                  4.849 0 3.205-.012 3.584-.069 
                  4.849-.149 3.225-1.664 4.771-4.919 
                  4.919-1.266.058-1.644.07-4.85.07
                  -3.204 0-3.584-.012-4.849-.07-3.26
                  -.149-4.771-1.699-4.919-4.92-.058
                  -1.265-.07-1.644-.07-4.849 0-3.204
                  .013-3.583.07-4.849.149-3.227 
                  1.664-4.771 4.919-4.919 1.266-.057
                  1.645-.069 4.849-.069z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-purple-700 hover:text-white transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 
                  0 0 0-2.122-2.136C19.505 3.545 
                  12 3.545 12 3.545s-7.505 0-9.377.505
                  A3.017 3.017 0 0 0 .502 6.186C0 8.07 
                  0 12 0 12s0 3.93.502 5.814a3.016 
                  3.016 0 0 0 2.122 2.136c1.871.505 
                  9.376.505 9.376.505s7.505 0 9.377
                  -.505a3.015 3.015 0 0 0 2.122-2.136
                  C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">
              About Paisewaala
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Who We Are",
                "Our Mission",
                "Couldn't Wholesale / Grievance",
                "Contact Us",
                "Free Credit Score (CIBIL)"
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-purple-700 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              {["Privacy Policy", "T & C", "FAQ", "RBI Sachet"].map((item,i)=>(
                <li key={i}>
                  <a href="#" className="hover:text-purple-700 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blogs */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">
              Blogs
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Personal Loan",
                "Credit Card",
                "Credit Score",
                "Search IFSC Code"
              ].map((item,i)=>(
                <li key={i}>
                  <a href="#" className="hover:text-purple-700 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="border-t pt-6 text-xs text-gray-500 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> At Paisewaala, we act as a representative
            aggregator, we don't directly sell or allocate any items. We provide
            a platform where guests can compare financial products from
            institutions and choose the best option according to their needs.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
