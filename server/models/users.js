const mongoose = require( 'mongoose' );

const userSchema = new mongoose.Schema( {
    userName: { type: String, required: true },
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    ]
} );

const Users = mongoose.model( 'User', userSchema );

module.exports = Users;