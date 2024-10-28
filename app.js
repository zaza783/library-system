const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const dbURI = process.env.MONGODB_OFFLINE;


//midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(dbURI)
   .then(() => console.log("Connected to mongodb database..."))
   .catch((err) => console.log("Could not connect to mongodb database..."));


//endpoint
app.use('/api/v1/books', bookRoutes)


const port = process.env.PORT;
app.listen(port, () => {
   console.log(`Listening on port ${port}...`);
});