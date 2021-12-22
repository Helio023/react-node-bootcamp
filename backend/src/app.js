require('dotenv').config({path: '.env'})
const express = require('express')
const connectDb = require('./database/connectMongoDb')
const app = express()


//Connect mongodb
connectDb()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/catalog', require('./routes/productRoutes'))

module.exports = app