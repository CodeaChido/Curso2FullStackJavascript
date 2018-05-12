var express = require('express');
var router = express.Router();

function validateNoSession(req, res, next) {
	if (!req.session.usuario) {
		next();
	} else {
		res.redirect('/users');
	}
}

router.get('/', validateNoSession, function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/inicio', validateNoSession, function (req, res, next) {
	res.render('inicio', { title: 'Hola mundo', variable: 'Soy una variable xD <b>nigga</b>' });
});

router.get('/login', validateNoSession, function (req, res, next) {
	res.render('login', { title: 'Login' });
});

router.get('/registro', validateNoSession, function (req, res, next) {
	res.render('registro', { title: 'Registrate' });
});

module.exports = router;
