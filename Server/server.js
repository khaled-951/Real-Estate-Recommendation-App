const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('morgan');
const users = require('./routes/users');
const properties = require('./routes/properties');
const authorized = require('./middlewares/authorized');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use('/api/user', users);
app.use('/api/property', properties);

app.get( '/', authorized, (req, res) =>{
    res.send({ accessToken: jwt.sign({ burh: 'howdy'}, process.env.JWT_ACCESS_TOKEN)});
});

app.get( '/bcrypt', (req, res) =>{
    bcrypt.hash('howdy', 10, function(err, hash) {
        if(err) return res.sendStatus(404);
        res.send({ bcrypt: hash });
    });
    
});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send('error');
  });
  

mongoose.connect('mongodb+srv://khaled@cluster0.ajsco.mongodb.net/stage?authSource=admin&replicaSet=atlas-zv7ysq-shard-0&readPreference=primary&ssl=true',
 {useNewUrlParser: true, useUnifiedTopology: true}).catch(() => console.log('could not connect to DB'));
app.listen(process.env.port);