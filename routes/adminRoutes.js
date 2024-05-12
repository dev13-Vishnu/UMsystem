const express = require('express')
const admin_route = express();

const session = require('express-session');
const config = require('../config/config');
admin_route.use(session({secret:config.sessionSecret}));

const bodyparser = require('body-parser');
admin_route.use(bodyparser.json());
admin_route.use(bodyparser.urlencoded({extended:true}));

admin_route.set('view engine','ejs');
admin_route.set('views','./views/admin');

const adminController = require('../controllers/adminController');

admin_route.get('/',adminController.loadLogin);
admin_route.get('*',(req,res)=>{
    res.redirect('/admin');
})

admin_route.post('/',adminController.verifyLogin);


module.exports = admin_route;
