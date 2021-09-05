const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = require('../models/user');
const User = mongoose.model('user', userSchema);
const { body, validationResult } = require('express-validator');

router.post('/register', body('email').isEmail(), body('password').isLength({ min: 5 }), body('username').isLength({ min: 5 }), (req, res) => {
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()) return res.status(400).send('Verify Your Inputs Please');
    if(!req.body.username || !req.body.email || !req.body.password || !req.body.passwordConfirm
        || req.body.password !== req.body.passwordConfirm )
        return res.status(400).send('Verify Your Inputs Please');

    User.countDocuments({ $or: [{username: req.body.username}, {email: req.body.email }] })
    .then(async (data) =>  {
        if(data > 0) return res.status(400).send('User Already Exists');

        const newUser = new User({username: req.body.username, password: await bcrypt.hash(req.body.password, 10 ), email: req.body.email});
        newUser.save((err) => {
            if(err) return res.status(500).send('could not add user');
            res.status(200).send('Success');
        });
    });
});

router.post('/login', async (req, res) => {
    if( (!req.body.username && !req.body.password ) || (!req.body.email && !req.body.password) ) 
        return res.status(400).send('Verify Your Inputs Please');
    let foundUser = null ;
    if( req.body.username )
    { 
        foundUser = await User.findOne({username: req.body.username});
        if( !foundUser ) return res.status(400).send('Verify Your Inputs Please');
    }
    else if( req.body.email )
    { 
        foundUser = await User.findOne({email: req.body.email});
        if( !foundUser ) return res.status(400).send('Verify Your Inputs Please');
    }
        if( await bcrypt.compare(req.body.password, foundUser.password) )
            return res.status(200).send(
                jwt.sign({ id: foundUser._id, username: foundUser.username, email: foundUser.email }, process.env.JWT_ACCESS_TOKEN, { algorithm: 'HS256', expiresIn: '30m' } ) );
});

router.post('/verify', async (req, res) => {
    if( !req.get('Authorization') ) return res.status(400).send('Verify Your Inputs Please');
    if( !req.get('Authorization').split(" ")[1] ) return res.status(400).send('Verify Your Inputs Please');
    try{
        return res.status(200).send(await jwt.verify(req.get('Authorization').split(" ")[1], process.env.JWT_ACCESS_TOKEN, { algorithm: 'HS256' } ));
    }
    catch(e) { return res.status(400).send('Verify Your Inputs Please'); }
});

module.exports = router ;