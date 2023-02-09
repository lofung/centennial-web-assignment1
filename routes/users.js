////LAU Kwan Kit
//301256503
//January 2023
//
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});


router.post('/v1/register', async function(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const date = Date.now().toString()
    const username = req.body.name
    console.log("sdfsdfs")
    console.log(`id: ${date}, name: ${username}, password: ${hashedPassword}`)
    res.redirect('/login')
  } catch (e) {
    console.log('register catch triggered')
    console.error(e);
    res.redirect('/register')
  }
});

module.exports = router;
/* */