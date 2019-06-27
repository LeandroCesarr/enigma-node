const express = require('express');
const router = express.Router();

// Controllers
const index = require('../controllers/index');
const checkAnswer = require('../controllers/checkAnswer');

// Routes
router.get('/', index);
router.get('/api', checkAnswer);

for (let i = 0; i < 3; i++) {
  router.get(`/${i}`,(req, res, next) => {



    res.send(`pao: ${i}`);
  })
}

module.exports = router;