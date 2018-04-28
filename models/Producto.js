var mongoose = require('mongoose');

var Producto = mongoose.Schema({
    nombre: {type: String, required: true},
    cantidad: {type: Number, required: true},
    precio: {type: Number, required: true},
    imagen: {type: String, required: true}
});

module.exports = mongoose.model('producto', Producto);