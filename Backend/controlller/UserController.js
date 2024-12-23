const User = require("../models/UserSchema");
const catchAsyncErrors = require("../middleware/catchasyncerror");
const Errorhandler = require("../middleware/Errorhandler");
const GenerateToken = require("../utils/jwtToken");

// ===================================================== User Register ===============================================
exports.UserRegister = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        return next(new Errorhandler("All fields are required", 400));
    }

    const validRoles = ["User", "Admin"];
    if (!validRoles.includes(role)) {
        return next(new Errorhandler("Invalid role. Allowed roles are User or Admin", 400));
    }

    let user = await User.findOne({ email });
    if (user) {
        return next(new Errorhandler("User already exists", 400));
    }

    user = await User.create({
        name,
        email,
        password,
        role,
    });

    GenerateToken(user, "User registered successfully", 200, res);
});

// ================================================ User Login ========================================================
exports.UserLogin = catchAsyncErrors(async (req, res, next) => {
    const { email, password, role } = req.body;
    console.log("email:",email,password,role)
    if (!email || !password || !role) {
        return next(new Errorhandler("All fields are required", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new Errorhandler("User not found", 400));
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return next(new Errorhandler("Invalid Password", 400));
    }

    GenerateToken(user, "User Logged In Successfully", 200, res);
});