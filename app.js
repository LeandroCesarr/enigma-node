const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const normalizaPort = require('./config/port');

const app = express();
const port = normalizaPort(process.env.PORT || '4000');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.json());
app.use(require('./routes/router'));



app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})