const mongoose = require( 'mongoose' );

const cardSchema = mongoose.Schema( {
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    }
} )

const categorySchema = mongoose.Schema( {
    categoryName: {
        type: String,
        required: true
    },
    cards    : [ cardSchema ]
} );

const Categories = mongoose.model( 'Category', categorySchema );

module.exports = Categories;