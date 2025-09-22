import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Loading = () => {


    const {navigate}=useAppContext()

    let {search} =useLocation()
    const query =new URLSearchParams(search)
    const nextUrl=query.get("next")

    useEffect(()=>{

        if(nextUrl){
            setTimeout(()=>{

                navigate(`/${nextUrl}`)

            },5000)
        }


    },[nextUrl])


  return (


<div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      {/* Animated Ring Loader */}
      <div className="relative w-24 h-24 mb-6">
        <motion.span
          className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.span
          className="absolute inset-3 rounded-full border-4 border-pink-500 border-b-transparent"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </div>

      {/* Text */}
      <motion.h2
        className="text-xl font-semibold tracking-widest text-indigo-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, repeatType: "reverse" }}
      >
        Processing Payment...
      </motion.h2>
      <p className="text-gray-400 text-sm mt-2">Redirecting to your Orders</p>
    </div>
  );
}

export default Loading