

const express=require("express")
const { register, login, deleteUser, resetPassword } = require("../Controllers/user")
const isAuth = require("../Middleware/isAuth")

const router=express.Router()

router.post("/register",register)
router.post("/login",login)
router.delete("/delete/:_id",deleteUser)
router.put("/resetPassword/:_id",resetPassword)
router.post("/current",isAuth,(req,res)=>{
    res.status(200).send(req.user)
})

module.exports=router