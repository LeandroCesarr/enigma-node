const data = require('../data/secrets.json');
const getURL = require('../config/get-full-url');
const { questions } = require('../data/questions.json');

module.exports = {
  index(req, res, next) {
    const secrets = data.secrets;
    const index = req.params.id;

    if (secrets.length < index) {
      res.send('acesso negado');
    } else if (index <= parseInt(req.cookies['secret'])) {
        const secret = secrets[index];
        res.render('secret.html', {
          title: secret.title,
          image: secret.image,
          alt: secret.alt,
          legend: secret.legend,
          question: index,
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
  },

  check(req, res, next) {
    const question = req.query.question;
    const answer = req.query.answer;
    const findAnswer = () => {
      if (questions[question] === answer) return true;
      return false;
    }

    res.send({ "result": findAnswer() });
  },

  create() {

  }
};