const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const Userroutes = require("./routes/Userroutes");
const cors = require("cors");
const MessageRouter=require("./routes/MessageRouter");
const dbconection = require("./database/dbconnection");
const bodyparser=require("body-parser");
const app = express();

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;


app.use(
    cors({
        // origin: ['https://mytalor-zone-lar6.vercel.app/','http://localhost:5173/'],
        origin: '*',
        methods: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);



app.use(express.json());
app.use(express.static("public"));
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/user", Userroutes);
app.use("/api/v1/message",MessageRouter);

app.listen(PORT, (req, res) => {
    console.log(`Server is running at PORT: ${PORT}`);
});