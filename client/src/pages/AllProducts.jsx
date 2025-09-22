import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'

import ProductCard from '../components/ProductCard'

function AllProducts() {

    const {products,searchQuery}= useAppContext()
    const [filteredProducts,setFilteredProducts]=useState([])


    useEffect(()=>{
        if(searchQuery.length >0){
            setFilteredProducts(products.filter(product=>product.name.toLowerCase().includes(searchQuery.toLowerCase())))
        }else{
            setFilteredProducts(products)
        }

    },[products,searchQuery])



  return (
     <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto mt-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-left mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
          {filteredProducts.length>0?  "All Products" :"No results Found"}  
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.filter((product)=> product.inStock).map((product ,index) =>
               <ProductCard key={index} product={product}/>
            )}
            
        </div>
      </div>
    </section>
  )
}

export default AllProducts