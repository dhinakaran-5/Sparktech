import React from 'react'
import { Link } from 'react-router-dom';

function MainBanner() {
  return (
    <section className=" bg-gradient-to-r from-black via-[#0a0a1a] to-black text-white overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.25),_transparent_40%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.2),_transparent_40%)]"></div>

      <div className="relative container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Power Up Your Gear with <span className="text-indigo-500">SparkTech ⚡</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Futuristic accessories designed for speed, style, and smart living. 
            Discover gadgets that spark your world.
          </p>
          <div className="flex flex-row sm:flex-row gap-4 justify-center md:justify-start  items-center">
            <Link to={"/products"} className=" px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.7)] hover:scale-105 transition">
              Shop Now
            </Link>
            <Link to={"/products"} className=" px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
              Explore
            </Link>
          </div>
        </div>

        {/* Right image content */}
        <div className="flex-1 relative mt-20">
          <img
            src="https://ik.imagekit.io/8maos45zi/Sparktech/btbanner?updatedAt=1758007731310" // replace with your hero product
            alt="SparkTech Smartwatch"
            className="rounded-3xl w-full max-w-xl mx-auto drop-shadow-[0_0_25px_rgba(99,102,241,0.8)] animate-bounce "
          />
          {/* Glow ring behind product */}
          <div className="absolute -z-10 top-1/2 left-1/2 w-80 h-80 bg-indigo-500 rounded-full blur-[150px] opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner