


const jwt=require("jsonwebtoken")
const user = require("../Models/user")




const isAuth = async (req,res,next) =>{
    try {
        const token = req.headers['authorization']
        if(!token) {
            return res.status(400).send({msg:'not authorized!'})
        }
        const decoded = jwt.verify(token, process.env.SEKRET_KEY)
        const foundUser = await user.findOne({_id: decoded._id})
        if (!foundUser){
           return res.status(400).send({msg:'not authorized!'})
        }
        req.user=foundUser
        next()
    } catch (error) {
        // res.status(200).send(error)
        console.log(error)
    }
    }
    
    module.exports = isAuth 