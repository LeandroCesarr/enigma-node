const data = require('../data/questions.json');

const checkAnswer = (req, res, next) => {
  const question = req.query.question;
  const answer = req.query.answer;

  res.send({ "result": findAnswer() });

  const findAnswer = () => {
    if (data[question] === answer) return true;
    return false;
  }

}

module.exports = checkAnswer;
