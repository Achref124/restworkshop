const user = require("../Models/user")



exports.register=async(req,res)=>{
    try {
        const {username,email,password,age,phone,photo}=req.body
        const foundUserEmail=await user.find({email})
        if(foundUserEmail){
            res.status(400).send({msg:"email already exists!"})
        }else{
            const foundUserName= await user.find({username})
            if(foundUserName){
            res.status(400).send({msg:"username already exists!"})
            }else{
                const newUser= new user (req.body)
                await newUser.save()
                res.status(200).send({msg:"user registred successfully!",newUser})
            }
        }
        
    } catch (error) {
        res.status(500).send({msg:"error on register",error})
    }
}

exports.login=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}