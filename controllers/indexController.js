const getURL = require('../config/get-full-url');

const index = (req, res, next) => {
  if (!req.cookies['secret']) {
    res.cookie('secret', 0, {maxAge: Date.now()});
  }

  res.render('index.html', {
    user: '[Pagina inicial] Vamo sair no soco e na porrada ?',
    title: 'Ginaldim',
    share: {
      title: "Title",
      content: "content",
      image: "laranjo.jpeg",
      baseurl: getURL(req),
      url: getURL(req)
    }
  });
}

module.exports = index;
