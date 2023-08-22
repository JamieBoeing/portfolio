
const express = require('express')
require('./config/database');
const app = express()
const path = require('path')
const logger = require('morgan')
const favicon = require('serve-favicon')
// middleware



app.use(express.json()) // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'));



app.use(express.static(path.join(__dirname, 'public')))
//api routes here

// sends to react router catch all
app.get('*', function(req, res) {
    res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')));
});


module.exports = app
