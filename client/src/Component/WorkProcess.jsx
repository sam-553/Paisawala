import React from "react";

const WorkProcess = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How <span className="text-purple-600">Paisewaala Works</span>
        </h2>

        <p className="text-center text-gray-600 mb-12">
          At Paisewaala, this is of{" "}
          <span className="text-purple-600 font-semibold">
            greatest evidence
          </span>{" "}
          execute we{" "}
          <span className="text-purple-600 font-semibold">
            understand
          </span>{" "}
          that your{" "}
          <span className="text-purple-600 font-semibold">
            life's moments
          </span>
          <br />
          of joy are a big concern for us
        </p>

       
        <div className="grid md:grid-cols-4 gap-8">
          
          
          <div className="text-center">
            <div className="bg-purple-100 w-32 h-32 rounded-2xl mx-auto mb-6 flex items-center justify-center text-purple-600 text-4xl">
              📄
            </div>
            <h3 className="text-xl font-bold mb-1">Simple Application</h3>
            <p className="text-purple-600 font-medium text-sm mb-3">
              Fill the form
            </p>
            <p className="text-gray-600 text-sm">
              Choose your product, fill out a simple application form,
              and submit your details.
            </p>
          </div>

         
          <div className="text-center">
            <div className="bg-blue-100 w-32 h-32 rounded-2xl mx-auto mb-6 flex items-center justify-center text-blue-600 text-4xl">
              ✔
            </div>
            <h3 className="text-xl font-bold mb-1">
              Quick Verification
            </h3>
            <p className="text-purple-600 font-medium text-sm mb-3">
              Instant approval
            </p>
            <p className="text-gray-600 text-sm">
              We review your application and soft approve based on
              partner eligibility parameters.
            </p>
          </div>

          
          <div className="text-center">
            <div className="bg-green-100 w-32 h-32 rounded-2xl mx-auto mb-6 flex items-center justify-center text-green-600 text-4xl">
              🎯
            </div>
            <h3 className="text-xl font-bold mb-1">
              Transparent Selection
            </h3>
            <p className="text-purple-600 font-medium text-sm mb-3">
              Choose your offer
            </p>
            <p className="text-gray-600 text-sm">
              Compare customized offers and select the best one for
              your needs.
            </p>
          </div>

         
          <div className="text-center">
            <div className="bg-yellow-100 w-32 h-32 rounded-2xl mx-auto mb-6 flex items-center justify-center text-yellow-600 text-4xl">
              ₹
            </div>
            <h3 className="text-xl font-bold mb-1">
              Easy Accessibility
            </h3>
            <p className="text-purple-600 font-medium text-sm mb-3">
              Get money
            </p>
            <p className="text-gray-600 text-sm">
              Receive funds quickly and easily once approved.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
