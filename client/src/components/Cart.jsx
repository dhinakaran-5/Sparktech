import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext"
import { dummyAddresses } from "../assets/assets"
import toast from "react-hot-toast"

const Cart = () => {
  const {
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
    navigate,
    user,
    axios,
    setCartItems
    
  } = useAppContext()

  const [cartArray, setCartArray] = useState([])
  const [addreses, setAddresses] = useState([])
  const [showAddress, setShowAddress] = useState(false)
  const [selectedAddress, setselectedAddress] = useState(null)
  const [paymentOption, setPaymentOption] = useState("COD")
  const [bgcolor,setBgcolor]=useState("bg-indigo-200")

  const getCart = () => {
    let tempArray = []
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key)
      if (product) {
        product.quantity = cartItems[key]
        tempArray.push(product)
      }
    }
    setCartArray(tempArray)
  }


const getUserAddress = async()=>{

  try{
    const {data} = await axios.get("/api/address/get",{userId:user._id})
  if(data.success){
    setAddresses(data.addresses)
    if(data.addresses.length>0){
      setselectedAddress(data.addresses[0])
    }
  }else{
    toast.error(data.message)

  }

  }catch(error){
    toast.error(error.message)
  }

  


}

useEffect(()=>{
  if(user){
    getUserAddress()
  }
},[user])


  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart()
      
    }
  }, [products, cartItems])

    useEffect(() => {
        if (cartArray.length > 0 ){
setBgcolor("bg-indigo-800")
        }
        else{
           setBgcolor("bg-indigo-200") 
        }
        console.log(cartArray)
        console.log(cartArray.length)
  
  }, [cartArray.length])

  const placeOrder = async () => {

    try{
      if(!selectedAddress){
        return toast.error("Please Select an Address")
      }

      if(paymentOption==="COD"){
        const {data} =await  axios.post("api/order/cod",{
          userId:user._id,
          items:cartArray.map((item)=>({
            product:item._id,quantity:item.quantity
          })),
          address:selectedAddress._id
        })

        if(data.success){
          toast.success (data.message)
          setCartItems({})
          navigate("/my-orders")

        }else{
          toast.error(data.message)
        }


        

      }else{

         const {data} =await  axios.post("api/order/stripe",{
          userId:user._id,
          items:cartArray.map((item)=>({
            product:item._id,quantity:item.quantity
          })),
          address:selectedAddress._id
        })

        if(data.success){
          window.location.replace(data.url)

        }else{
          toast.error(data.message)
        }



      }
    }catch(error){
      toast.error(error.message)

  }




    
  }

  return products.length > 0 && cartItems ? (

    <div className="flex flex-col sm:items-center md:items-start md:flex-row gap-10 py-16 max-w-6xl w-full px-6 mx-auto mt-20">
      {/* CART SECTION */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-semibold mb-8 flex items-center justify-between">
          Shopping Cart
          <span className="text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
            {getCartCount()} Items
          </span>
        </h1>

        {/* CART HEADER */}
        <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-sm font-medium pb-3 border-b">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {/* CART ITEMS */}
        { user && cartArray.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_1fr] items-center text-sm md:text-base py-5 border-b"
          >
            {/* Product Info */}
            <div className="flex items-center md:gap-6 gap-3">
              <div
                onClick={() =>
                  navigate(`/products/${product.category.toLowerCase()}/${product._id}`)
                }
                className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  className="max-w-full h-full object-cover"
                  src={product.images[0]}
                  alt={product.name}
                />
              </div>
              <div>
                <p className="font-semibold text-gray-500">{product.name}</p>
                <div className="font-normal text-gray-500/80 text-sm mt-1">
                  <p>Weight: <span>{"N/A"}</span></p>
                  <div className="flex items-center gap-2 mt-1">
                    <p>Qty:</p>
                    <select
                      className="outline-none border rounded px-2 py-1 text-gray-700"
                      value={product.quantity}
                      onChange={(e) =>
                        updatecartItem(product._id, Number(e.target.value))
                      }
                    >
                      {Array.from({ length: 9 }, (_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <p className="text-center font-medium text-gray-800">
              ₹{product.price * product.quantity}
            </p>

            {/* Remove Button */}
            <button
              onClick={() => removecartItem(product._id)}
              className="mx-auto bg-red-100 hover:bg-red-200 p-2 rounded-full transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-red-500"
              >
                <path
                  d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}

        {/* Continue Shopping */}
        <button
          onClick={() => {
            navigate("/products")
          }}
          className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition"
        >
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Continue Shopping
        </button>
      </div>

      {/* ORDER SUMMARY */}
      <div className="max-w-[360px] w-full bg-white p-6 rounded-2xl shadow-lg border">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <hr className="border-gray-200 my-5" />

        {/* Address */}
        <div className="mb-6">
          <p className="text-sm font-medium uppercase text-gray-600">
            Delivery Address
          </p>
          <div className="relative flex justify-between items-start mt-2">
            <p className="text-gray-600 text-sm leading-snug">
              {selectedAddress
                ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                : "No address found"}
            </p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-indigo-500 hover:underline text-sm"
            >
              Change
            </button>

            {showAddress && (
              <div className="absolute top-12 left-0 py-2 bg-white border border-gray-200 text-sm w-full rounded-lg shadow-lg z-10">
                {addreses && addreses.map((add, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setselectedAddress(add)
                      setShowAddress(false)
                    }}
                    className="text-gray-600 p-2 hover:bg-gray-100 cursor-pointer transition"
                  >
                    {add.street}, {add.city}, {add.state}, {add.country}
                  </p>
                ))}
                <p
                  onClick={() => navigate("/add-address")}
                  className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-50 font-medium"
                >
                  + Add new address
                </p>
              </div>
            )}
          </div>

          {/* Payment */}
          <p className="text-sm font-medium uppercase text-gray-600 mt-6">
            Payment Method
          </p>
          <select
            onChange={(e) => setPaymentOption(e.target.value)}
            className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 rounded-lg outline-none text-gray-700"
          >
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr className="border-gray-200" />

        {/* Price Summary */}
        <div className="text-gray-600 mt-4 space-y-2 text-sm">
          <p className="flex justify-between">
            <span>Price</span>
            <span>₹ {getCartAmount()}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-green-600">Free</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (2%)</span>
            <span>₹{(getCartAmount() * 2) / 100}</span>
          </p>
          <p className="flex justify-between text-lg font-semibold mt-3 text-gray-800">
            <span>Total</span>
            <span>₹{getCartAmount() + (getCartAmount() * 2) / 100}</span>
          </p>
        </div>

        {/* Place Order */}

    <button
          onClick={placeOrder}
          
          className={`w-full py-3 mt-6 ${bgcolor} text-white font-medium rounded-xl hover:bg-indigo-700 transition`}
        >
          {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
        </button>


    
      </div>
    </div>
  ) : null
}

export default Cart
