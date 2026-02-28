import React from "react";
import { Link } from "react-router-dom";

const TrustSection = () => {
  const number="919011085007";
  const message="Hi Paisewaala team, I want more details about your services.";
  const encodedMessage=encodeURIComponent(message);
  return (
    <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-purple-200 mb-2">Paisewaala Motto</p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              No Spam,
              <span className="text-green-300"> Just Trust</span>
            </h2>

            <p className="text-purple-100 mb-8">
              Your Privacy, Our Promise.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Talk to a real advisor now!
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
             

              <Link 
              to={`https://wa.me/${number}?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"

              
              className="border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-purple-600 transition text-center ">
                Chat With Us
              </Link>

            
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/30 hidden md:block"></div>

            <div className="space-y-8">

              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600 relative z-10">
                  ✉
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Zero Unsolicited Messages
                  </h3>
                  <p className="text-purple-100">
                    We only send what you request — no spam.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600 relative z-10">
                  🚫
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    No Pushy Sales People
                  </h3>
                  <p className="text-purple-100">
                    Honest financial advice — no pressure.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600 relative z-10">
                  ✔
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Full Control
                  </h3>
                  <p className="text-purple-100">
                    Manage communication preferences anytime.
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

export default TrustSection;
