const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const userSchema = new Schema({
    username:  String,
    password: String,
    resetToken:   String,
    email: String,
    SignUpDate: { type: Date, default: Date.now },
});

module.exports = userSchema ;