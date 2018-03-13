const mongoose = require( 'mongoose' );
const express  = require( 'express' );
const router   = express.Router();
const Categories = require( '../models/categories' );
const handler    = require( '../controllers/categories.js' );
const checkAuth = require('../helpers/checkAuth');

const { sanitizeUpdatedCards } = require('../middleware/sanitizeInput');


router.get( '/categories', handler.getAll );
router.post( '/categories', handler.addNewCategory );
router.delete( '/categories', handler.deleteOneCategory );

router.get( '/category', handler.getOne );
router.post( '/category/:id', handler.addNewCard );
router.put( '/category/:id', handler.updateCategory );
router.delete( '/category/:id', handler.deleteCard );

module.exports = router;
