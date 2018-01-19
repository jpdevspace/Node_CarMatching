const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// Require all the car data
const carData = require('../data/cars.js');
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
    let userData = [
        req.body.roadtrips,
        req.body.alone,
        req.body.electric,
        req.body.miami,
        req.body.batman
    ];

    const difference = carData.map( car => {
        Math.abs(car.roadtrips - userData.roadtrips)
    });


    for (let i = 0; i < carData.length; i++) {
        Math.abs(carData[i].roadtrips - userData.roadtrips);
        
    }

});

module.exports = router;