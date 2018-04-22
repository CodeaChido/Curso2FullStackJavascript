var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //req.session.x obtiene las variables de la cookie x
  res.render('inicio2', { title: 'Bienvenida', user: req.session.usuario });
});

module.exports = router;
