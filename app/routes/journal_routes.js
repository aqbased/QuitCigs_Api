const passport = require('passport')
const express = require('express')
const Journal = require('../models/journal')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// POST
router.post('/journal', requireToken, (req, res, next) => {
  console.log('The user object:', req.user)
  console.log('The incoming event data:', req.body)
  // Save request data to a variable
  const journalData = req.body.journal
  // Save the request user's id to the owner of that data
  journalData.owner = req.user._id
  Journal.create(journalData)
    // respond to succesful `create` with status 201 and JSON of new "journal entry"
    .then(journalEntry => {
      res.status(201).json({ journalEntry })
    })
    .catch(next)
})

module.exports = router
