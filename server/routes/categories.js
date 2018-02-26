const mongoose = require( 'mongoose' );
const express  = require( 'express' );
const router   = express.Router();
const Categories = require( '../models/categories' );
const handler    = require( '../controllers/categories.js' );

const { sanitizeUpdatedCards } = require('../middleware/sanitizeInput');


router.get( '/categories', handler.getAll );
router.get( '/category', handler.getOne );
router.post( '/category', handler.addNew )
router.post( '/category/:id', handler.updateOne )

module.exports = router;