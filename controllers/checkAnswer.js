const { questions } = require('../data/questions.json');

const checkAnswer = (req, res, next) => {
  const question = req.query.question;
  const answer = req.query.answer;
  const findAnswer = () => {
    if (questions[question] === answer) return true;
    return false;
  }

  res.send({ "result": findAnswer() });
}

module.exports = checkAnswer;
