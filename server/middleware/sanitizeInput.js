const { buildSanitizeFunction, sanitize } = require('express-validator/filter');
const sanitizeUserInputs = buildSanitizeFunction(['body', 'query', 'params']);


// ===== NOT WORKING YET ===== //
const sanitizeUpdatedCards = ( value ) => {
    return valuesArray.map( val => {
        for( let key in val ) {
            sanitize(val)
                    .blacklist( '{}' )
                    .escape()
                    .trim()
        }
    } )
}

module.exports = {
    sanitizeUpdatedCards
}