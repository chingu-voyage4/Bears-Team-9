const mongoose = require( 'mongoose' );
const Categories = require( '../models/categories' );


const seedDB = () =>  {
    const categories = [
        {
            categoryName: 'Front End',
            cards: [
                { front: 'What is HTTPS?', back: 'An Internet protocol' },
                { front: 'What is SASS?', back: 'A CSS preprocessor' },
                { front: 'Is React a framework or a library?', back: 'A library' },
                { front: 'What is the type of NaN?', back: 'Number' },
                { front: 'What is the best front-end framework?', back: 'Angular :)' }
            ]
        },
        {
            categoryName: 'Back End',
            cards: [
                { front: 'Which side does the back end deal with?', back: 'The server side' },
                { front: 'What is state in redux?', back: 'It stores global variables for a react app' },
                { front: 'What is the back end language for django apps?', back: 'Python' }
            ]
        },

        {
            categoryName: 'History',
            cards: [
                { front: 'Who was the first American president?', back: 'George Washington' },
                { front: 'What was Alexander Hamilton\'s role as a founding father?', back: 'He fought under Washington and was the first treasury secretary'},
                { front: 'Which country was the first to send a man into space?', back: 'Soviet Union' }
            ]
        }
    ]

    Categories.remove( {} )
              .then( () =>  {
                  return Promise.all( categories.map( cat => Categories.create( cat ) ) )
              } )
              // ===== console.log(res) if you want to see actual seeded data===== //
              .then( res => console.log( 'Seeded DB' ) )
              .catch( err => console.log( err ) )
              
}; 


module.exports = {
    seedDB
}