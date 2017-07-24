
const express = require('express');
const app = express();

app.use(express.static('dist'));

app.listen(2121, function () {
  console.log('Lean Todo App listening on port 2121!');
});
