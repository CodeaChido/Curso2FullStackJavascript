//van dependencias
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var galleta = require('cookie-session');
var mongoose = require('mongoose');

//se jalan rutas y archivos
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(galleta({
	secret: 'Supercalifragilisticoespiralindoso',
	name: 'galleta'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/carrito', function(error){
	if(error){
		throw error;
	}else{
		console.log('Estas conectado a la base de datos no relacional mas famosa');
	}
});

function validateSession(req, res, next) {
	console.log(req.session.usuario)
	if(req.session.usuario) {
		next();
	}else {
		res.redirect('/');
	}
}

app.use('/', indexRouter);//usuarios sin sesion
app.use('/users', validateSession, usersRouter);//ususarios con sesion
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
