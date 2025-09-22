///Update User CartData : /api/cart/update

import User from "../models/User.js"


export const updateCart =async (req,res)=>{
    try{

        const userId  =req.user.id
        const{cartItems}=req.body


       if (!userId) {
      return res.json({ success: false, message: "UserId is required" });
    }

    await User.findByIdAndUpdate(
      userId,
      { $set: { cartItems } }, // update cartItems field
      { new: true }            // return updated document
    );

    res.json({ success: true, message: "Cart Updated" });
    }catch(error){
         console.log(error.message)
        res.json({success:false,message:error.message})
    }
}