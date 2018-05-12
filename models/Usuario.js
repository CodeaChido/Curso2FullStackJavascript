var mongoose = require('mongoose');

var Usuario = mongoose.Schema({
    nombre: {type: String, required: true},
    apellidop: {type: String, required: true},
    apellidom: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    edad: {type: Number, required: true},
    compras: [{
        nombre: {type: String, required: true},
        cantidad: {type: Number, required: true},
        precio: {type: Number, required: true},
        imagen: {type: String, required: true}
    }]
});

module.exports = mongoose.model('usuario', Usuario);