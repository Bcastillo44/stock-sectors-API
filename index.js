let express = require("express")
let app = express()

let Sector = require("./models/Sector")


app.get("/", (request, response) => {
    Sector
    .find({})
    .then(sectors => response.json(sectors))
})

app.get("/title/:title", (request, response) => {
    Sector
    .find({title: request.params.title})
    .then(sectors => response.json(sectors))
})

app.post


app.listen(3000, () => {
    console.log("Connected")
})

