var Usuario = require('../models/Usuario');
var controlador = {};

controlador.login = function (req, res, next) {
    Usuario.find({ email: req.body.email, password: req.body.password }, function (error, resultados) {
        if (error || resultados.length < 1) {
            res.status(401).send(error || 'Datos de sesion incorrectos');
        } else {
            req.session.usuario = resultados[0];
            console.log(req.session.usuario);
            res.json(resultados);
        }
    })
}

controlador.registro = function (req, res, next) {
    if (req.body.edad < 18) {
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

        modelo.save(function (error, respuesta) {
            if (error) {
                res.json(error);
            } else {
                req.session.usuario = respuesta;
                res.json(respuesta);
            }
        })
    }
}

controlador.modificar = function (req, res, next) {
    Usuario.update({ email: req.body.email }, {
        $set: {
            nombre: req.body.nombre,
            apellidop: req.body.apellidop,
            apellidom: req.body.apellidom,
            password: req.body.password,
            edad: req.body.edad
        }
    }, function (error, resultado) {
        if (error) {
            res.json(error);
        } else {
            res.json(resultado);
        }
    });
}

controlador.borrar = function (req, res, next) {
    Usuario.remove({ email: req.body.email }, function (error, resultado) {
        if (error) {
            res.json(error);
        } else {
            res.json(resultado);
        }
    })
}

module.exports = controlador;