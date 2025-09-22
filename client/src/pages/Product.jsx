import React, { useEffect,useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams,Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import toast from "react-hot-toast";

const Product = () => {


  const {products,navigate,additemtocart,fetchProducts}=useAppContext()

  const {id} =useParams()
 

const product = products.find((item) => item._id ===id)

 const [relatedProducts, setrelatedProducts] = useState([]);
const [thumbnail, setThumbnail] = useState(null);





useEffect(()=>{
  if (products.length>0){
    let productscopy=products.slice()
    productscopy=productscopy.filter((item)=>product.category===item.category && item._id !== id)

    setrelatedProducts(productscopy.slice(0,5))
  }

},[products])

useEffect(()=>{
  setThumbnail(product? product.images[0]:null)
 

},[product])



 
  return product && (
    <div className="flex flex-col items-center justify-center my-30">
    <div className=" max-w-6xl w-full px-6 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl border border-gray-700">
      {/* Breadcrumb */}
      <p className="text-gray-400 text-sm">
        <Link to={"/"} className="hover:text-indigo-400 cursor-pointer">Home</Link> /
        <Link to={"/products"} className="hover:text-indigo-400 cursor-pointer"> Products</Link> /
        <Link to={`/products/${product.category.toLowerCase()}`}  className="hover:text-indigo-400 cursor-pointer">
          {" "}
          {product.category}
        </Link>{" "}
        /
        <span className="text-indigo-500 font-medium"> {product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-6">
        {/* Left Image Section */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {product.images.map((image, index) => (
              <div
                key={index}
                onClick={() => setThumbnail(image)}
                className={`border ${
                  thumbnail === image
                    ? "border-indigo-500"
                    : "border-gray-600 hover:border-indigo-400"
                } rounded-lg overflow-hidden cursor-pointer transition`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="border border-gray-600 rounded-xl overflow-hidden shadow-lg">
            <img
              src={thumbnail}
              alt="Selected product"
              className="w-96 h-96 object-cover"
            />
          </div>
        </div>

        {/* Right Product Details */}
        <div className="text-sm w-full md:w-1/2 text-gray-300">
          <h1 className="text-3xl font-semibold text-white tracking-wide">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-0.5 mt-3">
            {Array(5)
              .fill("")
              .map((_, i) =>
                product.rating > i ? (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 18 17"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-indigo-500"
                  >
                    <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" />
                  </svg>
                ) : (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 18 17"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-indigo-500/30"
                  >
                    <path d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" />
                  </svg>
                )
              )}
            <p className="text-base ml-2 text-gray-400">
              ({product.rating})
            </p>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-gray-500/70 line-through">
              MRP: ₹{product.oldPrice}
            </p>
            <p className="text-2xl font-semibold text-indigo-400">
              ₹{product.price}
            </p>
            <span className="text-gray-500/70 text-sm">
              (inclusive of all taxes)
            </span>
          </div>

          {/* About */}
          <p className="text-base font-medium mt-6 text-white">
            About Product
          </p>
          <ul className="list-disc ml-5 text-gray-400 mt-2">
            {product.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex items-center mt-10 gap-4 text-base">
            <button onClick={()=>{additemtocart(product._id)}} className="w-full py-3.5 cursor-pointer font-medium bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-indigo-400 rounded-lg transition">
              Add to Cart
            </button>
            <button onClick={()=>{additemtocart(product._id) ;navigate("/cart")}} className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition shadow-lg shadow-indigo-500/20">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>


    {/* RELATED PRODUCTS */}
    <div className="text-white mt-10">


          <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-gradient-to-b from-black via-gray-900 to-black">

      {relatedProducts && (
         <div className="max-w-7xl mx-auto mt-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-left mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
          {relatedProducts.length>0?  "Related Products" :"No results Found"}  
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {relatedProducts.filter((product)=> product.inStock).map((product ,index) =>
               <ProductCard key={index} product={product}/>
            )}
            
        </div>
      </div>

      )}  
     
    </section>
    </div>
    </div>
  );
};

export default Product;
