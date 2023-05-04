const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectToMongoose = require("./db")
const fileUpload = require('express-fileupload')

const app = express()
app.use(express.json()) //IMPORTANT FOR LOGIN AND RESISTER
app.use(cors())
app.use(fileUpload({
  useTempFiles:true,
  limits:{fileSize: 50*2024*1024}
}))


dotenv.config()
const port = process.env.PORT
connectToMongoose(process.env.MONGOOSE_URL)



app.use('/api/auth',require('./routes/auth'))
app.use('/api/product',require('./routes/product'))
app.use('/api/orders',require('./routes/orders'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})