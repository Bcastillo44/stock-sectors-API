let express = require("express")

let app = express()

let cors = require('cors')

let Sector = require("./models/Sector")

app.use(cors())
app.use(express.json())


app.get("/", (request, response) => {
    Sector
    .find({})
    .then(sectors => response.json(sectors))
})

app.get("/sector/", (request, response) => {
    Sector
    .find({})
    .then(sectors => response.json(sectors))
})

app.get("/title/:title", (request, response) => {
    Sector
    .find({title: request.params.title})
    .then(sectors => response.json(sectors))
})

app.post("/sector", (request, response) => {
    let sector = request.body
    Sector
        .create(sector)
        .then(sector => response.json(sector))
        .catch(error => console.log("Error", error))
})

app.put("/sector/:id", (request, response) => {
    let sector = request.body
    Sector.findOneAndUpdate(
        { _id: request.params.id },
        request.body,
        { new: true }
      ).then(sector => {
        response.json(sector)
      })
    })

app.delete("/sector/:id", (request, response) => {
    Sector.findOneAndRemove({ _id: request.params.id })
        .then(sector => {
        response.json(sector)
        })
    })


app.set("port", process.env.PORT || 3000);


app.listen(app.get("port"), () => {
    console.log(`PORT: ${app.get("port")} `);
   
});





