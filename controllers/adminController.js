const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const loadLogin = async(req,res)=> {
    
    try {
        res.render('login');

    } catch (error) {
        console.log(error.message);
    }
}

const verifyLogin = async(req,res)=>{

    try {
        const email = req.body.email;
        const password = req.body.password;

    
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports ={
    loadLogin
}