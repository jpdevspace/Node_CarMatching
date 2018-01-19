// Requiring Modules and Aligning Satellites
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// Requiring router for Homepage and Survey
const mainRoute = require('./routes');
// Requiring router for API
const apiRoute = require('./routes/api.js')


// Initiating our Express App
const app = express();


// Body-Parser Middleware: Parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Serve static files from /public
app.use(express.static(__dirname + '/public'));


// Handle Homepage and Survey Routes
app.use('/', mainRoute);
// Handle API Route
app.use('/api', apiRoute);



// Initiating Server
app.listen(3000, () => console.log('App listening on port 3000!'));