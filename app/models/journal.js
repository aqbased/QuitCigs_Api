const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
  desireScale: {
    type: Number,
    required: true
  },
  hasSmoked: {
    type: Boolean,
    required: true
  },
  cravings: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Journal', journalSchema)
