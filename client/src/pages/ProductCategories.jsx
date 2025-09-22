import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'

import ProductCard from '../components/ProductCard'

function ProductCategories() {

    const {products}=useAppContext()
    const {category}=useParams()

    
   


    const searchCategory =categories.find((item)=>{ 
       return item.path.toLowerCase() === category

    })
  
    const filteredProducts = products.filter((product)=>{
       return product.category.toLowerCase()===category
    })
    console.log(filteredProducts)



 return (
     <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-gradient-to-b from-black via-gray-900 to-black">

      {searchCategory && (
         <div className="max-w-7xl mx-auto mt-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-left mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
          {filteredProducts.length>0?  searchCategory.text.toUpperCase() :"No results Found"}  
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.filter((product)=> product.inStock).map((product ,index) =>
               <ProductCard key={index} product={product}/>
            )}
            
        </div>
      </div>

      )}  
     
    </section>
  )
}

export default ProductCategories