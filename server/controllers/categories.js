const Categories = require( '../models/categories' );
const { sanitize, escapeChars } = require( '../helpers/sanitizeInputs' );


/**
 * Returns list of all categories
 */
const getAll = ( req, res ) => {
    return Categories.find( {} )
                     .then( allData => res.status(200).json(allData) )
                     .catch( error => res.status(400).json({ error }) )
}


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
const addNewCategory = ( req, res ) => {
    const { newCategory } = req.body;
    
    // ===== Need to check if this category already exists ===== //
    return Categories.findOne( { 'categoryName' : newCategory.categoryName } )
    .then( foundCat => {
        if( !foundCat ) {
            newCategory.categoryName = escapeChars( newCategory.categoryName );
            newCategory.cards = sanitize( newCategory.cards );
            return Categories.create( newCategory );
        } else {
            throw new Error( 'Category already exists' );
        }
    } )
    .then( addedCat => res.status(200).json( addedCat ) )
    .catch( error => res.status(401).json( { error } ) )
}


/**
 * Returns specific category from list
 * Expects: 
 *      1) category id from headers
 */
const getOne = ( req, res ) => {
    let id = req.headers.id;
    return Categories.findById( id )
                     .then( cat => {
                         if( !cat ) throw new Error();
                         res.status(200).json(cat)
                     } )
                     .catch( err => res.status(400).json( { error: 'No data found' } ) )
}


/**
 * Returns an OK status if successful
 * Expects: 
 *      1) category id from headers
 *      2) request body properties
 *          - front ( string )
 *          - back  ( string )
 */
const addNewCard = ( req, res ) => {
    let id = req.params.id;
    let { front, back } = req.body;
    return Categories.findByIdAndUpdate( 
                        id, 
                        { $push: { cards: { front, back } } },
                        { new: true }  
                    )
                     .then( category => res.status(200).json({ status: 'OK' }) )
                     .catch( error => res.status(401).json({ error }))        
}


/**
 * Returns a new updated document
 * Expects: 
 *      1) category id from params
 *      2) updatedCards from body 
 *         - [ { id: 'asdfasdfasd', front: 'newStuff', back: 'otherNewStuff' } ]
 */
const updateCategory = ( req, res ) => {
    let id = req.params.id;
    let updatedCards = sanitize( req.body.updatedCards );
    return Categories.findById( id )
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
                     .then( result => res.status(200).json(result) )
                     .catch( (error => res.status(500).json( { error }) ) ) 
} 


module.exports = {
    getAll, 
    getOne,
    addNewCard,
    addNewCategory,
    updateCategory
}