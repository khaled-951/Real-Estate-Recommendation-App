const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const favoritSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    properties: [{ type: Schema.Types.ObjectId, ref: 'properties' }]
});

module.exports = favoritSchema ;