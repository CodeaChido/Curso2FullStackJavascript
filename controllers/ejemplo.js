var Usuario = require('../models/Ejemplo');
var controlador = {};

controlador.obtener = function(req, res, next){
    Usuario.find({}, function(error, resultados){
        if(error){
          res.json(error);
        }else{
          res.json(resultados);
        }
      })
}

module.exports = controlador;