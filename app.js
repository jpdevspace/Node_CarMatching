// Requiring Modules and Aligning Satellites
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initiating our Express App
const app = express();

// Body-Parser Middleware: Parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from /public
app.use(express.static(__dirname + '/public'));

//Home Route (NOT really needed, since I'm serving all static files from /public)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
})

// Initiating Server
app.listen(3000, () => console.log('App listening on port 3000!'));