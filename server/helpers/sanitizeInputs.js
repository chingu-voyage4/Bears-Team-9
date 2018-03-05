
const sanitize = ( valuesArray ) => {
    valuesArray.forEach( el => {
        for( let key in el ) {
            el[key] = escapeChars( el[key] )
        }
    } )
    return valuesArray;
}


const escapeChars = ( s ) => {
    let ESC_MAP = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };
    return s.replace(/[&<>]/g, (c) => ESC_MAP[c] );
}


module.exports = {
    sanitize,
    escapeChars
}