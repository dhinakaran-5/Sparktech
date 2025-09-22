import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../assets/assets";

const Categories = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">
          Shop by <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400">Categories</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link
              to={`products/${cat.path}`}
              key={idx}
              className={`group relative rounded-2xl overflow-hidden p-4 flex flex-col items-center justify-center text-center
                         bg-black/30 backdrop-blur-md border border-white/6 shadow-lg hover:scale-[1.03] transition-transform `}
              aria-label={`Go to ${cat.text}`}
            >
                {/* bg-gradient-to-r ${cat.bgcolor} */}
              {/* color stripe (gradient) */}
              <div
                className={`absolute inset-x-0 top-0 h-2  opacity-90`}
                aria-hidden="true"
              />

              {/* image */}
              <div className="flex items-center justify-center w-full h-full mb-4">
                <img
                  src={cat.image}
                  alt={cat.text}
                  className="rounded-xl w-full h-full object-cover transform transition-all group-hover:scale-110 drop-shadow-[0_10px_25px_rgba(99,102,241,0.25)]"
                />
              </div>

              {/* label */}
              <h3 className="text-white font-semibold text-lg mb-1">{cat.text}</h3>

              {/* subtle caption */}
              <p className="text-xs text-gray-300/70">Explore {cat.text} from SparkTech</p>

              {/* hover neon underline */}
              <span className="absolute left-6 right-6 bottom-6 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
