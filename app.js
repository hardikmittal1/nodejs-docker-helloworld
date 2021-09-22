const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Hello world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});


// var express = require('express');

// // Constants
// var PORT = 8080;

// // App
// var app = express();
// app.get('/', function (req, res) {
//     res.send('Hello world\n');
// });

// app.listen(PORT);
// console.log('Running on ' + PORT);
