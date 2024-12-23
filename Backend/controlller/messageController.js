const Message=require("../models/messageSchema");
const catchAsyncErrors=require("../middleware/catchasyncerror");
const Errorhandler = require("../middleware/Errorhandler");

const createMessage = catchAsyncErrors(async (req, res, next) => {
  const { name, email,message } = req.body;

  if (!name || !email || !message) {
    return next(new Errorhandler("All fields are required", 400));
  }

  try {
    const newMessage = await Message.create({ 
      name,
      email,
      message,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
      data: newMessage,
    });
  } catch (error) {
    return next(new Errorhandler("Failed to send message", 500));
  }
});

module.exports = { createMessage };