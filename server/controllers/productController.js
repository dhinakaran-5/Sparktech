import { v2 as cloudinary } from "cloudinary";
import Product from "../models/Product.js"






//ADD Product : /api/product/add
export const addProduct =async (req,res)=>{


    try {

        let productData=JSON.parse(req.body.productData)
        
        const images= req.files
        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
                return result.secure_url
            })


        )

        await Product.create({...productData,images:imagesUrl})

       res.json({success:true ,message:"Product Added"})
        
    } catch (err) {
          console.log(err.message)
        return res.json({success:false,message:err.message})
        
    }
}


//ADD Product : /api/product/list
export const productList =async(req,res)=>{

    try {

        const products =await Product.find({})
        res.json({success:true,products})
        
    } catch (error) {

          console.log(err.message)
        return res.json({success:false,message:err.message})
        
    }

}

//get single product Product : /api/product/add

export const productById = async (req,res)=>{

    try {

        const {id} =req.body 
        const product =await Product.findById(id)
        res.json({success:true,product})
        
    } catch (error) {

          console.log(err.message)
        return res.json({success:false,message:err.message})
        
    }


}
//change product INSTOCK  : /api/product/add
export const changeStock = async (req,res)=>{


    try {

         const {id,inStock} =req.body 

         await Product.findByIdAndUpdate(id,{inStock})
         res.json({success:true,message:"stock Updated"})
        
    } catch (error) {

      console.log(error.message)
        return res.json({success:false,message:error.message})
    }


}