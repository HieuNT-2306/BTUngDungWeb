const testRoutes = require('./routes/routes.js');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
app.use(express.json());


mongodb = process.env.MONGODB_URI || "mongodb+srv://it4409:it4409-soict@lamdb-crud.qd3s7vv.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("database connected")
})

app.use('/test', testRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Application listen on port ${PORT}!`));
