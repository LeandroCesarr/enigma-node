const express = require('express');
const router = express.Router();

// Controllers
const index = require('./controllers/index');
const checkAnswer = require('./controllers/checkAnswer');

// Routes
router.get('/', index);
router.get('/api', checkAnswer);

module.exports = router;