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
    res.redirect( 'http://localhost:3000/verify' );
} );


module.exports = router;