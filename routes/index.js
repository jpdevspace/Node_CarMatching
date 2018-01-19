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
    // User's choices during survey
    let userData = {
        roadtrips: req.body.roadtrips,
        outdoor: req.body.outdoor,
        alone: req.body.alone,
        electric: req.body.electric,
        miami: req.body.miami,
        batman: req.body.batman,
    }

    // Calculating the best match algorithm
    let eachDiffArr = [];   // Holds the difference every user and data (userData.roadtrip - carData.roadtrip... for every property)
    let totalSumOfDiff = 0; // Holds the total sum of the difference for every car in our data
    let finalResultArr = [];    // Holds all total sums of all the differences between the user's values and our cars

    // Loop through our carData array
    for (let i = 0; i < carData.length; i++) {
        // Loop through the properties in the user's data
        for (let key in userData) {
            // Get the difference between the user's point for a property and the same property in current iteration's car in our data
            eachDiffArr.push(Math.abs(userData[key] - carData[i][key]));
        }
        // When it finishes looping through all the first car's properties, getting the difference on every property
        // Sum all those differences 
        totalSumOfDiff = eachDiffArr.reduce((total, points) => total + points, 0);
        // Push the value to an array
        finalResultArr.push(totalSumOfDiff);
        // Clear the array to start pushing the differences between the user's data and the next car
        eachDiffArr = [];
    }
    
    // The best match will be the smallest difference in the finalResultArr array
    let bestMatch = Math.min(...finalResultArr); // Passes each number in the array as a parameter to the Math.min function
    let bestMatchIndex = finalResultArr.indexOf(bestMatch); // Get the index of the lowest number
     
    // Response to the front end
    res.send(carData[bestMatchIndex]); // Finds the corresponding car in our car data array
});

module.exports = router;