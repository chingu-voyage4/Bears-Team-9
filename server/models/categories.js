const mongoose = require( 'mongoose' );

const cardSchema = mongoose.Schema( {
    front: String,
    back: String
} )

const categorySchema = mongoose.Schema( {
    categoryName: String,
    cards    : [ cardSchema ]
} );

const Categories = mongoose.model( 'Category', categorySchema );

module.exports = Categories;