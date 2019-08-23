const express = require('express');
const router = express.Router();

// Controllers
const index = require('../controllers/index');
const secret = require('../controllers/secretController');
const redirectIndex = require('../controllers/redirect-index');


// Routes
router.get('/', index);
router.get('/api', secret.check);

router.get('/secret/:id', secret.index);
router.post('/secret/:id', secret.create);

// Help Routes
router.get('/set-cookie', (req, res, next) => {
  res.cookie('secret', parseInt(req.query.id), {maxAge: Date.now()});
  res.send(`Cookie setado ${req.query.id}`)
})

// Redirect Routes
router.get('/*', redirectIndex);

module.exports = router;