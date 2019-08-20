const normalizaPort = require('./config/port');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const notifier = require('node-notifier');
const nunjucks = require('nunjucks');
const express = require('express');

const app = express();
const port = normalizaPort(process.env.PORT || '4000');

// template engine
nunjucks.configure('src/views', {
  autoescape: true,
  express   : app
});

app.use('/public', express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(require('./routes/router'));

app.listen(port, () => {
  notifier.notify({
    title: 'Enimga Node',
    message: 'Build succesfull'
  });
})