const checkAuth = (req, res, next) => {
    if(req.isAuthenticated()) {
        //if user is looged in, req.isAuthenticated() will return true
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized'})
        // res.redirect("http://localhost:3000/");
    }
};

module.exports = checkAuth;
