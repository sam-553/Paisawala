import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Image Section */}
        <div className="md:w-1/2 relative group overflow-hidden">
          <img
            src="assets/signin.jpeg"
            alt="Finance Illustration"
            className="w-full h-72 md:h-auto object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-800/70 via-purple-500/40 to-transparent flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg text-center px-4">
              Welcome Back!
            </h2>
          </div>
          {/* Animated icons using Tailwind animate classes */}
          <div className="absolute top-8 left-8 text-white text-3xl animate-bounce">💰</div>
          <div className="absolute top-32 right-12 text-white text-4xl animate-spin-slow">📈</div>
          <div className="absolute bottom-20 left-16 text-white text-2xl animate-pulse">🏦</div>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 flex items-center justify-center p-10">
          <div className="w-full max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Sign In</h2>
            <p className="text-gray-500 text-center">
              Access your finance dashboard and manage your investments.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="relative">
                <Mail className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition transform hover:scale-105"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition transform hover:scale-105"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Sign In
              </button>

              <p className="text-sm text-gray-500 text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-purple-600 cursor-pointer hover:underline">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
