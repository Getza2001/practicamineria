var express = require('express');
var router = express.Router();
const  fetch = require('node-fetch');


router.get('/api', async (req, res) => {
  var response = await fetch('https://api.agify.io?name=bella');
  var data = await response.json();
  return res.json(data);
});

router.get('/', async (req, res) => {
  res.send('Practica terminada')
  
});

module.exports = router;
