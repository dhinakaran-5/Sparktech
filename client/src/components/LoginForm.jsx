import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";



export default function LoginForm() {
  const [mode, setMode] = useState("login")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name ,setName] =useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const {showUserLogin,setShowUserLogin,setUser,axios,navigate} =useAppContext()




  const handleSubmit = async(e) => {
    e.preventDefault();

    // if (mode === "signup" && password !== confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }



    try {
      e.preventDefault()
     
       const {data} =await  axios.post(`api/user/${mode}`,{
        name,email,password
       })
       if(data.success){
         
        navigate("/")
       setUser(data.user)
             setShowUserLogin(false)
       }else{

        toast.error(data.message)


       }






      
      
    } catch (error) {
      toast.error(error.message)
    }
  };



  return (
    <div onClick={()=>setShowUserLogin (false)} className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div onClick={(e)=> e.stopPropagation()} className="relative w-full max-w-sm rounded-2xl bg-white/10 border border-white/20 p-8 shadow-2xl backdrop-blur-lg">
        {/* Glow gradient border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-30"></div>

        {/* Inner card */}
        <div className="relative z-10">
          {/* Close Button */}
          <button
            onClick={() => setShowUserLogin(false)}
            className="absolute top-2 right-3 text-gray-300 hover:text-white text-lg"
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="text-2xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 mb-6">
            {mode === "login" ? "User Login" : "Create Account"}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">


 {/* Name */}

 {mode === "register" && (
   <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Name
              </label>
              <input
                type="name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

 )}
            

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

            {/* Confirm Password (only for signup) */}
            {/* {mode === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
            )} */}

            {/* Toggle text */}
            <p className="text-sm text-gray-300 text-center">
              {mode === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("register")}
                    className="text-pink-400 hover:underline"
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="text-pink-400 hover:underline"
                  >
                    Login
                  </button>
                </>
              )}
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 transition shadow-lg shadow-indigo-500/30"
            >
              {mode === "login" ? "Login" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
