const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectToMongoose = require("./db")

dotenv.config()
const app = express()
const port = process.env.PORT
connectToMongoose(process.env.MONGOOSE_URL)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})