const path = require('path');

function index(req, res, next) {
    res.render('index', {
        user: 'Leandro',
        title: 'ginaldim'
    });
}

module.exports = index;
