const express = require('express');
const router = express.Router();

// Controllers
const index = require('../controllers/index');
const checkAnswer = require('../controllers/checkAnswer');
const secret = require('../controllers/secret');
const redirectIndex = require('../controllers/redirect-index');


// Routes
router.get('/', index);
router.get('/api', checkAnswer);

router.get('/secret/:id', secret);

// Help Routes
router.get('/set-cookie', (req, res, next) => {
  res.cookie('secret', parseInt(req.query.id), {maxAge: Date.now()});
  res.send(`Cookie setado ${req.query.id}`)
})

// Redirect Routes
router.get('/*', redirectIndex);

module.exports = router;