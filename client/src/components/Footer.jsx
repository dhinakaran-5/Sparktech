import { Facebook, Instagram, Twitter, Youtube, MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">SparkTech</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your trusted destination for premium mobile and laptop accessories. 
            Upgrade your tech life with Spark.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-indigo-400">Home</a></li>
            <li><a href="/categories" className="hover:text-indigo-400">Categories</a></li>
            <li><a href="/trending" className="hover:text-indigo-400">Trending Now</a></li>
            <li><a href="/about" className="hover:text-indigo-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-indigo-400">FAQ</a></li>
            <li><a href="/shipping" className="hover:text-indigo-400">Shipping Info</a></li>
            <li><a href="/returns" className="hover:text-indigo-400">Returns & Refunds</a></li>
            <li><a href="/privacy" className="hover:text-indigo-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col ">
          <h3 className="text-lg font-semibold text-white mb-2">Stay Connected</h3>
         
          
          {/* Fixed input + button */}
  

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-indigo-400"><Facebook size={18} /></a>
            <a href="#" className="hover:text-indigo-400"><Instagram size={18} /></a>
            <a href="#" className="hover:text-indigo-400"><Twitter size={18} /></a>
            <a href="#" className="hover:text-indigo-400"><Youtube size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SparkTech. All rights reserved.
      </div>
    </footer>
  );
}
