const { Schema, model } = require('mongoose');

const clientesSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    cedula:{
        type: Number,
        required: true,
        unique: true
    },
    telefono: Number,
    direccion: String 
});

module.exports = model('Clientes', clientesSchema);