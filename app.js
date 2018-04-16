require('dotenv').config()

const express = require('express');
const logger = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 3001;
const util = require('./server/helpers/seedDB')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const serveStatic = require('serve-static');
const passportConfig = require('./server/passport-config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passportConfig);


// ===== MODELS ===== //
const Categories = require('./server/models/categories')


// ===== ROUTES ===== //
app.use('/api', require('./server/routes/categories'));
app.use('/auth', require('./server/routes/authentication'));


// ===== Mongoose ===== //
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);

// ==== SET UP MOCK DATA ===== //
// util.seedDB()


app.use(express.static('client/build'));	+// Express will serve up the index.html file if it doesn't recognize the route
app.get( '*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
} );


app.listen(PORT)
