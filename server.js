
const app = require('express')();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(2121, function () {
  console.log('Lean Todo App listening on port 2121!');
});
