const User = require('../models/userModel');


const loadRegister = async(req,res) => {
    try {
        
        res.render('registration');
    } catch (error) {
        console.log(error.message);
        
    }
}

const insertUser = async(req,res)=> {
    try {
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phno,
            password:req.body.password,
            is_admin:0
        });
        const userData = await user.save();
        
        if (userData) {
            res.render('registration',{message:"Youre registration has been compleated successfully"});
        }else{
            res.render('registration',{message:"Youre registration failed"});
        }

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    loadRegister,
    insertUser
}