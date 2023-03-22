const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectToMongoose = require("./db")


const app = express()
app.use(express.json()) //IMPORTANT FOR LOGIN AND RESISTER


dotenv.config()
const port = process.env.PORT
connectToMongoose(process.env.MONGOOSE_URL)


app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})