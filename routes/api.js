var express = require('express');
var router = express.Router();

const respuesta = {texto: 'Hola perro', metodo: 'GET', numeroloco: 21};

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

module.exports = router;