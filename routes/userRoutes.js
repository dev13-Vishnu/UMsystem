const express = require("express");
const user_route = express();
const session = require('express-session');
const config = require('../config/config');

user_route.use(session({secret:config.sessionSecret}))

const auth = require('../middlewares/auth');

user_route.set('view engine','ejs');
user_route.set('views','./views/users');

const bodyparser = require('body-parser');
user_route.use(bodyparser.json());
user_route.use(bodyparser.urlencoded({extended:true}));


const userController = require('../controllers/userController');
user_route.get('/register',auth.isLogout,userController.loadRegister);

user_route.post('/register',userController.insertUser);

user_route.get('/',auth.isLogout,userController.loginLoad);
user_route.get('/login',auth.isLogout,userController.loginLoad);

user_route.post('/login',userController.verifyLogin);

user_route.get('/home',auth.isLogin,userController.loadHome);


module.exports = user_route;