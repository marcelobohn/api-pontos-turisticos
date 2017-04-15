const http = require('http');
const express = require('express');

const attraction = require('./data/attraction');

let app = express();
app.server = http.createServer(app);

let router = express();

router.get('/attractions', function (req, res) {
  res.json(attraction);
});

router.get('/attractions/:id', function (req, res) {
  const { id } = req.params;
  const a = attraction.find(a => a.id === id);
  if (a)
    res.json(a);
  else
    res.status(404).send('Not found');
});

app.use('/api', router);

app.server.listen(3000);

console.log(`Started on port ${app.server.address().port}`);

module.exports = app;
