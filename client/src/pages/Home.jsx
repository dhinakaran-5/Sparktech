import React from 'react'
import MainBanner from '../components/MainBanner'

import Categories from '../components/Categories'
import TrendingNow from '../components/TrendingNow'
import WhyChooseUs from '../components/WhyChooseUs'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import AllProducts from './AllProducts'
import Product from './Product'

function Home() {
  return (
    <div className='mt-20'>
        <MainBanner/>
        <Categories/>
        <TrendingNow/>
        <WhyChooseUs/>
        <Newsletter/>
       
      
        
        
    </div>
  )
}



export default Home