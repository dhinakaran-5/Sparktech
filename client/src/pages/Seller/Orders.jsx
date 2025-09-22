import { useEffect, useState } from "react";
import { dummyOrders,dummySellOrders } from "../../assets/assets";
import axios from "axios";
import toast from "react-hot-toast";

const Orders = () => {
    const boxIcon = "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/boxIcon.svg"
   

    const [orders ,setOrders] =useState([])

    const fetchOrders=async()=>{

        try {

            const {data} =await axios.get("/api/order/seller")

            if(data.success){
                setOrders(data.orders)
            }
            else{
                toast.error(data.messsage)
            }
            
        } catch (error) {
            toast.error(error.messsage)
            
        }


       
    }

    useEffect(()=>{
        fetchOrders()

    },[])
    




    return (
        <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
        <div className="md:p-10 p-4 space-y-4">
            <h2 className="text-lg font-medium">Orders List</h2>
            {orders.map((order, index) => (
                <div key={index} className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800">
                    <div className="flex gap-5">
                        <img className="w-12 h-12 object-cover opacity-60" src={boxIcon} alt="boxIcon" />
                        <>
                            {order.items.map((item, index) => (
                                <div key={index} className="flex flex-col justify-center">
                                    <p className="font-medium">
                                        {item.product.name}{" "} <span className={`text-indigo-500 ${item.quantity < 2 && "hidden"}`}>x {item.quantity}</span>
                                    </p>
                                </div>
                            ))}
                        </>
                    </div>

                    <div className="text-sm">
                        <p className='font-medium mb-1'>{order.address.firstName} {order.address.lastName}</p>
                        <p>{order.address.street}, {order.address.city}, {order.address.state},{order.address.zipcode}, {order.address.country}</p>
                    </div>

                    <p className="font-medium text-base my-auto text-black/70">₹{order.amount}</p>

                    <div className="flex flex-col text-sm">
                        <p>Method: {order.paymentType}</p>
                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                        <p>Payment: {order.isPaid  ? "Paid" : "Pending"}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Orders