
  //LAU Kwan Kit
//301256503
//January 2023

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/info', (req, res) => {
  res.send('Site Info');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});