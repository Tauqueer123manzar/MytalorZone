const {UserRegister,UserLogin}=require("../controlller/UserController")
const express = require("express");
const router = express.Router();

router.route("/register").post(UserRegister); 
router.route("/login").post(UserLogin); 

module.exports = router;
