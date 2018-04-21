var express = require('express');
var router = express.Router();

const respuesta = {texto: 'Hola perro', metodo: 'GET', numeroloco: 21};
const usuario = {nombre: 'Diego Martinez', email: 'diegojmartinezzm@gmail.com', contra: 'hola1234'};

router.route('/')
      .get(function(req, res, next){
        respuesta.metodo = 'GET';
        res.json(respuesta);
      })
      .post(function(req, res, next){
        respuesta.texto = req.body.nombre + ' ' + req.body.apellido;
        respuesta.metodo = 'POST';
        res.json(respuesta);
      })
      .put(function(req, res, next){
        respuesta.metodo = 'PUT';
        res.json(respuesta);
      })
      .delete(function(req, res, next){
        respuesta.metodo = 'DELETE';
        res.json(respuesta);
      });

router.route('/login')
      .post(function(req, res, next){
        var body = req.body;
        if (body.email === usuario.email && body.contra === usuario.contra) {
            req.session.usuario = body;
            res.json('Sesion iniciada');
        } else {
            req.session.usuario = null;
            res.json('Datos de login incorrectos');
        }
      })

module.exports = router;