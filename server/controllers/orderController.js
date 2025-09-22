




//// Place COD : /api/order/cod

import Order from "../models/Order.js";
import Product from "../models/Product.js";
import stripe from "stripe"

import User from "../models/User.js"
export const placeOrderCOD =async (req ,res) =>{
    try {
       const userId = req.user.id
        const {items,address} = req.body 

        if (!address || items.length === 0){
            return res.json({success:false,message:"Invalid Data"})
        }

        let amount =await items.reduce (async (acc,item)=>{
            const product =await Product.findById(item.product);
            return (await acc ) + product.price * item.quantity
        },0)


        amount += Math.floor(amount * 0.02)
 
        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType:"COD"
        })


        return res.json({success:true , message: "Order Placed Succesfully"})
        
    } catch (error) {
         console.log(error.message)
        return res.json({success:false,message:error.message})
    }
}


//// Place Stripe : /api/order/stripe
export const placeOrderStripe =async (req ,res) =>{
    try {
       const userId = req.user.id

       const {origin} =req.headers
        const {items,address} = req.body 

        if (!address || items.length === 0){
            return res.json({success:false,message:"Invalid Data"})
        }

        let productData=[]

        let amount =await items.reduce (async (acc,item)=>{
            const product =await Product.findById(item.product);
            productData.push({
                name:product.name,
                price:product.price,
                quantity:item.quantity
            })
            return (await acc ) + product.price * item.quantity
        },0)


        amount += Math.floor(amount * 0.02)
 
      const order=  await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType:"Online"
        })


        ///STRIPE GATEWAY

        const stripeInstance= new stripe(process.env.STRIPE_SECRET_KEY);

          ///Line items
        const line_items= productData.map((item)=>{
            return{
                price_data:{
                    currency:"inr",
                    product_data:{
                        name:item.name,
                    },
                    unit_amount:Math.floor(item.price+item.price*0.02) *100
                },
                quantity:item.quantity
            }

        })

        ///Create ssessesion

        const session =await stripeInstance.checkout.sessions.create({
            line_items,
            mode:"payment",
            success_url:`${origin}/loader?next=my-orders`,
             cancel_url:`${origin}/cart`,
             metadata:{
                orderId:order._id.toString(),
                userId,

             }
        })


        return res.json({success:true , url:session.url})
        
    } catch (error) {
         console.log(error.message)
        return res.json({success:false,message:error.message})
    }
}


////Stripe WEbhooks to verify paymnets Action:/stripe


export const stripeWebHooks =async (request,response)=>{
    const stripeInstance= new stripe(process.env.STRIPE_SECRET_KEY);

    const sig=request.headers["stripe-signature"]
    let event;

    try{
        event= stripeInstance.webhooks.constructEvent(
            request.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        )
    }catch(error){
        response.status(400).send(`Webhook Error: ${error.message}`)
    }

    //Handle the Evenet

    switch (event.type) {
        case "payment_intent.succeeded":{
            const paymentIntent =event.data.object ;
            const paymentIntentId=  paymentIntent.id;

            //Getting Session Metadata

            const session =await stripeInstance.checkout.sessions.list({
                payment_intent:paymentIntentId,

            })

            const {orderId,userId} = session.data[0].metadata

            // markPaymnet as Paid

            await Order.findByIdAndUpdate(orderId,{isPaid:true})

            await User.findByIdAndUpdate(userId,{cartItems:{}})
        }
         case "payment_intent.payment_failed":{
                  const paymentIntent =event.data.object ;
            const paymentIntentId=  paymentIntent.id;

            //Getting Session Metadata

            const session =await stripeInstance.checkout.sessions.list({
                payment_intent:paymentIntentId,

            })

            const {orderId,} = session.data[0].metadata
            await Order.findByIdAndDelete(orderId)
         }
            
            break;
    
        default:
            console.error(`Unhandled event type ${event.type}`)
            break;
    }
    response.json({received:true})
}







//Get ORDERS BY USER ID : api//order/user


export const getUserOrders =async (req,res)=>{
    try {
        
        const userId = req.user.id

        const orders =await Order.find({
            userId,
            $or:[{paymentType:"COD"} , {isPaid:true}]
        }).populate("items.product address").sort({createdAt: -1 })
        res.json({success:true,orders})

    } catch (error) {
          console.log(error.message)
     res.json({success:false,message:error.message})
        
    }
}


//Get ALL ORDERS for seller  : api//order/seller

export const getAllOrders =async (req,res)=>{
    try {
        

        const orders =await Order.find({
          
            $or:[{paymentType:"COD"} , {isPaid:true}]
        }).populate("items.product address").sort({createdAt: -1 })
        res.json({success:true,orders})

    } catch (error) {
          console.log(error.message)
        return res.json({success:false,message:error.message})
        
    }
}

