import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { dummyproducts } from "../assets/assets";
import toast from "react-hot-toast";


import axios from "axios"

axios.defaults.withCredentials=true
axios.defaults.baseURL =import.meta.env.VITE_BACKEND_URL
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const currency =import.meta.VITE_CURRENCY  
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState([]);
  const [addAddresses,setaddAddresses]=useState([])

///IS SELLER

const fetchSeller =async ()=>{
  try {

    const {data}= await axios.get("/api/seller/is-auth-seller")
    if(data.success){
      setIsSeller(true)
    }else{
      setIsSeller(false)
    }
    
  } catch (error) {
    setIsSeller(false)
    
  }
}

///FETCH ALL PRODUCTS
const fetchUser =async ()=>{
  try {

    const {data} =await axios.get("api/user/is-auth")

    if (data.success){
      setUser(data.user)
      setCartItems(data.user.cartItems)
    }
    
  } catch (error) {

    setUser(null)
    
    toast.error(error.message)


    
  }
}





//   FETCH PRODUCTS
  const fetchProducts = async () => {
   

    try{
      const {data} =await axios.get("/api/product/list")
      if(data.success){
        setProducts(data.products)
      }else{

        toast.error(data.message)

      }
    }catch(error){
       toast.error(error.message)

    }


    
  };



// ADD CART

  const additemtocart = (itemid) => {
    let cartData = structuredClone(cartItems);
    
    if(cartData[itemid]){
      cartData[itemid]+=1
    }else{
      cartData[itemid]=1
    }
   toast.success("Added to cart")
    setCartItems(cartData)
    
  };

  // UPDATECART

  const updatecartItem=(itemid,quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemid]=quantity
    
    toast.success("cart updated")
    setCartItems(cartData)


  }
  // remove
   const removecartItem=(itemid)=>{
    let cartData = structuredClone(cartItems);
      if (cartData[itemid]){
        cartData[itemid]-=1
        if (cartData[itemid]===0){
            delete cartData[itemid]
        }
    }
    
    toast.success("Removed from cart")
    setCartItems(cartData)


  }


  const getCartCount=()=>{
    let totalCount=0 
    for (const item in cartItems){
      totalCount+=cartItems[item] 
      
     
    }
    return totalCount
  }

const getCartAmount=()=>{
  let totalAmount=0;
  for (const items in cartItems){
    let iteminfo=products.find((product)=>product._id===items)
    if (cartItems[items]>0){
      totalAmount+=iteminfo.price* cartItems[items]
    }
  }
  return Math.floor(totalAmount*100/100)
}


  useEffect(() => {
    fetchUser()
    fetchSeller()
    fetchProducts();
  }, []);


  useEffect(()=>{
    const updateCart =async ()=>{
      try {

        const {data} = await axios.post("/api/cart/update", {userId : user._id, cartItems} )

        if(!data.success) {
          
          console.log(data.message)



        } 
        
      } catch (error) {
         toast.error(error.message)

        
      }


    }

    if(user){
      updateCart()
    }
    console.log(cartItems)
    

  },[cartItems])




  const value = {
    navigate,
    user,
    setUser,
    setIsSeller,
    isSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    additemtocart,
    updatecartItem,
    removecartItem,
    cartItems,
    currency,
    setSearchQuery,
    searchQuery,
    getCartCount,
    getCartAmount,
    setaddAddresses,
    axios,
    fetchProducts,
    setCartItems,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
