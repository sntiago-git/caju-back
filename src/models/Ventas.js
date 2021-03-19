const { Schema, model } = require('mongoose');

const ventasSchema = new Schema({

    cliente: {
        type: String,
        //required: true
    },
    producto:{
        type: String,
        //required: true,
    },
    cantidad: Number,
    medioPago: String,
    fechaCompra: {
        type: Date,
        default: Date.now
    } 
});

module.exports = model('Ventas', ventasSchema);