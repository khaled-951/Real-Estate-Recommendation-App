const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const propertySchema = new Schema({
    _id: String,
    link:  String,
    reference: String,
    dateAnnonce:   String,
    price: String,
    superficie_habitable: String,
    superficie_terrain:  String,
    codeP: String,
    gouvernorat:   String,
    delegation: String,
    localite: String,
    adresse:  String,
    anneeConst: String,
    nbpiece:   String,
    typeImm: String,
    fonds: String,
    plein_air:  String,
    salle_de_bain: String,
    constructible:   String,
    service: String,
    chauffage: String,
    climatisation:  String,
    cuisine: String,
    installations_sportives:   String,
    tel: String,
    agence: String,
    description:  String,
    views: Number,
});

module.exports = propertySchema ;