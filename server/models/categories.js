const mongoose = require( 'mongoose' );

const categorySchema = mongoose.Schema( {
    categoryName: String,
    cards    : [ 
        { front: String, back: String }
    ]
} );

const Categories = mongoose.model( 'Category', categorySchema );

module.exports = Categories;