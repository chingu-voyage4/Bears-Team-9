const Auth0Strategy = require( 'passport-auth0' );
const passport      = require( 'passport' );
const session       = require( 'express-session' );
const MongoStore    = require( 'connect-mongo' )(session);
const mongoose      = require( 'mongoose') ;
const express       = require( 'express' );
const router        = express.Router();
const Users         = require( './models/users' );


const strategy = new Auth0Strategy( {
  domain      :  process.env.domain,
  clientID    :  process.env.clientID, 
  clientSecret:  process.env.clientSecret,
  callbackURL :  process.env.callbackURL,
  scope: 'openid profile'
},
  function ( accessToken, refreshToken, extraParams, profile, done ) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    // console.log( profile )
    Users.findOne( { userName : profile.displayName } )
         .then( user => {

          if( !user ) {

             Users.create( {
               userName: profile.displayName
             } )
                  .then( madeUser => done( null, madeUser )) 
                  .catch( err => console.log(err) )

          //user in db
          } else {
            return done( null, user );
          }
        } )
        .catch( err => done( err ) )
    }
);

router.use( session( {
  secret: process.env.secret,
  resave: true,
  saveUninitialized: true, 
  store: new MongoStore( { mongooseConnection: mongoose.connection } ),
  maxAge: 7200000   // 2 hours
} ) );

router.use( passport.initialize() );
router.use( passport.session() );

passport.serializeUser( ( user, done ) =>  done( null, user ) );
passport.deserializeUser( ( user, done ) => done( null, user ) );

passport.use( strategy );


module.exports = router;


