const path = require('path');

function index(req, res, next) {
    res.render('index');
}

module.exports = index;
