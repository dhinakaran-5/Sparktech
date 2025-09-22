import React, { useEffect,useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';
import axios from 'axios';






const SellerLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const {isSeller,setIsSeller,navigate
  } =useAppContext()


  useEffect(()=>{
    if(isSeller){
        navigate("/seller")
    }

  },[isSeller])

  const handleSubmit = async (e) => {
    try {

      e.preventDefault()
      const {data} =await axios.post ("/api/seller/login",{email,password})
      if (data.success){
        setIsSeller(true) 
        navigate("/seller")
      }else{
        toast.error(data.message)
      }
    } catch (error) {

      toast.error(error.message)
      
    }
   


  }



  return !isSeller && (


    <div onClick={()=>setShowUserLogin (false)} className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div onClick={(e)=> e.stopPropagation()} className="relative w-full max-w-sm rounded-2xl bg-white/10 border border-white/20 p-8 shadow-2xl backdrop-blur-lg">
        {/* Glow gradient border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-30"></div>

        {/* Inner card */}
        <div className="relative z-10">
          {/* Close Button */}
        

          {/* Title */}
          <h2 className="text-2xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 mb-6">
            Seller Login
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

         

            {/* Submit */}
            <button
            onClick={handleSubmit}
              type="submit"
              className="w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 transition shadow-lg shadow-indigo-500/30"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );}




export default SellerLogin