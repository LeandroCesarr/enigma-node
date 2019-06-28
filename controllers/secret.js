const data = require('../data/secrets.json');

function secret(req, res, next, index) {
  const secrets = data.secrets;

  if (index > secrets.length) {
    res.send('acesso negado');
  } else if (index <= parseInt(req.cookies['secret'])) {
      res.render('secret', {
        title: secrets[index].title,
        image: secrets[index].image,
        alt: secrets[index].alt,
        legend: secrets[index].legend
      });
    } else {
      res.send('acesso negado')
    }
}

module.exports = secret;