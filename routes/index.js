var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inicio', function (req, res, next) {
  // Cargar vista inicio.pug
  res.render('inicio', { title: 'Hola mundo', variable: 'Soy una variable xD <b>nigga</b>' });
});

module.exports = router;
