const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

//Home Route (NOT really needed, since I'm serving all static files from /public)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.post('/survey', (req, res) => {
    console.log(req.body);
});

module.exports = router;