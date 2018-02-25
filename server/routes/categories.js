const mongoose = require( 'mongoose' );
const express  = require( 'express' );
const router   = express.Router();
const Categories = require( '../models/categories' );


/**
 * Returns list of all categories
 */
router.get( '/categories', ( req, res ) => {
    Categories.find( {} )
              .then( allData => res.status(200).json(allData) )
              .catch( error => res.status(400).json({ error }) )
} );

/**
 * Returns specific category from list
 * Expects: 
 *      1) category id from headers
 */
router.get( '/category', ( req, res ) => {
    let id = req.headers.id;
    Categories.findById( id )
              .then( cat => {
                  if( !cat ) res.status(400).json( { error: 'No data found'} )
                  res.status(200).json(cat)
              } )
              .catch( err => res.status(400).json( { error: 'No data found' } ) )
} );

/**
 * Returns a new updated document
 * Expects: 
 *      1) category id from headers
 *      2) updatedCards from body 
 *         - [ { id: 'asdfasdfasd', front: 'newStuff', back: 'otherNewStuff' } ]
 */
router.post( '/category', ( req, res ) => {
    let id = req.headers.id;
    let updatedCards = req.body.updatedCards;
    Categories.findById( id )
              .then( category => {
                  if( category ) {
                    let cards = category.cards;
                    updatedCards.forEach( update => {
                        cards.forEach( card => {
                            if( update.id === card.id ) {
                                card.front = update.front;
                                card.back  = update.back;
                            }
                        } )
                    } )
                    category.markModified('cards')
                    return category.save();
                  }
              } )
              .then( result => res.json( result ) )
              .catch( error => res.status(400).json( { error } ) ) 
} )


module.exports = router;