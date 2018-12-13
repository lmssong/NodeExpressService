var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var fs = require('fs');
var http = require('http');
var https = require('https');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

/**
 * Create HTTP server.
 */
var server = http.createServer(app);
server.listen(8000);
console.log('http server is listening at 8000');

/**
 * Crate HTTPS Server
 */

var privatekey = fs.readFileSync('/nodeExpressService/nodeService/2_lmssong.cn.key','utf-8');
var certificate = fs.readFileSync('/nodeExpressService/nodeService/1_lmssong.cn_bundle.crt','utf-8');

var credentials = { key:privatekey, cert:certificate };
var httpsServer = https.createServer(credentials,app);
httpsServer.listen(80);
console.log('https server is listening at 80');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
  res.render('error');
});

module.exports = app;
