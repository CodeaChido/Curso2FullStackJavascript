var mongoose = require('mongoose');

var Usuario = mongoose.Schema({
    nombre: {type: String, required: true},
    apellidop: {type: String, required: true},
    apellidom: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    edad: {type: Number, required: true}
});

module.exports = mongoose.model('usuario', Usuario);