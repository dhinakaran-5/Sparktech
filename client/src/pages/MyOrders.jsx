import React, { useEffect, useState } from 'react'
import { dummyOrders } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

function MyOrders() {

    const [myorders,setMyorders]= useState([])

  const {user,axios} =useAppContext()
    const fetchMyOrders=async()=>{
        try {

          const{data} =await axios.get("api/order/user")

          if(data.success){
            setMyorders(data.orders)
            
          }
          
        } catch (error) {
          console.log(error.message)
          
        }
    }
useEffect(()=>{

  if(user){
    fetchMyOrders()
    

  }
    

},[user])

console.log(myorders)


   return (
    <div className="max-w-6xl mx-auto px-6 py-16 mt-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        My <span className="text-indigo-500">Orders</span>
      </h1>

      <div className="space-y-6">
        {  myorders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
          >
            {/* Order Header */}
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Order Id:</span>{" "}
                {order._id}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Payment:</span>{" "}
                {order.paymentType}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Total Amount:</span>{" "}
                <span className="text-green-600 font-semibold">
                  ₹{order.amount}
                </span>
              </p>
            </div>

            {/* Items */}
            <div className="divide-y divide-gray-200">
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 py-4 hover:bg-gray-50 rounded-lg transition"
                >
                  <div className="w-16 h-16 flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-800">{item.product.name}</h2>
                    <p className="text-sm text-gray-500">
                      Category: {item.product.category}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-indigo-600 font-semibold">
                      Amount: ₹{item.product.offerPrice * item.quantity}
                    </p>
                    <p className="text-sm text-gray-400">
                      Status: {order.status}
                    </p>
                    <p className="text-sm text-gray-400">
                      Date: {new Date(order.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders







