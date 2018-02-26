require('dotenv').config()

const express = require( 'express' );
const logger  = require( 'morgan' );
const path    = require( 'path' );
const PORT    = process.env.PORT || 3001;
const util    = require( './server/utilities' )
const bodyParser = require( 'body-parser' );
const mongoose   = require( 'mongoose' );
const serveStatic = require( 'serve-static' );

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ===== MODELS ===== //
const Categories = require( './server/models/categories' )


// ===== ROUTES ===== //
app.use( '/api', require( './server/routes/categories' ) );


// ===== Mongoose ===== //
mongoose.Promise = global.Promise;
mongoose.connect( process.env.DB_URL );

// ==== SET UP MOCK DATA ===== //
// util.seedDB()


app.get( '/', ( req, res ) => {
    res.redirect( '/api/categories' );
} )


app.listen( PORT )