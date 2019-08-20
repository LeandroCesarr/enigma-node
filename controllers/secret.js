const data = require('../data/secrets.json');
const getURL = require('../config/get-full-url');

const secret = (req, res, next, index) => {
  const secrets = data.secrets;

  if (secrets.length < index) {
    res.send('acesso negado');
  } else if (index <= parseInt(req.cookies['secret'])) {
      const secret = secrets[index];
      res.render('secret.html', {
        title: secret.title,
        image: secret.image,
        alt: secret.alt,
        legend: secret.legend,
        question: req.originalUrl,
        msg: secret.msg,
        share: {
          title: "Title secret",
          content: "content",
          image: "laranjo.jpeg",
          baseurl: getURL(req),
          url: getURL(req, 'full')
        }
      });
    } else {
      res.send('acesso negado')
    }
}

module.exports = secret;