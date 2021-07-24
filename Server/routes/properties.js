const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const propertySchema = require('../models/property');
const Property = mongoose.model('properties', propertySchema);

router.get('/', async (req, res) => { 
    console.log(await Property.find( { "gouvernorat" : "TUNIS" } ) );
    return res.status(200).send("hi");
});

module.exports = router ;