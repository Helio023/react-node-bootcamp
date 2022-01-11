require('dotenv').config({ path: '.env' });
const express = require('express');
const cookieParser = require('cookie-parser')
const errorHandler = require('./controllers/errorController');
const connectDb = require('./database/connectMongoDb');
const app = express();

//Connect mongodb
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/catalog', require('./routes/productRoutes'));
app.use('/api/v1/catalog', require('./routes/authRoutes'));

app.use(errorHandler);

module.exports = app;
