let mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/sectors", {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;