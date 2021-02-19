// backend imports
const express = require('express');
const cors = require('cors');
const app = express();
const {watches} = require('./data.js');

// express library uses cross-origin-requests
app.use(cors());

// watch data end-point
app.get('/watches', (req, res) => {
  res.json({results: watches});
});

// individual watch end-point
app.get('/watches/:id', (req, res) => {
  const idParam = Number(req.params.id);
  const selectedWatch = watches.find((watch) => watch.id === idParam);
  res.json({results: selectedWatch});
});

module.exports = {
  app,
};
