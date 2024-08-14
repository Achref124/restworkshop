

const express=require("express")
const { register, login, deleteUser, resetPassword } = require("../Controllers/user")

const router=express.Router()

router.post("/register",register)
router.post("/login",login)
router.delete("/delete/:_id",deleteUser)
router.put("/resetPassword/:_id",resetPassword)

module.exports=router