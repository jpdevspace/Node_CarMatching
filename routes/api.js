const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
// Require all the car data
const carData = require('../data/cars.js');

// api/cars Route
router.get('/cars', (req, res) => {
    res.send(carData);
});

module.exports = router;