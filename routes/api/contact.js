
const express = require('express')
const router = express.Router()
const contactController = require('../../controllers/api/contactController');

// Define a route to handle form submissions.
// router.post('/contact', contactController.sendEmail)
router.post('/api/contact', async (req, res) => {
    // Call your controller to handle the contact form submission
    try {
      const result = await contactController.sendEmail(
        req.body.user_name,
        req.body.user_email,
        req.body.message
      );
      res.status(200).json(result);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
module.exports = router
