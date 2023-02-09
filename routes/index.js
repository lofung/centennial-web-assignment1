//LAU Kwan Kit
//301256503
//January 2023//
//

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Homepage'});
});

router.get('/login', checkNotAuthenticated, function(req, res, next) {
  res.render('login', { title: 'Login'});
});

router.get('/register', checkNotAuthenticated, function(req, res, next) {
  res.render('register', { title: 'Register'});
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('homepage', { title: 'Homepage'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.locals.message = req.message
  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect('/')
  }
  return next()
}

module.exports = router;
