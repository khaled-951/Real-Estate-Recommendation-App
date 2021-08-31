const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const favoritSchema = require('../models/favorit');
const Favorit = mongoose.model('favorites', favoritSchema);
const userSchema = require('../models/user');
const User = mongoose.model('user', userSchema);
const propertySchema = require('../models/property');
const Property = mongoose.model('properties', propertySchema);
const authorized = require('../middlewares/authorized');

router.post('/toggleFavorit', authorized, async (req, res) => {
    if( !req.body.propertyId ) return res.status(400).send('Provide A Property Id Please');
    const foundProperty = await Property.findById(req.body.propertyId);
    
    if(!foundProperty) return res.status(400).send('Property Does Not Exist');
    
    if(!req.user) return res.status(400).send('Error');
    const userFavList = await Favorit.findOne({ userId: req.user.id });
    
    if( !userFavList )
    {
        const newFav = new Favorit({ userId: req.user.id, properties: [foundProperty] });
        newFav.save();
        return res.status(200).send('Favorit Added');
    }
    else
    {
        if(userFavList.properties.includes(req.body.propertyId))
        {
            userFavList.properties = userFavList.properties.filter( property => property.toString() !== req.body.propertyId );
            userFavList.save();
            return res.status(200).send('Favorit Removed');
        }
        else if(!userFavList.properties.includes(req.body.propertyId))
        {
            userFavList.properties.push(foundProperty);
            userFavList.save();
            return res.status(200).send('Favorit Added');
        }
    }
});

router.get('/getUserFavorites/:pageId', authorized, async (req, res) => {
    return res.status(200).send(await Favorit.find( {userId: req.user.id}).skip(6 * Number(req.params.pageId)).limit(6));
});

module.exports = router ;