const {createMessage}=require("../controlller/messageController");
const express = require("express");
const router = express.Router();

router.route("/send").post(createMessage); 

module.exports = router;