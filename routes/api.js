var express = require('express');
var router = express.Router();
var controlador_ejemplo = require('../controllers/ejemplo');

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

router.route('/users')
      .post(function(req, res, next){
        if(req.body.edad < 18) {
          res.json('Eres menor mijo, pidele permiso a tus jefes');
        } else {
          var modelo = new Usuario({
            nombre: req.body.nombre,
            apellidop: req.body.apellidop,
            apellidom: req.body.apellidom,
            email: req.body.email,
            password: req.body.password,
            edad: req.body.edad
          });

          modelo.save(function(error, respuesta){
            if(error){
              res.json(error);
            }else{
              res.json(respuesta);
            }
          })
        }
      })
      .get(function(req, res, next){
        controlador_ejemplo.obtener(req, res, next);
      })
      .put(function(req, res, next){
        Usuario.update({email: req.body.email},{
            $set: {
              nombre: req.body.nombre,
              apellidop: req.body.apellidop,
              apellidom: req.body.apellidom,
              password: req.body.password,
              edad: req.body.edad
            }
          },function(error, resultado){
            if(error){
              res.json(error);
            }else{
              res.json(resultado);
            }
          });
      })
      .delete(function(req, res, next){
        Usuario.remove({email: req.body.email}, function(error, resultado){
          if(error){
            res.json(error);
          }else{
            res.json(resultado);
          }
        })
      })

module.exports = router;