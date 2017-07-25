
const express = require('express');
const app = express();

// CORS
const cors = require('cors');
app.use(cors());
// Enable options preflight
app.options('*', cors());

const tingoRest = require('tingo-rest');
app.use('/api',tingoRest(__dirname + '/data'));

app.use(express.static('dist'));

app.listen(2121, function () {
  console.log('Lean Todo App listening on port 2121!');
});
