import { useState } from "react";
import { Mail } from "lucide-react";

export const ctk = () => {
  const [email, setEmail] = useState("");

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup logic here
    console.log("Email signup:", email);
  };

  return (
    <>
      {/* Secondary CTA - Email Signup */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Get Exclusive Deals
        </h3>
        <p className="text-gray-600 mb-4">
          Join 100K+ shoppers and get 20% off your first order
        </p>
        <form onSubmit={handleEmailSignup} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Get My 20% Off Code
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-2">
          No spam, unsubscribe anytime. Terms apply.
        </p>
      </div>
    </>
  );
};
