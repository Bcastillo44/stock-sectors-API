let mongoose = require("./connection");
let Sector = require("../models/Sector.js");
let json = require("../sectors.json");

Sector
.deleteMany({})
.then(() => Sector.create(json))
.then(data => {
    console.log(data)
    process.exit()
})




