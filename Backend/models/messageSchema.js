const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    message: {
        type: String,
        required: true,
        trime: true
    }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;