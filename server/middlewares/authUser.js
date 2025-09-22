import  jwt  from "jsonwebtoken"


export const authUser =async(req,res,next)=>{

    const {token} =req.cookies
    if(!token){
        return res.json({success:false,message:"Not Authorised"})
    }

    try{
        const tokenDecode =  jwt.verify(token,process.env.JWT_SECRET)
        if(tokenDecode.id){
            req.user={id:tokenDecode.id}
        }else{
            return res.json({succes:false,message:"Not Authorized"})
        }
        next ()
    }catch(err){
        console.log(err.message)
        return res.json({success:false,message:err.message})
    }

}

