const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const propertySchema = require('../models/property');
const Property = mongoose.model('properties', propertySchema);

router.get('/getMostViewed', async (req, res) => {
    return res.status(200).send(await Property.find().sort({ views: -1}).limit(6));
});

router.get('/getPropertyDetailsAndRecommended/:propId', async (req, res) => {
    return res.status(200).send( { propertyDetails: await Property.findById(req.params.propId),
        recommended: await Property.find().sort({ views: -1}).limit(6) } );
});

router.post('/searchQuery/:page', async (req, res) => {
    let findQuery = {} ;

    if(req.body.searchQuery)
        findQuery = { ...findQuery, $or: [ {link: { $regex: req.body.searchQuery }}, 
            {delegation: { $regex: req.body.searchQuery }}, {adresse: { $regex: req.body.searchQuery }},
            {codeP: { $regex: req.body.searchQuery }}, {agence: { $regex: req.body.searchQuery }}, {description: { $regex: req.body.searchQuery }} ] } ;

    /*if(Number(req.body.priceMin) > 0 && Number(req.body.priceMin) < 999_999_999)
    {
        if( (Number(req.body.priceMin) / 1_000 ) >= 1 && (Number(req.body.priceMin) / 1_000_000 ) < 1 )
        {
            findQuery = { ...findQuery, price: { $lte: parseInt(Number(req.body.priceMin) / 1000) + "�000" } } ;}
        else if( (Number(req.body.priceMin) / 1_000_000 ) >= 1 && (Number(req.body.priceMin) / 1_000_000_000 ) < 1 )
            findQuery = { ...findQuery, price: { $gte: "90�000�000 DT"} } ;
    }*/
    
    if(req.body.bedrooms === "0")
        findQuery = { ...findQuery, nbpiece: { $exists: true, $regex: '0' }} ;
    else if(Number(req.body.bedrooms) > 0 && Number(req.body.bedrooms) < 6 )
        findQuery = { ...findQuery, nbpiece: { $exists: true, $regex: req.body.bedrooms[0] }} ;

    if(req.body.airConditioned === true )
        findQuery = { ...findQuery, climatisation: { $exists: true, $ne: "" }} ;
    else if (req.body.airConditioned === false )
        findQuery = { ...findQuery, climatisation: { $exists: true, $eq: "" }} ;

    if(req.body.heated === true )
        findQuery = { ...findQuery, chauffage: { $exists: true, $ne: "" }} ;
    else if (req.body.heated === false )
        findQuery = { ...findQuery, chauffage: { $exists: true, $eq: "" }} ; 

    if(req.body.hasSportsEquipment === true )
        findQuery = { ...findQuery, installations_sportives: { $exists: true, $ne: "" }} ;
    else if (req.body.hasSportsEquipment === false )
        findQuery = { ...findQuery, installations_sportives: { $exists: true, $eq: "" }} ;
        
    if( req.body.states instanceof Array )
        findQuery = { ...findQuery, gouvernorat: { $in: req.body.states }  } ;

    if( req.body.typeImm instanceof Array )
        findQuery = { ...findQuery, typeImm: { $in: req.body.typeImm }  } ;

    console.log(findQuery);
    //await Property.find(findQuery).skip(6 * Number(req.params.page) ).limit(6)
    const resu = await Property.aggregate( [ { $match: findQuery }, {
        "$facet": {
          "results": [
            { "$skip": 6 * Number(req.params.page) },
            { "$limit": 6 }
          ],
          "resultsCount": [
            { "$count": "total" }
          ]
        }
      } ] ) ;
      //console.log(resu[0].resultsCount[0].total);
    return res.status(200).send({ results: resu[0]?.results,
         resultsCount: resu[0]?.resultsCount[0]?.total});
    /*return res.status(200).send({ results: await Property.find(findQuery).skip(6 * Number(req.params.page) ).limit(6),
         resultsCount: await Property.countDocuments(findQuery)});*/
});

module.exports = router ;