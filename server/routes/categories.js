const mongoose = require( 'mongoose' );
const express  = require( 'express' );
const router   = express.Router();
const Categories = require( '../models/categories' );
const { sanitizeUpdatedCards } = require('../middleware/sanitizeInput';)


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
 * Returns a newly added category 
 * Expects:
 *      1) newCategory object from the body
 *          - {
 *              newCategory: {
 *                categoryName: 'Front End',
 *                cards: [
 *                  { front: 'What is HTTPS?', back: 'An Internet protocol' },
 *                  { front: 'What is SASS?', back: 'A CSS preprocessor' }
 *                ]
 *              }
 *            }
 */
router.post( '/category', ( req, res ) => {
    const { newCategory } = req.body;

    // ===== Need to check if this category already exists ===== //
    Categories.findOne( { 'categoryName' : newCategory.categoryName } )
              .then( foundCat => {
                  if( !foundCat ) {
                      return Categories.create( newCategory );
                  }
              } )
              .then( addedCat => res.status(200).json( addedCat ) )
              .catch( error => res.status(401).json( { error } ) )
} )


/**
 * Returns a new updated document
 * Expects: 
 *      1) category id from params
 *      2) updatedCards from body 
 *         - [ { id: 'asdfasdfasd', front: 'newStuff', back: 'otherNewStuff' } ]
 */
router.post( '/category/:id', ( req, res ) => {
    let id = req.params.id;
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