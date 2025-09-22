import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const AddAddress = () => {
  const { navigate, setaddAddresses,user, } = useAppContext();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
   
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();


    try {

      const {data} =await axios.post("/api/address/add" ,{address:formData })
      if (data.success){
        toast.success(data.message)
        navigate("/cart")
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }

    
  };

  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  })

  return (
    <div className="min-h-screen bg-black flex flex-col mt-10 items-center justify-center px-4">
      {/* Form Card */}
      <div className="bg-gray-900/80 shadow-[0_0_25px_rgba(139,92,246,0.8)] rounded-2xl p-8 w-full max-w-4xl flex items-center space-x-10 border border-purple-500/40">
        
        {/* Left: Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Add{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Shipping Address
            </span>
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="col-span-1 p-3 rounded-lg bg-black text-white border border-purple-500/40 focus:border-pink-500 outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="col-span-1 p-3 rounded-lg bg-black text-white border border-purple-500/40 focus:border-pink-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="col-span-2 p-3 rounded-lg bg-black text-white border border-purple-500/40 focus:border-pink-500 outline-none"
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formData.street}
              onChange={handleChange}
              className="col-span-2 p-3 rounded-lg bg-black text-white border border-purple-500/40 focus:border-pink-500 outline-none"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="col-span-1 p-3 rounded-lg bg-black text-white border border-purple-500/40 focus:border-pink-500 outline-none"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="col-span-1 p-3 rounded-lg bg-black text-white border border-purple-500/40 focus:border-pink-500 outline-none"
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              className="col-span-1 p-3 rounded-lg bg-black text-white border border-purple-500/40 focus:border-pink-500 outline-none"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="col-span-1 p-3 rounded-lg bg-black text-white border border-purple-500/40 focus:border-pink-500 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="col-span-2 p-3 rounded-lg bg-black text-white border border-purple-500/40 focus:border-pink-500 outline-none"
            />

            <button
              type="submit"
              className="col-span-2 mt-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.8)] hover:scale-105 transform transition"
            >
              Save Address
            </button>
          </form>
        </div>

        {/* Right: Illustration */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.8)]">
            <span className="text-white text-6xl">📍</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
