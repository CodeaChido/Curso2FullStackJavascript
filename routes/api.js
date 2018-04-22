var express = require('express');
var router = express.Router();

const respuesta = {texto: 'Hola perro', metodo: 'GET', numeroloco: 21};
const usuario = {nombre: 'Diego Martinez', email: 'diegojmartinezzm@gmail.com', contra: 'hola1234'};

router.route('/')
      .get(function(req, res, next){
        respuesta.metodo = 'GET';
        //res.json responde en formato json
        //res.send responde en el formato de objeto
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
        var body = req.body;//req.body obtiene la informacion de la peticion
        if (body.email === usuario.email && body.contra === usuario.contra) {
            //guardamos la informacion en la cookie
            req.session.usuario = body;
            res.json('Sesion iniciada');
        } else {
            //eliminamos la cookie
            req.session.usuario = null;
            res.json('Datos de login incorrectos');
        }
      })

module.exports = router;