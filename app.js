const normalizaPort = require('./config/port');
const cookieParser = require('cookie-parser');
const database = require('./config/database');
const bodyParser = require('body-parser');
const notifier = require('node-notifier');
const nunjucks = require('nunjucks');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
// const cors = require('cors');

const app = express();
const port = normalizaPort(process.env.PORT || '4000');

nunjucks.configure('src/views', {
  autoescape: true,
  express   : app
});

app.use('/public', express.static(path.resolve(__dirname + '/public')));
app.use('/uploads', express.static(path.resolve(__dirname + '/uploads')));
app.use(require('./routes/router'));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(cors());
database.init();
dotenv.config();

app.listen(port, () => {
  notifier.notify({
    title: `Enimga Node: ${port}`,
    message: 'Build succesfull'
  });
})