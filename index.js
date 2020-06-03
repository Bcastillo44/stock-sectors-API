let express = require("express")
let app = express()

let Sector = require("./models/Sector")


app.get("/", (request, response) => {
    Sector
    .find({})
    .then(sectors => response.json(sectors))

})



app.listen(3000, () => {
    console.log("Connected")
})

