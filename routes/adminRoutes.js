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

const auth = require('../middlewares/adminAuth');

const adminController = require('../controllers/adminController');

admin_route.get('/',auth.isLogout,adminController.loadLogin);
admin_route.post('/',adminController.verifyLogin);

admin_route.get('/home',auth.isLogin,adminController.loadDashboard);

admin_route.get('/logout',auth.isLogin,adminController.logout);

admin_route.get('/dashboard',auth.isLogin,adminController.adminDashboard);

admin_route.get('/new-user',auth.isLogin,adminController.newUserload);

admin_route.post('/new-user',adminController.addUser);

admin_route.get('/edit-user',auth.isLogin,adminController.editUserLoad);

admin_route.post('/edit-user',adminController.updateUser);

admin_route.get('/delete-user',adminController.deleteUser);

admin_route.get('*',(req,res)=>{
    res.redirect('/admin');
})


module.exports = admin_route;
