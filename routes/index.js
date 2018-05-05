var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  if(!req.session.usuario) {
		res.render('index', { title: 'Express' });
	}else {
		res.redirect('/users');
	}
});

router.get('/inicio', function (req, res, next) {
  // Cargar vista inicio.pug
  if(!req.session.usuario) {
		res.render('inicio', { title: 'Hola mundo', variable: 'Soy una variable xD <b>nigga</b>' });
	}else {
		res.redirect('/users');
	}
});

router.get('/login', function (req, res, next) {
  if(!req.session.usuario) {
		res.render('login', { title: 'Login' });
	}else {
		res.redirect('/users');
	}
});

router.get('/registro', function (req, res, next) {
  if(!req.session.usuario) {
		res.render('registro', { title: 'Registrate' });
	}else {
		res.redirect('/users');
	}
});

module.exports = router;
