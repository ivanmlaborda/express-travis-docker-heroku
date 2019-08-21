const router = require('express').Router()

const {
  pingController
} = require('./controllers/ping')

// Ping
router.get('/ping', pingController)

module.exports = router
