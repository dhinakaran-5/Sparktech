import React from "react";
import { Truck, ShieldCheck, DollarSign, Users } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="md:flex justify-center relative hidden w-full">
          <img
            src="https://ik.imagekit.io/8maos45zi/Sparktech/herobanner?updatedAt=1757688139597" // replace with your futuristic tech image
            alt="Why Choose SparkTech"
            className="rounded-2xl  shadow-[0_0_20px_rgba(168,85,247,0.6)] w-full md:w-[400px] object-cover"
          />
          
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm rounded-full shadow-lg">
            ⚡ Fast Delivery – Under 48 Hours
          </span>
        </div>
          <div className="flex md:hidden  order-2 justify-center relative w-full">
        <img
            src="https://ik.imagekit.io/8maos45zi/Sparktech/herobanner?updatedAt=1757688139597" // replace with your futuristic tech image
            alt="Why Choose SparkTech"
            className=" rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.6)] w-full md:w-[400px] object-cover"
          />
          
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm rounded-full shadow-lg">
            ⚡ Fast Delivery – Under 48 Hours
          </span>
        </div>




        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">Choose SparkTech?</span>
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Truck className="text-pink-500 w-7 h-7" />
              <div>
                <h3 className="font-semibold text-lg">Fast & Reliable Delivery</h3>
                <p className="text-gray-300 text-sm">Get your gadgets delivered quickly and securely.</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <ShieldCheck className="text-indigo-400 w-7 h-7" />
              <div>
                <h3 className="font-semibold text-lg">Premium Quality Accessories</h3>
                <p className="text-gray-300 text-sm">Tested for durability, performance, and style.</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <DollarSign className="text-green-400 w-7 h-7" />
              <div>
                <h3 className="font-semibold text-lg">Best Value Prices</h3>
                <p className="text-gray-300 text-sm">Top tech gear without breaking the bank.</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Users className="text-yellow-400 w-7 h-7" />
              <div>
                <h3 className="font-semibold text-lg">Trusted by Tech Enthusiasts</h3>
                <p className="text-gray-300 text-sm">Loved by thousands of happy gadget lovers.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
