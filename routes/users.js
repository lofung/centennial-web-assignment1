////LAU Kwan Kit
//301256503
//January 2023
//
const bcrypt = require('bcrypt');
const userModel = require('../models/user.js');
var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});


router.post('/v1/register', async function(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const date = Date.now().toString()
    const username = req.body.name
    console.log(`id: ${date}, name: ${username}, hashed: ${hashedPassword}`)
    const new_user = new userModel({id: date, name: username, hashed: hashedPassword})
    await new_user.save(function(err, doc){
      if (err) return console.error(err)
      console.log("user registered successfully!")
    })
    res.redirect('/login')
  } catch (e) {
    console.log('register catch triggered')
    console.error(e);
    res.redirect('/register')
  }
});

module.exports = router;
/* */