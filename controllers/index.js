const path = require('path');

function index(req, res, next) {
  if (!req.cookies['secret']) {
    res.cookie('secret', 0);
  }
  
  res.render('index', {
    user: '[Pagina inicial] Vamo sair no soco e na porrada ?',
    title: 'Test'
  });
}

module.exports = index;
