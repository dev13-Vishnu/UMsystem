const isLogin = async(req,res,next) {

    try {
        if (req.session.user_id) {}
        else {
            res.redirect('/admin');

        }
        next();
    } catch (error) {
        
    }
}

const isLogout = async(req,res,next){

    try {
        if (req.session.user_id) {
            res.redirect('/admin/home')
        }
        next();
    } catch (error) {
        
    }
}

module.exports = {
    isLogin,
    isLogout
}