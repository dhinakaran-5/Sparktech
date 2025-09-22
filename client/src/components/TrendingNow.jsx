
import {React,  useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";
function TrendingNow() {


const [count,setCount]=useState(0)
    const {products}=useAppContext()
    



    




  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-left mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            Trending Now
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.filter((product)=> product.inStock).slice(0,4).map((product ,index) =>
               <ProductCard key={index} product={product}/>
            )}
            
        </div>
      </div>
    </section>
  );
}

export default TrendingNow