const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system");

const express = require ("express");
const app = express();

// for Routes
const userRoute = require('./routes/userRoutes');
app.use('/',userRoute);
 
app.listen(3001,()=>{
    console.log("Server is running...");
})