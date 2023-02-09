//LAU Kwan Kit
//301256503
//January 2023


// installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

mongoose.connect("mongodb+srv://test:test@cluster0.dab0i.mongodb.net/centennial_assignment1?retryWrites=true&w=majority", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, (err) => {
  if(err){
    console.error(err)
  } else {
    console.log("----mongoDB successfully connected.----")
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // express  -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error'});
});

module.exports = app;
