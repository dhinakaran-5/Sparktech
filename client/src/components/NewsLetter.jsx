import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter a valid email!");
      return;
    }
    alert(`Subscribed with: ${email}`);
    setEmail(""); // clear after subscribe
  };

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
        Never Miss a <span className="text-indigo-400">Deal!</span>
      </h2>
      <p className="text-gray-300 mb-8">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts.
      </p>

      <div className="flex max-w-xl mx-auto bg-white/10 backdrop-blur-lg rounded-full overflow-hidden border border-white/20">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={handleSubscribe}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default Newsletter;
