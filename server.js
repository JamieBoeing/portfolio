require('dotenv').config();
require('./config/database')
const mongoose = require('mongoose');
const app = require('./app-server')
const PORT = process.env.PORT || 8008;



app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});



