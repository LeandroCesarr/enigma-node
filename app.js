const normalizaPort = require('./config/port');
const cookieParser = require('cookie-parser');
const database = require('./config/database');
const bodyParser = require('body-parser');
const notifier = require('node-notifier');
const session = require('express-session');
const nunjucks = require('nunjucks');
const env = require('./config/env');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
const port = normalizaPort(process.env.PORT || '4000');

// template engine
nunjucks.configure('src/views', {
  autoescape: true,
  express   : app
});

app.use('/public', express.static(path.resolve(__dirname + '/public')));
app.use('/uploads', express.static(path.resolve(__dirname + '/uploads')));
app.use(session({ secret: env('SESSION_ID'), resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
database.init();
dotenv.config();
app.use(require('./routes/router'));

app.listen(port, () => {
  notifier.notify({
    title: `Enimga Node: ${port}`,
    message: 'Build succesfull'
  });
})