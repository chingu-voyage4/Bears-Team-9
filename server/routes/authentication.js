const mongoose = require( 'mongoose' );
const express  = require( 'express' );
const router   = express.Router();
const passport = require( 'passport' );
const Users    = require( '../models/users' );


router.get( '/login', passport.authenticate( 'auth0' ) );
router.get( '/login/callback',  
            passport.authenticate( 'auth0', { failureRedirect: 'http://localhost:3000/'} ), 
            ( req, res ) => {
    // ==== succcessful login ===== //
    res.redirect( 'http://localhost:3000/dashboard' );
} );

router.get( '/checkAuth', ( req, res ) => {
    if( !req.user ) {
        res.status(400).json( { error: 'No User Found'} )
    } else {
        res.status(200).json( { userName: req.user.userName, _id: req.user._id } );
    }
} )

router.get( '/logout', ( req, res ) => {
    req.logOut();
    res.redirect( 'http://localhost:3000/' )
} )


module.exports = router;