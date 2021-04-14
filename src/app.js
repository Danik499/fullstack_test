const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const router = require("./api")

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use("/api", router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))