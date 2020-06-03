let mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

let sectorSchema = new mongoose.Schema({
    title: String,
    Energy: Number,
    Materials: Number,
    Industrials: Number,
    InformationTechnology: Number,
    Financials: Number,
    RealEstate: Number,
    ConsumerDiscretionary: Number,
    HealthCare: Number,
    Utilities: Number,
    CommunicationServices: Number,
    ConsumerStaples: Number
    
})

let sectorModel = mongoose.model("Sector", sectorSchema)

module.exports = sectorModel

