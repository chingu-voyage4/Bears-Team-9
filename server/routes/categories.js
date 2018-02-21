const mongoose = require( 'mongoose' );
const express  = require( 'express' );
const router   = express.Router();
const Categories = require( '../models/categories' );


router.get( '/categories', ( req, res ) => {
    Categories.find( {} )
              .then( allData => res.status(200).json(allData) )
              .catch( error => res.status(400).json({ error }))
} )


module.exports = router;