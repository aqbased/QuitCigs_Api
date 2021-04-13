const passport = require('passport')
const express = require('express')
const Journal = require('../models/journal')
const { handle404, requireOwnership } = require('./../../lib/custom_errors')
const requireToken = passport.authenticate('bearer', { session: false })
const removeBlanks = require('../../lib/remove_blank_fields')
const router = express.Router()

// POST - Create
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

// GET - Show 1
router.get('/journal/:id', requireToken, (req, res, next) => {
  // Find journal entry by searching for the parameter id requested
  Journal.findById(req.params.id)
    .then(handle404)
    // throw an error if current user doesn't own journal
    .then(journal => requireOwnership(req, journal))
    .then(journal => res.status(200).json({ journal }))
    .catch(next)
})

// GET - Index All
router.get('/journal', requireToken, (req, res, next) => {
  const userId = req.user.id
  // Find all journals where the owner field is the same as the request's user id
  Journal.find({ owner: userId })
    .then(journals => journals.map(journal => journal.toObject()))
    .then(journals => res.json(journals))
    .catch(next)
})

// PATCH - Update 1
router.patch('/journal/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.journal.owner
  Journal.findById(req.params.id)
    .then(handle404)
    .then(journal => {
      requireOwnership(req, journal)
      return journal.updateOne(req.body.journal)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DELETE - Delete 1
router.delete('/journal/:id', requireToken, (req, res, next) => {
  Journal.findById(req.params.id)
    .then(handle404)
    .then(journal => {
      requireOwnership(req, journal)
      journal.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
