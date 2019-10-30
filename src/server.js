const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use('/admin', routes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port`);
});