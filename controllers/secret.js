const data = require('../data/secrets.json');
const getURL = require('../config/get-full-url');

function secret(req, res, next, index) {
  const secrets = data.secrets;

  if (secrets.length < index) {
    res.send('acesso negado');
  } else if (index <= parseInt(req.cookies['secret'])) {
      res.render('secret', {
        title: secrets[index].title,
        image: secrets[index].image,
        alt: secrets[index].alt,
        legend: secrets[index].legend,
        question: req.originalUrl,
        msg: secrets[index].msg,
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