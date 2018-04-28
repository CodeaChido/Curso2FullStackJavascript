var Producto = require('../models/Producto');
var controlador = {};

controlador.obtener = function (req, res, next) {
    Producto.find({}, function (error, resultados) {
        if (error) {
            res.json(error);
        } else {
            res.json(resultados);
        }
    })
}

controlador.agregar = function (req, res, next) {
    var modelo = new Producto({
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        imagen: req.body.imagen
    });

    modelo.save(function (error, respuesta) {
        if (error) {
            res.json(error);
        } else {
            res.json(respuesta);
        }
    })
}

controlador.cambiar = function (req, res, next) {
    Producto.update({ nombre: req.body.nombre }, {
        $set: {
            nombre: req.body.nombre,
            cantidad: req.body.cantidad,
            precio: req.body.precio,
            imagen: req.body.imagen
        }
    }, function (error, resultado) {
        if (error) {
            res.json(error);
        } else {
            res.json(resultado);
        }
    });
}

controlador.eliminar = function (req, res, next) {
    Producto.remove({ nombre: req.body.nombre }, function (error, resultado) {
        if (error) {
            res.json(error);
        } else {
            res.json(resultado);
        }
    })
}

module.exports = controlador;