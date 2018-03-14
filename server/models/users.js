const mongoose = require( 'mongoose' );

const userSchema = new mongoose.Schema( {
    userName: { type: String, required: true },
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],
    scores: [
        { categoryId : mongoose.Schema.Types.ObjectId , score: Number }
    ]
} );

const Users = mongoose.model( 'User', userSchema );

module.exports = Users;