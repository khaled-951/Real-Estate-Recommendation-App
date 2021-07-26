const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const favoritSchema = require('../models/favorit');
const Favorit = mongoose.model('favorites', favoritSchema);
const userSchema = require('../models/user');
const User = mongoose.model('user', userSchema);
const propertySchema = require('../models/property');
const Property = mongoose.model('properties', propertySchema);

router.get('/addToFavorites', async (req, res) => {
    res.status(200).send(await User.findById("60fc6c7d103a1f3be8f43ffe"));
    const newFav = new Favorit({ userId: await User.findById("60fc6c7d103a1f3be8f43ffe"),
        properties: await Property.findById("60c0b92d31a464183853a9ba")});
    newFav.save();
});

router.get('/removeFromFavorites', (req, res) => {

});

module.exports = router ;