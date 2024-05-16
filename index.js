const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/user_management_system";
try {
    mongoose.connect(MONGO_URL)
    .then(async() => {
        console.log("MongoDB connected")
    })
} catch (error) {
    console.log('mongo'+error);
}

// mongoose.connect("mongodb://127.0.0.1:27017/user_management_system");

const express = require ("express");
const cors = require('cors');
const app = express();

const PORT = 3001;

app.use(cors());

// for user Routes
const userRoute = require('./routes/userRoutes');
app.use('/',userRoute);

// for admin Routes
const adminRoute = require('./routes/adminRoutes');
app.use('/admin',adminRoute)
 
app.listen(PORT,()=>{
    console.log("Server is running...");
})  