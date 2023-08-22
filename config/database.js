const mongoose  = require("mongoose");

require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI
const db = mongoose.connection;

mongoose.connect(MONGO_URI);
db.on('open', () => {
    console.log('Mongo is Connected');
});

module.exports = mongoose