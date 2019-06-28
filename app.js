const express = require('express');
const bodyParser = require('body-parser');
const normalizaPort = require('./config/port');
const cookieParser = require('cookie-parser');  
const path = require('path');

const app = express();
const port = normalizaPort(process.env.PORT || '4000');

app.set("views", path.join(__dirname, "src/views"));
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(require('./routes/router'));



app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})