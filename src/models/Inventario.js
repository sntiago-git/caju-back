const { Schema, model } = require('mongoose');

const inventarioSchema = new Schema({

    nombreProducto: {
        type: String,
        required: true,
        unique: true
    },
    codigoProducto: {
        type: String,
        required: true,
        unique: true
    },
    cantidadLibrasStock: Number,
    precioCompra: Number,
    precioVenta: Number 
});

module.exports = model('Inventario', inventarioSchema);