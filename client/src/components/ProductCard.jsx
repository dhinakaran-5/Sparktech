import { React, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../context/AppContext";

function ProductCard({ product }) {
  const [count, setCount] = useState(0);
  const { additemtocart, updatecartItem, removecartItem, cartItems,navigate } =
    useAppContext();

  

  return product && (
    <div   className="">
      <div onClick={()=>navigate(`/products/${product.category.toLowerCase()}/${product._id}`)}  to={`/products/${product.category.toLowerCase()}/${product._id}`}
        key={product.id}
        className="group relative rounded-2xl overflow-hidden bg-gray-900/60 border border-white/10 shadow-lg backdrop-blur-md hover:scale-[1.03] transition-transform p-5  min-h-full"
      >
        {/* Discount Badge */}
        {product.discount && (
          <span className=" absolute z-10 top-5 left-5 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {product.discount}% OFF
          </span>
        )}

        {/* Product Image */}
        <div className="flex items-center justify-center mb-4">

          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full rounded-xl h-40 object-cover transform transition-transform group-hover:scale-110 drop-shadow-[0_8px_20px_rgba(168,85,247,0.4)]"
          />
        </div>

        {/* Info */}
        <h3 className="text-white font-semibold text-lg mb-1">
          {product.name}
        </h3>

        {/* Price with strikethrough */}
        <div className="flex items-center gap-2 mb-2">
          {product.oldPrice && (
            <p className="text-gray-400 line-through text-sm">
             {`  ${product.oldPrice} `}
            </p>
          )}
          <p className="text-indigo-400 font-bold text-md">{` ₹ ${product.price} `}</p>
        </div>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 ${
                  i < product.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-500"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.4 8.174L12 18.896l-7.334 3.86 1.4-8.174L.132 9.211l8.2-1.193z" />
              </svg>
            ))}
            <span className="text-gray-300 text-sm">({product.rating})</span>
          </div>
        )}

        {/* Add to Cart */}
        <div onClick={(e)=>e.stopPropagation()}   className="text-indigo-500 w-20">

            {!cartItems[product._id] ?(
                  <button
            className="flex items-center justify-center gap-2 px-4 py-2 
                 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 
                 rounded-full text-white font-medium text-sm shadow-[0_0_10px_rgba(168,85,247,0.6)] 
                 hover:scale-105 hover:opacity-90 transition cursor-pointer"
            onClick={() => {additemtocart(product._id)}}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add
          </button>
            ):(
                 <div
            className="flex items-center justify-center gap-3 px-3 h-[36px] 
                 bg-black/40 border border-white/10 rounded-full 
                 shadow-[0_0_12px_rgba(99,102,241,0.5)] select-none"
          >
            <button
              onClick={() => {removecartItem(product._id)}}
              className="cursor-pointer text-white text-lg font-bold px-2 
                   hover:text-pink-400 transition"
            >
              –
            </button>
            <span className="w-5 text-center text-white">{cartItems[product._id]}</span>
            <button
              onClick={() => {additemtocart(product._id)}}
              className="cursor-pointer text-white text-lg font-bold px-2 
                   hover:text-indigo-400 transition"
            >
              +
            </button>
          </div>

            )}
       
       
         
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
