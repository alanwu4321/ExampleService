'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
console.log(JSON.stringify(process.env))
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello world this is Alan\n');
  res.send('This is the new update\n');
});

app.get('/get', (req, res) => {
    res.send('This is get! U made it\n');
  });
  

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);