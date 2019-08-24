const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const router = express.Router();
const upload = multer(uploadConfig);

// Controllers
const index = require('../controllers/indexController');
const secret = require('../controllers/secretController');


// Routes
router.get('/', index);
router.get('/secret/:id', secret.index);
router.get('/secret/api/check', secret.check );
router.post('/secret/api/create', upload.single('image'), secret.create);

// Help Routes
router.get('/set/:id', (req, res, next) => {
  res.cookie('secret', parseInt(req.params.id), {maxAge: Date.now()});
  res.send(`Cookie setado ${req.params.id}`)
})

// Redirect Routes
router.get('/*', index);

module.exports = router;