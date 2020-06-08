let mongoose = require("mongoose")

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/sectors/";
  }

mongoose.connect("mongodb://localhost/sectors", {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;