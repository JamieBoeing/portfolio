require('dotenv').config();
require('./config/database')
const app = require('./app-server')
const PORT = process.env.PORT || 8001;
const mongoose = require('mongoose');




app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});



