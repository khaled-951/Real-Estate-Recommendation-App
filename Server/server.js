const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
const users = require('./routes/users');
const properties = require('./routes/properties');
const favorit = require('./routes/favorites');
const authorized = require('./middlewares/authorized');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use('/api/user', users);
app.use('/api/property', properties);
app.use('/api/favorit', favorit);

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send('error');
  });
  

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true}).catch(() => console.log('could not connect to DB'));
app.listen(process.env.port);