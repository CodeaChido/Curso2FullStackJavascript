var express = require('express');
var router = express.Router();
var controlador_ejemplo = require('../controllers/usuario');
var controlador_producto = require('../controllers/producto');

const respuesta = { texto: 'Hola perro', metodo: 'GET', numeroloco: 21 };
const usuario = { nombre: 'Diego Martinez', email: 'diegojmartinezzm@gmail.com', contra: 'hola1234' };

router.route('/')
  .get(function (req, res, next) {
    respuesta.metodo = 'GET';
    //res.json responde en formato json
    //res.send responde en el formato de objeto
    res.json(respuesta);
  })
  .post(function (req, res, next) {
    respuesta.texto = req.body.nombre + ' ' + req.body.apellido;
    respuesta.metodo = 'POST';
    res.json(respuesta);
  })
  .put(function (req, res, next) {
    respuesta.metodo = 'PUT';
    res.json(respuesta);
  })
  .delete(function (req, res, next) {
    respuesta.metodo = 'DELETE';
    res.json(respuesta);
  });

router.route('/login')
  .post(function (req, res, next) {
    /*var body = req.body;//req.body obtiene la informacion de la peticion
    if (body.email === usuario.email && body.contra === usuario.contra) {
        //guardamos la informacion en la cookie
        req.session.usuario = body;
        res.json('Sesion iniciada');
    } else {
        //eliminamos la cookie
        req.session.usuario = null;
        res.json('Datos de login incorrectos');
    }*/
    controlador_ejemplo.login(req, res, next);
  })
  .delete(function (req, res, next) {
    req.session.usuario = undefined;
    res.json('Sesion cerrada');
  });

router.route('/users')
  .post(function (req, res, next) {
    controlador_ejemplo.registro(req, res, next);
  })
  .put(function (req, res, next) {
    controlador_ejemplo.modificar(req, res, next);
  })
  .delete(function (req, res, next) {
    controlador_ejemplo.borrar(req, res, next);
  });

router.route('/producto')
  .get(function (req, res, next) {
    controlador_producto.obtener(req, res, next);
  })
  .post(function (req, res, next) {
    controlador_producto.agregar(req, res, next);
  })
  .put(function (req, res, next) {
    controlador_producto.cambiar(req, res, next);
  })
  .delete(function (req, res, next) {
    controlador_producto.eliminar(req, res, next);
  });

router.route('/carrito')
  .get(function (req, res, next) {
    controlador_producto.getCarrito(req, res, next);
  })
  .post(function (req, res, next) {
    controlador_producto.aniadeCarrito(req, res, next);
  })
  .delete(function (req, res, next) {
    controlador_producto.removeCarrito(req, res, next);
  });

router.route('/compra')
  .post(function (req, res, next) {
    controlador_producto.shop(req, res, next);
  });

module.exports = router;