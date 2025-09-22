import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {useAppContext} from "../context/AppContext"
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const {user,setUser,setShowUserLogin,navigate,setSearchQuery,searchQuery,cartItems,getCartCount,setCartItems}=useAppContext()
  const [pvisible,setPvisible]=useState(false)
  const [totalItems,settotalItems]=useState()

  const logout = async ()=>{

    try {

      const {data } =await axios.get("/api/user/logout")
      if (data.success){
        toast.success(data.message)
        setUser(null)
        
        navigate("/")
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      
    }


    setUser(null)
    navigate ("/")

  }

  useEffect(()=>{
    if (searchQuery.length>0){
      navigate("/products")
    }

  },[searchQuery])




  return (
    <nav className="flex fixed top-0 left-0 w-full z-50  items-center gap-5 justify-between px-6 md:px-16 lg:px-24 
xl:px-32 py-4 bg-black/100 backdrop-blur-lg 
border-b border-white/10 shadow-lg  transition-all"
>
      {/* Logo */}

      <NavLink onClick={()=>navigate("/")} to="/" className="flex items-center">
        <img
          width="50px"
          height="50px"
          src="https://ik.imagekit.io/8maos45zi/Sparktech/logohead.png?updatedAt=1757687370767"
          alt=""
        />
        <span className=" text-3xl font-extrabold tracking-widest bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
          sparkTech
        </span>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-10 text-gray-300 font-medium">

        <div className="flex gap-10"><NavLink to="/" onClick={()=>setOpen(false)} className="relative group transition">
            <span className="hover:text-indigo-400">Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:w-full transition-all"></span>
          </NavLink>
            <NavLink to="/products" onClick={()=>setOpen(false)} className="relative group transition">
            <span className="hover:text-indigo-400">All Product</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:w-full transition-all"></span>
          </NavLink>

          {user && <NavLink to="/myorders" onClick={()=>setOpen(false)} className="relative group transition">
            <span className="hover:text-indigo-400">My orders</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:w-full transition-all"></span>
          </NavLink>}
           
           <NavLink to="/about" onClick={()=>setOpen(false)} className="relative group transition">
            <span className="hover:text-indigo-400">Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:w-full transition-all"></span>
          </NavLink></div>
       
          
            
        

        {/* Search Bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-700 px-3 rounded-full bg-[#161B22]/80 hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-gray-200"
            type="text"
            placeholder="🔍 Search gadgets..."
            onChange={(e)=>{setSearchQuery(e.target.value)}}
          />
        </div>

        {/* Cart */}
        <div onClick={()=>navigate("/cart")}  className="relative cursor-pointer hover:scale-110 transition-transform">
          <svg
            width="22"
            height="22"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-indigo-400 drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute -top-2 -right-3 text-xs text-white bg-gradient-to-r from-indigo-500 to-purple-600 w-[20px] h-[20px] flex items-center justify-center rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]">
            {user?   getCartCount() : 0}
          </span>
        </div>

        {/* Login Button */}

        {!user ?(<button onClick={()=>{
         
          setShowUserLogin(true)
         
        }} className="cursor-pointer px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:opacity-90 transition text-white rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)] hover:scale-105">
          Login
        </button>):(<div className="relative group">
          <img src="https://ik.imagekit.io/8maos45zi/Sparktech/usericon.jpg?updatedAt=1757738622572" alt="user-icon" className="w-[30px] h-[30px] rounded-full " />
           <ul className="flex-col  gap-2 absolute hidden group-hover:flex top-7  right-1 bg-[#0D1117]  rounded shadow  py-2.5 w-30 z-40">
            <li className="cursor-pointer pl-4 hover:bg-white/20" onClick={()=>navigate("my-orders")}>My orders</li>
            <li className="cursor-pointer pl-4 hover:bg-white/20" onClick={logout}>Logout</li>

           </ul>
 
        </div>

        )}
        
      </div>

      {/* Mobile Menu Button */}

      <div className="flex items-center gap-6 sm:hidden">
 <div onClick={()=>navigate("/cart")}  className="relative cursor-pointer hover:scale-110 transition-transform">
          <svg
            width="22"
            height="22"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-indigo-400 drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute -top-2 -right-3 text-xs text-white bg-gradient-to-r from-indigo-500 to-purple-600 w-[20px] h-[20px] flex items-center justify-center rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]">
            {getCartCount()}
          </span>
        </div>



        <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden text-indigo-400"
      >
        <svg
          width="28"
          height="20"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]"
        >
          <rect width="21" height="2" rx="1" fill="currentColor" />
          <rect x="8" y="6" width="13" height="2" rx="1" fill="currentColor" />
          <rect x="6" y="12" width="15" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>


      </div>
      

      {/* Mobile Menu */}

  { open && (<div
    className={`${
      open ? "flex" : "hidden"
    } absolute top-[70px] left-0 w-full bg-[black]/100 backdrop-blur-lg shadow-[0_0_20px_rgba(99,102,241,0.3)] py-4 flex-col items-start gap-4 px-5 text-sm md:hidden`}
  >
  <NavLink to="/" onClick={()=>setOpen(false)} className="relative group transition text-white">
        <span className="hover:text-indigo-400">Home</span>
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:w-full transition-all"></span>
      </NavLink>
        <NavLink to="/products" onClick={()=>setOpen(false)} className="relative group transition text-white">
        <span className="hover:text-indigo-400">All Product</span>
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500  group-hover:w-full transition-all"></span>
      </NavLink>

      {user && <NavLink to="/myorders" onClick={()=>setOpen(false)} className="relative group transition text-white">
        <span className="hover:text-indigo-400">My orders</span>
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:w-full transition-all"></span>
      </NavLink>}
        
        <NavLink to="/about" onClick={()=>setOpen(false)} className="relative group transition text-white">
        <span className="hover:text-indigo-400">Contact</span>
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:w-full transition-all"></span>
      </NavLink>

     {!user ?(<button onClick={()=>{
          setOpen(false)
          setShowUserLogin(true)
          console.log("updated")
        }} className="cursor-pointer px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:opacity-90 transition text-white rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)] hover:scale-105">
          Login
        </button>):(<button onClick={logout} className="cursor-pointer px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:opacity-90 transition text-white rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)] hover:scale-105">
          Logout
        </button>

        )}
  </div>)
    }
    </nav>
  );
};

export default Navbar;
