const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>GDDTester</h1>");
});

app.get('/status', (req, res) => {
  res.send("<h1>GDDTester Status endpoint");
})

module.exports = app;