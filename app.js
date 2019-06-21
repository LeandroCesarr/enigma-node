const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const data = require('./data/questions');

const app = express();
const port = normalizaPort(process.env.PORT || '3000');
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/test', (req, res, next) => {
  res.send({
    "result": findAnswer(req.query.question, req.query.answer)
  })
});

function findAnswer(question, answer) {
  if (data[question] === answer) {
    return true
  }

  return false;
}

function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
      return val;
  }

  if (port >= 0) {
        return port;
    }

  return false;
}

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})