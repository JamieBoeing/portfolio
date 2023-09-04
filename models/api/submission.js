const mongoose = require('mongoose')


const SubmissionSchema = new mongoose.Schema({
    name: { type: String, requied: true },
    email: { type: String, required: true },
    message: { type: String, required: false },
    timestamp: { type: Date, default: Date.Now },
})

const Submission = mongoose.model('Submission', SubmissionSchema)

module.exports = Submission