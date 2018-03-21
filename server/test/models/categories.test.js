const { assert } = require('chai');
const ObjectID   = require('mongodb').ObjectID;
const userId     = '101010101010101010101010';

const Users      = require( '../../models/users' );
const Categories = require( '../../models/categories' );


const mongoose   = require( 'mongoose' );
mongoose.Promise = global.Promise;
mongoose.connect( `mongodb://Bears-09:hellohello@ds031902.mlab.com:31902/bears-09-test` )

const catController = require( '../../controllers/categories' );



const dummyCategory = {
    owner: ObjectID( userId ),
    categoryName: 'Testing Category',
    cards: [
        { front: 'Testing q1', back: 'Testing q2' }
    ]
}


describe( 'Categories model', () => {
    
    before( async done => {

        try {
            await Categories.create( dummyCategory );
            done();
        } catch ( err ) {
            console.log( 'Unable to create category' );
            process.exit( 1 );
        }
    } );

    after( async done => {

        try {
            await Categories.remove( {} );
            done();
        } catch ( err ) {
            console.log( 'Unable to remove categories' );
            process.exit( 1 );
        }
    } )
} );



describe( 'getAll function' , () => {

    it( 'should return a function' , () => {
        assert.isFunction( catController.getAll );
    } )
} )