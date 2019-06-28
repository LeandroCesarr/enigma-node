const express = require('express');
const router = express.Router();

// Controllers
const index = require('../controllers/index');
const checkAnswer = require('../controllers/checkAnswer');
const secret = require('../controllers/secret');


// Routes
router.get('/', index);
router.get('/api', checkAnswer);
for (let i = 0; i < 10; i++) {
  router.get(`/secret_${i}`, (req, res, next) => secret(req, res, next, i));
}

// Help Routes
router.get('/set-cookie', (req, res, next) => {
  res.cookie('secret', parseInt(req.query.id));
  res.send(`Cookie setado ${req.query.id}`)
})

module.exports = router;