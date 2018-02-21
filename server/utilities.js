const mongoose = require( 'mongoose' );
const Categories = require( './models/categories' );


const seedDB = () =>  {
    const category = {
        categoryName: 'Front End',
        cards: [
            { front: 'What is HTTPS', back: 'An Internet protocol' },
            { front: 'What is SASS', back: 'A CSS preprocessor' },
            { front: 'Is React a framework or a library', back: 'A library' },
            { front: 'What is the type of NaN', back: 'Number' },
            { front: 'What is the best front-end framework', back: 'Angular :)' }
        ]
    }

    Categories.remove( {} )
              .then( () =>  Categories.create( category ) ) 
              .then( newData => console.log( newData ) )
              .catch( err => console.log( err ) )
              
}; 


module.exports = {
    seedDB
}