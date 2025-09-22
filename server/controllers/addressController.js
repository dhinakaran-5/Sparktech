import Address from "../models/Addresses.js"


export const addAddress =async (req,res)=>{
    try {
          const userId  =req.user.id
        const {address, } =req.body
        await Address.create({...address,userId})
        res.json({success:true , message:"Adress Added Succesfully"})
    } catch (error) {
         console.log(error.message)
        return res.json({success:false,message:error.message})
        
    }
}


export const getAddress =async (req,res)=>{
    try {

        const userId  =req.user.id

       const addresses = await Address.find({userId})
        res.json({success:true , addresses})
    } catch (error) {
         console.log(error.message)
        return res.json({success:false,message:error.message})
        
    }
}