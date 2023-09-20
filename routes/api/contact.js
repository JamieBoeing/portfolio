
const express = require('express')
const router = express.Router()
const contactController = require('../../controllers/api/contactController');

// Define a route to handle form submissions.
router.post('/api/contact', contactController.sendEmail)

module.exports = router
